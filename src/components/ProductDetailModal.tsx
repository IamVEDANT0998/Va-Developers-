import React, { useState } from 'react';
import { X, Sparkles, Film, CheckCircle2, ArrowRight, Layers, HelpCircle, Smartphone, Cpu, ShieldCheck } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onStartProject: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onStartProject,
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  if (!product) return null;

  const isCreator = product.previewType === 'creator';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn"
    >
      <div className="relative w-full max-w-4xl bg-[#0d1017] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Sticky Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#090b10]/80 backdrop-blur sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              {isCreator ? <Sparkles className="w-5 h-5" /> : <Film className="w-5 h-5" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="product-modal-title" className="text-base font-bold text-white">
                  {product.name}
                </h2>
                <span className="text-[11px] font-mono text-amber-400/90 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                  {product.status}
                </span>
              </div>
              <div className="text-xs text-slate-400 font-medium">{product.category}</div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Hero Section of Product */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400">
              {product.targetAudience}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {product.tagline}
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {product.longDescription}
            </p>
          </div>

          {/* Interactive Mockup / Product Screen Preview */}
          <div className="rounded-xl border border-white/10 bg-[#08090e] p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400 border-b border-white/5 pb-3">
              <span className="font-mono text-slate-300 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-blue-400" />
                {product.name} Interface Architecture
              </span>
              <span className="text-[11px] font-mono text-slate-400">Android Native</span>
            </div>

            {isCreator ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 space-y-3">
                  <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                    AI Ideation Pipeline
                  </div>
                  <div className="text-slate-400 text-xs leading-relaxed">
                    Analyzes current video topic trends and formulates clear, high-retention title variations and description segments.
                  </div>
                  <div className="font-mono text-[11px] text-blue-300 bg-blue-950/30 p-2 rounded border border-blue-800/30">
                    Prompt Strategy: Contextual YouTube Hook Analysis
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 space-y-3">
                  <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-blue-400" />
                    Pre-Production Organizer
                  </div>
                  <div className="text-slate-400 text-xs leading-relaxed">
                    Organizes talking points, chapter timestamps, sponsor disclosures, and thumbnail framing notes in one workspace.
                  </div>
                  <div className="font-mono text-[11px] text-emerald-300 bg-emerald-950/30 p-2 rounded border border-emerald-800/30">
                    Status: Jetpack Compose Component Tested
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 space-y-3">
                  <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                    <Film className="w-3.5 h-3.5 text-cyan-400" />
                    Fluid Touch-Scrub Timeline
                  </div>
                  <div className="text-slate-400 text-xs leading-relaxed">
                    Smooth frame-accurate scrubbing with adaptive zoom and haptic boundaries for swift cut points.
                  </div>
                  <div className="font-mono text-[11px] text-cyan-300 bg-cyan-950/30 p-2 rounded border border-cyan-800/30">
                    Engine: Media3 & Android Hardware Codec
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 space-y-3">
                  <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-violet-400" />
                    Zero-Cloud Local Rendering
                  </div>
                  <div className="text-slate-400 text-xs leading-relaxed">
                    All video processing executes entirely on-device, ensuring zero server upload delays and complete privacy.
                  </div>
                  <div className="font-mono text-[11px] text-violet-300 bg-violet-950/30 p-2 rounded border border-violet-800/30">
                    Export: 1080p / 4K 60fps Native Pipeline
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Key Features Breakdown */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Features & Architecture</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.detailedFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors space-y-1.5"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 pl-6 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Grid */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 text-xs font-mono rounded-lg bg-white/[0.04] text-slate-300 border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Product Specific FAQ */}
          {product.faq && product.faq.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-slate-400" />
                Frequently Asked Questions
              </h4>
              <div className="space-y-2">
                {product.faq.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-white/5 bg-white/[0.02] overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full px-4 py-3 text-left text-sm font-medium text-slate-200 flex items-center justify-between hover:bg-white/[0.02]"
                    >
                      <span>{item.question}</span>
                      <span className="text-slate-400 font-mono text-xs">
                        {activeFaq === idx ? '−' : '+'}
                      </span>
                    </button>
                    {activeFaq === idx && (
                      <div className="px-4 pb-3 text-xs text-slate-400 leading-relaxed border-t border-white/5 pt-2">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Action Card */}
          <div className="p-6 rounded-xl bg-gradient-to-r from-blue-950/30 to-violet-950/30 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-sm font-bold text-white">Interested in {product.name}?</div>
              <div className="text-xs text-slate-400">
                Contact us for early access milestones or collaboration inquiries.
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                onStartProject();
              }}
              className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shrink-0 shadow-md shadow-blue-600/30 transition-all"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
