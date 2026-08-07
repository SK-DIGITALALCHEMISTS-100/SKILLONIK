import React from 'react';
import { Compass, Clock, Building2, Bug, CheckCircle2 } from 'lucide-react';

const PROBLEMS = [
  {
    id: 1,
    color: "#2563eb",
    icon: Compass,
    title: "Which tech stack to learns?",
    problem: "Engineering students are overwhelmed by countless frameworks and don't know which tech path matches hiring demand.",
    solution: "Personalized roadmaps with weekly milestones mapped directly to real hiring trends."
  },
  {
    id: 2,
    color: "#7c3aed",
    icon: Clock,
    title: "What does it really cost & take?",
    problem: "No realistic sense of actual time, prerequisite concepts, or project scope required to become job-ready.",
    solution: "Clear timelines (e.g. 8-12 weeks) with difficulty ratings and step-by-step progress tracking."
  },
  {
    id: 3,
    color: "#0284c7",
    icon: Building2,
    title: "How do real IT companies work?",
    problem: "Students lack exposure to corporate engineering workflows, Agile sprints, code reviews, and CI/CD pipelines.",
    solution: "Production architectural blueprints and deep knowledge base articles on software lifecycles."
  },
  {
    id: 4,
    color: "#10b981",
    icon: Bug,
    title: "Debugging & Interview blockades?",
    problem: "Stuck on MongoDB timeouts, CORS headers, or tricky DSA questions during campus placements.",
    solution: "Instant AI Mentor solutions with code snippets, root-cause analysis, and verified explanations."
  }
];

export default function ProblemSection({ onSelectPrompt }) {
  return (
    <section className="section">
      <div className="container">
        
        {/* Section Header */}
        <h2 className="section-title">
          <span className="title-badge">?</span>
          The Problems We're Solving
        </h2>
        <p className="section-subtitle">
          Real, widespread engineering challenges faced by students — solved with data-driven AI guidance.
        </p>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {PROBLEMS.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.id}
                className="card group cursor-pointer"
                style={{ "--accent": item.color }}
                onClick={() => onSelectPrompt && onSelectPrompt(`How does SKILLONIK help solve: "${item.title}"?`)}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="card-number">
                      <Icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      PAIN POINT 0{item.id}
                    </span>
                  </div>

                  <h3>{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    {item.problem}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 bg-slate-50/50 rounded-xl p-3 mt-auto">
                  <div className="flex items-start gap-1.5 text-[11px] font-medium text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item.solution}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
