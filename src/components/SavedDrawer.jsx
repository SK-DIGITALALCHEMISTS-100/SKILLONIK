import React from 'react';
import { Bookmark, X, MessageSquare, Trash2 } from 'lucide-react';

export default function SavedDrawer({ isOpen, onClose, savedChats, onLoadChat, onDeleteChat }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white/95 backdrop-blur-2xl border-l border-white/80 w-full max-w-sm h-full p-6 shadow-2xl flex flex-col justify-between space-y-4">
        
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-blue-600" />
            <h3 className="font-display font-bold text-lg text-slate-900">
              Saved Sessions ({savedChats.length})
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar space-y-3 pr-1">
          {savedChats.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-xs">
              No saved sessions yet. Click "Save Chat" during any AI mentor session!
            </div>
          ) : (
            savedChats.map((chat) => (
              <div 
                key={chat.id}
                className="p-3.5 rounded-2xl bg-white/80 border border-white/90 shadow-sm flex items-center justify-between gap-3 group"
              >
                <div 
                  onClick={() => {
                    onLoadChat(chat);
                    onClose();
                  }}
                  className="flex-1 min-w-0 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <h4 className="font-bold text-xs text-slate-800 truncate group-hover:text-blue-600 transition-colors">
                      {chat.title}
                    </h4>
                  </div>
                  <p className="text-[10px] font-mono text-slate-400 mt-1">
                    {chat.date} • {chat.messageCount} messages
                  </p>
                </div>

                <button
                  onClick={() => onDeleteChat(chat.id)}
                  className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                  title="Delete Session"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          )}
        </div>

        <button 
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
        >
          Close Drawer
        </button>
      </div>
    </div>
  );
}
