import React, { useState } from 'react';
import { Sparkles, Film, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Product } from '../types';
import { ProductDetailModal } from './ProductDetailModal';

interface ProductsProps {
  onStartProject: () => void;
}

export const Products: React.FC<ProductsProps> = ({ onStartProject }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="py-24 relative border-t border-white/[0.06] bg-[#090b10]">
      {/* Background glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left space-y-3">
          <div className="text-xs font-mono text-blue-400 tracking-wider uppercase font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>Product Development</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Products We're Building
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            From creator tools to creative applications, we build products around real-world problems.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {siteConfig.products.map((product) => {
            const isCreator = product.previewType === 'creator';
            return (
              <div
                key={product.id}
                className="group relative rounded-2xl border border-white/10 bg-[#0d1017]/80 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950/20"
              >
                {/* Top Section */}
                <div className="space-y-6">
                  {/* Category and Status - Zero-pill discipline: unboxed quiet metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs border-b border-white/5 pb-4">
                    <div className="flex items-center gap-2 text-slate-400 font-medium">
                      <span>{product.category}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-slate-400">Mobile Native</span>
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-amber-400 text-xs">
                      <span className="w-2 h-2 rounded-full bg-amber-400/80 animate-pulse" />
                      <span>{product.status}</span>
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-105 transition-transform">
                      {isCreator ? (
                        <Sparkles className="w-6 h-6 text-blue-400" />
                      ) : (
                        <Film className="w-6 h-6 text-cyan-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        {product.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Core Capabilities
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {product.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400/90 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Technologies & View Action */}
                <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {product.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/[0.03] border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {product.technologies.length > 3 && (
                      <span className="text-[11px] font-mono text-slate-400">
                        +{product.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] px-4 py-2 rounded-lg border border-white/10 hover:border-white/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    <span>View Product</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean Architecture Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 font-mono">
            New products and test builds are announced progressively as development stages advance.
          </p>
        </div>
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
