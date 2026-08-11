import React from 'react';
import logo from "../assets/logo.png";
import { 
  MessageSquare, 
  PlusCircle, 
  Map, 
  Lightbulb, 
  Bookmark, 
  ArrowLeft,
  LogOut,
  LogIn
} from 'lucide-react';

export default function Sidebar({ 
  currentView, 
  setCurrentView, 
  onNewChat, 
  isMobileOpen, 
  setIsMobileOpen,
  user,
  onLogout,
  onOpenLogin
}) {
  const navItems = [
    { id: 'chat', label: 'AI Mentor Assistant', icon: MessageSquare },
    { id: 'roadmaps', label: 'Learning Roadmaps', icon: Map },
    { id: 'projects', label: 'Project Blueprints', icon: Lightbulb },
    { id: 'saved', label: 'Saved Sessions', icon: Bookmark },
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
        bg-white/80 backdrop-blur-2xl 
        border-r border-white/80 shadow-lg
        transition-transform duration-300 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}
    >
      {/* Brand Header */}
      <div className="flex items-center gap-3 p-5 border-b border-white/40">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 border border-white/40 overflow-hidden">
          <img src={logo} alt="Logo" className="w-7 h-7 object-contain" />
        </div>
        <div>
          <h1 className="font-display text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            SKILLONIK
          </h1>
          <p className="font-mono text-[10px] text-blue-600 font-semibold tracking-wider uppercase">
             AI Mentor
          </p>
        </div>
      </div>

      {/* Back to Home & New Chat Buttons */}
      <div className="px-4 pt-4 pb-2 space-y-2">
        <button
          onClick={() => handleNavClick('home-landing')}
          className="w-full flex items-center gap-2 py-2 px-3 rounded-xl bg-white/80 hover:bg-white text-slate-700 font-medium text-xs border border-white/90 shadow-sm transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-blue-600" />
          <span>Home Page</span>
        </button>

        <button
          onClick={() => handleNavClick('new-chat')}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-xs shadow-md shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          <PlusCircle className="w-4 h-4" />
          <span>New Mentorship Chat</span>
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
                w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold
                transition-all duration-200 cursor-pointer
                ${isActive 
                  ? 'bg-blue-600 text-white shadow-sm font-bold' 
                  : 'text-slate-700 hover:bg-white/60 hover:text-blue-600'
                }
              `}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-700'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom User Profile Section */}
      <div className="p-3 border-t border-white/40 space-y-2">
        {user ? (
          <div className="flex items-center justify-between p-2.5 bg-white/70 rounded-xl border border-white/90 shadow-sm">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="relative shrink-0">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                  {user.avatar || user.name.charAt(0)}
                </div>
                <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 rounded-full border border-white"></span>
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-slate-900 truncate leading-tight">{user.name}</h4>
                <p className="text-[10px] text-slate-500 font-mono truncate">{user.role || 'Member'}</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer shrink-0"
              title="Sign Out"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <button
            onClick={onOpenLogin}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs border border-blue-200 shadow-xs transition-all cursor-pointer"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Sign In / Create Account</span>
          </button>
        )}
      </div>
    </aside>
  );
}
