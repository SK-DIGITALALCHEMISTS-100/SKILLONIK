import React, { useState, useEffect, useRef } from 'react';
import logo from "../assets/logo.png";
import { 
  Copy, 
  Check, 
  Code, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  Cpu, 
  Layers, 
  FileCode,
  Bookmark,
  BookmarkCheck,
  PlusCircle,
  History,
  Edit3,
  X
} from 'lucide-react';
import { INITIAL_SUGGESTIONS } from '../data/mockData';

export default function ChatView({ 
  messages = [], 
  onSelectSuggestion, 
  isThinking,
  activeSession = null,
  onSaveSession,
  onNewChat,
  onOpenSavedDrawer
}) {
  const [copiedId, setCopiedId] = useState(null);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [customTitle, setCustomTitle] = useState('');
  const chatBottomRef = useRef(null);

  // Auto-scroll on new messages or thinking state
  useEffect(() => {
    if (messages.length > 0 || isThinking) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isThinking]);

  // Set default title when save modal opens
  const handleOpenSaveModal = () => {
    if (activeSession?.title) {
      setCustomTitle(activeSession.title);
    } else {
      const firstUserMsg = messages.find(m => m.sender === 'user')?.text || '';
      const autoTitle = firstUserMsg.length > 40 ? `${firstUserMsg.substring(0, 40)}...` : (firstUserMsg || 'AI Mentorship Session');
      setCustomTitle(autoTitle);
    }
    setIsSaveModalOpen(true);
  };

  const handleConfirmSave = (e) => {
    e?.preventDefault();
    if (onSaveSession) {
      onSaveSession(customTitle.trim() || 'AI Mentorship Session');
    }
    setIsSaveModalOpen(false);
  };

  const handleCopyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getSuggestionIcon = (id) => {
    switch (id) {
      case 'mern': return FileCode;
      case 'fastapi': return Terminal;
      case 'tcs': return Layers;
      case 'rag': return Cpu;
      default: return Sparkles;
    }
  };

  return (
    <div className="flex-1 w-full h-full overflow-y-auto custom-scrollbar flex flex-col justify-between">
      
      {/* Empty State / Centered Greeting */}
      {messages.length === 0 ? (
        <div className="w-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 md:px-8 pb-28">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto w-full">
            
            {/* Logo Badge */}
            <div className="w-20 h-20 rounded-3xl bg-white/60 backdrop-blur-xl flex items-center justify-center mb-5 shadow-lg border border-white/80 transition-transform hover:scale-105">
              <img src={logo} alt="SKILLONIK Logo" className="w-15 h-15 object-contain" />
            </div>

            {/* Main Greeting */}
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-3">
              Hello, There <span className="inline-block animate-bounce">👋</span>
            </h1>
            
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-lg mb-8">
              Your AI mentor for careers, projects and placements. How can I help you accelerate today?
            </p>

            {/* Quick Prompt Suggestions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-2xl">
              {INITIAL_SUGGESTIONS.slice(0, 4).map((item) => {
                const IconComponent = getSuggestionIcon(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => onSelectSuggestion(item.prompt)}
                    className="p-4 rounded-2xl glass-card text-left flex items-start gap-3.5 border border-white/80 shadow-sm hover:border-blue-400 hover:shadow-md transition-all group cursor-pointer"
                  >
                    <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="font-display font-bold text-xs text-slate-800 group-hover:text-blue-600 transition-colors truncate">
                          {item.title}
                        </h4>
                        <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-blue-100/70 text-blue-700 shrink-0">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-2 leading-snug">
                        {item.prompt}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      ) : (
        /* Chat Thread Container */
        <div className="w-full flex flex-col items-center px-4 md:px-8 py-4 pb-36">
          <div className="w-full max-w-3xl flex flex-col gap-5">
            
            {/* Top Active Session Sticky Bar */}
            <div className="sticky top-2 z-20 bg-white/90 backdrop-blur-xl border border-white/90 rounded-2xl p-3 shadow-md flex items-center justify-between gap-3 animate-in fade-in">
              <div className="flex items-center gap-2.5 min-w-0 flex-1">
                <div className={`p-2 rounded-xl shrink-0 ${activeSession ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                  {activeSession ? <BookmarkCheck className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-xs md:text-sm text-slate-900 truncate">
                      {activeSession ? activeSession.title : 'Active Mentorship Conversation'}
                    </h3>
                    {activeSession ? (
                      <span className="shrink-0 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
                        Saved Session
                      </span>
                    ) : (
                      <span className="shrink-0 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-mono font-bold">
                        Unsaved
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] font-mono text-slate-500">
                    {messages.length} {messages.length === 1 ? 'message' : 'messages'} {activeSession?.date ? `• ${activeSession.date}` : ''}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={handleOpenSaveModal}
                  className={`
                    flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs transition-all shadow-xs cursor-pointer
                    ${activeSession
                      ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      : 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105'
                    }
                  `}
                  title={activeSession ? "Rename/Update Session" : "Save this Chat"}
                >
                  {activeSession ? <Edit3 className="w-3.5 h-3.5 text-blue-600" /> : <Bookmark className="w-3.5 h-3.5" />}
                  <span>{activeSession ? 'Update Title' : 'Save Session'}</span>
                </button>

                <button
                  onClick={onNewChat}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                  title="Start Fresh Chat"
                >
                  <PlusCircle className="w-3.5 h-3.5 text-blue-600" />
                  <span className="hidden sm:inline">New Chat</span>
                </button>

                {onOpenSavedDrawer && (
                  <button
                    onClick={onOpenSavedDrawer}
                    className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                    title="View Saved Sessions History"
                  >
                    <History className="w-4 h-4 text-blue-600" />
                  </button>
                )}
              </div>
            </div>

            {/* Messages Thread */}
            {messages.map((msg) => (
              <div key={msg.id} className="flex flex-col gap-2">
                
                {/* User Message Bubble */}
                {msg.sender === 'user' ? (
                  <div className="flex justify-end animate-in fade-in slide-in-from-bottom-2">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl rounded-tr-sm px-5 py-3.5 max-w-[85%] text-sm shadow-md leading-relaxed">
                      <div className="font-medium">{msg.text}</div>
                      {msg.file && (
                        <div className="mt-2 pt-2 border-t border-white/20 text-xs font-mono flex items-center gap-1.5 opacity-90">
                          <Code className="w-3.5 h-3.5" />
                          <span>Attached: {msg.file.name}</span>
                        </div>
                      )}
                      <div className="text-right text-[10px] opacity-75 font-mono mt-1.5">
                        {msg.timestamp}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* AI Message Bubble */
                  <div className="flex justify-start gap-3 animate-in fade-in slide-in-from-bottom-2">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shrink-0 flex items-center justify-center shadow-md mt-1 overflow-hidden">
                      <img src={logo} alt="Logo" className="w-6 h-6 object-contain" />
                    </div>

                    <div className="flex flex-col gap-2.5 max-w-[90%] flex-1 min-w-0">
                      <div className="glass-panel rounded-2xl rounded-tl-sm p-5 text-sm text-slate-800 leading-relaxed space-y-3">
                        <div className="whitespace-pre-line font-sans">
                          {msg.text}
                        </div>

                        {/* Code Block if present */}
                        {msg.codeSnippet && (
                          <div className="mt-3 bg-[#0F172A] text-slate-200 rounded-xl overflow-hidden border border-slate-700/80 shadow-lg">
                            <div className="flex items-center justify-between px-4 py-2 bg-slate-900/90 border-b border-slate-800 text-xs font-mono text-slate-400">
                              <span>{msg.codeLanguage || 'javascript'}</span>
                              <button
                                onClick={() => handleCopyCode(msg.codeSnippet, msg.id)}
                                className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
                              >
                                {copiedId === msg.id ? (
                                  <>
                                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                                    <span className="text-emerald-400">Copied!</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3.5 h-3.5" />
                                    <span>Copy</span>
                                  </>
                                )}
                              </button>
                            </div>
                            <pre className="p-4 font-mono text-xs overflow-x-auto custom-scrollbar leading-relaxed">
                              <code>{msg.codeSnippet}</code>
                            </pre>
                          </div>
                        )}
                      </div>

                      {/* Confidence & Action Details */}
                      <div className="flex items-center justify-between px-1">
                        {msg.confidence ? (
                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 font-semibold">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>{msg.confidence}</span>
                          </div>
                        ) : (
                          <div className="text-[10px] font-mono text-slate-400">{msg.timestamp}</div>
                        )}

                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => handleCopyCode(msg.text, `msg-txt-${msg.id}`)}
                            className="p-1 text-slate-400 hover:text-slate-600 rounded-md transition-colors cursor-pointer" 
                            title="Copy Response"
                          >
                            <Copy className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* AI Thinking Animation State */}
            {isThinking && (
              <div className="flex justify-start gap-3 animate-in fade-in slide-in-from-bottom-2">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shrink-0 flex items-center justify-center shadow-md mt-1 animate-pulse overflow-hidden">
                  <img src={logo} alt="Logo" className="w-6 h-6 object-contain" />
                </div>
                <div className="glass-panel thinking-pulse rounded-2xl rounded-tl-sm px-5 py-4 flex items-center gap-3">
                  <span className="text-sm font-semibold text-blue-600 font-display">
                    SKILLONIK AI is analyzing &amp; structuring response...
                  </span>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-indigo-600 animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 rounded-full bg-purple-600 animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom scroll target */}
            <div ref={chatBottomRef} />
          </div>
        </div>
      )}

      {/* Save Session Modal */}
      {isSaveModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl border border-slate-100 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-blue-100 text-blue-600">
                  <Bookmark className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  {activeSession ? 'Update Session Title' : 'Save Mentorship Session'}
                </h3>
              </div>
              <button 
                onClick={() => setIsSaveModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Save this entire conversation thread, including code snippets, roadmaps, and interview questions to your persistent library.
            </p>

            <form onSubmit={handleConfirmSave} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Session Title
                </label>
                <input
                  type="text"
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  placeholder="e.g. MERN Full Stack Deployment Guide"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm text-slate-800 transition-all"
                  autoFocus
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsSaveModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                >
                  {activeSession ? 'Update Session' : 'Save to Library'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
