import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface NavbarProps {
  onStartProject: () => void;
  onNavigateLegal?: (page: 'privacy' | 'terms' | null) => void;
  currentLegalPage?: 'privacy' | 'terms' | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  onStartProject,
  onNavigateLegal,
  currentLegalPage,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection when on main page
      if (!currentLegalPage) {
        const sections = ['home', 'products', 'services', 'about', 'technology', 'portfolio', 'contact'];
        const scrollPosition = window.scrollY + 200;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentLegalPage]);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Products', href: '#products', id: 'products' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Technology', href: '#technology', id: 'technology' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if (currentLegalPage && onNavigateLegal) {
      onNavigateLegal(null);
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    if (currentLegalPage && onNavigateLegal) {
      onNavigateLegal(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#090A0F]/85 backdrop-blur-md border-b border-white/[0.07] py-3.5 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-3 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
              aria-label="VA Developers Home"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 p-[1.5px] shadow-md shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow">
                <div className="w-full h-full bg-[#090b12] rounded-[10px] flex items-center justify-center font-black text-xs sm:text-sm text-white tracking-wider">
                  VA
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-extrabold tracking-tight text-white group-hover:text-blue-200 transition-colors leading-tight">
                  {siteConfig.brand.name}
                </span>
                <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                  Studio
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = !currentLegalPage && activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.href)}
                    className={`text-sm font-medium transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-400 to-violet-400 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action: Start a Project */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onStartProject}
                className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-sm shadow-blue-600/30 transition-all duration-200 hover:shadow-blue-500/50 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white rounded-lg border border-white/10 bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Slideout Navigation */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 lg:hidden bg-[#090A0F]/95 backdrop-blur-2xl flex flex-col justify-between p-6 animate-fadeIn"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 p-[1px] shadow-sm">
                <div className="w-full h-full bg-[#090b12] rounded-[10px] flex items-center justify-center font-black text-xs text-white">
                  VA
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base text-white">{siteConfig.brand.name}</span>
                <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">Studio</span>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 text-slate-400 hover:text-white rounded-xl border border-white/10"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.href)}
                className="text-left text-lg font-semibold text-slate-200 hover:text-white hover:translate-x-1 transition-all py-1"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-sm text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="text-center text-xs text-slate-400 pt-2 font-mono">
              {siteConfig.contact.location} · {siteConfig.contact.email}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
