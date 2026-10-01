import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Smartphone, Code, Layers } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { TechVisual } from './TechVisual';

interface HeroProps {
  onStartProject: () => void;
  onExploreProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreProducts }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden tech-grid-pattern">
      {/* Background subtle light cones */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-violet-600/10 blur-[120px] pointer-events-none rounded-full" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Brand Logo & small domain kicker */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 p-[1.5px] shadow-lg shadow-blue-500/25 shrink-0">
                <div className="w-full h-full bg-[#090b12] rounded-[10px] flex items-center justify-center font-black text-sm sm:text-base text-white tracking-wider">
                  VA
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs font-bold text-white tracking-wide uppercase">
                  VA Developers
                </span>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono tracking-wider text-blue-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  <span>SOFTWARE</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>AI</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>MOBILE</span>
                </div>
              </div>
            </div>

            {/* Main Headline - Engineered 2-3 line composition on small Android phones with zero single-word wrapping */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.18] sm:leading-[1.12]">
              <span className="block">Building Digital Products</span>{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent inline-block">
                <span className="inline-block">That Move</span>{' '}
                <span className="inline-block">Ideas Forward.</span>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300/90 max-w-2xl leading-relaxed font-normal">
              {siteConfig.brand.heroDescription}
            </p>

            {/* Action Buttons - Compact & Professional */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreProducts}
                className="px-4.5 py-2.5 sm:px-5 sm:py-2.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.12] text-white font-semibold text-xs sm:text-sm border border-white/10 transition-all duration-200 flex items-center gap-2 hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Explore Our Products</span>
                <ArrowDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <button
                onClick={onStartProject}
                className="px-4.5 py-2.5 sm:px-5 sm:py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-blue-600/30 transition-all duration-200 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 group"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Trust-Style Line & Key Capabilities */}
            <div className="pt-6 border-t border-white/[0.08] space-y-3">
              <p className="text-xs font-medium text-slate-400 tracking-wide">
                {siteConfig.brand.trustLine}
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-blue-400" />
                  Native Android & Kotlin
                </span>
                <span className="text-slate-700">/</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-violet-400" />
                  Practical Generative AI
                </span>
                <span className="text-slate-700">/</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-400" />
                  Touch-First UI/UX
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Subtle Animated Technology Visual */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <TechVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
