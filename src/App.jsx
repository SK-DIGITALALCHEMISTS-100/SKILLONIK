import React, { useState, useEffect, useCallback } from 'react';
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProblemSection from "./components/ProblemSection.jsx";
import SimplePage from "./components/SimplePage.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ChatView from './components/ChatView';
import ChatInput from './components/ChatInput';
import RoadmapsView from './components/RoadmapsView';
import ProjectsView from './components/ProjectsView';
import SavedDrawer from './components/SavedDrawer';
import AuthPage from './components/AuthPage';
import { INITIAL_SAVED_CHATS } from './data/mockData';
import { 
  fetchSessionsFromDB, 
  createSessionInDB, 
  updateSessionInDB, 
  deleteSessionFromDB 
} from './api/sessionApi';
import { sendChatMessage } from './api/chatApi';
import { 
  Bookmark, 
  PlusCircle, 
  Trash2, 
  ArrowRight, 
  Search, 
  MessageSquare, 
  CheckCircle2,
  Database
} from 'lucide-react';

export default function App() {
  const [page, setPage] = useState("Home");
  const [currentView, setCurrentView] = useState('chat');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSavedOpen, setIsSavedOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isThinking, setIsThinking] = useState(false);
  const [activeSessionId, setActiveSessionId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState(null);
  const [dbSyncStatus, setDbSyncStatus] = useState('idle'); // 'idle' | 'syncing' | 'synced' | 'local'

  // Authenticated user state initialized from localStorage
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('skillonik_user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  // Saved Sessions initialized per logged-in user email
  const [savedChats, setSavedChats] = useState(() => {
    try {
      const savedUserStr = localStorage.getItem('skillonik_user');
      if (savedUserStr) {
        const parsedUser = JSON.parse(savedUserStr);
        if (parsedUser?.email) {
          const key = `skillonik_saved_sessions_${parsedUser.email.trim().toLowerCase()}`;
          const stored = localStorage.getItem(key);
          if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed)) return parsed;
          }
        }
      }
    } catch (e) {
      console.error('Error loading user saved sessions from storage:', e);
    }
    return [];
  });

  // Persist savedChats per logged-in user email
  useEffect(() => {
    if (user?.email) {
      try {
        const key = `skillonik_saved_sessions_${user.email.trim().toLowerCase()}`;
        localStorage.setItem(key, JSON.stringify(savedChats));
      } catch (e) {
        console.error('Error persisting saved sessions:', e);
      }
    }
  }, [savedChats, user]);

  // Load saved sessions from MongoDB Database for specific logged-in email
  const loadSessionsFromMongoDB = useCallback(async (customEmail = null) => {
    const targetEmail = (customEmail || user?.email || '').trim().toLowerCase();
    if (!targetEmail) {
      setSavedChats([]);
      setDbSyncStatus('idle');
      return;
    }

    setDbSyncStatus('syncing');
    try {
      const dbSessions = await fetchSessionsFromDB(targetEmail);
      if (Array.isArray(dbSessions)) {
        // Normalize MongoDB documents (_id -> id)
        const normalized = dbSessions.map(s => ({
          ...s,
          id: s._id ? String(s._id) : (s.id || `session-${Date.now()}`),
          messageCount: s.messages ? s.messages.length : (s.messageCount || 0)
        }));
        setSavedChats(normalized);
        setDbSyncStatus('synced');
      }
    } catch (err) {
      console.info('MongoDB session sync: Using local cache.', err.message);
      setDbSyncStatus('local');
    }
  }, [user]);

  useEffect(() => {
    if (user?.email) {
      loadSessionsFromMongoDB(user.email);
    } else {
      setSavedChats([]);
      setDbSyncStatus('idle');
    }
  }, [loadSessionsFromMongoDB, user]);

  // Toast auto-dismiss
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const showToast = (text) => {
    setToastMessage(text);
  };

  // Find active session object
  const activeSession = savedChats.find(c => c.id === activeSessionId) || null;

  // Auth Handlers
  const handleLoginSuccess = (userData) => {
    setUser(userData);
    try {
      localStorage.setItem('skillonik_user', JSON.stringify(userData));
    } catch (err) {
      console.error('Error saving user to localStorage:', err);
    }
    setPage("AI Mentor");
    setCurrentView("chat");
    if (userData?.email) {
      loadSessionsFromMongoDB(userData.email);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setSavedChats([]);
    setActiveSessionId(null);
    setMessages([]);
    try {
      localStorage.removeItem('skillonik_user');
      localStorage.removeItem('skillonik_token');
      sessionStorage.removeItem('skillonik_user');
      sessionStorage.removeItem('skillonik_token');
    } catch (err) {
      console.error('Error removing user from storage:', err);
    }
    setPage("Home");
  };

  // Central Navigation Handler
  const handleNavigate = (target) => {
    if (target === "Login") {
      setPage("Login");
    } else if (target === "Signup") {
      setPage("Signup");
    } else if (target === "AI Mentor") {
      setPage("AI Mentor");
      setCurrentView("chat");
    } else {
      setPage(target);
    }
  };

  // Save active chat session to MongoDB Database & Local Cache
  const handleSaveChat = async (customTitle) => {
    if (messages.length === 0) {
      showToast('Start a conversation before saving a session.');
      return;
    }

    const firstUserMsg = messages.find(m => m.sender === 'user')?.text || 'Mentorship Session';
    const fallbackTitle = firstUserMsg.length > 40 ? `${firstUserMsg.substring(0, 40)}...` : firstUserMsg;
    const finalTitle = customTitle ? customTitle.trim() : (activeSession ? activeSession.title : fallbackTitle);
    const currentDate = new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });

    const userEmail = user?.email || undefined;

    if (activeSessionId) {
      // Update existing session
      const updatedPayload = {
        title: finalTitle,
        messages: [...messages],
        messageCount: messages.length,
        date: currentDate,
        updatedAt: Date.now(),
        user_email: userEmail
      };

      setSavedChats((prev) =>
        prev.map((c) =>
          c.id === activeSessionId
            ? { ...c, ...updatedPayload }
            : c
        )
      );

      // Async MongoDB update
      try {
        await updateSessionInDB(activeSessionId, updatedPayload, userEmail);
        showToast(`Session "${finalTitle}" updated in MongoDB database!`);
      } catch {
        showToast(`Session "${finalTitle}" updated in library!`);
      }
    } else {
      // Create new saved session
      const tempId = `session-${Date.now()}`;
      const newSessionPayload = {
        id: tempId,
        title: finalTitle,
        date: currentDate,
        createdAt: Date.now(),
        messageCount: messages.length,
        messages: [...messages],
        user_email: userEmail
      };

      // Optimistic local update
      setSavedChats((prev) => [newSessionPayload, ...prev]);
      setActiveSessionId(tempId);

      // Async MongoDB save
      try {
        const dbResult = await createSessionInDB(newSessionPayload, userEmail);
        if (dbResult && (dbResult._id || dbResult.id)) {
          const dbId = String(dbResult._id || dbResult.id);
          setActiveSessionId(dbId);
          setSavedChats((prev) =>
            prev.map((c) => (c.id === tempId ? { ...c, id: dbId, _id: dbId } : c))
          );
        }
        showToast(`Session "${finalTitle}" stored in MongoDB database!`);
      } catch {
        showToast(`Session "${finalTitle}" saved to library!`);
      }
    }
  };

  // Load a saved chat session into active workspace
  const handleLoadChat = (chat) => {
    setMessages(chat.messages || []);
    setActiveSessionId(chat.id || String(chat._id));
    setCurrentView('chat');
    setIsSavedOpen(false);
    showToast(`Loaded: ${chat.title}`);
  };

  // Start fresh mentorship chat
  const handleNewChat = () => {
    setMessages([]);
    setActiveSessionId(null);
    setCurrentView('chat');
    setIsSavedOpen(false);
  };

  // Delete a saved session from MongoDB Database & Local Cache
  const handleDeleteChat = async (id) => {
    const userEmail = user?.email || undefined;
    setSavedChats((prev) => prev.filter((c) => c.id !== id && c._id !== id));
    if (activeSessionId === id) {
      setActiveSessionId(null);
    }

    try {
      await deleteSessionFromDB(id, userEmail);
      showToast('Session removed from MongoDB database');
    } catch {
      showToast('Session removed from library');
    }
  };

  // Handle sending new prompt/query to SKILLONIK AI Backend Engine
  const handleSendMessage = async (msgObj) => {
    const textQuery = (msgObj?.text || '').trim();
    if (!textQuery && !msgObj?.file) return;

    const userMsg = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: textQuery || (msgObj.file ? `Analyze attached file: ${msgObj.file.name}` : ''),
      file: msgObj.file,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const nextMessagesWithUser = [...messages, userMsg];
    setMessages(nextMessagesWithUser);
    setIsThinking(true);
    setCurrentView('chat');
    setPage('AI Mentor');

    try {
      // Call backend FastAPI endpoint: POST /api/message
      const backendResult = await sendChatMessage({
        message: userMsg.text,
        top_k: 2
      });

      const aiMsg = {
        id: `msg-${Date.now() + 1}`,
        sender: 'ai',
        text: backendResult.answer,
        intent: backendResult.intent,
        intentLabel: backendResult.intentLabel,
        confidence: backendResult.confidence,
        scores: backendResult.scores,
        codeSnippet: backendResult.codeSnippet,
        codeLanguage: backendResult.codeLanguage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      const finalMessages = [...nextMessagesWithUser, aiMsg];
      setMessages(finalMessages);
      setIsThinking(false);

      // Auto-sync or auto-create session in local state and MongoDB database
      const userEmail = user?.email || undefined;

      if (activeSessionId) {
        const updatePayload = {
          messages: finalMessages,
          messageCount: finalMessages.length,
          updatedAt: Date.now(),
          user_email: userEmail
        };

        setSavedChats((prev) =>
          prev.map((c) =>
            (c.id && c.id === activeSessionId) || (c._id && String(c._id) === String(activeSessionId))
              ? { ...c, ...updatePayload }
              : c
          )
        );

        updateSessionInDB(activeSessionId, updatePayload, userEmail).catch(() => {});
      } else {
        // Automatically create and save session on the first message
        const firstUserMsg = finalMessages.find(m => m.sender === 'user')?.text || 'Mentorship Session';
        const sessionTitle = firstUserMsg.length > 40 ? `${firstUserMsg.substring(0, 40)}...` : firstUserMsg;
        const currentDate = new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
        const tempId = `session-${Date.now()}`;

        const newSessionPayload = {
          id: tempId,
          title: sessionTitle,
          date: currentDate,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          messageCount: finalMessages.length,
          messages: finalMessages,
          user_email: userEmail
        };

        // Optimistic local state update
        setSavedChats((prev) => [newSessionPayload, ...prev]);
        setActiveSessionId(tempId);

        // Async MongoDB save
        createSessionInDB(newSessionPayload, userEmail)
          .then((dbResult) => {
            if (dbResult && (dbResult._id || dbResult.id)) {
              const dbId = String(dbResult._id || dbResult.id);
              setActiveSessionId(dbId);
              setSavedChats((prev) =>
                prev.map((c) => (c.id === tempId ? { ...c, id: dbId, _id: dbId } : c))
              );
            }
          })
          .catch(() => {});
      }
    } catch (err) {
      console.error('Backend AI Chat Connection Failed:', err);

      // Construct user-friendly error response bubble
      const errorAiMsg = {
        id: `msg-${Date.now() + 1}`,
        sender: 'ai',
        isError: true,
        text: `### ⚠️ Backend Connection Notice\n\nUnable to reach the SKILLONIK AI Server on \`${import.meta.env.VITE_API_URL || "http://127.0.0.1:8000"}\`.\n\n**Reason:** ${err.message || 'Network connection refused or server offline'}\n\nPlease start the FastAPI backend server with:\n\`\`\`bash\ncd e:\\SKILLONIK_BE\nuvicorn main:app --reload --port 8000\n\`\`\``,
        confidence: 'Server Offline Warning',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages([...nextMessagesWithUser, errorAiMsg]);
      setIsThinking(false);
      showToast('Backend offline. Please start backend on port 8000.');
    }
  };

  // Filtered saved chats for the workspace view
  const filteredSavedChats = savedChats.filter((c) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const matchesTitle = c.title?.toLowerCase().includes(query);
    const matchesMessages = c.messages?.some(m => m.text?.toLowerCase().includes(query));
    return matchesTitle || matchesMessages;
  });

  // Render Login & Sign Up Page
  if (page === "Login" || page === "Signup") {
    return (
      <AuthPage
        initialMode={page === "Signup" ? "signup" : "signin"}
        onLoginSuccess={handleLoginSuccess}
        onNavigateHome={() => setPage("Home")}
      />
    );
  }

  // Render Public Website Pages (Home, Roadmaps, Projects, Knowledge Base)
  if (page !== "AI Mentor") {
    return (
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar 
          page={page} 
          setPage={setPage} 
          onNavigate={handleNavigate}
          user={user}
          onLogout={handleLogout}
        />

        <main className="flex-1">
          {page === "Home" && (
            <>
              <Hero 
                onLogin={() => setPage("Login")}
                onExplore={() => setPage("Login")}
                onExploreRoadmaps={() => setPage("Roadmaps")}
                onNavigate={handleNavigate}
                onLaunchMentor={() => {
                  setPage("AI Mentor");
                  setCurrentView("chat");
                }}
                onBrowseProjects={() => setPage("Projects")}
              />
              <ProblemSection />
            </>
          )}

          {page === "Roadmaps" && (
            <SimplePage 
              page="Roadmaps" 
              onSelectPrompt={(prompt) => handleSendMessage({ text: prompt })}
            />
          )}

          {page === "Projects" && (
            <div className="py-8 max-w-7xl mx-auto px-4">
              <ProjectsView 
                onSelectTopicPrompt={(prompt) => handleSendMessage({ text: prompt })}
              />
            </div>
          )}

          {page === "Knowledge Base" && (
            <SimplePage 
              page="Knowledge Base" 
              onSelectPrompt={(prompt) => handleSendMessage({ text: prompt })}
            />
          )}
        </main>

        <Footer />
      </div>
    );
  }

  // Render Interactive AI Mentor Workspace Experience
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#E3F1FD] text-[#131b2e]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-8 z-50 animate-in fade-in slide-in-from-top-4 flex items-center gap-2.5 px-4 py-3 bg-slate-900/90 backdrop-blur-md text-white rounded-2xl shadow-xl border border-slate-700/80 text-xs font-semibold">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Sidebar Navigation */}
      <Sidebar 
        currentView={currentView}
        setCurrentView={(view) => {
          if (view === 'home-landing') {
            setPage('Home');
          } else {
            setCurrentView(view);
          }
        }}
        onNewChat={handleNewChat}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        user={user}
        onLogout={handleLogout}
        onOpenLogin={() => setPage("Login")}
      />

      {/* Top Header */}
      <Header 
        setIsMobileOpen={setIsMobileOpen}
        onOpenSavedDrawer={() => setIsSavedOpen(true)}
        user={user}
        onOpenLogin={() => setPage("Login")}
        activeSession={activeSession}
        messagesCount={messages.length}
        onSaveSession={handleSaveChat}
        currentView={currentView}
      />

      {/* Main Workspace Area */}
      <main className="flex-1 ml-0 md:ml-64 flex flex-col h-screen pt-16">
        
        {currentView === 'chat' && (
          <>
            <ChatView 
              messages={messages}
              onSelectSuggestion={(promptText) => handleSendMessage({ text: promptText })}
              isThinking={isThinking}
              user={user}
            />
            <ChatInput 
              onSendMessage={handleSendMessage}
              isThinking={isThinking}
            />
          </>
        )}

        {currentView === 'roadmaps' && (
          <RoadmapsView 
            onSelectTopicPrompt={(prompt) => handleSendMessage({ text: prompt })}
          />
        )}

        {currentView === 'projects' && (
          <ProjectsView 
            onSelectTopicPrompt={(prompt) => handleSendMessage({ text: prompt })}
          />
        )}

        {/* Saved Sessions Workspace View */}
        {currentView === 'saved' && (
          <div className="flex-1 p-6 md:p-8 overflow-y-auto custom-scrollbar pb-32">
            <div className="max-w-5xl mx-auto space-y-6">
              
              {/* Header & New Chat CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <Bookmark className="w-6 h-6 text-blue-600" />
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
                      Saved Mentorship Sessions
                    </h2>
                    {user ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold border border-blue-200">
                        <span>📧 {user.email}</span>
                      </span>
                    ) : null}
                    <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100/90 text-emerald-800 text-[10px] font-mono font-bold border border-emerald-300/60">
                      <Database className="w-3 h-3 text-emerald-600" />
                      <span>{dbSyncStatus === 'syncing' ? 'Syncing MongoDB...' : 'MongoDB Database'}</span>
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs md:text-sm mt-1">
                    {user 
                      ? `Viewing real conversation histories and placement solutions for ${user.email}.`
                      : 'Saved sessions are synced securely to your email ID.'
                    }
                  </p>
                </div>

                <button
                  onClick={handleNewChat}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer self-start sm:self-auto"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>New Mentorship Chat</span>
                </button>
              </div>

              {!user ? (
                /* Unauthenticated Callout */
                <div className="p-12 text-center glass-card rounded-3xl border border-white/80 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 shadow-inner">
                    <Bookmark className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                    Sign In with Your Email to Access Saved Sessions
                  </h3>
                  <p className="text-slate-500 text-xs max-w-md mb-6 leading-relaxed">
                    Your AI mentor conversations, roadmaps, and code solutions are synced specifically to your registered email in MongoDB.
                  </p>
                  <button
                    onClick={() => setPage("Login")}
                    className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
                  >
                    <span>Sign In with Email</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <>
                  {/* Search Bar */}
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search saved sessions by title or conversation text..."
                      className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/80 border border-white/90 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-xs text-slate-800 outline-none shadow-xs transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Sessions Grid */}
                  {filteredSavedChats.length === 0 ? (
                    <div className="p-12 text-center glass-card rounded-3xl border border-white/80 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mb-4">
                        <Bookmark className="w-8 h-8" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-slate-900 mb-1">
                        {searchQuery ? 'No Matching Sessions' : `No Saved Sessions for ${user.email}`}
                      </h3>
                      <p className="text-slate-500 text-xs max-w-sm mb-6 leading-relaxed">
                        {searchQuery
                          ? 'Try searching with different keywords or clear your search query.'
                          : 'Start a conversation with SKILLONIK AI and your mentorship sessions will be saved here automatically.'}
                      </p>
                      <button
                        onClick={handleNewChat}
                        className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                      >
                        Start an AI Session
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredSavedChats.map((c) => {
                        const sessionId = c.id || String(c._id);
                        const isActive = activeSessionId === sessionId;
                        const msgCount = c.messages ? c.messages.length : (c.messageCount || 0);
                        const firstQuery = c.messages?.find(m => m.sender === 'user')?.text || '';
                        const lastAiResponse = c.messages?.filter(m => m.sender === 'ai').slice(-1)[0]?.text || '';

                        return (
                          <div 
                            key={sessionId} 
                            className={`
                              p-5 glass-card rounded-2xl border transition-all flex flex-col justify-between group
                              ${isActive 
                                ? 'border-blue-400/80 bg-white/95 ring-2 ring-blue-400/20 shadow-md' 
                                : 'border-white/80 hover:border-blue-300 hover:shadow-lg bg-white/80 hover:bg-white'
                              }
                            `}
                          >
                            <div className="space-y-3">
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                                  <div className={`p-2 rounded-xl shrink-0 ${isActive ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'} transition-colors`}>
                                    <MessageSquare className="w-4 h-4" />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <h3 className="font-display font-bold text-sm md:text-base text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                                      {c.title}
                                    </h3>
                                    <div className="flex items-center gap-2 mt-0.5">
                                      <p className="text-[10px] font-mono text-slate-400">
                                        {c.date} • {msgCount} {msgCount === 1 ? 'message' : 'messages'}
                                      </p>
                                      <span className="inline-flex items-center gap-1 text-[9px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.2 rounded">
                                        <Database className="w-2.5 h-2.5 text-blue-500" />
                                        <span>MongoDB</span>
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                {isActive && (
                                  <span className="shrink-0 px-2 py-0.5 rounded-full bg-blue-600 text-white text-[9px] font-mono font-bold uppercase tracking-wider">
                                    Active Now
                                  </span>
                                )}
                              </div>

                              {/* Preview snippet of conversation */}
                              {firstQuery && (
                                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-600 uppercase tracking-wider font-mono">
                                    <span>Topic:</span>
                                  </div>
                                  <p className="text-xs text-slate-700 font-medium line-clamp-2 leading-relaxed">
                                    {firstQuery}
                                  </p>
                                  {lastAiResponse && (
                                    <p className="text-[11px] text-slate-500 line-clamp-1 italic pt-1 border-t border-slate-200/60">
                                      AI: {lastAiResponse.slice(0, 100)}...
                                    </p>
                                  )}
                                </div>
                              )}
                            </div>

                            {/* Card Action Buttons */}
                            <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-100">
                              <button 
                                onClick={() => handleLoadChat(c)}
                                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold cursor-pointer shadow-md shadow-blue-500/20 transition-all hover:scale-105"
                              >
                                <span>Open Real Chat</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>

                              <button
                                onClick={() => handleDeleteChat(sessionId)}
                                className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
                                title="Delete Session"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}

      </main>

      {/* Saved History Drawer */}
      <SavedDrawer 
        isOpen={isSavedOpen}
        onClose={() => setIsSavedOpen(false)}
        savedChats={savedChats}
        activeSessionId={activeSessionId}
        onLoadChat={handleLoadChat}
        onDeleteChat={handleDeleteChat}
        onNewChat={handleNewChat}
        user={user}
        onOpenLogin={() => {
          setIsSavedOpen(false);
          setPage("Login");
        }}
      />

    </div>
  );
}
