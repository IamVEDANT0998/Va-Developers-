import React, { useState } from 'react';
import { Sparkles, Film, ArrowRight, Smartphone, ExternalLink, Code2, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Product } from '../types';
import { ProductDetailModal } from './ProductDetailModal';

interface PortfolioProps {
  onStartProject: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onStartProject }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Apps' | 'AI' | 'Software' | 'Web'>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filters: ('All' | 'Apps' | 'AI' | 'Software' | 'Web')[] = ['All', 'Apps', 'AI', 'Software', 'Web'];

  const filteredProjects =
    activeFilter === 'All'
      ? siteConfig.portfolioProjects
      : siteConfig.portfolioProjects.filter((p) => p.category === activeFilter);

  const handleOpenProduct = (productId?: string) => {
    if (!productId) return;
    const found = siteConfig.products.find((p) => p.id === productId);
    if (found) {
      setSelectedProduct(found);
    }
  };

  return (
    <section id="portfolio" className="py-24 relative border-t border-white/[0.06] bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 text-left">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Studio Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Selected Work
            </h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
              Active products and engineering initiatives currently under development at VA Developers.
            </p>
          </div>

          {/* Interactive Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/10 self-start lg:self-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                  activeFilter === filter
                    ? 'bg-blue-600/30 text-white border border-blue-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => {
              const isCreator = project.productId === 'creator-studio';
              return (
                <div
                  key={project.id}
                  className="rounded-2xl border border-white/10 bg-[#0d1017]/80 overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Visual Preview / Header Graphic */}
                  <div className="relative h-48 sm:h-56 bg-gradient-to-br from-[#0c0f17] to-[#141a27] border-b border-white/5 p-6 flex flex-col justify-between overflow-hidden">
                    {/* Ambient glow inside card */}
                    <div 
                      aria-hidden="true" 
                      className={`absolute -right-8 -bottom-8 w-48 h-48 ${
                        isCreator ? 'bg-blue-600/10' : 'bg-cyan-600/10'
                      } rounded-full blur-2xl pointer-events-none`} 
                    />

                    {/* Metadata Header */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                        <span>{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>Product #{project.id.replace('proj-', '')}</span>
                      </div>

                      {/* Status label: truthful In Development */}
                      <span className="text-[11px] font-mono text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
                        {project.status}
                      </span>
                    </div>

                    {/* Centered Graphic Abstract Representation */}
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white">
                        {isCreator ? (
                          <Sparkles className="w-6 h-6 text-blue-400" />
                        ) : (
                          <Film className="w-6 h-6 text-cyan-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-xs text-slate-400 font-mono">
                          Mobile Architecture · {project.technologies[0]}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {project.shortDescription}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2">
                        <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                          Highlights
                        </div>
                        <div className="space-y-1.5">
                          {project.highlights.map((h, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer / Tech stack & View Action */}
                    <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/[0.03] border border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => handleOpenProduct(project.productId)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 px-3.5 py-2 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                      >
                        <span>View Project Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl border border-white/5 bg-[#0d1017]/40 space-y-3">
            <p className="text-slate-300 font-medium">No projects in this specific category yet.</p>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Our active focus is currently on our flagship Mobile and AI products. Additional Web and Software projects will be listed here as builds progress.
            </p>
            <button
              onClick={() => setActiveFilter('All')}
              className="mt-3 text-xs text-blue-400 hover:underline"
            >
              Show All Projects
            </button>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onStartProject={onStartProject}
      />
    </section>
  );
};
