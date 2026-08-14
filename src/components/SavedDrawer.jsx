import { Bookmark, X, MessageSquare, Trash2, PlusCircle, LogIn } from 'lucide-react';

export default function SavedDrawer({ 
  isOpen, 
  onClose, 
  savedChats = [], 
  activeSessionId = null, 
  onLoadChat, 
  onDeleteChat,
  onNewChat,
  user = null,
  onOpenLogin
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white/95 backdrop-blur-2xl border-l border-white/80 w-full max-w-md h-full p-6 shadow-2xl flex flex-col justify-between space-y-4">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-100/80 text-blue-600">
              <Bookmark className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-slate-900 leading-tight">
                Saved Sessions
              </h3>
              <p className="text-[11px] font-mono text-slate-400">
                {user ? `📧 ${user.email}` : `${savedChats.length} stored sessions`}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Start New Chat Action */}
        <button
          onClick={() => {
            if (onNewChat) onNewChat();
            onClose();
          }}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Start New Mentorship Session</span>
        </button>

        {/* Saved Chats List */}
        <div className="flex-1 overflow-y-auto custom-scrollbar space-y-3 pr-1">
          {!user ? (
            <div className="text-center py-16 px-4 flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Bookmark className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-slate-800 mb-1">Sign In to Access Your Sessions</h4>
              <p className="text-slate-400 text-xs max-w-xs leading-relaxed mb-4">
                Saved sessions are tied to your personal email ID in the database.
              </p>
              {onOpenLogin && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenLogin();
                  }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Sign In with Email</span>
                </button>
              )}
            </div>
          ) : savedChats.length === 0 ? (
            <div className="text-center py-16 px-4 flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mb-3">
                <Bookmark className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-slate-800 mb-1">No Saved Sessions for {user.email}</h4>
              <p className="text-slate-400 text-xs max-w-xs leading-relaxed">
                Your conversations will be automatically saved here and synced across your devices.
              </p>
            </div>
          ) : (
            savedChats.map((chat) => {
              const isActive = activeSessionId === chat.id;
              const msgCount = chat.messages ? chat.messages.length : (chat.messageCount || 0);
              const lastMessage = chat.messages && chat.messages.length > 0
                ? chat.messages[chat.messages.length - 1].text
                : '';

              return (
                <div 
                  key={chat.id}
                  onClick={() => {
                    onLoadChat(chat);
                    onClose();
                  }}
                  className={`
                    p-3.5 rounded-2xl border transition-all cursor-pointer group relative flex flex-col gap-2
                    ${isActive
                      ? 'bg-blue-50/90 border-blue-300 shadow-sm ring-1 ring-blue-400/40'
                      : 'bg-white/80 hover:bg-white border-white/90 shadow-2xs hover:border-blue-300 hover:shadow-md'
                    }
                  `}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <div className={`p-1.5 rounded-lg shrink-0 ${isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600'} transition-colors`}>
                        <MessageSquare className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="font-bold text-xs text-slate-800 truncate group-hover:text-blue-600 transition-colors">
                        {chat.title}
                      </h4>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {isActive && (
                        <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[9px] font-mono font-bold uppercase tracking-wider">
                          Active
                        </span>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDeleteChat(chat.id);
                        }}
                        className="p-1 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                        title="Delete Session"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {lastMessage && (
                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed bg-slate-50/80 p-2 rounded-xl border border-slate-100/80">
                      {lastMessage}
                    </p>
                  )}

                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-100/60">
                    <span>{chat.date}</span>
                    <span className="font-semibold text-slate-600">{msgCount} {msgCount === 1 ? 'message' : 'messages'}</span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
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
