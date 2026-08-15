import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Terminal, Layers, Lightbulb } from 'lucide-react';

export default function Hero({ 
  onExplore, 
  onLaunchMentor, 
  onBrowseProjects, 
  onExploreRoadmaps,
  onLogin,
  onNavigate 
}) {
  const handleExploreClick = () => {
    if (onLogin) {
      onLogin();
    } else if (onNavigate) {
      onNavigate("Login");
    } else if (onExplore) {
      onExplore();
    } else if (onLaunchMentor) {
      onLaunchMentor();
    }
  };

  const handleRoadmapsClick = () => {
    if (onExploreRoadmaps) {
      onExploreRoadmaps();
    } else if (onNavigate) {
      onNavigate("Roadmaps");
    } else if (onExplore) {
      onExplore();
    }
  };

  const handleProjectsClick = () => {
    if (onBrowseProjects) {
      onBrowseProjects();
    } else if (onNavigate) {
      onNavigate("Projects");
    }
  };

  return (
    <section className="hero">
      <div className="container">
        
        {/* Eyebrow Pill */}
        <div className="hero-pill">
          <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" />
          <span>Skillonik AI  &amp; Placement Platform</span>
        </div>

        {/* Main Headline */}
        <h1>
          Supercharge Your <span className="accent">Skillonik Career</span> with AI
        </h1>

        {/* Subtitle */}
        <p>
          Bridging the gap between students and top-tier IT companies with
          data-driven learning roadmaps, production architecture blueprints, and real-time AI code mentorship.
        </p>

        {/* Action Buttons */}
        <div className="hero-cta-group">
          <button 
            className="btn-explore" 
            onClick={handleExploreClick}
          >
            <Sparkles className="w-5 h-5" />
            <span>Explore</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <button 
            className="btn-secondary"
            onClick={handleRoadmapsClick}
          >
            <Layers className="w-4 h-4" />
            <span>Explore Roadmaps</span>
          </button>

          

          {onBrowseProjects && (
            <button 
              className="btn-secondary"
              onClick={handleProjectsClick}
            >
              <Lightbulb className="w-4 h-4" />
              <span>Project Blueprints</span>
            </button>
          )}
        </div>

        {/* Interactive Live Demo Preview Showcase */}
        <div className="max-w-4xl mx-auto mb-16 text-left">
          <div className="glass-panel rounded-3xl p-5 md:p-6 border border-white/90 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="font-mono text-xs text-slate-500 ml-2 font-semibold flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-blue-600" />
                  skillonik-ai-engine ~ live preview
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Skillonik Engine
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200/60">
                  <span className="text-[10px] font-mono font-bold text-blue-700 uppercase">Student Prompt:</span>
                  <p className="text-xs text-slate-800 font-medium mt-1">
                    "How do I structure a production MERN auth controller with JWT and error middleware?"
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/90 border border-white/90 shadow-sm space-y-2">
                  <span className="text-[10px] font-mono font-bold text-indigo-700 uppercase flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> SKILLONIK AI Mentor:
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Follow the clean 3-tier architecture with stateless JWT tokens, bcrypt hash rounds of 10, and central Express error middleware.
                  </p>
                </div>
              </div>

              <div className="bg-[#0F172A] rounded-xl p-3.5 font-mono text-[11px] text-slate-200 border border-slate-700 shadow-inner overflow-x-auto custom-scrollbar">
                <div className="text-slate-400 text-[10px] mb-1.5">// controllers/auth.js</div>
                <span className="text-purple-400">const</span> jwt = <span className="text-amber-300">require</span>(<span className="text-emerald-300">'jsonwebtoken'</span>);<br/>
                <span className="text-purple-400">exports</span>.login = <span className="text-purple-400">async</span> (req, res) =&gt; &#123;<br/>
                &nbsp;&nbsp;<span className="text-purple-400">const</span> &#123; email, password &#125; = req.body;<br/>
                &nbsp;&nbsp;<span className="text-purple-400">const</span> token = jwt.sign(&#123; id: user._id &#125;, process.env.JWT_SECRET, &#123; expiresIn: <span className="text-emerald-300">'7d'</span> &#125;);<br/>
                &nbsp;&nbsp;res.status(200).json(&#123; success: <span className="text-amber-400">true</span>, token &#125;);<br/>
                &#125;;
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="hero-stats-grid">
          <div className="hero-stat-card">
            <div className="hero-stat-num">50+</div>
            <div className="hero-stat-label">Learning Tracks</div>
          </div>
          <div className="hero-stat-card">
            <div className="hero-stat-num">100%</div>
            <div className="hero-stat-label">Real Hiring Data</div>
          </div>
          <div className="hero-stat-card">
            <div className="hero-stat-num">10k+</div>
            <div className="hero-stat-label">Interview Solutions</div>
          </div>
          <div className="hero-stat-card">
            <div className="hero-stat-num">&lt; 1.2s</div>
            <div className="hero-stat-label">Instant AI Response</div>
          </div>
        </div>

      </div>
    </section>
  );
}
