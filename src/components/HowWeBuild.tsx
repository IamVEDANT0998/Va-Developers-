import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Search, Compass, Palette, Code, CheckCircle, Rocket } from 'lucide-react';

export const HowWeBuild: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-5 h-5 text-blue-400" />;
      case 1:
        return <Compass className="w-5 h-5 text-violet-400" />;
      case 2:
        return <Palette className="w-5 h-5 text-cyan-400" />;
      case 3:
        return <Code className="w-5 h-5 text-emerald-400" />;
      case 4:
        return <CheckCircle className="w-5 h-5 text-amber-400" />;
      case 5:
        return <Rocket className="w-5 h-5 text-indigo-400" />;
      default:
        return <Code className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section className="py-24 relative border-t border-white/[0.06] bg-[#08090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left space-y-3">
          <div className="text-xs font-mono text-emerald-400 tracking-wider uppercase font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Development Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How We Build
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            A structured, disciplined engineering workflow from initial concept discovery to continuous post-launch iteration.
          </p>

          {/* Linear process flow representation: Discover → Plan → Design → Build → Test → Launch */}
          <div className="pt-4 flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-mono text-slate-400">
            {['Discover', 'Plan', 'Design', 'Build', 'Test', 'Launch'].map((stage, idx, arr) => (
              <React.Fragment key={stage}>
                <span className="text-slate-200 font-medium">{stage}</span>
                {idx < arr.length - 1 && (
                  <span className="text-emerald-400 font-bold">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 relative">
          {siteConfig.process.map((step, idx) => (
            <div
              key={step.step}
              className="relative p-5 sm:p-7 rounded-2xl border border-white/10 bg-[#0d1017]/80 hover:bg-[#111520] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Step Number and Icon */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getStepIcon(idx)}
                  </div>
                  <span className="font-mono text-2xl font-bold text-slate-400 group-hover:text-blue-400 transition-colors">
                    {step.step}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables list */}
                <div className="pt-2 space-y-1.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Key Outcomes
                  </div>
                  {step.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1 h-1 rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step indicator */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Phase {step.step} of 06</span>
                <span className="text-slate-400">VA Workflow</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
