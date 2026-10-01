import React from 'react';
import { ArrowUp, ArrowUpRight, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface FooterProps {
  onNavigateLegal: (page: 'privacy' | 'terms') => void;
  onNavigateSection: (sectionId: string) => void;
  onSelectProduct: (productId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateLegal,
  onNavigateSection,
  onSelectProduct,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'youtube':
        return <Youtube className="w-4 h-4" />;
      case 'instagram':
        return <Instagram className="w-4 h-4" />;
      default:
        return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#06070a] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 p-[1.5px] shadow-sm">
                <div className="w-full h-full bg-[#090b12] rounded-[10px] flex items-center justify-center font-black text-xs sm:text-sm text-white">
                  VA
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white leading-tight">
                  {siteConfig.brand.name}
                </span>
                <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                  Studio
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Building useful technology for the next generation.
            </p>

            <div className="text-xs text-slate-400 font-mono space-y-1 pt-1">
              <div>Independent Technology & Software Brand</div>
              <div>Location: {siteConfig.contact.location}</div>
              <div className="break-all">Email: {siteConfig.contact.email}</div>
            </div>

            {/* Social channels */}
            <div className="flex items-center gap-3 pt-2">
              {siteConfig.social
                .filter((s) => s.enabled)
                .map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`VA Developers on ${social.name}`}
                    className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/5 transition-colors"
                  >
                    {getSocialIcon(social.name)}
                  </a>
                ))}
            </div>
          </div>

          {/* Column: Products */}
          <div className="space-y-3 text-left">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Products
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectProduct('creator-studio')}
                  className="hover:text-white transition-colors"
                >
                  Creator Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectProduct('edit-studio')}
                  className="hover:text-white transition-colors"
                >
                  Edit Studio
                </button>
              </li>
              <li className="pt-2 text-[11px] text-slate-400 font-mono">
                Status: In Development
              </li>
            </ul>
          </div>

          {/* Column: Services */}
          <div className="space-y-3 text-left">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-white transition-colors"
                >
                  Mobile Apps
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-white transition-colors"
                >
                  AI Applications
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-white transition-colors"
                >
                  Software Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-white transition-colors"
                >
                  UI/UX Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-white transition-colors"
                >
                  Web Development
                </button>
              </li>
            </ul>
          </div>

          {/* Column: Company */}
          <div className="space-y-3 text-left">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Studio
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigateSection('about')}
                  className="hover:text-white transition-colors"
                >
                  About VA
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('technology')}
                  className="hover:text-white transition-colors"
                >
                  Technology
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('portfolio')}
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column: Legal */}
          <div className="space-y-3 text-left">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigateLegal('privacy')}
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateLegal('terms')}
                  className="hover:text-white transition-colors"
                >
                  Terms & Conditions
                </button>
              </li>
              <li className="pt-2 text-[11px] text-slate-400 font-mono">
                Editable Templates
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div>
            © 2026 VA Developers. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Built with purpose.</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
