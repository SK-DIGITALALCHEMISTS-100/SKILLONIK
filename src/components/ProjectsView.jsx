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
              Skillonik Project Blueprints
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

       
      </div>
    </div>
  );
}
