import React from 'react';
import { Eye, Flag, ShieldCheck, Check, Terminal, Smartphone, Sparkles, Layers } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative border-t border-white/[0.06] bg-[#08090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid: Left Story, Right Vision/Mission Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Brand Story */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="text-xs font-mono text-violet-400 tracking-wider uppercase font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <span>Independent Technology Brand</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              About VA Developers
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal">
              VA Developers is an independent technology and software development brand focused on building useful mobile applications, AI-powered products, and digital software. We believe good software should solve real problems while remaining simple, fast, and dependable to use.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Primary Brand Focus
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  <span>Android & Mobile Applications</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                  <span>AI-Powered Products & Workflows</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span>Creator Tools & Creative Software</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>UI/UX & Touch-First Design</span>
                </div>
              </div>
            </div>

            {/* Studio Ethos Note */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1 text-xs text-slate-400 leading-relaxed">
              <div className="text-slate-200 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Truthful & Independent
              </div>
              <p>
                VA Developers operates purely as an independent software studio. We do not make false claims of enterprise incorporation, inflated employee counts, or fabricated client rosters. We focus entirely on code quality, user experience, and genuine software products.
              </p>
            </div>
          </div>

          {/* Right Column: Vision & Mission Cards */}
          <div className="lg:col-span-6 space-y-6">
            {/* Vision Card */}
            <div className="p-8 rounded-2xl border border-white/10 bg-[#0d1017]/80 space-y-4 hover:border-white/20 transition-all">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Eye className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                  Direction
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">Our Vision</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                "{siteConfig.brand.vision}"
              </p>
            </div>

            {/* Mission Card */}
            <div className="p-8 rounded-2xl border border-white/10 bg-[#0d1017]/80 space-y-4 hover:border-white/20 transition-all">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                  <Flag className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                  Purpose
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">Our Mission</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                "{siteConfig.brand.mission}"
              </p>
            </div>

            {/* Location & Studio Details */}
            <div className="p-5 rounded-2xl border border-white/5 bg-black/30 flex items-center justify-between text-xs text-slate-400 font-mono">
              <div>
                <span className="text-slate-400">Base Location: </span>
                <span className="text-slate-200 font-semibold">{siteConfig.contact.location}</span>
              </div>
              <div>
                <span className="text-slate-400">Status: </span>
                <span className="text-emerald-400 font-semibold">Active Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
