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
  AlertCircle
} from 'lucide-react';
import { INITIAL_SUGGESTIONS } from '../data/mockData';

/**
 * Inline markdown parser for bold, inline code, etc.
 */
function renderInlineMarkdown(str) {
  if (!str) return null;
  const parts = [];
  const inlineRegex = /(\*\*.*?\*\*|`.*?`)/g;
  let lastIndex = 0;
  let match;

  while ((match = inlineRegex.exec(str)) !== null) {
    if (match.index > lastIndex) {
      parts.push(str.substring(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      parts.push(
        <strong key={match.index} className="font-bold text-slate-900">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith('`') && token.endsWith('`')) {
      parts.push(
        <code key={match.index} className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 font-mono text-[12px] font-semibold">
          {token.slice(1, -1)}
        </code>
      );
    }
    lastIndex = inlineRegex.lastIndex;
  }

  if (lastIndex < str.length) {
    parts.push(str.substring(lastIndex));
  }

  return parts.length > 0 ? parts : str;
}

/**
 * Paragraph & List markdown parser
 */
function renderMarkdownParagraphs(text) {
  if (!text) return null;
  const lines = text.split(/\r?\n/);
  const elements = [];
  let currentList = [];
  let isNumberedList = false;

  const flushList = () => {
    if (currentList.length > 0) {
      if (isNumberedList) {
        elements.push(
          <ol key={`ol-${elements.length}`} className="list-decimal pl-5 space-y-1 my-1.5 text-slate-700">
            {currentList.map((item, idx) => (
              <li key={idx} className="pl-1">
                {renderInlineMarkdown(item)}
              </li>
            ))}
          </ol>
        );
      } else {
        elements.push(
          <ul key={`ul-${elements.length}`} className="list-disc pl-5 space-y-1 my-1.5 text-slate-700">
            {currentList.map((item, idx) => (
              <li key={idx} className="pl-1">
                {renderInlineMarkdown(item)}
              </li>
            ))}
          </ul>
        );
      }
      currentList = [];
      isNumberedList = false;
    }
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      return;
    }

    // Headings
    if (trimmed.startsWith('### ')) {
      flushList();
      elements.push(
        <h3 key={idx} className="font-display font-bold text-base text-slate-900 mt-3 mb-1">
          {renderInlineMarkdown(trimmed.substring(4))}
        </h3>
      );
      return;
    }
    if (trimmed.startsWith('## ')) {
      flushList();
      elements.push(
        <h2 key={idx} className="font-display font-bold text-lg text-slate-900 mt-4 mb-1.5">
          {renderInlineMarkdown(trimmed.substring(3))}
        </h2>
      );
      return;
    }
    if (trimmed.startsWith('# ')) {
      flushList();
      elements.push(
        <h1 key={idx} className="font-display font-extrabold text-xl text-slate-900 mt-4 mb-2">
          {renderInlineMarkdown(trimmed.substring(2))}
        </h1>
      );
      return;
    }

    // Bullet lists (- or * )
    if (/^[-*]\s+/.test(trimmed)) {
      if (isNumberedList) flushList();
      isNumberedList = false;
      currentList.push(trimmed.replace(/^[-*]\s+/, ''));
      return;
    }

    // Numbered lists (1. , 2. )
    if (/^\d+\.\s+/.test(trimmed)) {
      if (!isNumberedList) flushList();
      isNumberedList = true;
      currentList.push(trimmed.replace(/^\d+\.\s+/, ''));
      return;
    }

    // Regular paragraph
    flushList();
    elements.push(
      <p key={idx} className="text-slate-800 leading-relaxed">
        {renderInlineMarkdown(trimmed)}
      </p>
    );
  });

  flushList();
  return elements;
}

/**
 * Message Content Formatter that breaks content into text and code blocks
 */
function FormattedMessageContent({ content, onCopyCode, copiedId, msgId }) {
  if (!content) return null;

  // Split by fenced code blocks: ```lang\ncode\n```
  const parts = [];
  const regex = /```([a-zA-Z0-9_-]*)\r?\n([\s\S]*?)```/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: 'text', value: content.substring(lastIndex, match.index) });
    }
    parts.push({
      type: 'code',
      language: match[1] || 'javascript',
      code: match[2].trim(),
      blockId: `${msgId}-block-${parts.length}`
    });
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < content.length) {
    parts.push({ type: 'text', value: content.substring(lastIndex) });
  }

  return (
    <div className="space-y-3 font-sans leading-relaxed">
      {parts.map((part, pIdx) => {
        if (part.type === 'code') {
          return (
            <div key={pIdx} className="my-3 bg-[#0F172A] text-slate-200 rounded-xl overflow-hidden border border-slate-700/80 shadow-lg">
              <div className="flex items-center justify-between px-4 py-2 bg-slate-900/90 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span className="font-semibold text-blue-400 uppercase tracking-wider text-[11px]">{part.language}</span>
                <button
                  onClick={() => onCopyCode(part.code, part.blockId)}
                  className="flex items-center gap-1.5 hover:text-white px-2 py-1 rounded hover:bg-slate-800 transition-colors cursor-pointer text-xs"
                >
                  {copiedId === part.blockId ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 font-mono text-xs overflow-x-auto custom-scrollbar leading-relaxed">
                <code>{part.code}</code>
              </pre>
            </div>
          );
        }

        return (
          <div key={pIdx} className="space-y-2">
            {renderMarkdownParagraphs(part.value)}
          </div>
        );
      })}
    </div>
  );
}

