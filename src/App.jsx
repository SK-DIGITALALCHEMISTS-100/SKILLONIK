import React, { useState } from 'react';
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

export default function App() {
  const [page, setPage] = useState("Home");
  const [currentView, setCurrentView] = useState('chat');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSavedOpen, setIsSavedOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isThinking, setIsThinking] = useState(false);
  const [savedChats, setSavedChats] = useState([
    { id: 'sc-1', title: 'MERN MongoDB Timeout Debugging', date: 'Aug 06, 2026', messageCount: 2 },
    { id: 'sc-2', title: 'FastAPI Async SQLModel Setup', date: 'Aug 04, 2026', messageCount: 5 },
    { id: 'sc-3', title: 'TCS Digital Coding Solutions', date: 'Aug 01, 2026', messageCount: 4 }
  ]);

  // Handle sending new prompt to AI Mentor engine
  const handleSendMessage = (msgObj) => {
    const userMsg = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: msgObj.text || 'Analyze attached file',
      file: msgObj.file,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsThinking(true);
    setCurrentView('chat');
    setPage('AI Mentor');

    // Simulate AI Mentor reasoning & response generation
    setTimeout(() => {
      let aiText = `Here is your SKILLONIK AI Mentor breakdown for: "${userMsg.text}"`;
      let codeSnippet = null;
      let codeLanguage = 'javascript';
      let confidence = 'High Confidence - Verified Engineering Knowledge';

      const textLower = userMsg.text.toLowerCase();

      if (textLower.includes('mern') || textLower.includes('react') || textLower.includes('node') || textLower.includes('mongo')) {
        aiText = `To build or structure a high-performance Full Stack MERN application, you must follow the clean 3-tier architecture:
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
        codeSnippet = `from fastapi import FastAPI, Depends, HTTPException
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

      setMessages((prev) => [...prev, aiMsg]);
      setIsThinking(false);
    }, 1200);
  };

  const handleNewChat = () => {
    setMessages([]);
    setCurrentView('chat');
  };

  // Render Public Website Pages (Home, Roadmaps, Projects, Knowledge Base)
  if (page !== "AI Mentor") {
    return (
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar 
          page={page} 
          setPage={setPage} 
          onNavigate={(target) => {
            if (target === "AI Mentor") {
              setPage("AI Mentor");
              setCurrentView("chat");
            } else {
              setPage(target);
            }
          }} 
        />

        <main className="flex-1">
          {page === "Home" && (
            <>
              <Hero 
                onExplore={() => setPage("Roadmaps")} 
                onLaunchMentor={() => {
                  setPage("AI Mentor");
                  setCurrentView("chat");
                }}
                onBrowseProjects={() => setPage("Projects")}
              />
              <ProblemSection 
                onSelectPrompt={(prompt) => {
                  handleSendMessage({ text: prompt });
                }} 
              />
            </>
          )}

          {page === "Roadmaps" && (
            <SimplePage 
              page="Roadmaps" 
              onSelectPrompt={(prompt) => handleSendMessage({ text: prompt })}
              onNavigateToMentor={() => {
                setPage("AI Mentor");
                setCurrentView("roadmaps");
              }}
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
              onNavigateToMentor={() => {
                setPage("AI Mentor");
                setCurrentView("chat");
              }}
            />
          )}
        </main>

        <Footer onNavigate={(target) => {
          if (target === "AI Mentor") {
            setPage("AI Mentor");
            setCurrentView("chat");
          } else {
            setPage(target);
          }
        }} />
      </div>
    );
  }

  // Render Interactive AI Mentor Workspace Experience
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#E3F1FD] text-[#131b2e]">
      
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
        savedChatsCount={savedChats.length}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      {/* Top Header */}
      <Header 
        setIsMobileOpen={setIsMobileOpen}
        onOpenSavedDrawer={() => setIsSavedOpen(true)}
      />

      {/* Main Workspace Area */}
      <main className="flex-1 ml-0 md:ml-64 flex flex-col h-screen pt-16">
        
        {currentView === 'chat' && (
          <>
            <ChatView 
              messages={messages}
              onSelectSuggestion={(promptText) => handleSendMessage({ text: promptText })}
              isThinking={isThinking}
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

        {currentView === 'saved' && (
          <div className="flex-1 p-8 overflow-y-auto custom-scrollbar pb-32">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-2xl font-bold mb-2 text-slate-900">Saved Mentorship Sessions</h2>
              <p className="text-slate-500 text-xs mb-6">Access your previous AI mentor code reviews, roadmaps, and interview preparations.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {savedChats.map((c) => (
                  <div key={c.id} className="p-5 glass-card rounded-2xl border border-white/80 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-base text-slate-900">{c.title}</h3>
                      <p className="text-xs text-slate-500 mt-1 font-mono">{c.date} • {c.messageCount} messages</p>
                    </div>
                    <button 
                      onClick={() => setCurrentView('chat')}
                      className="mt-4 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold cursor-pointer shadow-md shadow-blue-500/20 transition-all self-start"
                    >
                      Open Session
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>

      <SavedDrawer 
        isOpen={isSavedOpen}
        onClose={() => setIsSavedOpen(false)}
        savedChats={savedChats}
        onLoadChat={() => setCurrentView('chat')}
        onDeleteChat={(id) => setSavedChats(prev => prev.filter(c => c.id !== id))}
      />

    </div>
  );
}
