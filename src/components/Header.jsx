import React from 'react';
import { 
  Menu, 
  Sparkles, 
  Zap, 
  LogIn
} from 'lucide-react';

export default function Header({ 
  setIsMobileOpen, 
  onOpenSavedDrawer,
  user,
  onOpenLogin,
  activeSession = null,
  messagesCount = 0,
  onSaveSession,
  currentView = 'chat'
}) {
  return (
    <header className="fixed top-0 right-0 w-full md:w-[calc(100%-256px)] h-16 bg-white/70 backdrop-blur-xl border-b border-white/80 flex items-center justify-between px-4 md:px-8 z-40 transition-all shadow-xs">
      {/* Mobile Menu Toggle */}
      <button 
        onClick={() => setIsMobileOpen(true)}
        className="md:hidden p-2 text-slate-700 hover:bg-white/80 rounded-xl transition-colors cursor-pointer"
        aria-label="Open sidebar"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Title / Current View Label */}
      <div className="flex items-center gap-2.5">
        <span className="inline-flex items-center justify-center p-1.5 rounded-lg bg-blue-100 text-blue-600 shadow-xs">
          <Sparkles className="w-4 h-4" />
        </span>
        <div>
          <h2 className="font-display font-bold text-slate-900 text-sm md:text-base leading-tight">
            SKILLONIK AI MENTOR
          </h2>
          
        </div>
      </div>

      {/* Right Action Icons */}
      <div className="flex items-center gap-2 md:gap-3">
        <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold font-mono">
          <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
          <span>Placement Mode Active</span>
        </div>

        {/* User Auth Status / Sign In Button */}
        {user ? (
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 border border-slate-200/80 shadow-2xs">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-[10px] font-bold flex items-center justify-center">
              {user.avatar || user.name.charAt(0)}
            </div>
            <span className="text-xs font-bold text-slate-800">{user.name}</span>
          </div>
        ) : (
          <button
            onClick={onOpenLogin}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition-all cursor-pointer"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Sign In</span>
          </button>
        )}

       
      </div>
    </header>
  );
}
