import React, { useState, useEffect, useMemo } from 'react';
import { 
  DOMAINS, 
  DIFFICULTY_LEVELS, 
  QUESTION_BANK, 
  BADGE_REWARDS 
} from '../data/interviewQuestions';
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Award, 
  Trophy, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  Sparkles, 
  Bookmark, 
  Check, 
  ChevronRight, 
  Play, 
  Pause, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Terminal, 
  Cloud, 
  Coffee, 
  Code2, 
  HardDrive, 
  BarChart3, 
  Network, 
  Brain,
  MessageSquare,
  SlidersHorizontal
} from 'lucide-react';

// Domain icon mapper component
const DomainIcon = ({ name, className = "w-5 h-5" }) => {
  switch (name) {
    case 'Terminal': return <Terminal className={className} />;
    case 'Database': return <Database className={className} />;
    case 'Brain': return <Brain className={className} />;
    case 'Cpu': return <Cpu className={className} />;
    case 'Cloud': return <Cloud className={className} />;
    case 'Coffee': return <Coffee className={className} />;
    case 'Code2': return <Code2 className={className} />;
    case 'HardDrive': return <HardDrive className={className} />;
    case 'BarChart3': return <BarChart3 className={className} />;
    case 'Network': return <Network className={className} />;
    default: return <Code2 className={className} />;
  }
};

