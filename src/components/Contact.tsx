import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, ArrowUpRight, ShieldCheck, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface ContactProps {
  initialProjectType?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialProjectType }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: initialProjectType || 'Mobile App',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const projectOptions = [
    'Mobile App',
    'AI Application',
    'Website',
    'Software',
    'UI/UX',
    'Other',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }
    setErrorMessage('');
    setSubmitting(true);

    // Simulate sending message cleanly without fake backend keys
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
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
    <section id="contact" className="py-24 relative border-t border-white/[0.06] bg-[#08090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-3">
              <div className="text-xs font-mono text-blue-400 tracking-wider uppercase font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Let's Build Something
              </h2>
              <p className="text-base text-slate-300 leading-relaxed font-normal">
                Whether you have a specific mobile application in mind, need custom AI integration, or want to discuss a new software product—we are ready to talk.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Email */}
              <div className="p-4 rounded-xl bg-[#0d1017] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:border-white/20 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                      <span>Email</span>
                      <span className="text-[10px] text-amber-400 bg-amber-400/10 px-1.5 py-0.2 rounded border border-amber-400/20">
                        Editable Placeholder
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white break-all mt-0.5">
                      {siteConfig.contact.email}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono mt-1">
                      Configure in <code className="text-slate-300">siteConfig.ts</code>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="self-end sm:self-center px-3 py-1.5 text-xs text-slate-300 hover:text-white rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 flex items-center gap-1.5 shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-mono text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="font-mono text-[11px]">Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-[#0d1017] border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Base Location</div>
                  <div className="text-sm font-semibold text-white">
                    {siteConfig.contact.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links (Only displayed when configured truthfully) */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Official Channels
              </div>
              <div className="flex flex-wrap gap-2.5">
                {siteConfig.social
                  .filter((item) => item.enabled)
                  .map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-slate-300 hover:text-white border border-white/5 transition-colors"
                    >
                      {getSocialIcon(social.name)}
                      <span>{social.name}</span>
                    </a>
                  ))}
              </div>
            </div>

            {/* Security and Integrity notice */}
            <div className="text-xs text-slate-400 leading-relaxed font-mono pt-2">
              Note: Project proposals and inquiries are handled with strict privacy. All information remains confidential.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-[#0d1017]/90 p-6 sm:p-8 backdrop-blur-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to VA Developers. We review all incoming project requests carefully and will reply directly to <span className="text-white font-mono">{formData.email}</span>.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          projectType: 'Mobile App',
                          message: '',
                        });
                      }}
                      className="px-5 py-2.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-xs font-semibold text-white transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-white/5 pb-4">
                    <h3 className="text-lg font-bold text-white">Project Inquiry Form</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Tell us about your requirements or idea. We typically reply within 24–48 hours.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/30 text-xs text-red-300">
                      {errorMessage}
                    </div>
                  )}

                  {/* Name */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300">
                      Your Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300">
                      Email Address <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="alex@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="contact-project-type" className="block text-xs font-semibold text-slate-300">
                      Project Type <span className="text-blue-400">*</span>
                    </label>
                    <select
                      id="contact-project-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090b11] border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    >
                      {projectOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#090b11] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300">
                      Message / Project Description <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Describe what you would like to build, timeline, or key objectives..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all duration-200 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 disabled:opacity-60"
                    >
                      {submitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-[11px] text-slate-400 text-center font-mono">
                    Backend Integration: Ready for custom webhook or mail dispatch service.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
