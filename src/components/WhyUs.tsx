import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Compass, Users, Sparkles, Target } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Compass className="w-5 h-5 text-blue-400" />;
      case 1:
        return <Users className="w-5 h-5 text-violet-400" />;
      case 2:
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      case 3:
        return <Target className="w-5 h-5 text-amber-400" />;
      default:
        return <Compass className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section className="py-24 relative border-t border-white/[0.06] bg-[#08090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left space-y-3">
          <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Studio Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Built With Purpose
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            Four guiding principles that shape how we think, build, and ship technology products.
          </p>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.principles.map((principle, idx) => (
            <div
              key={principle.number}
              className="relative p-8 rounded-2xl border border-white/10 bg-[#0d1017]/70 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getIcon(idx)}
                </div>
                <span className="font-mono text-2xl font-bold text-slate-400 group-hover:text-blue-400 transition-colors">
                  {principle.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                {principle.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