export default function InterviewPreparation({ onAskMentor, onNavigateHome, user }) {
  // Navigation & Flow State: 'select' | 'quiz' | 'result' | 'review'
  const [viewState, setViewState] = useState('select');
  
  // Selection State
  const [selectedDomainId, setSelectedDomainId] = useState('python');
  const [selectedLevelId, setSelectedLevelId] = useState('beginner');
  const [timerPreset, setTimerPreset] = useState(600); // 600s = 10m, 300s = 5m, 900s = 15m, 0 = untimed
  const [practiceMode, setPracticeMode] = useState(false); // Practice mode shows instant explanation

  // Active Quiz State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { [questionId]: optionIndex }
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set()); // Set of questionIds
  const [timeRemaining, setTimeRemaining] = useState(600);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  
  // Review Filter State
  const [reviewFilter, setReviewFilter] = useState('all'); // 'all' | 'incorrect' | 'correct' | 'flagged'

  // Confetti / Celebration state for high scores
  const [showCelebration, setShowCelebration] = useState(false);

  // User Gamification Profile in LocalStorage
  const [stats, setStats] = useState(() => {
    try {
      const stored = localStorage.getItem('skillonik_interview_prep_stats');
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error('Error loading prep stats:', e);
    }
    return {
      totalTests: 0,
      totalQuestionsAnswered: 0,
      totalCorrect: 0,
      totalXP: 0,
      streakDays: 1,
      unlockedBadges: [],
      domainHistory: {} // domainId: { bestScore: 0, attempts: 0 }
    };
  });

  // Persist stats changes
  useEffect(() => {
    try {
      localStorage.setItem('skillonik_interview_prep_stats', JSON.stringify(stats));
    } catch (e) {
      console.error('Error saving prep stats:', e);
    }
  }, [stats]);

  // Current domain & difficulty objects
  const activeDomain = useMemo(() => {
    return DOMAINS.find(d => d.id === selectedDomainId) || DOMAINS[0];
  }, [selectedDomainId]);

  const activeLevel = useMemo(() => {
    return DIFFICULTY_LEVELS.find(l => l.id === selectedLevelId) || DIFFICULTY_LEVELS[0];
  }, [selectedLevelId]);

  // Get active 10 questions
  const activeQuestions = useMemo(() => {
    const domainQuestions = QUESTION_BANK[selectedDomainId];
    if (domainQuestions && domainQuestions[selectedLevelId]) {
      return domainQuestions[selectedLevelId];
    }
    return [];
  }, [selectedDomainId, selectedLevelId]);

  const currentQuestion = activeQuestions[currentIndex] || null;

  // Auto-submit when time expires
  const handleAutoSubmit = () => {
    setEndTime(Date.now());
    setViewState('result');
    calculateAndSaveResults(userAnswers);
  };

  // Countdown Timer Engine
  useEffect(() => {
    if (viewState !== 'quiz' || timerPreset === 0 || isTimerPaused) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [viewState, timerPreset, isTimerPaused, userAnswers]);

  // Keyboard navigation shortcuts (1-4 for options, ArrowLeft/Right for nav)
  useEffect(() => {
    if (viewState !== 'quiz') return;

    const handleKeyDown = (e) => {
      // Don't trigger if typing in an input
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (['1', '2', '3', '4'].includes(e.key)) {
        const optionIdx = parseInt(e.key, 10) - 1;
        if (currentQuestion && optionIdx < currentQuestion.options.length) {
          handleSelectOption(currentQuestion.id, optionIdx);
        }
      } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (currentIndex < activeQuestions.length - 1) {
          setCurrentIndex(prev => prev + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          setCurrentIndex(prev => prev - 1);
        }
      } else if (e.key.toLowerCase() === 'f') {
        if (currentQuestion) {
          toggleFlagQuestion(currentQuestion.id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewState, currentIndex, currentQuestion, activeQuestions]);

  // Start Assessment
  const handleStartQuiz = () => {
    setUserAnswers({});
    setFlaggedQuestions(new Set());
    setCurrentIndex(0);
    setTimeRemaining(timerPreset);
    setIsTimerPaused(false);
    setStartTime(Date.now());
    setEndTime(null);
    setShowSubmitModal(false);
    setShowCelebration(false);
    setViewState('quiz');
  };

  // Select Option
  const handleSelectOption = (questionId, optionIndex) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  // Toggle Bookmark/Flag
  const toggleFlagQuestion = (questionId) => {
    setFlaggedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      return next;
    });
  };

  // Explicit Submit by User
  const handleSubmitAssessment = () => {
    setShowSubmitModal(false);
    setEndTime(Date.now());
    setViewState('result');
    calculateAndSaveResults(userAnswers, false);
  };

  // Calculate and store results
  const calculateAndSaveResults = (answers, wasTimeout = false) => {
    let correctCount = 0;
    activeQuestions.forEach((q) => {
      if (answers[q.id] === q.correctIndex) {
        correctCount += 1;
      }
    });

    const accuracy = Math.round((correctCount / activeQuestions.length) * 100);
    const timeSpentSeconds = Math.max(1, Math.round(((endTime || Date.now()) - (startTime || Date.now())) / 1000));
    
    // XP Calculation: Base + (Correct * 10) + Level Multiplier + Speed Bonus
    const levelMultiplier = selectedLevelId === 'advance' ? 1.5 : selectedLevelId === 'intermediate' ? 1.2 : 1.0;
    let earnedXP = Math.round((correctCount * 15) * levelMultiplier);
    
    // Speed bonus: Under 3 minutes with >= 80% accuracy
    if (timeSpentSeconds <= 180 && accuracy >= 80) {
      earnedXP += 40;
    }

    if (accuracy === 100) {
      earnedXP += 50;
      setShowCelebration(true);
    } else if (accuracy >= 80) {
      setShowCelebration(true);
    }

    // Award badges
    const newUnlockedBadges = [...stats.unlockedBadges];
    if (correctCount === 10 && !newUnlockedBadges.includes('perfect_ace')) {
      newUnlockedBadges.push('perfect_ace');
    }
    if (timeSpentSeconds <= 180 && accuracy >= 80 && !newUnlockedBadges.includes('speed_demon')) {
      newUnlockedBadges.push('speed_demon');
    }
    if (correctCount >= 8 && !newUnlockedBadges.includes('silver_pro')) {
      newUnlockedBadges.push('silver_pro');
    }
    if (correctCount >= 6 && !newUnlockedBadges.includes('bronze_achiever')) {
      newUnlockedBadges.push('bronze_achiever');
    }

    // Update state & persistence
    setStats(prev => {
      const prevDomainStats = prev.domainHistory[selectedDomainId] || { bestScore: 0, attempts: 0 };
      return {
        ...prev,
        totalTests: prev.totalTests + 1,
        totalQuestionsAnswered: prev.totalQuestionsAnswered + activeQuestions.length,
        totalCorrect: prev.totalCorrect + correctCount,
        totalXP: prev.totalXP + earnedXP,
        unlockedBadges: newUnlockedBadges,
        domainHistory: {
          ...prev.domainHistory,
          [selectedDomainId]: {
            bestScore: Math.max(prevDomainStats.bestScore, correctCount),
            attempts: prevDomainStats.attempts + 1,
            lastScore: correctCount,
            lastLevel: selectedLevelId
          }
        }
      };
    });
  };

  // Result metrics
  const scoreResult = useMemo(() => {
    let correct = 0;
    let answered = 0;
    activeQuestions.forEach(q => {
      if (userAnswers[q.id] !== undefined) {
        answered += 1;
        if (userAnswers[q.id] === q.correctIndex) {
          correct += 1;
        }
      }
    });

    const total = activeQuestions.length;
    const accuracy = Math.round((correct / total) * 100);
    const durationSeconds = startTime && endTime ? Math.round((endTime - startTime) / 1000) : (timerPreset - timeRemaining);
    
    // Performance tier
    let tier = 'Foundational';
    let tierColor = 'text-amber-600 bg-amber-50 border-amber-200';
    let grade = 'C';
    if (correct === 10) {
      tier = 'Legendary Master';
      tierColor = 'text-purple-600 bg-purple-50 border-purple-200';
      grade = 'S';
    } else if (correct >= 8) {
      tier = 'Interview Ready';
      tierColor = 'text-emerald-600 bg-emerald-50 border-emerald-200';
      grade = 'A';
    } else if (correct >= 6) {
      tier = 'Competent';
      tierColor = 'text-blue-600 bg-blue-50 border-blue-200';
      grade = 'B';
    }

    return {
      correct,
      answered,
      unanswered: total - answered,
      total,
      accuracy,
      durationSeconds,
      tier,
      tierColor,
      grade
    };
  }, [activeQuestions, userAnswers, startTime, endTime, timerPreset, timeRemaining]);

  // Format time in mm:ss
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Ask Mentor about a specific question
  const handleAskMentorAboutQuestion = (q, userChoice) => {
    if (!onAskMentor) return;

    const userAnsText = userChoice !== undefined ? q.options[userChoice] : 'Not answered';
    const correctAnsText = q.options[q.correctIndex];

    const prompt = `I am preparing for technical interviews in **${activeDomain.name}** (${activeLevel.label} level). 
I encountered this question:
> **Question:** ${q.question}
> **My Answer:** ${userAnsText}
> **Correct Answer:** ${correctAnsText}

**Explanation Provided:**
${q.explanation}

Can you give me a deeper technical explanation, common interviewer follow-ups, and real-world production code examples for this concept?`;

    onAskMentor(prompt);
  };

  // Filtered list of questions for review mode
  const filteredReviewQuestions = useMemo(() => {
    return activeQuestions.filter((q) => {
      const isCorrect = userAnswers[q.id] === q.correctIndex;
      const isFlagged = flaggedQuestions.has(q.id);

      if (reviewFilter === 'incorrect') return !isCorrect;
      if (reviewFilter === 'correct') return isCorrect;
      if (reviewFilter === 'flagged') return isFlagged;
      return true;
    });
  }, [activeQuestions, userAnswers, flaggedQuestions, reviewFilter]);

  // =========================================================================
  // VIEW 1: DOMAIN & DIFFICULTY SELECTION SCREEN
  // =========================================================================
  if (viewState === 'select') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300">
        
        {/* Top Header & Overview */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200/80">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/90 text-blue-700 text-xs font-mono font-bold border border-blue-200">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" />
              <span>SKILLONIK Placement Assessment Engine</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Technical Interview <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Preparation</span>
            </h1>
            <p className="text-slate-600 text-sm md:text-base max-w-3xl leading-relaxed">
              Master technical interview rounds across 10 specialized software engineering domains. 
              Practice 10 high-yield multiple choice questions with realistic time limits, instant analytics, reward badges, and AI mentor deep-dives.
            </p>
          </div>

         
        </div>

        {/* Configuration Panel: Difficulty & Mode Settings */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/80 shadow-lg space-y-6">
          <div className="flex items-center gap-2 text-slate-900 font-display font-bold text-lg">
            <SlidersHorizontal className="w-5 h-5 text-blue-600" />
            <h2>Step 1: Choose Your Difficulty Level</h2>
          </div>

          {/* 3 Difficulty Level Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {DIFFICULTY_LEVELS.map((lvl) => {
              const isSelected = selectedLevelId === lvl.id;
              return (
                <button
                  key={lvl.id}
                  onClick={() => setSelectedLevelId(lvl.id)}
                  className={`
                    p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between group
                    ${isSelected
                      ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white border-transparent shadow-lg shadow-blue-500/25 scale-[1.02]'
                      : 'bg-white/70 hover:bg-white border-slate-200/90 text-slate-800 hover:border-blue-300 shadow-xs'
                    }
                  `}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                        isSelected ? 'bg-white/20 text-white' : lvl.badgeColor
                      }`}>
                        {lvl.label}
                      </span>
                      <span className={`text-xs font-mono font-semibold ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                        +{lvl.targetXP} XP
                      </span>
                    </div>
                    <h3 className={`font-display font-bold text-lg ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                      {lvl.label} Round
                    </h3>
                    <p className={`text-xs mt-1 leading-relaxed ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                      {lvl.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/20 text-xs font-mono">
                    <span className={isSelected ? 'text-blue-100' : 'text-slate-400'}>10 Questions</span>
                    <span className="font-bold">Standard 10 Mins</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Assessment Timer & Mode Config */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold text-slate-700 font-mono uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Round Timer:</span>
              </span>
              {[
                { label: '10 Mins (Standard)', val: 600 },
                { label: '5 Mins (Fast Pace)', val: 300 },
                { label: '15 Mins (Relaxed)', val: 900 },
                { label: 'Untimed Practice', val: 0 }
              ].map((t) => (
                <button
                  key={t.val}
                  onClick={() => setTimerPreset(t.val)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
                    timerPreset === t.val
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer select-none">
                <input 
                  type="checkbox"
                  checked={practiceMode}
                  onChange={(e) => setPracticeMode(e.target.checked)}
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                />
                <span>Practice Mode (Instant Feedback)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Step 2: Choose Technical Domain (10 Domain Cards) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-900 font-display font-bold text-lg">
              <Brain className="w-5 h-5 text-blue-600" />
              <h2>Step 2: Select Technical Domain (10 Domains)</h2>
            </div>
            <span className="text-xs font-mono text-slate-500">10 MCQ Questions per Category</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {DOMAINS.map((dom) => {
              const isSelected = selectedDomainId === dom.id;
              const history = stats.domainHistory[dom.id] || null;

              return (
                <div
                  key={dom.id}
                  onClick={() => setSelectedDomainId(dom.id)}
                  className={`
                    p-5 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden
                    ${isSelected
                      ? 'bg-white border-blue-500 ring-2 ring-blue-400/30 shadow-xl scale-[1.02]'
                      : 'bg-white/80 hover:bg-white border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md'
                    }
                  `}
                >
                  {/* Active highlight badge */}
                  {isSelected && (
                    <div className="absolute top-0 right-0 px-3 py-1 bg-blue-600 text-white rounded-bl-2xl text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1 shadow-xs">
                      <Check className="w-3 h-3" />
                      <span>Active</span>
                    </div>
                  )}

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-xs ${
                        isSelected 
                          ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white' 
                          : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors'
                      }`}>
                        <DomainIcon name={dom.icon} className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                          {dom.name}
                        </h3>
                        <p className="text-[10px] font-mono text-slate-400">
                          {history ? `Best: ${history.bestScore}/10` : '10 Questions'}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {dom.description}
                    </p>

                    {/* Topic Tags */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {dom.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-blue-600">
                      {selectedLevelId.toUpperCase()}
                    </span>
                    <div className={`p-1.5 rounded-xl transition-all ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600'
                    }`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Launcher Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700/60">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-bold border border-blue-400/30">
              <span>Ready for Launch</span>
            </div>
            <h3 className="font-display text-2xl font-bold">
              {activeDomain.name} ({activeLevel.label} Assessment)
            </h3>
            <p className="text-slate-300 text-xs md:text-sm max-w-xl leading-relaxed">
              You will face 10 multiple choice questions calibrated for {activeLevel.label} interview difficulty. 
              {timerPreset > 0 ? ` Timer is set to ${timerPreset / 60} minutes.` : ' Untimed Practice Mode.'} Complete the test to earn badges and XP.
            </p>
          </div>

          <button
            onClick={handleStartQuiz}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white font-display font-bold text-sm shadow-xl shadow-blue-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-3 shrink-0"
          >
            <Play className="w-5 h-5 fill-white" />
            <span>Start 10-Question Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Unlocked Badges Showcase */}
        {stats.unlockedBadges.length > 0 && (
          <div className="glass-card rounded-3xl p-6 border border-white/80 space-y-4">
            <div className="flex items-center gap-2 text-slate-900 font-display font-bold text-base">
              <Award className="w-5 h-5 text-amber-500" />
              <h3>Your Earned Achievement Badges</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {BADGE_REWARDS.map((b) => {
                const isUnlocked = stats.unlockedBadges.includes(b.id);
                return (
                  <div 
                    key={b.id}
                    className={`p-4 rounded-2xl border transition-all ${
                      isUnlocked 
                        ? 'bg-amber-50/80 border-amber-300/80 shadow-xs' 
                        : 'bg-slate-50/50 border-slate-200/60 opacity-40 grayscale'
                    }`}
                  >
                    <p className="font-display font-bold text-sm text-slate-900">{b.title}</p>
                    <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">{b.condition}</p>
                    <span className="inline-block mt-2 text-[10px] font-mono font-bold text-amber-700 bg-amber-100/90 px-2 py-0.5 rounded-full">
                      +{b.xpBonus} XP
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    );
  }

  // =========================================================================
  // VIEW 2: ACTIVE QUIZ ASSESSMENT SCREEN
  // =========================================================================
  if (viewState === 'quiz') {
    if (!currentQuestion) {
      return (
        <div className="p-12 text-center">
          <p>No questions found for this category.</p>
          <button onClick={() => setViewState('select')} className="btn-primary mt-4">Go Back</button>
        </div>
      );
    }

    const isCurrentFlagged = flaggedQuestions.has(currentQuestion.id);
    const selectedOption = userAnswers[currentQuestion.id];
    const isAnswered = selectedOption !== undefined;
    const answeredCount = Object.keys(userAnswers).length;
    const progressPercent = Math.round(((currentIndex + 1) / activeQuestions.length) * 100);

    const isUrgentTime = timerPreset > 0 && timeRemaining <= 60;

    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6 animate-in fade-in duration-200">
        
        {/* Top Assessment Header bar */}
        <div className="glass-card rounded-2xl p-4 border border-white/80 shadow-md flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (window.confirm('Quit assessment? Your current round progress will be lost.')) {
                  setViewState('select');
                }
              }}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Exit Assessment"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-sm text-slate-900">
                  {activeDomain.name}
                </span>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full uppercase ${activeLevel.badgeColor}`}>
                  {activeLevel.label}
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-400">
                Question {currentIndex + 1} of {activeQuestions.length} • {answeredCount} Answered
              </p>
            </div>
          </div>

          {/* Center / Right: Timer & Submit CTA */}
          <div className="flex items-center gap-3">
            {timerPreset > 0 && (
              <div className={`
                flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold border transition-all
                ${isUrgentTime 
                  ? 'bg-rose-50 border-rose-300 text-rose-600 animate-pulse' 
                  : 'bg-slate-100 border-slate-200 text-slate-700'
                }
              `}>
                <Clock className={`w-3.5 h-3.5 ${isUrgentTime ? 'text-rose-600' : 'text-blue-600'}`} />
                <span>{formatTime(timeRemaining)}</span>
                <button
                  onClick={() => setIsTimerPaused(!isTimerPaused)}
                  className="ml-1 text-slate-400 hover:text-slate-700 cursor-pointer"
                  title={isTimerPaused ? "Resume Timer" : "Pause Timer"}
                >
                  {isTimerPaused ? <Play className="w-3 h-3 text-emerald-600" /> : <Pause className="w-3 h-3" />}
                </button>
              </div>
            )}

            <button
              onClick={() => setShowSubmitModal(true)}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Submit Round</span>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-200/80 rounded-full h-2 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Main Quiz Body: Grid with Question Card + Question Navigator */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Question Card (Col 1-3) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/90 shadow-xl space-y-6 relative">
              
              {/* Question Header & Timer & Flag action */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-xl bg-blue-100 text-blue-700 font-mono font-bold text-xs flex items-center justify-center">
                    Q{currentIndex + 1}
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                    Topic: {currentQuestion.topic}
                  </span>
                </div>

                {/* Question Side / Header Action Items: Live Timer + Flag */}
                <div className="flex items-center gap-2.5">
                  {timerPreset > 0 && (
                    <div className={`
                      flex items-center gap-1.5 px-3 py-1 rounded-xl font-mono text-xs font-bold border transition-all shadow-xs
                      ${isUrgentTime 
                        ? 'bg-rose-50 border-rose-300 text-rose-600 animate-pulse' 
                        : 'bg-blue-50/90 border-blue-200 text-blue-700'
                      }
                    `}>
                      <Clock className={`w-3.5 h-3.5 ${isUrgentTime ? 'text-rose-600' : 'text-blue-600'}`} />
                      <span>{formatTime(timeRemaining)}</span>
                      <button
                        onClick={() => setIsTimerPaused(!isTimerPaused)}
                        className="text-slate-400 hover:text-slate-700 cursor-pointer ml-0.5"
                        title={isTimerPaused ? "Resume Timer" : "Pause Timer"}
                      >
                        {isTimerPaused ? <Play className="w-3 h-3 text-emerald-600" /> : <Pause className="w-3 h-3" />}
                      </button>
                    </div>
                  )}

                  <button
                    onClick={() => toggleFlagQuestion(currentQuestion.id)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono font-bold border transition-all cursor-pointer ${
                      isCurrentFlagged
                        ? 'bg-amber-100 text-amber-800 border-amber-300'
                        : 'bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100'
                    }`}
                    title="Flag question for review"
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isCurrentFlagged ? 'fill-amber-500 text-amber-600' : ''}`} />
                    <span>{isCurrentFlagged ? 'Flagged' : 'Flag'}</span>
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 leading-snug">
                {currentQuestion.question}
              </h2>

              {/* Code Snippet block if applicable */}
              {currentQuestion.codeSnippet && (
                <div className="p-4 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto border border-slate-800 shadow-inner">
                  <pre>{currentQuestion.codeSnippet}</pre>
                </div>
              )}

              {/* 4 MCQ Options */}
              <div className="space-y-3 pt-2">
                {currentQuestion.options.map((option, idx) => {
                  const isOptSelected = selectedOption === idx;
                  const optionLetters = ['A', 'B', 'C', 'D'];
                  
                  // Practice Mode Instant Feedback colors
                  let optionStyles = 'bg-white/90 hover:bg-blue-50/70 border-slate-200 text-slate-800';
                  if (isOptSelected) {
                    optionStyles = 'bg-blue-50 border-blue-500 text-blue-900 ring-2 ring-blue-400/30 shadow-xs font-semibold';
                  }

                  if (practiceMode && isAnswered) {
                    if (idx === currentQuestion.correctIndex) {
                      optionStyles = 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-400/30 font-semibold';
                    } else if (isOptSelected && idx !== currentQuestion.correctIndex) {
                      optionStyles = 'bg-rose-50 border-rose-500 text-rose-900 ring-2 ring-rose-400/30';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(currentQuestion.id, idx)}
                      className={`
                        w-full p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 group
                        ${optionStyles}
                      `}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <span className={`
                          w-7 h-7 rounded-xl font-mono text-xs font-bold flex items-center justify-center shrink-0 transition-colors
                          ${isOptSelected 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700'
                          }
                        `}>
                          {optionLetters[idx]}
                        </span>
                        <span className="text-xs sm:text-sm leading-relaxed">{option}</span>
                      </div>

                      {/* Icon indicator */}
                      <div className="shrink-0">
                        {isOptSelected ? (
                          <CheckCircle2 className="w-5 h-5 text-blue-600 fill-blue-100" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-slate-300 group-hover:border-blue-400" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Instant Explanation in Practice Mode */}
              {practiceMode && isAnswered && (
                <div className="p-4 rounded-2xl bg-blue-50/90 border border-blue-200 text-xs text-slate-700 space-y-2 animate-in fade-in">
                  <div className="flex items-center gap-2 font-bold text-blue-800 font-mono uppercase">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <span>Practice Insight &amp; Explanation</span>
                  </div>
                  <p className="leading-relaxed">{currentQuestion.explanation}</p>
                </div>
              )}

              {/* Bottom Card Navigation Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <button
                  onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                  disabled={currentIndex === 0}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>

                <div className="flex items-center gap-2">
                  {isAnswered && (
                    <button
                      onClick={() => {
                        const copy = { ...userAnswers };
                        delete copy[currentQuestion.id];
                        setUserAnswers(copy);
                      }}
                      className="text-xs text-slate-400 hover:text-rose-600 font-mono transition-colors cursor-pointer px-2"
                    >
                      Clear
                    </button>
                  )}

                  {currentIndex < activeQuestions.length - 1 ? (
                    <button
                      onClick={() => setCurrentIndex(prev => prev + 1)}
                      className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                    >
                      <span>Next</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowSubmitModal(true)}
                      className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Review &amp; Finish</span>
                    </button>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Right Question Navigator & Stats Drawer (Col 4) */}
          <div className="lg:col-span-1 space-y-4">
            
            {/* Prominent Live Side Timer Card */}
            {timerPreset > 0 && (
              <div className={`glass-card rounded-3xl p-5 border shadow-md space-y-3 transition-all ${
                isUrgentTime 
                  ? 'border-rose-300 bg-rose-50/90 ring-2 ring-rose-400/20' 
                  : 'border-white/90 bg-white/85'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <Clock className={`w-4 h-4 ${isUrgentTime ? 'text-rose-600 animate-spin' : 'text-blue-600'}`} />
                    <span>Time Remaining</span>
                  </span>
                  <button
                    onClick={() => setIsTimerPaused(!isTimerPaused)}
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                    title={isTimerPaused ? "Resume Timer" : "Pause Timer"}
                  >
                    {isTimerPaused ? <Play className="w-4 h-4 text-emerald-600" /> : <Pause className="w-4 h-4" />}
                  </button>
                </div>

                <div className="text-center py-0.5">
                  <p className={`font-mono font-extrabold text-3xl tracking-tight ${
                    isUrgentTime ? 'text-rose-600 animate-pulse' : 'text-slate-900'
                  }`}>
                    {formatTime(timeRemaining)}
                  </p>
                  <p className="text-[10px] font-mono text-slate-400 mt-0.5">
                    {isTimerPaused ? '⏸️ Timer Paused' : '60s per question pace'}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-200/80 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className={`h-1.5 rounded-full transition-all duration-1000 ${
                      isUrgentTime ? 'bg-rose-500' : 'bg-blue-600'
                    }`}
                    style={{ width: `${Math.max(0, Math.min(100, (timeRemaining / timerPreset) * 100))}%` }}
                  />
                </div>
              </div>
            )}

            <div className="glass-card rounded-3xl p-5 border border-white/80 shadow-md space-y-4">
              <h3 className="font-display font-bold text-sm text-slate-900 flex items-center justify-between">
                <span>Question Matrix</span>
                <span className="text-[10px] font-mono text-slate-400 font-normal">10 Questions</span>
              </h3>

              {/* 10 Question Grid Buttons */}
              <div className="grid grid-cols-5 gap-2">
                {activeQuestions.map((q, idx) => {
                  const ans = userAnswers[q.id];
                  const flagged = flaggedQuestions.has(q.id);
                  const isCurrent = idx === currentIndex;

                  let btnColor = 'bg-slate-100 text-slate-600 hover:bg-slate-200 border-slate-200';
                  if (ans !== undefined) {
                    btnColor = 'bg-blue-600 text-white border-blue-600 font-bold';
                  }
                  if (flagged) {
                    btnColor = 'bg-amber-500 text-white border-amber-500 font-bold';
                  }
                  if (isCurrent) {
                    btnColor += ' ring-2 ring-offset-2 ring-blue-500';
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-10 rounded-xl font-mono text-xs font-bold border transition-all cursor-pointer flex items-center justify-center relative ${btnColor}`}
                    >
                      <span>{idx + 1}</span>
                      {flagged && (
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border border-white" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Status Legend */}
              <div className="pt-3 border-t border-slate-100 space-y-1.5 text-[11px] font-mono text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-md bg-blue-600 shrink-0" />
                  <span>Answered ({answeredCount})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-md bg-amber-500 shrink-0" />
                  <span>Flagged ({flaggedQuestions.size})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-md bg-slate-200 shrink-0" />
                  <span>Unanswered ({activeQuestions.length - answeredCount})</span>
                </div>
              </div>

              {/* Keyboard Shortcuts Help */}
              <div className="pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-mono space-y-1">
                <p>💡 <b>Keys 1-4</b>: Select Options</p>
                <p>💡 <b>Arrows</b>: Prev / Next</p>
                <p>💡 <b>F</b>: Toggle Flag</p>
              </div>
            </div>
          </div>

        </div>

        {/* Submit Confirmation Modal */}
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 space-y-6 animate-in zoom-in-95">
              <div className="flex items-center gap-3 text-slate-900">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">Submit Assessment?</h3>
                  <p className="text-xs text-slate-500 font-mono">
                    {activeDomain.name} • {activeLevel.label} Level
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Total Questions:</span>
                  <span className="font-bold text-slate-800">{activeQuestions.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Answered:</span>
                  <span className="font-bold text-emerald-600">{answeredCount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Unanswered:</span>
                  <span className="font-bold text-rose-600">{activeQuestions.length - answeredCount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Flagged for review:</span>
                  <span className="font-bold text-amber-600">{flaggedQuestions.size}</span>
                </div>
              </div>

              {activeQuestions.length - answeredCount > 0 && (
                <p className="text-xs text-amber-600 font-medium flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>You have unanswered questions. Unanswered questions will be scored as 0 marks.</span>
                </p>
              )}

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-bold transition-all cursor-pointer"
                >
                  Continue Test
                </button>
                <button
                  onClick={handleSubmitAssessment}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/25 transition-all cursor-pointer"
                >
                  Confirm &amp; Calculate Score
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    );
  }

  // =========================================================================
  // VIEW 3: SCORE CALCULATION & REWARDS SCREEN
  // =========================================================================
  if (viewState === 'result') {
    const isPerfectScore = scoreResult.correct === 10;
    const isGoodScore = scoreResult.correct >= 8;

    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8 animate-in fade-in duration-300">
        
        {/* Celebration Banner Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/90 shadow-2xl text-center space-y-6 relative overflow-hidden">
          
          {/* Background Gradient Glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />

          {/* Trophy / Grade Badge Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className={`w-24 h-24 rounded-3xl flex items-center justify-center shadow-xl ${
                isPerfectScore 
                  ? 'bg-gradient-to-br from-amber-400 via-orange-500 to-yellow-500 text-white animate-bounce' 
                  : isGoodScore 
                    ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white' 
                    : 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white'
              }`}>
                {isPerfectScore ? <Trophy className="w-12 h-12" /> : <Award className="w-12 h-12" />}
              </div>
              <span className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white text-slate-900 font-display font-extrabold text-sm flex items-center justify-center shadow-md border border-slate-100">
                {scoreResult.grade}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            {showCelebration && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-mono text-xs font-bold shadow-xs animate-bounce">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>🎉 High-Score Achievement Unlocked! +Bonus XP</span>
              </div>
            )}
            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${scoreResult.tierColor}`}>
                {scoreResult.tier}
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
              Round Complete: {scoreResult.correct} / 10 Correct ({scoreResult.accuracy}%)
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
              Assessment completed for <b>{activeDomain.name}</b> ({activeLevel.label} Level) in {formatTime(scoreResult.durationSeconds)}.
            </p>
          </div>

          {/* Key Metrics 4-Box Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4">
            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
              <p className="text-[10px] font-mono font-bold uppercase text-slate-400">Total Marks</p>
              <p className="text-xl font-display font-extrabold text-slate-900 mt-0.5">
                {scoreResult.correct} <span className="text-xs text-slate-400 font-normal">/ 10</span>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
              <p className="text-[10px] font-mono font-bold uppercase text-slate-400">Accuracy</p>
              <p className="text-xl font-display font-extrabold text-emerald-600 mt-0.5">
                {scoreResult.accuracy}%
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
              <p className="text-[10px] font-mono font-bold uppercase text-slate-400">Time Taken</p>
              <p className="text-xl font-display font-extrabold text-slate-900 mt-0.5">
                {formatTime(scoreResult.durationSeconds)}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
              <p className="text-[10px] font-mono font-bold uppercase text-slate-400">XP Gained</p>
              <p className="text-xl font-display font-extrabold text-amber-600 mt-0.5">
                +{scoreResult.correct * 15} XP
              </p>
            </div>
          </div>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={() => {
                setReviewFilter('all');
                setViewState('review');
              }}
              className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <span>Review Detailed Answers &amp; Explanations</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleStartQuiz}
              className="px-5 py-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4 text-blue-600" />
              <span>Retake Assessment</span>
            </button>

            <button
              onClick={() => setViewState('select')}
              className="px-5 py-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4 text-purple-600" />
              <span>Choose Another Domain</span>
            </button>
          </div>

        </div>

      </div>
    );
  }

  // =========================================================================
  // VIEW 4: DETAILED QUESTION-BY-QUESTION REVIEW & EXPLANATION MODE
  // =========================================================================
  if (viewState === 'review') {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6 animate-in fade-in duration-300">
        
        {/* Top Header & Filter Controls */}
        <div className="glass-card rounded-2xl p-4 sm:p-6 border border-white/80 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewState('result')}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                title="Back to Result Summary"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <h1 className="font-display text-xl font-bold text-slate-900">
                Detailed Answers &amp; Explanations
              </h1>
            </div>
            <p className="text-xs text-slate-500 font-mono ml-7 mt-0.5">
              {activeDomain.name} • {activeLevel.label} Level • Score: {scoreResult.correct}/10
            </p>
          </div>

          {/* Review Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: `All (${activeQuestions.length})` },
              { id: 'incorrect', label: `Incorrect (${activeQuestions.length - scoreResult.correct})` },
              { id: 'correct', label: `Correct (${scoreResult.correct})` },
              { id: 'flagged', label: `Flagged (${flaggedQuestions.size})` }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setReviewFilter(f.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  reviewFilter === f.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Question Review List */}
        <div className="space-y-6">
          {filteredReviewQuestions.length === 0 ? (
            <div className="p-12 text-center glass-card rounded-3xl border border-white/80">
              <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
              <p className="font-display font-bold text-slate-800">No questions match this filter.</p>
            </div>
          ) : (
            filteredReviewQuestions.map((q, idx) => {
              const originalIndex = activeQuestions.findIndex(item => item.id === q.id);
              const userChoice = userAnswers[q.id];
              const isCorrect = userChoice === q.correctIndex;
              const isFlagged = flaggedQuestions.has(q.id);

              return (
                <div 
                  key={q.id}
                  className={`
                    p-6 sm:p-8 rounded-3xl border transition-all space-y-5 glass-card
                    ${isCorrect 
                      ? 'border-emerald-200/80 bg-white/90' 
                      : 'border-rose-200/80 bg-white/90'
                    }
                  `}
                >
                  {/* Question Header Status */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className={`w-7 h-7 rounded-xl font-mono font-bold text-xs flex items-center justify-center ${
                        isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        Q{originalIndex + 1}
                      </span>
                      
                      <span className="text-xs font-mono font-semibold text-slate-500 uppercase">
                        Topic: {q.topic}
                      </span>

                      {isFlagged && (
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                          Flagged
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {isCorrect ? (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Correct (+1 Mark)</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-mono font-bold">
                          <XCircle className="w-3.5 h-3.5" />
                          <span>Incorrect (0 Marks)</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Question Text */}
                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 leading-snug">
                    {q.question}
                  </h3>

                  {/* Code block if present */}
                  {q.codeSnippet && (
                    <div className="p-4 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto">
                      <pre>{q.codeSnippet}</pre>
                    </div>
                  )}

                  {/* Options List with Visual Feedback */}
                  <div className="space-y-2.5">
                    {q.options.map((opt, optIdx) => {
                      const isUserSelected = userChoice === optIdx;
                      const isCorrectAnswer = optIdx === q.correctIndex;
                      const optionLetters = ['A', 'B', 'C', 'D'];

                      let optCardStyle = 'bg-slate-50/70 border-slate-200 text-slate-700';
                      if (isCorrectAnswer) {
                        optCardStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold ring-1 ring-emerald-400/40';
                      } else if (isUserSelected && !isCorrectAnswer) {
                        optCardStyle = 'bg-rose-50 border-rose-400 text-rose-950 font-semibold line-through decoration-rose-400';
                      }

                      return (
                        <div
                          key={optIdx}
                          className={`p-3.5 rounded-2xl border text-xs sm:text-sm flex items-center justify-between gap-3 ${optCardStyle}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-6 h-6 rounded-lg font-mono text-xs font-bold flex items-center justify-center ${
                              isCorrectAnswer 
                                ? 'bg-emerald-600 text-white' 
                                : isUserSelected 
                                  ? 'bg-rose-600 text-white' 
                                  : 'bg-slate-200 text-slate-600'
                            }`}>
                              {optionLetters[optIdx]}
                            </span>
                            <span>{opt}</span>
                          </div>

                          <div className="shrink-0 font-mono text-[11px] font-bold">
                            {isCorrectAnswer && (
                              <span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                                Correct Answer
                              </span>
                            )}
                            {isUserSelected && !isCorrectAnswer && (
                              <span className="text-rose-700 bg-rose-100 px-2 py-0.5 rounded-md">
                                Your Choice
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Detailed Explanation Box */}
                  <div className="p-4 rounded-2xl bg-blue-50/90 border border-blue-200/80 text-xs text-slate-800 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-blue-900 font-mono font-bold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      <span>Technical Explanation:</span>
                    </div>
                    <p className="leading-relaxed text-slate-700">
                      {q.explanation}
                    </p>
                  </div>

                 

                </div>
              );
            })
          )}
        </div>

        {/* Bottom Floating Navigation */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-200">
          <button
            onClick={() => setViewState('result')}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Results</span>
          </button>

          <button
            onClick={() => setViewState('select')}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all cursor-pointer"
          >
            <span>Choose Another Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    );
  }

  return null;
}
