import React from 'react';
import { Smartphone, Bot, Terminal, Layout, Globe, Cpu, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-blue-400" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-violet-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-amber-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      default:
        return <Terminal className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative border-t border-white/[0.06] bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left space-y-3">
          <div className="text-xs font-mono text-violet-400 tracking-wider uppercase font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <span>Studio Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What We Build
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            Specialized engineering and design services for mobile platforms, artificial intelligence, and modern digital software.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {siteConfig.services.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl border border-white/10 bg-[#0d1017]/70 p-5 sm:p-7 flex flex-col justify-between hover:bg-[#121622]/90 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/20"
            >
              <div className="space-y-4">
                {/* Header: Number and Icon */}
                <div className="flex items-center justify-between border-b border-white/5 pb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(service.icon)}
                  </div>
                  <span className="font-mono text-xs text-slate-400 font-semibold tracking-wider">
                    {service.number}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Detailed capability highlights */}
                <div className="pt-2 space-y-1.5">
                  {service.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action trigger to start consultation */}
              <div className="mt-5 pt-3.5 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="py-1 text-xs font-semibold text-slate-300 group-hover:text-blue-400 flex items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                >
                  <span>Inquire about this</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
