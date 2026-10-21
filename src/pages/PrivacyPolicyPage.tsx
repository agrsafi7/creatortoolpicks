import React from 'react';
import { Link } from '../context/RouterContext';
import { Shield } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-gradient-to-b from-slate-50 to-white py-14 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">
            Legal &amp; Data Protection (2026)
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            How CreatorToolPicks collects, uses, and protects your information when you browse our website.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8 text-gray-800 leading-relaxed text-sm">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#111827]">1. Information We Collect</h2>
          <p>
            When you visit CreatorToolPicks, we collect minimal personal data. If you voluntarily subscribe to our newsletter or request our Free Faceless Creator Starter Kit, we collect your email address. We do not require you to create an account to view our product reviews, comparison tables, or editorial guides.
          </p>
          <p>
            Like most websites, we may automatically collect standard web server logs including IP addresses, browser types, referring pages, and device information to monitor site reliability and prevent security abuses.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#111827]">2. How We Use Information</h2>
          <p>
            The information we collect is used strictly to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Deliver requested creator starter kits and periodic email newsletters.</li>
            <li>Improve website navigation and responsive layout rendering.</li>
            <li>Ensure technical stability and defend against automated denial-of-service attempts.</li>
          </ul>
          <p>
            We do not sell, rent, or trade your personal email address to third-party data brokers or marketing agencies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#111827]">3. Cookies and Affiliate Tracking</h2>
          <p>
            When you click on an external link to a reviewed tool (such as Systeme.io, ElevenLabs, or Amazon), the merchant platform may set a tracking cookie on your device. These cookies indicate that your referral came from CreatorToolPicks and typically expire between 24 hours and 90 days.
          </p>
          <p>
            You can configure your browser to reject cookies or notify you when a cookie is placed.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#111827]">4. Third-Party Services</h2>
          <p>
            We may use trusted service providers for hosting, web analytics, and transactional email distribution. These vendors process data exclusively on our instructions and in compliance with industry confidentiality standards.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#111827]">5. Your Data Rights</h2>
          <p>
            You have the right to request access to any personal data we hold about you, or ask us to delete your email address from our starter kit newsletter list at any time. Every email we send contains a one-click unsubscribe link at the bottom.
          </p>
        </section>

        <section className="border-t border-gray-200 pt-6 text-xs text-gray-500">
          <p>
            Effective Date: January 1, 2026. For questions regarding our privacy practices, please contact us at <Link href="/contact" className="text-[#2563EB] underline">Contact Editorial Team</Link>.
          </p>
        </section>
      </div>
    </div>
  );
};
