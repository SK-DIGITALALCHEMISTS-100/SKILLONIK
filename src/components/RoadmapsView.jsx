import React from 'react';
import { Map, Compass } from 'lucide-react';

export default function RoadmapsView({ onSelectTopicPrompt }) {
  return (
    <div className="flex-1 w-full flex flex-col relative px-4 md:px-8 py-8 h-full overflow-y-auto custom-scrollbar pb-36">
      <div className="max-w-[1000px] mx-auto w-full flex flex-col gap-6">

        {/* View Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-bold uppercase tracking-wider mb-1.5">
              <Map className="w-4 h-4" />
              <span>Learning Roadmaps</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Learning Roadmaps
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Curated milestone tracks, skill progressions, and personalized career roadmaps.
            </p>
          </div>
        </div>

        {/* Empty Page State Canvas */}
        <div className="glass-panel rounded-3xl p-12 md:p-20 border border-white/80 shadow-xl flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/60 flex items-center justify-center text-blue-600 mb-5 shadow-inner">
            <Compass className="w-10 h-10 stroke-[1.5]" />
          </div>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            No Roadmaps Available
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-md leading-relaxed">
            There are currently no active learning roadmaps to display. New career roadmaps and milestones will appear here once updated.
          </p>
        </div>

      </div>
    </div>
  );
}