export default function ChatView({ 
  messages = [], 
  onSelectSuggestion, 
  isThinking,
  user = null
}) {
  const [copiedId, setCopiedId] = useState(null);
  const chatBottomRef = useRef(null);

  // Compute personalized greeting name
  const displayName = user?.name || user?.username || (user?.email ? user.email.split('@')[0] : 'There');

  // Auto-scroll on new messages or thinking state
  useEffect(() => {
    if (messages.length > 0 || isThinking) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isThinking]);

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
              Hello, {displayName} <span className="inline-block animate-bounce">👋</span>
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
                      <div className={`glass-panel rounded-2xl rounded-tl-sm p-5 text-sm leading-relaxed space-y-3 ${
                        msg.isError ? 'bg-rose-50/90 border-rose-200 text-rose-900' : 'text-slate-800'
                      }`}>
                        
                        {/* Intent / Service Tag Header */}
                        {msg.intentLabel && !msg.isError && (
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2.5 py-0.5 rounded-md bg-blue-100/80 text-blue-700 font-mono text-[10px] font-bold">
                              {msg.intentLabel}
                            </span>
                          </div>
                        )}

                        {/* Formatted Markdown Content with code blocks */}
                        <FormattedMessageContent
                          content={msg.text}
                          onCopyCode={handleCopyCode}
                          copiedId={copiedId}
                          msgId={msg.id}
                        />

                        {/* Fallback explicit codeSnippet if present and not in markdown */}
                        {(msg.codeSnippet || msg.code_snippet || msg.code) && !msg.text?.includes('```') && (
                          <div className="mt-3 bg-[#0F172A] text-slate-200 rounded-xl overflow-hidden border border-slate-700/80 shadow-lg">
                            <div className="flex items-center justify-between px-4 py-2 bg-slate-900/90 border-b border-slate-800 text-xs font-mono text-slate-400">
                              <span className="font-semibold text-blue-400 uppercase tracking-wider text-[11px]">{msg.codeLanguage || msg.language || 'code'}</span>
                              <button
                                onClick={() => handleCopyCode(msg.codeSnippet || msg.code_snippet || msg.code, `explicit-${msg.id}`)}
                                className="flex items-center gap-1.5 hover:text-white px-2 py-0.5 rounded hover:bg-slate-800 transition-colors cursor-pointer text-xs"
                              >
                                {copiedId === `explicit-${msg.id}` ? (
                                  <>
                                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                                    <span className="text-emerald-400 font-semibold">Copied!</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3.5 h-3.5" />
                                    <span>Copy Code</span>
                                  </>
                                )}
                              </button>
                            </div>
                            <pre className="p-4 font-mono text-xs overflow-x-auto custom-scrollbar leading-relaxed">
                              <code>{msg.codeSnippet || msg.code_snippet || msg.code}</code>
                            </pre>
                          </div>
                        )}
                      </div>

                      {/* Confidence & Timestamp Details */}
                      <div className="flex items-center justify-between px-1">
                        {msg.isError ? (
                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-rose-600 font-semibold">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>Backend Offline or Connection Error</span>
                          </div>
                        ) : msg.confidence ? (
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
                            title="Copy Response Text"
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
                    SKILLONIK AI is analyzing knowledge base &amp; formulating response...
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

    </div>
  );
}
