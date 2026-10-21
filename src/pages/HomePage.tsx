import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { PRODUCTS, Product } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { EmailCapture } from '../components/EmailCapture';
import {
  ArrowRight,
  CheckCircle,
  Sliders,
  Scale,
  ShieldCheck,
  Zap,
  ExternalLink,
  BookOpen,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'AI Video',
    'AI Voice',
    'Email Marketing',
    'Hosting',
    'Business Tools',
    'Gear',
  ];

  // Software products for "Our Top Picks for 2026"
  const softwareProducts = PRODUCTS.filter((p) => p.type === 'software');

  // Filtered products for client-side category filter chips
  const filteredProducts =
    selectedCategory === 'All'
      ? softwareProducts
      : selectedCategory === 'Gear'
      ? PRODUCTS.filter((p) => p.type === 'gear')
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  // 3 gear cards for "Creator Gear" section: Shure MV7+, Elgato Key Light Air, Ulanzi desktop tripod
  const featuredGear = PRODUCTS.filter((p) =>
    ['shure-mv7-plus', 'elgato-key-light-air', 'ulanzi-desktop-tripod'].includes(p.id)
  );

  // Own product: Faceless Digital Marketing Playbook
  const playbook = PRODUCTS.find((p) => p.id === 'faceless-playbook')!;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 sm:py-24 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-bold uppercase tracking-wider rounded-full mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Updated for 2026</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-tight mb-6">
            Tested Tools &amp; Gear for Faceless Creators
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
            We research and evaluate every tool on function, ease of use, integrations and value — never ranked by commission.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/tools-gear"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-base font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors shadow-sm"
            >
              Browse Tools
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/tools-gear"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-base font-bold text-[#0B1F3A] bg-[#F59E0B] hover:bg-[#D97706] transition-colors shadow-sm"
            >
              See Top Picks
            </Link>
          </div>
        </div>
      </section>

      {/* Email Capture Card */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-16 relative z-10">
        <EmailCapture
          title="Get the Free Faceless Creator Starter Kit"
          subtitle="Download our tool stack map, script-to-video workflow checklist, and minimalist desk setup guide for 2026."
        />
      </section>

      {/* Category Filter Chips & Software Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
              <Zap className="w-4 h-4" />
              <span>Independent Evaluations</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#111827]">
              Our Top Picks for 2026
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Evaluated strictly for faceless media workflows, voice cloning, rendering speed, and cost efficiency.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer border ${
                    isActive
                      ? 'bg-[#0B1F3A] text-white border-[#0B1F3A]'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400 hover:text-gray-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              featured={product.id === 'systeme-io'}
            />
          ))}
        </div>
      </section>

      {/* Head-to-Head Comparisons Section */}
      <section className="bg-slate-50 py-16 border-y border-gray-200 my-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block mb-2">
              Side-by-Side Analysis
            </span>
            <h2 className="text-3xl font-extrabold text-[#111827]">
              Head-to-Head Comparisons
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Direct evaluations of competing software stacks to help you pick the right engine for your specific production format.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Pictory vs InVideo */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between hover:border-[#2563EB] transition-colors shadow-sm">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  <Scale className="w-4 h-4 text-[#2563EB]" />
                  <span>AI Video Showdown</span>
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">
                  Pictory vs InVideo
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Which platform best handles automated script-to-video for faceless YouTube channels versus prompt-generated short clips?
                </p>
                <div className="space-y-1.5 text-xs text-gray-600 border-t border-gray-100 pt-3">
                  <div><strong className="text-gray-900">Pictory:</strong> Long-form script matching</div>
                  <div><strong className="text-gray-900">InVideo:</strong> Shorts &amp; prompt-to-video</div>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  href="/compare/pictory-vs-invideo"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors"
                >
                  Read Comparison
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 2: Systeme.io vs ClickFunnels */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between hover:border-[#2563EB] transition-colors shadow-sm">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  <Sliders className="w-4 h-4 text-[#2563EB]" />
                  <span>Funnel Architecture</span>
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">
                  Systeme.io vs ClickFunnels
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Comparing all-in-one free tier practicality against enterprise funnel software for digital product sales.
                </p>
                <div className="space-y-1.5 text-xs text-gray-600 border-t border-gray-100 pt-3">
                  <div><strong className="text-gray-900">Systeme.io:</strong> Free tier + 0% fees</div>
                  <div><strong className="text-gray-900">Focus:</strong> Lean creator economics</div>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  href="/tools/systeme-io-review"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors"
                >
                  Read Systeme.io Review
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 3: Browse all tools & gear */}
            <div className="bg-white rounded-xl border border-dashed border-gray-300 p-6 flex flex-col justify-between bg-gradient-to-br from-blue-50/50 to-slate-50">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Full Directory</span>
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">
                  Browse All Tools &amp; Gear
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Access our full 2026 index containing software stacks, audio gear, desk lighting, and creator setup recommendations.
                </p>
                <p className="text-xs text-gray-500 border-t border-gray-200/60 pt-3">
                  Filter by category, search by feature, or view editorial gear breakdowns.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  href="/tools-gear"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold text-[#0B1F3A] bg-[#F59E0B] hover:bg-[#D97706] transition-colors"
                >
                  Explore Catalog
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Test Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block mb-2">
            Testing Integrity
          </span>
          <h2 className="text-3xl font-extrabold text-[#111827] mb-3">
            How We Test Tools &amp; Hardware
          </h2>
          <p className="text-sm text-gray-600">
            Every product is assessed against our four standardized evaluation criteria. We never accept payment for positive verdicts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="border border-gray-200 rounded-xl p-6 bg-white">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#2563EB] font-bold flex items-center justify-center mb-4">
              01
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Core Functionality</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Does the tool reliably execute its primary promise (e.g. natural voice pacing, accurate video captioning, email deliverability)?
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 bg-white">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#2563EB] font-bold flex items-center justify-center mb-4">
              02
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Ease of Use</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Interface clarity, learning curve, and the number of clicks required to turn a raw script into an exportable video asset.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 bg-white">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#2563EB] font-bold flex items-center justify-center mb-4">
              03
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Integrations</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Compatibility with payment gateways, custom domains, cloud storage, and video export timelines.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 bg-white">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#2563EB] font-bold flex items-center justify-center mb-4">
              04
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Pricing &amp; Value</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Free plan viability, watermarking limitations, export quotas, and clear cost-per-minute or cost-per-contact transparency.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/how-we-test"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] hover:text-[#1D4ED8]"
          >
            Read our full evaluation methodology &amp; criteria &rarr;
          </Link>
        </div>
      </section>

      {/* Creator Studio Gear Section */}
      <section className="bg-slate-50 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block mb-2">
                Physical Hardware
              </span>
              <h2 className="text-3xl font-extrabold text-[#111827]">
                Creator Gear
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Minimalist, high-performance desk hardware for voiceover recording and long editing sessions.
              </p>
            </div>
            <Link
              href="/tools-gear"
              categoryFilter="Gear"
              className="text-sm font-bold text-[#2563EB] hover:underline"
            >
              View all 6 studio gear picks &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredGear.map((gear) => (
              <ProductCard key={gear.id} product={gear} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured "Our Product" card: Faceless Digital Marketing Playbook */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-[#0B1F3A] to-[#132c4e] rounded-2xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden border border-slate-700">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 bg-[#F59E0B] text-[#0B1F3A] text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{playbook.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
              {playbook.name}
            </h2>

            <p className="text-base text-slate-200 leading-relaxed mb-6">
              {playbook.verdict}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-y border-slate-700/80 mb-6 text-sm">
              <div>
                <span className="text-xs text-slate-400 block">Niche Research</span>
                <span className="font-semibold text-white">Systematic filtering model</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Content Systems</span>
                <span className="font-semibold text-white">Scripting &amp; asset assembly</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Monetization</span>
                <span className="font-semibold text-white">Digital product funnels</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div>
                <span className="text-xs text-slate-400 block">Verified Price</span>
                <span className="text-2xl font-black text-[#F59E0B]">{playbook.pricing?.primary}</span>
              </div>

              <a
                href={playbook.ctaUrl}
                onClick={(e) => {
                  // Outbound Gumroad link placeholder
                  // TODO: Replace with real Gumroad link for Faceless Digital Marketing Playbook
                  e.preventDefault();
                  window.open('https://gumroad.com', '_blank');
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-[#F59E0B] hover:bg-[#D97706] text-[#0B1F3A] transition-colors shadow-md"
              >
                <span>{playbook.ctaText}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <p className="text-[11px] text-slate-400 mt-4">
              Factual educational guide provided in PDF + editable checklist format. Instant digital delivery via Gumroad.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
