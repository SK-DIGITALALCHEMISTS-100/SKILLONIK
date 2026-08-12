import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const CONTENT = {
  Roadmaps: {
    heading: "Curated Learning Roadmaps",
    badge: "50+ TRACKS",
    intro: "Step-by-step learning paths engineered from hiring requirements of top IT enterprises and high-growth startups.",
    items: [
      {
        title: "Full Stack MERN & Next.js Development",
        duration: "8 Months (Part-Time)",
        level: "Intermediate to Advanced",
        tech: ["React 19", "Node.js", "Express", "MongoDB Atlas", "Tailwind CSS", "JWT"],
        text: "HTML5, modern ES6+, React component lifecycle, Express REST APIs, Mongoose aggregations, Docker containerization, and cloud deployment on Vercel/AWS.",
        prompt: "Provide a detailed week-by-week study plan for mastering Full Stack MERN Development from scratch."
      },
      {
        title: "Data Science, AI & Machine Learning",
        duration: "10 Months (Part-Time)",
        level: "Advanced",
        tech: ["Python 3.12", "NumPy", "Pandas", "Scikit-Learn", "PyTorch", "LangChain"],
        text: "Statistical foundations, exploratory data analysis, neural networks, LLM fine-tuning, RAG vector pipelines, and production API deployment with FastAPI.",
        prompt: "Create a 10-month roadmap for AI & Machine Learning engineering including vector databases and PyTorch."
      },
      {
        title: "Cloud Infrastructure & DevOps Mastery",
        duration: "9 Months (Part-Time)",
        level: "Intermediate",
        tech: ["Linux", "Docker", "Kubernetes", "AWS / Azure", "Terraform", "GitHub Actions"],
        text: "Linux system internals, container orchestration with Kubernetes, CI/CD automated test pipelines, infrastructure as code with Terraform, and Prometheus monitoring.",
        prompt: "Give me the step-by-step guide to become a Cloud DevOps engineer with hands-on project ideas."
      },
      {
        title: "DSA & Campus Placement Accelerator",
        duration: "12 Weeks (Intensive)",
        level: "Placement Ready",
        tech: ["C++ / Java", "Dynamic Programming", "Graphs", "Trees", "System Design"],
        text: "Master top 150 LeetCode patterns, Floyd cycle detection, binary search variations, LRU cache implementation, and TCS / Infosys / Amazon interview strategies.",
        prompt: "What is the 12-week DSA study roadmap for cracking product company placement tests?"
      }
    ],
  },
  "Knowledge Base": {
    heading: "Engineering Knowledge Base",
    badge: "INSIDE REAL IT",
    intro: "Understand how real IT enterprises build, test, and ship mission-critical software from requirement brief to global release.",
    items: [
      {
        title: "How a Project Moves Through an IT Company",
        duration: "SDLC Overview",
        level: "Core Architecture",
        tech: ["Agile Scrum", "Jira Sprints", "PR Review", "CI/CD Gates", "Production Canary"],
        text: "Learn the exact lifecycle: Requirement gathering -> UI/UX wireframing -> Sprint planning -> Development -> QA automated test suites -> Staging verification -> Canary rollout.",
        prompt: "Explain how a modern Agile software team conducts sprint planning, code reviews, and releases."
      },
      {
        title: "Enterprise Roles & Responsibilities Matrix",
        duration: "Organization Structure",
        level: "Career Clarity",
        tech: ["Tech Lead", "Full Stack Dev", "QA Automation", "DevOps SRE", "Product Manager"],
        text: "Understand what each role actually does every day: Delivery managers, Scrum masters, Backend engineers, Frontend developers, QA testers, and Cloud architects.",
        prompt: "What are the daily tasks, expectations, and KPIs of a Junior vs Senior Software Engineer in IT?"
      },
      {
        title: "Modern Engineering Tools of the Trade",
        duration: "Tooling Ecosystem",
        level: "Industry Standard",
        tech: ["Git / GitHub", "Docker", "Redis", "Kafka", "Postman", "Datadog"],
        text: "Deep-dive into industry tools: Distributed Git branches (GitFlow), Postman API collections, Redis caching layers, Kafka message brokers, and Datadog APM tracing.",
        prompt: "Explain how Redis caching and Kafka message queues are used together in microservice architectures."
      }
    ],
  },
};

export default function SimplePage({ page, onSelectPrompt }) {
  const data = CONTENT[page] || CONTENT["Roadmaps"];
  if (!data) return null;

  return (
    <section className="page">
      <div className="container">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 font-mono text-[10px] font-bold">
                {data.badge}
              </span>
              <span className="text-xs font-mono font-semibold text-slate-500">
                SKILLONIK Verified Knowledge
              </span>
            </div>
            <h2>{data.heading}</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl mt-1">
              {data.intro}
            </p>
          </div>
        </div>

        {/* Structured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.items.map((item) => (
            <div key={item.title} className="glass-card rounded-3xl p-6 flex flex-col justify-between gap-4 border border-white/90">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                    {item.duration}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 font-semibold">
                    {item.level}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  {item.text}
                </p>

                {item.tech && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.tech.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 bg-slate-100/80 text-slate-700 rounded-md font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
