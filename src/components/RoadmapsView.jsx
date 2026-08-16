import React, { useState, useMemo, useEffect } from 'react';
import { 
  Map, 
  CheckCircle2, 
  Circle, 
  Clock, 
  Sparkles, 
  Layers, 
  Search, 
  Award, 
  Briefcase, 
  TrendingUp, 
  ChevronDown, 
  ChevronUp, 
  FolderGit2, 
  Code, 
  Flame, 
  Check, 
  ArrowRight,
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
  BookOpen,
  Filter
} from 'lucide-react';
import { DOMAIN_ROADMAPS } from '../data/roadmapsData';

// Domain icon mapper
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
    default: return <Code className={className} />;
  }
};

export default function RoadmapsView({ onSelectTopicPrompt }) {
  const [selectedDomainId, setSelectedDomainId] = useState(DOMAIN_ROADMAPS[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('pipeline'); // 'pipeline' | 'flowchart' | 'projects' | 'career'
  const [expandedStages, setExpandedStages] = useState({});
  const [completedSkills, setCompletedSkills] = useState(() => {
    try {
      const saved = localStorage.getItem('skillonik_roadmap_progress');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Persist completed skills
  useEffect(() => {
    try {
      localStorage.setItem('skillonik_roadmap_progress', JSON.stringify(completedSkills));
    } catch (e) {
      console.error('Failed to save progress:', e);
    }
  }, [completedSkills]);

  // Current selected domain
  const currentDomain = useMemo(() => {
    return DOMAIN_ROADMAPS.find(d => d.id === selectedDomainId) || DOMAIN_ROADMAPS[0];
  }, [selectedDomainId]);

  // Filtered domains by search
  const filteredDomains = useMemo(() => {
    if (!searchQuery.trim()) return DOMAIN_ROADMAPS;
    const q = searchQuery.toLowerCase();
    return DOMAIN_ROADMAPS.filter(d => 
      d.title.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q) ||
      d.stages.some(s => 
        s.title.toLowerCase().includes(q) ||
        s.skills.some(sk => sk.toLowerCase().includes(q)) ||
        s.tools.some(t => t.toLowerCase().includes(q))
      )
    );
  }, [searchQuery]);

  // Toggle stage expansion
  const toggleStage = (stageNumber) => {
    setExpandedStages(prev => ({
      ...prev,
      [stageNumber]: !prev[stageNumber]
    }));
  };

  // Expand all / collapse all
  const toggleAllStages = (expand) => {
    const newState = {};
    currentDomain.stages.forEach(s => {
      newState[s.stageNumber] = expand;
    });
    setExpandedStages(newState);
  };

  // Toggle skill completion
  const toggleSkill = (domainId, skillName) => {
    const key = `${domainId}__${skillName}`;
    setCompletedSkills(prev => {
      const next = { ...prev };
      if (next[key]) {
        delete next[key];
      } else {
        next[key] = true;
      }
      return next;
    });
  };

  // Calculate progress for current domain
  const { totalSkillsCount, completedCount, progressPercent } = useMemo(() => {
    let total = 0;
    let done = 0;
    currentDomain.stages.forEach(s => {
      s.skills.forEach(skill => {
        total++;
        if (completedSkills[`${currentDomain.id}__${skill}`]) {
          done++;
        }
      });
    });
    const percent = total > 0 ? Math.round((done / total) * 100) : 0;
    return { totalSkillsCount: total, completedCount: done, progressPercent: percent };
  }, [currentDomain, completedSkills]);

  return (
    <div className="flex-1 w-full flex flex-col relative px-3 sm:px-6 md:px-8 py-6 h-full overflow-y-auto custom-scrollbar pb-36">
      <div className="max-w-[1100px] mx-auto w-full flex flex-col gap-6">

        {/* View Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-bold uppercase tracking-wider mb-1.5">
              <Map className="w-4 h-4" />
              <span>Interactive Learning Roadmaps</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Domain Learning Roadmaps
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Comprehensive, milestone-driven visual paths with curated modules, essential tooling, real-world capstone projects, and direct AI code mentorship.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-xs font-bold font-mono shadow-md shadow-blue-500/20">
              10 Industry Tracks
            </span>
          </div>
        </div>

        {/* Search & Domain Selector Grid / Tabs */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any skill, tool, framework, or domain..."
                className="w-full pl-9 pr-4 py-2.5 bg-white/80 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 shadow-sm"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Filter className="w-3.5 h-3.5 text-blue-600" />
              <span>Select a domain to view the complete curriculum:</span>
            </div>
          </div>

          {/* 10 Domains Selector Horizontal Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 pt-1">
            {filteredDomains.map((domain) => {
              const isSelected = domain.id === currentDomain.id;
              // calculate individual domain completion
              let domainTotal = 0;
              let domainDone = 0;
              domain.stages.forEach(s => {
                s.skills.forEach(sk => {
                  domainTotal++;
                  if (completedSkills[`${domain.id}__${sk}`]) domainDone++;
                });
              });
              const domainPercent = domainTotal > 0 ? Math.round((domainDone / domainTotal) * 100) : 0;

              return (
                <button
                  key={domain.id}
                  onClick={() => {
                    setSelectedDomainId(domain.id);
                    setExpandedStages({ '01': true, '02': true });
                  }}
                  className={`
                    group flex flex-col p-3 rounded-2xl text-left transition-all duration-200 cursor-pointer border relative overflow-hidden
                    ${isSelected 
                      ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg shadow-slate-900/20 border-slate-700 scale-[1.02]' 
                      : 'bg-white/70 hover:bg-white text-slate-800 border-white/90 hover:border-blue-200 shadow-sm hover:shadow-md'
                    }
                  `}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <div className={`
                      w-8 h-8 rounded-xl flex items-center justify-center transition-colors
                      ${isSelected ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100'}
                    `}>
                      {getDomainIcon(domain.icon, "w-4 h-4")}
                    </div>
                    {domainPercent > 0 && (
                      <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-emerald-300' : 'bg-emerald-50 text-emerald-600'}`}>
                        {domainPercent}%
                      </span>
                    )}
                  </div>
                  
                  <div className="font-display text-xs sm:text-sm font-bold truncate w-full">
                    {domain.title}
                  </div>
                  <div className={`text-[10px] truncate mt-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {domain.stages.length} Stages • {domain.duration}
                  </div>

                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Domain Canvas */}
        <div className="glass-panel rounded-3xl p-4 sm:p-6 md:p-8 border border-white/80 shadow-xl space-y-6">
          
          {/* Domain Header Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200/80">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-100 text-blue-700 uppercase tracking-wider">
                  {currentDomain.category}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                  {currentDomain.level}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {currentDomain.duration}
                </span>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                  {getDomainIcon(currentDomain.icon, "w-5 h-5")}
                </div>
                <div>
                  <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
                    {currentDomain.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {currentDomain.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-500 max-w-2xl leading-relaxed pt-1">
                {currentDomain.overview}
              </p>
            </div>

            {/* Progress Card & AI Action */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[240px]">
              <div className="bg-white/80 p-4 rounded-2xl border border-slate-200/80 shadow-xs flex-1">
                <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                  <span className="text-slate-700 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                    Skills Mastered
                  </span>
                  <span className="text-blue-600 font-mono font-extrabold">{progressPercent}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden p-0.5 border border-slate-200/60">
                  <div 
                    className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-[10px] text-slate-500 mt-1.5 font-mono">
                  <span>{completedCount} / {totalSkillsCount} Skills Checked</span>
                  <span>{progressPercent === 100 ? '🎉 Certified' : 'In Progress'}</span>
                </div>
              </div>

             
            </div>
          </div>

          {/* Sub-view Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/60 pb-3">
            <div className="flex items-center gap-2 bg-slate-100/80 p-1 rounded-2xl border border-slate-200/60">
              <button
                onClick={() => setActiveTab('pipeline')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'pipeline' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Pipeline View</span>
              </button>

              <button
                onClick={() => setActiveTab('flowchart')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'flowchart' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Map className="w-3.5 h-3.5" />
                <span>Visual Flowchart</span>
              </button>

              
            </div>

            {activeTab === 'pipeline' && (
              <div className="flex items-center gap-2 text-xs">
                <button
                  onClick={() => toggleAllStages(true)}
                  className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
                >
                  Expand All
                </button>
                <span className="text-slate-300">•</span>
                <button
                  onClick={() => toggleAllStages(false)}
                  className="text-slate-500 hover:text-slate-700 font-semibold cursor-pointer"
                >
                  Collapse All
                </button>
              </div>
            )}
          </div>

          {/* TAB 1: PIPELINE / PHASED PATH VIEW */}
          {activeTab === 'pipeline' && (
            <div className="space-y-4 relative">
              {/* Connecting vertical spine */}
              <div className="absolute left-6 md:left-7 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-400 via-indigo-400 to-emerald-400 z-0"></div>

              {currentDomain.stages.map((stage, sIdx) => {
                const isExpanded = expandedStages[stage.stageNumber] !== false;
                // Stage completion calculation
                const stageSkillsDone = stage.skills.filter(sk => completedSkills[`${currentDomain.id}__${sk}`]).length;
                const isStageComplete = stageSkillsDone === stage.skills.length && stage.skills.length > 0;

                return (
                  <div
                    key={stage.stageNumber}
                    className="relative z-10 rounded-2xl bg-white/80 border border-white/90 shadow-sm hover:shadow-md transition-all overflow-hidden"
                  >
                    {/* Stage Accordion Header */}
                    <div 
                      onClick={() => toggleStage(stage.stageNumber)}
                      className="flex items-start md:items-center justify-between gap-4 p-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                    >
                      <div className="flex items-start md:items-center gap-3.5 min-w-0">
                        <div className={`
                          w-8 h-8 md:w-9 md:h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-xs border
                          ${isStageComplete 
                            ? 'bg-emerald-500 text-white border-emerald-400' 
                            : 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white border-blue-500'
                          }
                        `}>
                          {isStageComplete ? <Check className="w-4 h-4 stroke-[3]" /> : stage.stageNumber}
                        </div>

                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                              PHASE {stage.stageNumber} • {stage.duration}
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono">
                              ({stageSkillsDone}/{stage.skills.length} skills)
                            </span>
                          </div>
                          <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 truncate">
                            {stage.title}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="hidden sm:inline-block text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
                          {stage.skills.length} Milestones
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-slate-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                    </div>

                    {/* Stage Expanded Body */}
                    {isExpanded && (
                      <div className="p-4 pt-0 border-t border-slate-100 space-y-4 bg-slate-50/40">
                        <p className="text-xs text-slate-600 leading-relaxed pt-3">
                          {stage.description}
                        </p>

                        {/* Interactive Skills Checklist */}
                        <div>
                          <div className="text-[11px] font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                            <CheckSquare className="w-3.5 h-3.5 text-blue-600" />
                            <span>Core Competencies & Milestones (Click to mark done):</span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {stage.skills.map((skill, skIdx) => {
                              const isChecked = !!completedSkills[`${currentDomain.id}__${skill}`];
                              return (
                                <div
                                  key={skIdx}
                                  onClick={() => toggleSkill(currentDomain.id, skill)}
                                  className={`
                                    flex items-center gap-2.5 p-2.5 rounded-xl border text-xs cursor-pointer transition-all select-none
                                    ${isChecked 
                                      ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900 line-through opacity-80' 
                                      : 'bg-white border-slate-200/80 text-slate-800 hover:border-blue-300 hover:bg-blue-50/30'
                                    }
                                  `}
                                >
                                  <div className={`
                                    w-4 h-4 rounded-md flex items-center justify-center shrink-0 border transition-colors
                                    ${isChecked ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300 bg-white'}
                                  `}>
                                    {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                                  </div>
                                  <span className="font-medium leading-tight">{skill}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Tools & Frameworks Badge Row */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-[11px] font-semibold text-slate-500">Key Tools:</span>
                            {stage.tools.map((tool, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2 py-0.5 bg-slate-200/70 text-slate-700 rounded-md font-mono text-[10px] font-bold"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>

                          {/* Learn with AI Button for this specific phase */}
                         
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 2: VISUAL FLOWCHART VIEW */}
          {activeTab === 'flowchart' && (
            <div className="space-y-6">
              

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
                {currentDomain.stages.map((stage, idx) => (
                  <div
                    key={stage.stageNumber}
                    className="flex flex-col p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all relative overflow-hidden group hover:border-blue-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-extrabold px-2.5 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg">
                        PHASE {stage.stageNumber}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 font-bold">
                        {stage.duration}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-base text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {stage.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2 mb-4">
                      {stage.description}
                    </p>

                    <div className="space-y-1.5 flex-1 mb-4">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Core Focus:</div>
                      {stage.skills.slice(0, 4).map((sk, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-1.5 text-xs text-slate-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                          <span className="truncate">{sk}</span>
                        </div>
                      ))}
                      {stage.skills.length > 4 && (
                        <div className="text-[10px] text-blue-600 font-semibold pl-3">
                          +{stage.skills.length - 4} more skills
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex gap-1 overflow-hidden">
                        {stage.tools.slice(0, 2).map((tool, tIdx) => (
                          <span key={tIdx} className="text-[9px] font-mono bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">
                            {tool}
                          </span>
                        ))}
                      </div>
                     
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: CAPSTONE PROJECTS VIEW */}
          {activeTab === 'projects' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    Production Portfolio Capstones
                  </h3>
                  <p className="text-xs text-slate-500">
                    Build these real-world projects to validate your knowledge and showcase your expertise to hiring managers.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {currentDomain.capstoneProjects?.map((proj, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-5 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/90 shadow-sm space-y-3 hover:border-blue-300 transition-all"
                  >
                    <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-bold">
                      <FolderGit2 className="w-4 h-4" />
                      <span>CAPSTONE 0{pIdx + 1}</span>
                    </div>

                    <h4 className="font-display font-bold text-base text-slate-900">
                      {proj.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {proj.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {proj.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-md font-mono text-[10px] font-bold border border-blue-100"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <button
                        onClick={() => onSelectTopicPrompt(`I want to build the capstone project: "${proj.title}" using ${proj.tech.join(', ')}. Give me the complete architecture diagram, database schema, folder structure, and starter code.`)}
                        className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                        <span>Get Architecture & Starter Code</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: CAREER, SALARY & CERTIFICATIONS */}
          {activeTab === 'career' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Salary Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50/80 to-teal-50/50 border border-emerald-200/80 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-sm">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
                  Compensation Benchmark
                </div>
                <div className="font-display text-xl font-extrabold text-slate-900">
                  {currentDomain.salaryRange}
                </div>
                <p className="text-[11px] text-slate-600">
                  Estimated median compensation based on current industry standards and technical seniority.
                </p>
              </div>

              {/* Top Hiring Companies */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-50/50 border border-blue-200/80 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div className="text-xs font-mono font-bold text-blue-800 uppercase tracking-wider">
                  Top Hiring Companies
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {currentDomain.topCompanies?.map((comp, cIdx) => (
                    <span key={cIdx} className="px-2.5 py-1 bg-white text-slate-800 rounded-lg text-xs font-bold shadow-xs border border-slate-200">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>

              {/* In-Demand Certifications */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50/80 to-orange-50/50 border border-amber-200/80 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-sm">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">
                  Industry Certifications
                </div>
                <div className="space-y-1.5 pt-1">
                  {currentDomain.certifications?.map((cert, certIdx) => (
                    <div key={certIdx} className="flex items-start gap-1.5 text-xs text-slate-800 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
