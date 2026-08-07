import React, { useState } from 'react';
import { Map, CheckCircle2, Circle, Clock, Sparkles, Layers } from 'lucide-react';
import { MOCK_ROADMAPS } from '../data/mockData';

export default function RoadmapsView({ onSelectTopicPrompt }) {
  const [activeRoadmap, setActiveRoadmap] = useState(MOCK_ROADMAPS[0]);

  return (
    <div className="flex-1 w-full flex flex-col relative px-4 md:px-8 py-6 h-full overflow-y-auto custom-scrollbar pb-36">
      <div className="max-w-[1000px] mx-auto w-full flex flex-col gap-6">

        {/* View Title */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-bold uppercase tracking-wider mb-1">
              <Map className="w-4 h-4" />
              <span>Curated Engineering Tracks</span>
            </div>
            <h1 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900">
              Learning Roadmaps
            </h1>
          </div>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold font-mono">
            {MOCK_ROADMAPS.length} Active Tracks
          </span>
        </div>

        {/* Roadmap Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto custom-scrollbar pb-2">
          {MOCK_ROADMAPS.map((roadmap) => (
            <button
              key={roadmap.id}
              onClick={() => setActiveRoadmap(roadmap)}
              className={`
                flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs md:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer border
                ${activeRoadmap.id === roadmap.id 
                  ? 'bg-blue-600 text-white shadow-md border-blue-600' 
                  : 'bg-white/70 text-slate-700 hover:bg-white border-white/80'
                }
              `}
            >
              <Layers className="w-4 h-4" />
              <span>{roadmap.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Roadmap Canvas */}
        <div className="glass-panel rounded-3xl p-6 border border-white/80 shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                {activeRoadmap.category} • {activeRoadmap.level}
              </span>
              <h2 className="font-display text-2xl font-bold text-slate-900 mt-1">
                {activeRoadmap.title}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Estimated Duration: {activeRoadmap.duration}
              </p>
            </div>

            <div className="w-full md:w-48 bg-slate-100 p-3 rounded-2xl border border-white/60">
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-slate-600">Track Progress</span>
                <span className="text-blue-600 font-mono">{activeRoadmap.progress}%</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full" style={{ width: `${activeRoadmap.progress}%` }}></div>
              </div>
            </div>
          </div>

          {/* Node Progression Tree */}
          <div className="space-y-4 relative">
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-blue-200 z-0"></div>

            {activeRoadmap.nodes.map((node, index) => (
              <div 
                key={node.id}
                className="relative z-10 flex items-start gap-4 p-4 rounded-2xl bg-white/70 border border-white/80 shadow-sm hover:scale-[1.01] transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-200 shadow-sm">
                  {node.status === 'completed' ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  ) : node.status === 'in-progress' ? (
                    <Clock className="w-6 h-6 text-blue-600 animate-pulse" />
                  ) : (
                    <Circle className="w-6 h-6 text-slate-300" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold text-slate-400">MODULE 0{index + 1}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      node.status === 'completed' 
                        ? 'bg-emerald-100 text-emerald-700'
                        : node.status === 'in-progress'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {node.status.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-slate-900 mt-0.5">
                    {node.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {node.description}
                  </p>
                </div>

                <button
                  onClick={() => onSelectTopicPrompt(`Explain ${node.title} in detail with code examples and real-world implementation.`)}
                  className="px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-600 text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Learn with AI</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
