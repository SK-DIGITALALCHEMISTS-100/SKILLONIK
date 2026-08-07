import React, { useState } from 'react';
import { 
  Menu, 
  History, 
  Sparkles
} from 'lucide-react';

export default function Header({ 
  setIsMobileOpen, 
  onOpenNotifications,
  onOpenSavedDrawer,
  onSelectSearchItem
}) {
  return (
    <header className="fixed top-0 right-0 w-full md:w-[calc(100%-256px)] h-16 bg-white/50 backdrop-blur-md border-b border-white/60 flex items-center justify-between px-4 md:px-8 z-40 transition-all">
      {/* Mobile Menu Toggle */}
      <button 
        onClick={() => setIsMobileOpen(true)}
        className="md:hidden p-2 text-slate-700 hover:bg-white/60 rounded-xl transition-colors"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Title / Current View Label */}
      <div className="flex items-center gap-2">
        <span className="hidden sm:inline-flex items-center justify-center p-1.5 rounded-lg bg-blue-100 text-blue-600">
          <Sparkles className="w-4 h-4" />
        </span>
        <h2 className="font-display font-bold text-slate-800 text-base md:text-lg">
          SKILLONIK AI Hub
        </h2>
      </div>

      {/* Right Action Icons */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Saved Drawer Trigger */}
        <button
          onClick={onOpenSavedDrawer}
          className="p-2 text-slate-600 hover:bg-white/60 rounded-xl transition-all relative cursor-pointer"
          title="Chat History"
        >
          <History className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full"></span>
        </button>
      </div>
    </header>
  );
}
