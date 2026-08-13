import React, { useState, useEffect } from 'react';
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
  Bookmark, 
  PlusCircle, 
  Trash2, 
  ArrowRight, 
  Search, 
  MessageSquare, 
  CheckCircle2 
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

  // Authenticated user state initialized from localStorage
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('skillonik_user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  // Saved Sessions initialized from localStorage with fallback to INITIAL_SAVED_CHATS
  const [savedChats, setSavedChats] = useState(() => {
    try {
      const stored = localStorage.getItem('skillonik_saved_sessions');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error loading saved sessions from storage:', e);
    }
    return INITIAL_SAVED_CHATS;
  });

  // Sync savedChats to localStorage whenever changed
  useEffect(() => {
    try {
      localStorage.setItem('skillonik_saved_sessions', JSON.stringify(savedChats));
    } catch (e) {
      console.error('Error persisting saved sessions:', e);
    }
  }, [savedChats]);

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
    // Transition to AI Mentor view
    setPage("AI Mentor");
    setCurrentView("chat");
  };

  const handleLogout = () => {
    setUser(null);
    try {
      localStorage.removeItem('skillonik_user');
      localStorage.removeItem('skillonik_token');
      sessionStorage.removeItem('skillonik_user');
      sessionStorage.removeItem('skillonik_token');
    } catch (err) {
      console.error('Error removing user from storage:', err);
    }
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

  // Save active chat session
  const handleSaveChat = (customTitle) => {
    if (messages.length === 0) {
      showToast('Start a conversation before saving a session.');
      return;
    }

    const firstUserMsg = messages.find(m => m.sender === 'user')?.text || 'Mentorship Session';
    const fallbackTitle = firstUserMsg.length > 40 ? `${firstUserMsg.substring(0, 40)}...` : firstUserMsg;
    const finalTitle = customTitle ? customTitle.trim() : (activeSession ? activeSession.title : fallbackTitle);
    const currentDate = new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });

    if (activeSessionId) {
      // Update existing session
      setSavedChats((prev) =>
        prev.map((c) =>
          c.id === activeSessionId
            ? {
                ...c,
                title: finalTitle,
                messages: [...messages],
                messageCount: messages.length,
                date: currentDate,
                updatedAt: Date.now()
              }
            : c
        )
      );
      showToast(`Session "${finalTitle}" updated!`);
    } else {
      // Create new saved session
      const newId = `session-${Date.now()}`;
      const newSession = {
        id: newId,
        title: finalTitle,
        date: currentDate,
        createdAt: Date.now(),
        messageCount: messages.length,
        messages: [...messages]
      };

      setSavedChats((prev) => [newSession, ...prev]);
      setActiveSessionId(newId);
      showToast(`Session "${finalTitle}" saved to library!`);
    }
  };

  // Load a saved chat session into active workspace
  const handleLoadChat = (chat) => {
    setMessages(chat.messages || []);
    setActiveSessionId(chat.id);
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

  // Delete a saved session
  const handleDeleteChat = (id) => {
    setSavedChats((prev) => prev.filter((c) => c.id !== id));
    if (activeSessionId === id) {
      setActiveSessionId(null);
    }
    showToast('Session removed from library');
  };

  // Handle sending new prompt to AI Mentor engine
  const handleSendMessage = (msgObj) => {
    const userMsg = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: msgObj.text || 'Analyze attached file',
      file: msgObj.file,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const nextMessagesWithUser = [...messages, userMsg];
    setMessages(nextMessagesWithUser);
    setIsThinking(true);
    setCurrentView('chat');
    setPage('AI Mentor');

    // Simulate AI Mentor reasoning & response generation
    setTimeout(() => {
      let aiText = `Here is your SKILLONIK AI Mentor breakdown for: "${userMsg.text}"`;
      let codeSnippet = null;
      let codeLanguage = 'javascript';
      const confidence = 'High Confidence - Verified Engineering Knowledge';

      const textLower = userMsg.text.toLowerCase();

      if (textLower.includes('mern') || textLower.includes('react') || textLower.includes('node') || textLower.includes('mongo')) {
        aiText = `To build or structure a high-performance Full Stack MERN application, follow the clean 3-tier architecture:
1. **Frontend (React + Tailwind)**: Modular component structure with state management via Context API or Zustand.
2. **Backend (Express + Node.js)**: RESTful controllers, middleware authentication, and centralized error handlers.
3. **Database (MongoDB Atlas)**: Mongoose schemas with indexed fields and aggregation pipelines.`;
        
        codeSnippet = `// Server Controller Example (controllers/authController.js)
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ error: 'User already exists' });

    user = await User.create({ name, email, password });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({ success: true, token, user: { id: user._id, name, email } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};`;
      } else if (textLower.includes('fastapi') || textLower.includes('python')) {
        aiText = `FastAPI relies on Python type hints and Pydantic for high-performance async APIs:
- Automatic OpenAPI/Swagger documentation at \`/docs\`.
- Asynchronous database drivers like \`asyncpg\` and \`SQLModel\` for maximum throughput.`;
        codeLanguage = 'python';
        codeSnippet = `from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="SKILLONIK API")

class Item(BaseModel):
    name: str
    price: float

@app.post("/items/")
async def create_item(item: Item):
    return {"message": f"Item '{item.name}' created!", "data": item}`;
      } else if (textLower.includes('tcs') || textLower.includes('interview') || textLower.includes('question') || textLower.includes('dsa') || textLower.includes('bfs')) {
        aiText = `Here is a key technical concept frequently evaluated in TCS Digital & Infosys placement rounds:

### Question: Explain Binary Tree Level Order Traversal (BFS)
**Approach**: Use a Breadth-First Search (BFS) queue. Process nodes level-by-level using the queue size as the iteration limit.`;
        codeSnippet = `function levelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(currentLevel);
  }
  return result;
}`;
      } else if (textLower.includes('rag') || textLower.includes('llm') || textLower.includes('ai')) {
        aiText = `Retrieval-Augmented Generation (RAG) empowers LLMs with external knowledge bases:
1. **Document Chunking**: Split documentation into 500-token chunks.
2. **Embedding Generation**: Convert text chunks to vector embeddings using OpenAI or HuggingFace models.
3. **Vector Storage**: Store in ChromaDB / Pinecone.
4. **Context Injection**: Retrieve top-k nearest neighbors and inject into LLM prompt window.`;
      }

      const aiMsg = {
        id: `msg-${Date.now()}`,
        sender: 'ai',
        text: aiText,
        codeSnippet,
        codeLanguage,
        confidence,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      const finalMessages = [...nextMessagesWithUser, aiMsg];
      setMessages(finalMessages);
      setIsThinking(false);

      // If this chat is an active saved session, auto-update it in storage
      if (activeSessionId) {
        setSavedChats((prev) =>
          prev.map((c) =>
            c.id === activeSessionId
              ? {
                  ...c,
                  messages: finalMessages,
                  messageCount: finalMessages.length,
                  updatedAt: Date.now()
                }
              : c
          )
        );
      }
    }, 1200);
  };

  // Filtered saved chats for the workspace view
  const filteredSavedChats = savedChats.filter((c) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const matchesTitle = c.title.toLowerCase().includes(query);
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
              activeSession={activeSession}
              onSaveSession={handleSaveChat}
              onNewChat={handleNewChat}
              onOpenSavedDrawer={() => setIsSavedOpen(true)}
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
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-2.5">
                    <Bookmark className="w-6 h-6 text-blue-600" />
                    <span>Saved Mentorship Sessions</span>
                  </h2>
                  <p className="text-slate-500 text-xs md:text-sm mt-1">
                    Access your real conversation histories, code breakdowns, and placement solutions.
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
                    {searchQuery ? 'No Matching Sessions' : 'No Saved Sessions Yet'}
                  </h3>
                  <p className="text-slate-500 text-xs max-w-sm mb-6 leading-relaxed">
                    {searchQuery
                      ? 'Try searching with different keywords or clear your search query.'
                      : 'Save any live mentorship session to revisit full answers, code samples, and interview preparation anytime.'}
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
                    const isActive = activeSessionId === c.id;
                    const msgCount = c.messages ? c.messages.length : (c.messageCount || 0);
                    const firstQuery = c.messages?.find(m => m.sender === 'user')?.text || '';
                    const lastAiResponse = c.messages?.filter(m => m.sender === 'ai').slice(-1)[0]?.text || '';

                    return (
                      <div 
                        key={c.id} 
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
                                <p className="text-[10px] font-mono text-slate-400 mt-0.5">
                                  {c.date} • {msgCount} {msgCount === 1 ? 'message' : 'messages'}
                                </p>
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
                            onClick={() => handleDeleteChat(c.id)}
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
      />

    </div>
  );
}
