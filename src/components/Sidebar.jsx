import React from 'react';
import logo from "../assets/logo.png";
import { 
  Home, 
  PlusCircle, 
  Map, 
  Lightbulb, 
  Bookmark
} from 'lucide-react';

export default function Sidebar({ 
  currentView, 
  setCurrentView, 
  onNewChat, 
  savedChatsCount = 3,
  isMobileOpen,
  setIsMobileOpen
}) {
  const navItems = [
    { id: 'chat', label: 'Home / AI Mentor', icon: Home },
    { id: 'roadmaps', label: 'Learning Roadmaps', icon: Map, badge: 'Hot' },
    { id: 'projects', label: 'Project Ideas', icon: Lightbulb },
    { id: 'saved', label: 'Saved Chats', icon: Bookmark, count: savedChatsCount },
  ];

  const handleNavClick = (id) => {
    if (id === 'new-chat') {
      onNewChat();
      setCurrentView('chat');
    } else {
      setCurrentView(id);
    }
    if (setIsMobileOpen) setIsMobileOpen(false);
  };

  return (
    <aside 
      className={`
        fixed left-0 top-0 h-screen w-64 z-50 flex flex-col
        bg-white/70 backdrop-blur-2xl 
        border-r border-white/80 shadow-lg
        transition-transform duration-300 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}
    >
      {/* Brand Header */}
      <div className="flex items-center gap-3 p-5 border-b border-white/40">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 border border-white/40">
          <img src={logo} alt="Logo" width="200" />
        </div>
        <div>
          <h1 className="font-display text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            SKILLONIK
          </h1>
          <p className="font-mono text-[10px] text-blue-600 font-semibold tracking-wider uppercase">
            Engineering AI Mentor
          </p>
        </div>
      </div>

      {/* New Chat Button */}
      <div className="px-4 pt-4 pb-2">
        <button
          onClick={() => handleNavClick('new-chat')}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium shadow-md shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          <PlusCircle className="w-4 h-4" />
          <span className="text-sm font-semibold">New Mentorship Session</span>
        </button>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto px-3 py-2 no-scrollbar space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`
                w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium
                transition-all duration-200 cursor-pointer
                ${isActive 
                  ? 'bg-blue-600 text-white shadow-sm font-semibold' 
                  : 'text-slate-700 hover:bg-white/60 hover:text-blue-600'
                }
              `}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-700'
                }`}>
                  {item.badge}
                </span>
              )}
              {item.count !== undefined && (
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                }`}>
                  {item.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom Footer & Profile */}
      <div className="p-3 border-t border-white/40 space-y-2">
        {/* User Profile Card */}
        <div className="flex items-center gap-3 p-2.5 bg-white/60 rounded-xl border border-white/80 shadow-sm">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              B
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white"></span>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-bold text-slate-900 truncate">Balaji S</h4>
          </div>
        </div>
      </div>
    </aside>
  );
}
