import React from 'react';
import { ArrowUpRight, ArrowDown, Sparkles } from 'lucide-react';

interface ProjectCTAProps {
  onStartProject: () => void;
  onExploreProducts: () => void;
}

export const ProjectCTA: React.FC<ProjectCTAProps> = ({
  onStartProject,
  onExploreProducts,
}) => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#090b10] border-t border-white/[0.06]">
      {/* Subtle background ambient gradients */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-violet-600/10 blur-[130px] rounded-full pointer-events-none" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0e121d] to-[#090b12] p-8 sm:p-14 text-center space-y-8 shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 tracking-wider uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>Collaboration & Inquiries</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-tight">
            Have an Idea?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Let's turn your idea into something people can use.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onStartProject}
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-sm shadow-xl shadow-blue-600/30 transition-all duration-200 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={onExploreProducts}
              className="px-6 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white font-semibold text-sm border border-white/10 transition-all duration-200 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span>View Our Products</span>
              <ArrowDown className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          <div className="pt-6 border-t border-white/5 text-xs text-slate-400 font-mono">
            Crafted with clean code · Native mobile performance · Real-world utility
          </div>
        </div>
      </div>
    </section>
  );
};
