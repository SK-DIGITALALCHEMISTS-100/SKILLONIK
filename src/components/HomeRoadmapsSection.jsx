import React, { useState } from 'react';
import { 
  Map, 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  Coffee, 
  Cpu, 
  Database, 
  Brain, 
  Cloud, 
  BarChart2, 
  Shield, 
  Palette, 
  CheckSquare,
  Clock,
  Layers,
  ChevronRight
} from 'lucide-react';
import { DOMAIN_ROADMAPS } from '../data/roadmapsData';

const getDomainIcon = (iconName, className = "w-5 h-5") => {
  switch (iconName) {
    case 'Terminal': return <Terminal className={className} />;
    case 'Coffee': return <Coffee className={className} />;
    case 'Cpu': return <Cpu className={className} />;
    case 'Database': return <Database className={className} />;
    case 'Brain': return <Brain className={className} />;
    case 'Cloud': return <Cloud className={className} />;
    case 'BarChart2': return <BarChart2 className={className} />;
    case 'Shield': return <Shield className={className} />;
    case 'Palette': return <Palette className={className} />;
    case 'CheckSquare': return <CheckSquare className={className} />;
    default: return <Map className={className} />;
  }
};

export default function HomeRoadmapsSection({ onSelectDomain, onSelectPrompt }) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'Software Engineering', 'AI & Data', 'Cloud & Security', 'Product & QA'];

  const filteredRoadmaps = DOMAIN_ROADMAPS.filter((domain) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Software Engineering') {
      return ['python-dev', 'java-dev', 'cpp-dev', 'sql-dev'].includes(domain.id);
    }
    if (selectedFilter === 'AI & Data') {
      return ['aiml-dev', 'data-analyst', 'sql-dev'].includes(domain.id);
    }
    if (selectedFilter === 'Cloud & Security') {
      return ['cloud-engineer', 'cybersecurity'].includes(domain.id);
    }
    if (selectedFilter === 'Product & QA') {
      return ['ui-ux', 'qa-testing'].includes(domain.id);
    }
    return true;
  });

  return (
    <section id="home-roadmaps-section" className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col items-center text-center mb-10 md:mb-12">
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs font-mono font-bold mb-3 shadow-xs">
          <Map className="w-3.5 h-3.5" />
          <span>Curated 10-Domain Technical Roadmap</span>
        </div>

        {/* Section Heading */}
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Visual Career Roadmaps for <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Top 10 Tech Domains</span>
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl mt-2 leading-relaxed">
          Step-by-step milestone progression paths mapped to actual enterprise job roles, required tools, and real-time AI code mentorship.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white/80 hover:bg-white text-slate-700 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 10 Domains Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {filteredRoadmaps.map((domain) => {
          return (
            <div
              key={domain.id}
              className="group flex flex-col justify-between p-5 rounded-3xl bg-white/80 backdrop-blur-sm border border-slate-200/80 hover:border-blue-400/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Top Row: Icon & Duration */}
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/60 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
                    {getDomainIcon(domain.icon, "w-5 h-5")}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {domain.duration.split(' ')[0]} Wks
                  </span>
                </div>

                {/* Domain Title */}
                <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {domain.title}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                  {domain.subtitle}
                </p>

                {/* Stages Pill */}
                <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold text-blue-700 bg-blue-50/70 border border-blue-100 rounded-lg px-2 py-1 my-3">
                  <Layers className="w-3 h-3" />
                  <span>{domain.stages.length} Structured Phases</span>
                </div>

                {/* Sample Key Skills */}
                <div className="space-y-1 mb-4">
                  <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">Core Focus:</div>
                  <div className="flex flex-wrap gap-1">
                    {domain.stages[0]?.skills.slice(0, 2).map((sk, idx) => (
                      <span key={idx} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 truncate max-w-[130px]">
                        {sk}
                      </span>
                    ))}
                    {domain.stages[1]?.skills.slice(0, 1).map((sk, idx) => (
                      <span key={idx} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 truncate max-w-[130px]">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

             
            </div>
          );
        })}
      </div>
    </section>
  );
}
