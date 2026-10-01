import React, { useEffect } from 'react';
import { ArrowLeft, ShieldAlert, FileText, Mail } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#090A0F] text-[#E2E8F0] pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white mb-8 transition-colors p-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Main Website</span>
        </button>

        {/* Editable Banner Notice */}
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs flex items-start gap-3 mb-10">
          <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5 text-amber-400" />
          <div>
            <span className="font-bold">PUBLISHER NOTICE / EDITABLE TEMPLATE: </span>
            This Privacy Policy is designed specifically for VA Developers. Placeholders marked with brackets like{' '}
            <code className="bg-black/40 px-1 py-0.5 rounded text-white font-mono">[EDITABLE_ITEM]</code>{' '}
            must be reviewed and adjusted to match the final deployed services and mobile app distribution channels before public launch.
          </div>
        </div>

        {/* Header */}
        <div className="space-y-4 border-b border-white/10 pb-8 mb-10 text-left">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">
            Legal Documentation
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Privacy Policy
          </h1>
          <div className="text-xs text-slate-400 font-mono flex flex-wrap gap-4">
            <span>Last Updated: September 2026</span>
            <span>·</span>
            <span>Effective Date: September 2026</span>
            <span>·</span>
            <span>Brand: VA Developers</span>
          </div>
        </div>

        {/* Policy Body */}
        <div className="space-y-10 text-left text-sm text-slate-300 leading-relaxed">
          {/* Intro */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Introduction</h2>
            <p>
              VA Developers ("we," "us," or "our") operates as an independent technology and software development studio. We respect your privacy and are committed to protecting any personal information you provide when using our website (<span className="font-mono text-blue-300">[YOUR_DOMAIN_URL]</span>) or our software applications (including Creator Studio, Edit Studio, and future digital products).
            </p>
            <p>
              This policy explains what information may be collected, how it is handled, and your rights concerning your personal information.
            </p>
          </section>

          {/* Information collected */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Information Collected</h2>
            <p>Depending on how you interact with our website or products, we may collect:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
              <li>
                <strong>Direct Inquiries:</strong> When you submit a project inquiry or contact us via our contact form, we collect your name, email address, project requirements, and any additional details you voluntarily submit.
              </li>
              <li>
                <strong>Application Usage Data:</strong> For software products and mobile apps, anonymous technical parameters such as device OS version, screen resolution, and crash logs may be collected to identify bugs and improve performance.
              </li>
              <li>
                <strong>Creator Input Data:</strong> In tools such as Creator Studio, user-entered prompts, titles, or notes are processed solely to produce the requested outputs.
              </li>
            </ul>
          </section>

          {/* How information is used */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. How Information Is Used</h2>
            <p>We use collected data solely for legitimate development and operational purposes, including:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
              <li>Responding directly to your messages, collaboration requests, and questions.</li>
              <li>Delivering, diagnosing, and enhancing our software applications.</li>
              <li>Preventing abuse, spam, and security vulnerabilities.</li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information to third-party data brokers or marketing firms.
            </p>
          </section>

          {/* Cookies & Tracking */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Cookies and Web Storage</h2>
            <p>
              Our website uses minimal, essential local storage for theme and interface preferences. We do not use intrusive tracking cookies for cross-site surveillance.
            </p>
            <p className="text-xs text-slate-400 bg-white/[0.02] p-3 rounded-lg border border-white/5 font-mono">
              [EDITABLE: If you add Google Analytics, Cloudflare Web Analytics, or cookie banners in the future, list specific cookie names and expiration times here.]
            </p>
          </section>

          {/* Analytics */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Analytics & Diagnostics</h2>
            <p>
              If analytics or performance monitoring tools (e.g., privacy-focused telemetry or Google Play Console diagnostics) are utilized, they collect aggregated, non-identifying telemetry to help us identify slow rendering or app crashes.
            </p>
          </section>

          {/* Third-party services */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">6. Third-Party Services</h2>
            <p>
              Our applications may interact with verified third-party infrastructure providers to supply cloud hosting, database synchronization, or push delivery. These providers maintain their own privacy policies:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li>Google Cloud / Firebase (Hosting, authentication, or database)</li>
              <li>Google Play Services (for Android mobile distribution)</li>
            </ul>
          </section>

          {/* AI Services */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">7. Artificial Intelligence (AI) Services</h2>
            <p>
              For AI-enabled features (e.g., Creator Studio), text prompts and video metadata are sent to foundation AI APIs (such as Google Gemini APIs) to generate responses. We do not use your confidential drafts to train public foundation models without explicit consent.
            </p>
          </section>

          {/* Advertising */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">8. Advertising</h2>
            <p>
              VA Developers currently does not host third-party behavioral advertisement networks on this website. Should ad-supported models be introduced to free mobile utilities in the future, explicit disclosures and privacy toggles will be provided.
            </p>
          </section>

          {/* Data Retention */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">9. Data Retention</h2>
            <p>
              Inquiry messages and emails are retained only as long as necessary to complete client communication and project delivery. Test or debug logs are routinely purged after diagnostic cycles.
            </p>
          </section>

          {/* Data Security */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">10. Data Security</h2>
            <p>
              We implement industry-standard HTTPS encryption for all web transport, strict access controls, and modular architecture to protect data from unauthorized access or destruction.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">11. Children's Privacy</h2>
            <p>
              Our software products and services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children.
            </p>
          </section>

          {/* User Rights */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">12. User Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to request access to, correction of, or deletion of your personal communication data. You can exercise these rights by reaching out to us directly.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-3 pt-6 border-t border-white/10">
            <h2 className="text-lg font-bold text-white">13. Contact Information</h2>
            <p>
              If you have any questions about this Privacy Policy or wish to request data deletion, contact us at:
            </p>
            <div className="p-4 rounded-xl bg-[#0d1017] border border-white/10 space-y-1 font-mono text-xs">
              <div className="text-white font-bold">VA Developers</div>
              <div className="text-slate-300">Email: {siteConfig.contact.email}</div>
              <div className="text-slate-300">Location: {siteConfig.contact.location}</div>
            </div>
          </section>
        </div>

        {/* Back Button Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-xs font-semibold text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to VA Developers</span>
          </button>
        </div>
      </div>
    </div>
  );
};
