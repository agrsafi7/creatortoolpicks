/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { ToolsGearPage } from './pages/ToolsGearPage';
import { SystemeIoReviewPage } from './pages/SystemeIoReviewPage';
import { ComparisonPage } from './pages/ComparisonPage';
import { BlogArticlePage } from './pages/BlogArticlePage';
import { HowWeTestPage } from './pages/HowWeTestPage';
import { AboutPage } from './pages/AboutPage';
import { AffiliateDisclosurePage } from './pages/AffiliateDisclosurePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { ContactPage } from './pages/ContactPage';

const PAGE_META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'CreatorToolPicks — Tools & Gear for Faceless Creators',
    description: 'Tools and studio gear for faceless content creators, researched and evaluated on published criteria. No paid placements.',
  },
  '/tools-gear': {
    title: 'Tools & Gear — Researched & Recommended | CreatorToolPicks',
    description: 'Every software tool and piece of studio gear we recommend for faceless creators, in one directory — with Best-for guidance and honest verdicts.',
  },
  '/tools/systeme-io-review': {
    title: 'Systeme.io Review 2026 — Pricing, Features & Verdict | CreatorToolPicks',
    description: 'An independent evaluation of Systeme.io for creators: free plan, pricing from $17/mo, features, integrations and who it is best for.',
  },
  '/compare/pictory-vs-invideo': {
    title: 'Pictory vs InVideo — Best AI Video Tool for Faceless Channels? | CreatorToolPicks',
    description: 'Pictory and InVideo compared on published criteria — core function, ease of use, integrations, value and support — with a verdict by use case.',
  },
  '/blog/how-to-start-a-faceless-channel-2026': {
    title: 'How to Start a Faceless Channel in 2026 | CreatorToolPicks',
    description: 'A step-by-step guide to starting a faceless content channel in 2026: niche, tools, gear, workflow and monetization basics.',
  },
  '/how-we-test': {
    title: 'How We Test & How We Make Money | CreatorToolPicks',
    description: 'Our six evaluation criteria, four-step research process, and exactly how this site earns money. Rankings are never ranked by commission.',
  },
  '/about': {
    title: 'About CreatorToolPicks',
    description: 'What CreatorToolPicks is, who it is for, and how we research and evaluate tools and gear for faceless creators.',
  },
  '/affiliate-disclosure': {
    title: 'Affiliate Disclosure | CreatorToolPicks',
    description: 'How CreatorToolPicks earns affiliate commissions, in plain language — and why it never changes our rankings.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | CreatorToolPicks',
    description: 'What data CreatorToolPicks collects, how it is used, and your choices.',
  },
  '/contact': {
    title: 'Contact | CreatorToolPicks',
    description: 'Contact the CreatorToolPicks editorial team.',
  },
};

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  // Normalize path by stripping trailing slash (unless root)
  const normalizedPath = currentPath.length > 1 && currentPath.endsWith('/')
    ? currentPath.slice(0, -1)
    : currentPath;

  useEffect(() => {
    const meta = PAGE_META[normalizedPath] || PAGE_META['/'];
    document.title = meta.title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute('content', meta.description);
  }, [normalizedPath]);

  const renderCurrentPage = () => {
    switch (normalizedPath) {
      case '/':
        return <HomePage />;
      case '/tools-gear':
        return <ToolsGearPage />;
      case '/tools/systeme-io-review':
        return <SystemeIoReviewPage />;
      case '/compare/pictory-vs-invideo':
        return <ComparisonPage />;
      case '/blog/how-to-start-a-faceless-channel-2026':
        return <BlogArticlePage />;
      case '/how-we-test':
        return <HowWeTestPage />;
      case '/about':
        return <AboutPage />;
      case '/affiliate-disclosure':
        return <AffiliateDisclosurePage />;
      case '/privacy-policy':
        return <PrivacyPolicyPage />;
      case '/contact':
        return <ContactPage />;
      default:
        // Default to Home if unrecognized route
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#111827]">
      <Header />
      <main className="grow">
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
