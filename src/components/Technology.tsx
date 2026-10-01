import React, { useState } from 'react';
import { Smartphone, Sparkles, Globe, Server, Wrench, Check } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Technology: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Mobile', 'AI', 'Web', 'Backend', 'Tools'];

  const filteredCategories =
    selectedCategory === 'All'
      ? siteConfig.technologyGrid
      : siteConfig.technologyGrid.filter((c) => c.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Mobile':
        return <Smartphone className="w-4 h-4 text-blue-400" />;
      case 'AI':
        return <Sparkles className="w-4 h-4 text-violet-400" />;
      case 'Web':
        return <Globe className="w-4 h-4 text-cyan-400" />;
      case 'Backend':
        return <Server className="w-4 h-4 text-emerald-400" />;
      case 'Tools':
        return <Wrench className="w-4 h-4 text-amber-400" />;
      default:
        return <Smartphone className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="technology" className="py-24 relative border-t border-white/[0.06] bg-[#090b10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 text-left">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono text-blue-400 tracking-wider uppercase font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Technical Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Technology We Work With
            </h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
              We select modern, reliable tools based on actual project requirements and performance standards.
            </p>
          </div>

          {/* Interactive Filter Tabs (Zero-pill discipline: segmented control buttons with click handlers) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/10 self-start lg:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                  selectedCategory === cat
                    ? 'bg-blue-600/30 text-white border border-blue-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catGroup) => (
            <div
              key={catGroup.category}
              className="rounded-2xl border border-white/10 bg-[#0d1017]/80 p-6 space-y-6 hover:border-white/20 transition-all"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2 font-bold text-white text-base">
                  {getCategoryIcon(catGroup.category)}
                  <span>{catGroup.category}</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  {catGroup.items.length} technologies
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {catGroup.description}
              </p>

              {/* Items List */}
              <div className="space-y-2.5">
                {catGroup.items.map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between group hover:bg-white/[0.04] transition-colors"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-200 group-hover:text-white">
                        {tech.name}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {tech.focus}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      In Use
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Note */}
        <div className="mt-12 text-center text-xs text-slate-400 font-mono">
          Stack choices evolve with modern platform updates and real production testing.
        </div>
      </div>
    </section>
  );
};
