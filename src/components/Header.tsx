import React, { useState } from 'react';
import { Link, useRouter } from '../context/RouterContext';
import { Search, Menu, X, Info, Layers, Wrench } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export const Header: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { label: 'Tools', href: '/tools-gear', category: 'Software' },
    { label: 'Gear', href: '/tools-gear', category: 'Gear' },
    { label: 'Comparisons', href: '/compare/pictory-vs-invideo' },
    { label: 'Blog', href: '/blog/how-to-start-a-faceless-channel-2026' },
    { label: 'How We Test', href: '/how-we-test' },
  ];

  const searchResults = searchQuery.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.verdict.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.bestFor.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearchResultClick = (product: typeof PRODUCTS[0]) => {
    setSearchModalOpen(false);
    setSearchQuery('');
    if (product.id === 'systeme-io') {
      navigate('/tools/systeme-io-review');
    } else {
      navigate('/tools-gear');
    }
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Main Top Nav in Deep Navy #0B1F3A */}
      <div className="bg-[#0B1F3A] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-lg bg-[#2563EB] flex items-center justify-center text-white shadow">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-blue-200 transition-colors">
                  CreatorToolPicks
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase -mt-1">
                  Faceless Creator Gear &amp; Tools
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive =
                  currentPath === link.href ||
                  (link.href === '/tools-gear' && currentPath === '/tools-gear');
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    categoryFilter={link.category}
                    className={`text-sm font-semibold transition-colors py-1 border-b-2 ${
                      isActive
                        ? 'text-white border-[#2563EB]'
                        : 'text-slate-300 border-transparent hover:text-white hover:border-slate-400'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Controls: Search & Amber "Top Picks" button */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => setSearchModalOpen(true)}
                className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors"
                title="Search tools and gear"
                aria-label="Search tools and gear"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link
                href="/tools-gear"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-bold bg-[#F59E0B] hover:bg-[#D97706] text-[#0B1F3A] transition-colors shadow-sm"
              >
                Top Picks
              </Link>
            </div>

            {/* Mobile Menu & Search Buttons */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setSearchModalOpen(true)}
                className="p-2 text-slate-300 hover:text-white rounded-lg"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white rounded-lg"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-[#0B1F3A] px-4 pt-3 pb-5 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                categoryFilter={link.category}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-semibold text-slate-200 hover:text-white hover:bg-slate-800"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/tools-gear"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-2.5 rounded-lg text-sm font-bold bg-[#F59E0B] hover:bg-[#D97706] text-[#0B1F3A]"
              >
                Top Picks
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Slim Affiliate Disclosure Strip Directly Under Header on EVERY page */}
      <div className="bg-[#071527] border-b border-slate-800/80 text-slate-300 text-xs py-2 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center justify-center text-center gap-1.5 flex-wrap">
          <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>
            CreatorToolPicks is reader-supported. When you buy through links on our site, we may earn a commission.{' '}
          </span>
          <Link
            href="/affiliate-disclosure"
            className="text-amber-400 hover:text-amber-300 underline font-medium"
          >
            Learn more.
          </Link>
        </div>
      </div>

      {/* Instant Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center pt-20 px-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl border border-gray-200 overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 bg-gray-50">
              <Search className="w-5 h-5 text-gray-400 shrink-0" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tools, gear, AI video, microphones..."
                className="w-full bg-transparent border-none text-gray-900 placeholder-gray-400 focus:outline-none text-base"
              />
              <button
                onClick={() => {
                  setSearchModalOpen(false);
                  setSearchQuery('');
                }}
                className="text-gray-400 hover:text-gray-600 p-1 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto p-4 divide-y divide-gray-100">
              {searchQuery.trim() === '' ? (
                <div className="py-6 text-center text-sm text-gray-500">
                  <p>Type a keyword like "voice", "video", "microphone", or "funnels".</p>
                  <div className="mt-3 flex flex-wrap justify-center gap-2">
                    {['ElevenLabs', 'Pictory', 'Systeme.io', 'Shure MV7+', 'InVideo'].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        className="px-2.5 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="py-8 text-center text-sm text-gray-500">
                  No matching tools or gear found for "{searchQuery}".
                </div>
              ) : (
                searchResults.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleSearchResultClick(product)}
                    className="py-3 px-3 hover:bg-blue-50/50 rounded-lg cursor-pointer flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900 group-hover:text-[#2563EB]">
                          {product.name}
                        </span>
                        {product.badge && (
                          <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded">
                            {product.badge}
                          </span>
                        )}
                        <span className="text-xs text-gray-400">{product.category}</span>
                      </div>
                      <p className="text-xs text-gray-600 line-clamp-1 mt-0.5">
                        {product.verdict}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#2563EB] group-hover:translate-x-1 transition-transform">
                      View &rarr;
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
