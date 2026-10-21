import React from 'react';
import { Link } from '../context/RouterContext';
import { Shield, Target, Users, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-gradient-to-b from-slate-50 to-white py-14 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block mb-2">
            Our Purpose &amp; Editorial Standards
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
            About CreatorToolPicks
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Independent software analysis and studio hardware curation built specifically for the faceless content creation ecosystem.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10 text-gray-800 leading-relaxed text-base">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#111827]">Our Mission</h2>
          <p>
            CreatorToolPicks was founded to cut through the noise in the creator economy. As AI tools, voice synthesizers, automated video editors, and digital funnel platforms proliferated, the market became flooded with low-quality affiliate blogs promoting software purely on the basis of high payout percentages.
          </p>
          <p>
            We operate with a fundamentally different standard: <strong>we research and evaluate every tool on published criteria</strong>. We focus exclusively on the specific operational needs of faceless creators—channels where the narrative script, vocal pacing, stock footage relevance, and email lead capture systems do the heavy lifting without an on-camera personality.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#111827]">Who We Are</h2>
          <p>
            Our publication is managed by the <strong>CreatorToolPicks Editorial Team</strong>—a focused group of digital media producers, workflow researchers, and former channel operators who spend their workweeks stress-testing software workflows and physical desk setups.
          </p>
          <p>
            We do not invent author personas, generate automated AI reviews, or publish recycled marketing bullet points. When we say a tool is best for long-form video assembly or that an email builder has dated templates, that verdict comes directly from our structured evaluation framework.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#111827]">Why Faceless Creators?</h2>
          <p>
            Creating content without an on-camera presenter introduces unique engineering constraints:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
            <li>Audio fidelity must be immaculate, because viewers have no visual speaker to track.</li>
            <li>Video scene transitions and captions must maintain narrative tension.</li>
            <li>Monetization must rely on direct digital products, email funnels, and targeted affiliates rather than personal influencer sponsorships.</li>
          </ul>
          <p className="mt-2">
            We curate the exact tools and hardware required to solve these constraints cleanly and cost-effectively.
          </p>
        </section>

        <section className="bg-slate-50 border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
          <div>
            <h3 className="font-bold text-gray-900 text-base">Want to see our testing framework?</h3>
            <p className="text-xs text-gray-600">Review our published 6 criteria and 4-step evaluation process.</p>
          </div>
          <Link
            href="/how-we-test"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors shrink-0"
          >
            <span>How We Test</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </div>
  );
};
