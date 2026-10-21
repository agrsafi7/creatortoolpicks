import React from 'react';
import { Link } from '../context/RouterContext';
import { Wrench, Shield, CheckCircle, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1F3A] text-slate-300 border-t border-slate-800 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center text-white">
                <Wrench className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                CreatorToolPicks
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tested tools, software stacks, and desk studio gear for faceless content creators and automated media channels.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <Shield className="w-4 h-4 text-[#F59E0B]" />
              <span>Independent editorial standards</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Explore Tools
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/tools-gear" className="hover:text-white transition-colors">
                  All Tools &amp; Studio Gear
                </Link>
              </li>
              <li>
                <Link href="/tools/systeme-io-review" className="hover:text-white transition-colors">
                  Systeme.io In-Depth Review
                </Link>
              </li>
              <li>
                <Link href="/compare/pictory-vs-invideo" className="hover:text-white transition-colors">
                  Pictory vs InVideo Comparison
                </Link>
              </li>
              <li>
                <Link href="/blog/how-to-start-a-faceless-channel-2026" className="hover:text-white transition-colors">
                  Faceless Channel Guide (2026)
                </Link>
              </li>
            </ul>
          </div>

          {/* Editorial & Standards */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Our Standards
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/how-we-test" className="hover:text-white transition-colors">
                  How We Test
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About CreatorToolPicks
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="hover:text-white transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Editorial Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Legal &amp; Policies
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="hover:text-white transition-colors">
                  Editorial Transparency
                </Link>
              </li>
              <li>
                <span className="text-slate-500 block pt-2">
                  No pay-to-play placements. Tools evaluated on standardized criteria.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Required Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="font-medium text-slate-300">
            We research and evaluate every tool on published criteria.
          </p>
          <p>
            &copy; 2026 CreatorToolPicks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
