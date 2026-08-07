import React, { useState } from 'react';
import { Lightbulb, Sparkles, Copy, Check, Rocket, Terminal } from 'lucide-react';
import { MOCK_PROJECTS } from '../data/mockData';

export default function ProjectsView({ onSelectTopicPrompt }) {
  const [selectedProject, setSelectedProject] = useState(MOCK_PROJECTS[0]);
  const [copied, setCopied] = useState(false);

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-1 w-full flex flex-col relative px-4 md:px-8 py-6 h-full overflow-y-auto custom-scrollbar pb-36">
      <div className="max-w-[1000px] mx-auto w-full flex flex-col gap-6">

        {/* View Title */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-bold uppercase tracking-wider mb-1">
              <Lightbulb className="w-4 h-4" />
              <span>Production Blueprint Gallery</span>
            </div>
            <h1 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900">
              Engineering Project Blueprints
            </h1>
          </div>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold font-mono">
            {MOCK_PROJECTS.length} Blueprints
          </span>
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {MOCK_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className={`
                p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-4
                ${selectedProject.id === proj.id
                  ? 'bg-gradient-to-b from-blue-500/10 to-indigo-500/10 border-blue-500 shadow-md ring-2 ring-blue-500/30'
                  : 'bg-white/70 border-white/80 hover:bg-white'
                }
              `}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                    {proj.tag}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 font-semibold">{proj.difficulty}</span>
                </div>
                <h3 className="font-display font-bold text-base text-slate-900 leading-snug">
                  {proj.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 mt-2">
                {proj.tech.slice(0, 3).map((t, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Project Full Spec */}
        <div className="glass-panel rounded-3xl p-6 border border-white/80 shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Rocket className="w-5 h-5 text-blue-600" />
                <span className="font-mono text-xs font-bold text-blue-600 uppercase tracking-wider">
                  {selectedProject.tag} ARCHITECTURE SPEC
                </span>
              </div>
              <h2 className="font-display text-2xl font-extrabold text-slate-900">
                {selectedProject.title}
              </h2>
            </div>

            <button
              onClick={() => onSelectTopicPrompt(`Give me a detailed step-by-step guide and directory structure to build the project: ${selectedProject.title}`)}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-2 shadow-md shadow-blue-500/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>Ask AI to Build This Project</span>
            </button>
          </div>

          {/* Key Features List */}
          <div>
            <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              CORE SYSTEM FEATURES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedProject.features.map((feat, idx) => (
                <div key={idx} className="p-3 bg-white/70 rounded-xl border border-white/80 text-xs font-semibold text-slate-800 flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Starter Code Snippet */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-blue-500" />
                STARTER CODE ARCHITECTURE
              </h4>
              <button
                onClick={() => handleCopyCode(selectedProject.starterCode)}
                className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Starter Code'}</span>
              </button>
            </div>
            <div className="bg-[#0F172A] text-slate-200 rounded-2xl overflow-hidden border border-slate-700/80 shadow-lg">
              <pre className="p-4 font-mono text-xs overflow-x-auto custom-scrollbar leading-relaxed">
                <code>{selectedProject.starterCode}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
