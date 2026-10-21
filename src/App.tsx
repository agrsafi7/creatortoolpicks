/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
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

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  // Normalize path by stripping trailing slash (unless root)
  const normalizedPath = currentPath.length > 1 && currentPath.endsWith('/')
    ? currentPath.slice(0, -1)
    : currentPath;

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
