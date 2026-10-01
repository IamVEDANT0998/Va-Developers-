import React, { useState } from 'react';
import { Newspaper, ArrowRight, Calendar, Sparkles, ChevronDown } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Updates: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="py-24 relative border-t border-white/[0.06] bg-[#090b10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left space-y-3">
          <div className="text-xs font-mono text-blue-400 tracking-wider uppercase font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>Studio Journal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Updates & Engineering Notes
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            Direct observations, technical decisions, and milestone updates as we build our software.
          </p>
        </div>

        {/* Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.updates.map((update) => {
            const isExpanded = expandedId === update.id;
            return (
              <div
                key={update.id}
                className="rounded-2xl border border-white/10 bg-[#0d1017]/80 p-6 sm:p-8 space-y-4 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono border-b border-white/5 pb-3">
                    <span className="text-blue-400 font-medium">{update.category}</span>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {update.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white hover:text-blue-300 transition-colors">
                    {update.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {update.summary}
                  </p>

                  {isExpanded && (
                    <div className="pt-3 text-xs text-slate-400 leading-relaxed border-t border-white/5 animate-fadeIn">
                      {update.content}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : update.id)}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                  >
                    <span>{isExpanded ? 'Show Less' : 'Read Note'}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <span className="text-[11px] font-mono text-slate-400">VA Dispatch</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
