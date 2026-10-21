import React, { useState, useEffect } from 'react';
import { PRODUCTS, Product } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { EmailCapture } from '../components/EmailCapture';
import { Link, useRouter } from '../context/RouterContext';
import {
  Search,
  BookOpen,
  ArrowRight,
  Shield,
  Layers,
  CheckCircle,
  FileText,
  Scale,
} from 'lucide-react';

export const ToolsGearPage: React.FC = () => {
  const { selectedCategoryFilter, setSelectedCategoryFilter } = useRouter();
  const [activeTab, setActiveTab] = useState<'All' | 'Software' | 'Studio Gear' | 'Guides'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Sync category filter if navigated with one (e.g. from nav header "Gear")
  useEffect(() => {
    if (selectedCategoryFilter === 'Gear') {
      setActiveTab('Studio Gear');
      setSelectedCategoryFilter(null);
    } else if (selectedCategoryFilter === 'Software') {
      setActiveTab('Software');
      setSelectedCategoryFilter(null);
    }
  }, [selectedCategoryFilter, setSelectedCategoryFilter]);

  // The 13 standard products (7 software + 6 studio gear)
  const standardProducts = PRODUCTS.filter((p) => p.type === 'software' || p.type === 'gear');

  // Filter cards based on active tab and search query
  const filteredProducts = standardProducts.filter((product) => {
    const matchesTab =
      activeTab === 'All'
        ? true
        : activeTab === 'Software'
        ? product.type === 'software'
        : activeTab === 'Studio Gear'
        ? product.type === 'gear'
        : false;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.verdict.toLowerCase().includes(query) ||
      product.bestFor.toLowerCase().includes(query);

    return matchesTab && matchesSearch;
  });

  const guides = [
    {
      title: 'Pictory vs InVideo (2026): Best AI Video Tool for Faceless Channels?',
      category: 'Software Comparison',
      description: 'Side-by-side evaluation of script-to-video capabilities, prompt workflows, stock libraries, and rendering pipelines.',
      link: '/compare/pictory-vs-invideo',
      ctaText: 'Read Comparison',
      icon: <Scale className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: 'Systeme.io Review (2026): The All-in-One Funnel Platform for Faceless Creators',
      category: 'In-Depth Tool Review',
      description: 'Comprehensive analysis of email automation, course hosting, 0% transaction fees, and free tier limits.',
      link: '/tools/systeme-io-review',
      ctaText: 'Read Full Review',
      icon: <Layers className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      title: 'How to Start a Faceless Channel in 2026: The Complete Step-by-Step Blueprint',
      category: 'Production Guide',
      description: 'Systematic guide covering niche selection, scripting for retention, stock footage assembly, minimalist audio, and monetization.',
      link: '/blog/how-to-start-a-faceless-channel-2026',
      ctaText: 'Read Blueprint',
      icon: <FileText className="w-6 h-6 text-[#2563EB]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block mb-2">
              Directory &amp; Index (2026)
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
              Tools &amp; Gear — Tested &amp; Recommended
            </h1>
            <p className="text-base text-gray-700 leading-relaxed">
              Every tool and physical studio hardware recommendation evaluated against functional reliability, workflow efficiency, and cost transparency.
            </p>
          </div>

          {/* Search bar & Filter Tabs */}
          <div className="mt-8 space-y-4">
            {/* Search Input */}
            <div className="relative max-w-xl">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tools, gear & software..."
                className="w-full pl-11 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 hover:text-gray-700"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Filter Tabs: All / Software / Studio Gear / Guides */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {(['All', 'Software', 'Studio Gear', 'Guides'] as const).map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors cursor-pointer border ${
                      isActive
                        ? 'bg-[#0B1F3A] text-white border-[#0B1F3A]'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400 hover:text-gray-900'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'Guides' ? (
          /* Editorial Guides List */
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#111827]">
                Editorial Guides &amp; Deep Dives
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                In-depth blueprints, head-to-head comparisons, and comprehensive platform reviews.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {guides.map((guide) => (
                <div
                  key={guide.title}
                  className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-between hover:border-[#2563EB] transition-colors shadow-sm"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                      {guide.icon}
                    </div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
                      {guide.category}
                    </span>
                    <h3 className="text-lg font-bold text-[#111827] mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {guide.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <Link
                      href={guide.link}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors"
                    >
                      <span>{guide.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* 13 Standard Products Grid */
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-600">
                Showing <strong className="text-gray-900">{filteredProducts.length}</strong> items
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                <p className="text-base font-semibold text-gray-700">No tools or gear match your search.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveTab('All');
                  }}
                  className="mt-3 text-sm text-[#2563EB] font-bold hover:underline"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    featured={product.id === 'systeme-io'}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* Email capture box */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <EmailCapture
          title="Get the Free Faceless Creator Starter Kit"
          subtitle="All our evaluated tool stacks, export workflow configurations, and voiceover audio presets in one reference guide."
        />
      </section>

      {/* Disclosure Box: Editorial Independence & Affiliate Transparency */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-12">
        <div className="bg-slate-50 border border-gray-200 rounded-xl p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#2563EB] flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-[#2563EB]" />
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#111827]">
                Editorial Independence &amp; Affiliate Transparency
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                CreatorToolPicks is reader-supported. We may earn an affiliate commission when you purchase a product or sign up through links on our site. However, our product rankings, verdicts, and evaluations are strictly determined by our editorial team according to published criteria.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Rankings and badges are never influenced by affiliate commission rates, merchant sponsorships, or commercial partnerships. We never accept payment to add products or adjust verdicts.
              </p>
              <div>
                <Link
                  href="/affiliate-disclosure"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:underline"
                >
                  Read our full affiliate disclosure &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
