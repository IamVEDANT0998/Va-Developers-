import React, { useEffect } from 'react';
import { ArrowLeft, ShieldAlert } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface TermsConditionsProps {
  onBack: () => void;
}

export const TermsConditions: React.FC<TermsConditionsProps> = ({ onBack }) => {
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
            These Terms & Conditions outline the terms of use for VA Developers' website and applications. Review and update items marked in brackets{' '}
            <code className="bg-black/40 px-1 py-0.5 rounded text-white font-mono">[EDITABLE_ITEM]</code>{' '}
            with your counsel or finalized operational rules prior to legal distribution.
          </div>
        </div>

        {/* Header */}
        <div className="space-y-4 border-b border-white/10 pb-8 mb-10 text-left">
          <div className="text-xs font-mono text-violet-400 uppercase tracking-wider">
            Legal Documentation
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Terms & Conditions
          </h1>
          <div className="text-xs text-slate-400 font-mono flex flex-wrap gap-4">
            <span>Last Updated: September 2026</span>
            <span>·</span>
            <span>Effective Date: September 2026</span>
            <span>·</span>
            <span>Brand: VA Developers</span>
          </div>
        </div>

        {/* Terms Body */}
        <div className="space-y-10 text-left text-sm text-slate-300 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Agreement to Terms</h2>
            <p>
              By accessing the website of VA Developers ("we", "us", or "our") or using any of our applications or tools (including Creator Studio, Edit Studio, and associated software), you agree to be bound by these Terms & Conditions. If you do not agree with any of these terms, you are prohibited from using or accessing this site and our products.
            </p>
          </section>

          {/* Section 2: Website Usage */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Website Usage</h2>
            <p>
              This website is provided for informational and business communication purposes. You agree to use the site only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
              <li>You may not attempt to probe, scan, or test the vulnerability of the system or network.</li>
              <li>You may not transmit viruses, trojans, or malicious code.</li>
              <li>You may not use automated scripts to excessively scrape or harvest data without permission.</li>
            </ul>
          </section>

          {/* Section 3: Products */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Products & Software Development</h2>
            <p>
              VA Developers designs, tests, and publishes independent digital applications and developer tools. Products marked as <span className="font-mono text-amber-300">"In Development"</span>, "Alpha", or "Beta" are experimental previews and are provided on an "as-is" basis for evaluation and feedback. Features, interfaces, and release schedules may change without prior notice.
            </p>
          </section>

          {/* Section 4: Intellectual Property */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Intellectual Property</h2>
            <p>
              Unless otherwise indicated, all design assets, branding, logos, trademarks, codebases, and content displayed on this website are the property of VA Developers and are protected by applicable copyright, trademark, and intellectual property laws.
            </p>
            <p>
              You may not copy, reproduce, republish, or reverse-engineer any proprietary software or visual identity elements without prior written authorization.
            </p>
          </section>

          {/* Section 5: User Responsibilities */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. User Responsibilities & Content</h2>
            <p>
              When using our creator tools (such as Creator Studio) or submitting project inquiries, you are solely responsible for ensuring that your input prompts, video assets, and project requirements do not violate third-party copyrights, defamation laws, or privacy rights.
            </p>
          </section>

          {/* Section 6: Third-Party Services */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">6. Third-Party Services & Links</h2>
            <p>
              Our website and applications may contain links or API connections to third-party services (such as YouTube APIs, Google Gemini, GitHub, or Android services). We do not control or endorse external content and assume no liability for third-party practices or uptime.
            </p>
          </section>

          {/* Section 7: Availability */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">7. Service Availability & Maintenance</h2>
            <p>
              While we strive to provide reliable and uninterrupted access, we do not warrant that our website or apps will always be uninterrupted, error-free, or entirely bug-free. Scheduled maintenance, updates, or technical disruptions may occur.
            </p>
          </section>

          {/* Section 8: Limitation of Liability */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, VA Developers and its developers shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your access to, or use of, or inability to use the site or applications.
            </p>
          </section>

          {/* Section 9: Changes to Services */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">9. Modifications to Terms and Services</h2>
            <p>
              We reserve the right to revise these Terms & Conditions at any time. Changes become effective immediately upon posting to this page. Your continued use of the website following any changes signifies your acceptance.
            </p>
          </section>

          {/* Section 10: Contact */}
          <section className="space-y-3 pt-6 border-t border-white/10">
            <h2 className="text-lg font-bold text-white">10. Contact Information</h2>
            <p>
              For legal inquiries, rights requests, or questions regarding these terms:
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
