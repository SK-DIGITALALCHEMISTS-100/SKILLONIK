import React, { useState, useRef } from 'react';
import { Send, X, Image as ImageIcon } from 'lucide-react';

export default function ChatInput({ onSendMessage, isThinking }) {
  const [input, setInput] = useState('');
  const [attachedFile, setAttachedFile] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const textareaRef = useRef(null);

  const handleSubmit = (e) => {
    e?.preventDefault();
    if ((!input.trim() && !attachedFile) || isThinking) return;

    onSendMessage({
      text: input,
      file: attachedFile
    });

    setInput('');
    setAttachedFile(null);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="fixed bottom-6 left-0 md:left-64 right-0 flex justify-center z-30 px-6 pointer-events-none">
      <div className="w-full max-w-2xl md:max-w-3xl pointer-events-auto">
        
        {/* Attachment preview banner */}
        {attachedFile && (
          <div className="mb-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl border border-blue-200 flex items-center justify-between shadow-md animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600">
              <ImageIcon className="w-4 h-4" />
              <span>{attachedFile.name}</span>
              <span className="text-[10px] text-slate-400">({attachedFile.size})</span>
            </div>
            <button onClick={() => setAttachedFile(null)} className="p-1 hover:bg-slate-200 rounded-lg">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className={`glass-panel rounded-3xl px-4 py-3 flex items-center gap-3 shadow-[0_8px_32px_rgba(15,23,42,0.12)] bg-white/80 transition-all border ${
            isRecording
              ? 'ring-2 ring-red-500 border-red-400'
              : 'border-white/80 focus-within:ring-2 focus-within:ring-blue-500/40'
          }`}
        >
          {/* Textarea Input */}
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              e.target.style.height = 'auto';
              e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
            }}
            onKeyDown={handleKeyDown}
            placeholder={isRecording ? 'Listening to voice prompt...' : 'Ask anything about code, career, roadmaps or placements...'}
            rows={1}
            disabled={isThinking}
            className="flex-1 bg-transparent border-none outline-none resize-none py-3 px-3 text-slate-800 placeholder:text-slate-400 text-sm no-scrollbar focus:ring-0"
            style={{ minHeight: '52px', maxHeight: '140px' }}
          />

          {/* Send Button */}
          <button
            type="submit"
            disabled={(!input.trim() && !attachedFile) || isThinking}
            className={`
              w-12 h-12 rounded-full transition-all shrink-0 cursor-pointer flex items-center justify-center
              ${(!input.trim() && !attachedFile) || isThinking
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md shadow-blue-500/25 hover:scale-105 active:scale-95'
              }
            `}
          >
            <Send className="w-4 h-4 ml-0.5" />
          </button>
        </form>

        {/* Disclaimer Footer */}
        <div className="text-center mt-2">
          <p className="font-mono text-[10px] text-slate-400">
            SKILLONIK AI can make mistakes. Verify critical engineering advice and code solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
