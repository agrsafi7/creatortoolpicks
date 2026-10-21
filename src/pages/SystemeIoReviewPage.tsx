import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import {
  ShieldCheck,
  Check,
  X,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Layers,
  ArrowRight,
  Info,
  DollarSign,
  HelpCircle,
  Clock,
  UserCheck,
} from 'lucide-react';

export const SystemeIoReviewPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleOutboundClick = (e: React.MouseEvent) => {
    // Outbound affiliate link placeholder
    // TODO: Replace with real affiliate link for Systeme.io
    e.preventDefault();
    window.open('https://systeme.io', '_blank');
  };

  const faqs = [
    {
      q: 'Is the free plan really free?',
      a: 'Yes. Systeme.io provides a permanent free plan with up to 2,000 contacts, unlimited email sends, 3 sales funnels, 1 blog, 1 course, and 1 custom domain with no credit card required at sign-up.',
    },
    {
      q: 'Does Systeme.io charge transaction fees?',
      a: 'No. Systeme.io charges 0% platform transaction fees on any plan, including the free tier. Standard payment processing fees charged directly by Stripe or PayPal still apply.',
    },
    {
      q: 'Can I use my own domain?',
      a: 'Yes. Even on the free tier, you can connect 1 custom custom domain with free SSL certificate configuration. Higher tiers provide 3, 10, or unlimited custom domains.',
    },
    {
      q: 'How is email deliverability handled?',
      a: 'Systeme.io operates its own shared IP clusters and requires domain verification (SPF, DKIM, and DMARC records). Because users send marketing emails through these clusters, reputation maintenance requires strict compliance with list-cleaning standards.',
    },
    {
      q: 'How hard is migration from other tools?',
      a: 'You can export contact lists (CSV format) from any autoresponder and import them directly with custom fields. Funnel pages and courses must be rebuilt manually or migrated using Systeme.io customer support assistance available on annual paid plans.',
    },
  ];

  const pricingTiers = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        '2,000 contacts',
        'Unlimited emails sent',
        '3 sales funnels (15 steps total)',
        '1 blog & unlimited blog posts',
        '1 course membership',
        '1 custom domain',
        '0% platform transaction fees',
      ],
      highlight: true,
    },
    {
      name: 'Startup',
      price: '$17/mo',
      period: 'billed monthly',
      features: [
        '5,000 contacts',
        'Unlimited emails sent',
        '10 sales funnels (50 steps)',
        '5 blogs',
        '5 course memberships',
        '3 custom domains',
        '10 automation rules & 10 tags',
      ],
      highlight: false,
    },
    {
      name: 'Webinar',
      price: '$47/mo',
      period: 'billed monthly',
      features: [
        '10,000 contacts',
        'Unlimited emails sent',
        '50 sales funnels (300 steps)',
        '20 blogs',
        '20 course memberships',
        '10 custom domains',
        '10 evergreen automated webinars',
      ],
      highlight: false,
    },
    {
      name: 'Unlimited',
      price: '$97/mo',
      period: 'billed monthly',
      features: [
        'Unlimited contacts',
        'Unlimited emails sent',
        'Unlimited sales funnels',
        'Unlimited blogs',
        'Unlimited courses',
        'Unlimited custom domains',
        'Free 1-on-1 migration service',
      ],
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-slate-50 border-b border-gray-200 text-xs text-gray-500 py-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <span>/</span>
          <Link href="/tools-gear" className="hover:text-gray-900">Tools &amp; Gear</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">Systeme.io Review</span>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Title & Metadata */}
        <div className="space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 text-[#0B1F3A] text-xs font-bold uppercase tracking-wider rounded">
            Top Pick — Business Tools
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
            Systeme.io Review (2026): The All-in-One Funnel Platform for Faceless Creators
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-2 border-b border-gray-100 pb-4">
            <span className="font-semibold text-gray-800">
              By CreatorToolPicks Editorial Team
            </span>
            <span>&middot;</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              Updated 2026
            </span>
            <span>&middot;</span>
            <span className="text-[#2563EB] font-medium">Independent Evaluation</span>
          </div>
        </div>

        {/* Verdict Box (STRICT: NO SCORE, NO STARS) */}
        <div className="bg-slate-50 border-2 border-[#2563EB] rounded-2xl p-6 sm:p-8 mb-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block">
                Editorial Verdict
              </span>
              <h2 className="text-2xl font-bold text-[#111827]">
                Systeme.io
              </h2>
              <div className="text-sm text-gray-700">
                <strong className="text-gray-900">Best for: </strong>
                <span>digital product sellers who want funnels, email marketing and hosted courses in one tool</span>
              </div>
              <div className="text-sm text-gray-700">
                <strong className="text-gray-900">Pricing: </strong>
                <span className="font-bold text-[#0B1F3A]">Free forever ($0) / Paid from $17/mo</span>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
              <a
                href="#"
                onClick={handleOutboundClick}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-base font-bold text-[#0B1F3A] bg-[#F59E0B] hover:bg-[#D97706] transition-colors shadow-sm"
              >
                <span>Try Systeme.io Free</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <span className="text-[11px] text-gray-500">
                We may earn a commission if you buy through this link.
              </span>
            </div>
          </div>
        </div>

        {/* Why Trust Us Strip */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 mb-10 text-xs text-gray-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold text-gray-900">
            <ShieldCheck className="w-5 h-5 text-[#2563EB] shrink-0" />
            <span>Why Trust CreatorToolPicks:</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
            <span>&bull; Evaluated on published criteria</span>
            <span>&bull; No pay-for-placement</span>
            <span>&bull; 100% reader-supported research</span>
          </div>
        </div>

        {/* Pros & Cons in Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Pros */}
          <div className="border border-emerald-200 bg-emerald-50/40 rounded-xl p-6">
            <h3 className="text-base font-bold text-emerald-950 flex items-center gap-2 mb-4">
              <Check className="w-5 h-5 text-emerald-600" />
              Pros
            </h3>
            <ul className="space-y-3 text-sm text-gray-800">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                <span>Free plan with 2,000 contacts and unlimited emails</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                <span>All-in-one funnels, email sequences, and hosted courses</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                <span>0% transaction fees on all tiers, including free</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                <span>Simple, drag-and-drop landing page and funnel builder</span>
              </li>
            </ul>
          </div>

          {/* Cons */}
          <div className="border border-rose-200 bg-rose-50/40 rounded-xl p-6">
            <h3 className="text-base font-bold text-rose-950 flex items-center gap-2 mb-4">
              <X className="w-5 h-5 text-rose-600" />
              Cons
            </h3>
            <ul className="space-y-3 text-sm text-gray-800">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-2 shrink-0" />
                <span>Dated default page and email templates require customization</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-2 shrink-0" />
                <span>Limited native integrations compared to dedicated SaaS providers</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-2 shrink-0" />
                <span>Basic community and discussion features compared to Circle or Skool</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-2 shrink-0" />
                <span>Rigid automation logic for multi-branch complex workflows</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pricing Table with 4 Tiers */}
        <section className="mb-14">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#111827]">
              Systeme.io Pricing Tiers (2026)
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              All plans include zero transaction fees and unlimited email broadcast volume.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-white rounded-xl border ${
                  tier.highlight ? 'border-[#2563EB] ring-2 ring-[#2563EB]/20 shadow-md' : 'border-gray-200 shadow-sm'
                } p-5 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900 text-lg">{tier.name}</h3>
                    {tier.highlight && (
                      <span className="text-[10px] bg-blue-100 text-[#2563EB] font-bold px-2 py-0.5 rounded">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-extrabold text-[#0B1F3A]">{tier.price}</span>
                    <span className="text-xs text-gray-500 block">{tier.period}</span>
                  </div>
                  <ul className="space-y-2 text-xs text-gray-700 border-t border-gray-100 pt-4">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#2563EB] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <a
                    href="#"
                    onClick={handleOutboundClick}
                    className="w-full inline-flex items-center justify-center px-3 py-2 rounded-lg text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors text-center"
                  >
                    Select Plan
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Review Sections */}
        <div className="prose prose-slate max-w-none space-y-10 text-gray-800 leading-relaxed text-base">
          <section>
            <h2 className="text-2xl font-bold text-[#111827] mb-3">
              What It Is
            </h2>
            <p>
              Systeme.io is an all-in-one marketing suite designed to replace disjointed tool stacks. Rather than paying separately for landing page builders, email marketing software, video course hosting platforms, and affiliate management dashboards, Systeme.io compiles these core utilities into a unified back-office.
            </p>
            <p className="mt-3">
              For faceless channel creators who operate media brands on YouTube, TikTok, or Instagram, the platform serves as the monetization backend. When viewers click a link in your bio or video description, Systeme.io hosts the opt-in page, sends automated email lead magnets, delivers digital download files, and processes payments without third-party integration overhead.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111827] mb-3">
              Key Features
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">1. Sales Funnel Builder</h3>
                <p className="text-sm text-gray-700 mt-1">
                  The visual funnel builder allows creators to connect opt-in squeeze pages, sales pages, order forms, upsells, and thank-you pages. Each step can be configured with automated trigger rules such as tagging a contact upon form submission or enrolling a customer in a digital course immediately after purchase.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">2. Integrated Email Marketing</h3>
                <p className="text-sm text-gray-700 mt-1">
                  Unlike standalone autoresponders that penalize contact list growth with steep price cliffs, Systeme.io includes unlimited email broadcasts across every tier. You can schedule time-released email campaigns, send one-off newsletters, and segment audience members using tags based on link clicks or purchase actions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">3. Course and Membership Hosting</h3>
                <p className="text-sm text-gray-700 mt-1">
                  You can upload video lectures, audio files, and downloadable PDF worksheets directly into protected course modules. Content can be released all at once or dripped out over a set number of days. Student login credentials are automatically generated upon payment.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111827] mb-3">
              Ease of Use
            </h2>
            <p>
              The learning curve for Systeme.io is moderate. The builder uses standard drag-and-drop rows and columns reminiscent of early WordPress page builders. While it does not offer the hyper-polished design freedom of Webflow or Framer, creating a functional two-step opt-in page typically takes less than thirty minutes.
            </p>
            <p className="mt-3">
              The primary advantage in day-to-day operation is the lack of webhook troubleshooting. Because the form, contact database, and email campaign reside in the same database, you do not have to debug Zapier connections or API tokens when capturing new leads.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111827] mb-3">
              Integrations
            </h2>
            <p>
              Systeme.io integrates directly with Stripe, PayPal, Razorpay, and Mercado Pago for payment gateway processing. For external software, it provides native Zapier and Make (Integromat) modules alongside standard webhooks.
            </p>
            <p className="mt-3">
              However, native third-party app connections are limited compared to enterprise platforms. If your workflow relies on deep, bi-directional CRM syncing with Salesforce or HubSpot, you will need to utilize webhook bridges.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111827] mb-3">
              Value for Money
            </h2>
            <p>
              From a pure economic perspective, Systeme.io is among the most cost-effective platforms in the creator software space. The permanent free plan with 2,000 contacts and 0% transaction fees allows a faceless channel to validate digital products and build an email audience with zero monthly software overhead. Even when scaling to the Startup tier ($17/mo), it remains significantly less expensive than running separate subscriptions for ConvertKit, Teachable, and Leadpages.
            </p>
          </section>
        </div>

        {/* Who it's for / Who should skip it */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
          <div className="bg-slate-50 border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-[#2563EB]" />
              Who It&apos;s For
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#2563EB] font-bold">&bull;</span>
                <span>Faceless creators launching their first digital product or ebook</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2563EB] font-bold">&bull;</span>
                <span>Solo operators who want email, checkout, and courses in a single login</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2563EB] font-bold">&bull;</span>
                <span>Creators on a budget who want 0% platform transaction fees</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
              <X className="w-5 h-5 text-gray-400" />
              Who Should Skip It
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 font-bold">&bull;</span>
                <span>Designers demanding bespoke CSS styling and high-end typography</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 font-bold">&bull;</span>
                <span>Creators requiring gamified, Discord-style community forums</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 font-bold">&bull;</span>
                <span>Enterprise businesses with complex multi-branch marketing logic</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Alternatives Row (ClickFunnels, Kajabi, GetResponse) with "Check Price" and NO PRICES */}
        <section className="mb-14">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#111827]">
              Notable Alternatives to Systeme.io
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Alternative platforms for creators evaluating different funnel architectures and email ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-xl p-5 bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">ClickFunnels</h3>
                <p className="text-xs text-gray-600 mb-3">
                  Pioneer of sales funnels with advanced split-testing and enterprise checkout flows.
                </p>
                <div className="text-xs text-gray-500">
                  <strong>Best for:</strong> High-ticket funnel specialists
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100 mt-4">
                <a
                  href="#"
                  onClick={(e) => {
                    // Outbound placeholder for ClickFunnels
                    // TODO: Replace with real affiliate link for ClickFunnels
                    e.preventDefault();
                    window.open('https://clickfunnels.com', '_blank');
                  }}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-[#0B1F3A] bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <span>Check Price</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5 bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Kajabi</h3>
                <p className="text-xs text-gray-600 mb-3">
                  Premium all-in-one suite with integrated podcast hosting, coaching, and student mobile app.
                </p>
                <div className="text-xs text-gray-500">
                  <strong>Best for:</strong> Established course academies
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100 mt-4">
                <a
                  href="#"
                  onClick={(e) => {
                    // Outbound placeholder for Kajabi
                    // TODO: Replace with real affiliate link for Kajabi
                    e.preventDefault();
                    window.open('https://kajabi.com', '_blank');
                  }}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-[#0B1F3A] bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <span>Check Price</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5 bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">GetResponse</h3>
                <p className="text-xs text-gray-600 mb-3">
                  Robust email marketing platform with autoresponders, webinars, and conversion funnels.
                </p>
                <div className="text-xs text-gray-500">
                  <strong>Best for:</strong> Dedicated newsletter list builders
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100 mt-4">
                <a
                  href="#"
                  onClick={(e) => {
                    // Outbound placeholder for GetResponse
                    // TODO: Replace with real affiliate link for GetResponse
                    e.preventDefault();
                    window.open('https://getresponse.com', '_blank');
                  }}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-[#0B1F3A] bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <span>Check Price</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Accordion with 5 Genuine Questions */}
        <section className="mb-14">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#111827]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Factual answers regarding features, quotas, domain setup, and migration.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl divide-y divide-gray-200 bg-white">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.q} className="p-4 sm:p-5">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 font-bold text-gray-900 hover:text-[#2563EB] transition-colors"
                  >
                    <span className="text-base">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <p className="text-sm text-gray-700 leading-relaxed mt-3 pt-2 border-t border-gray-100">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Related Comparisons */}
        <section className="bg-slate-50 border border-gray-200 rounded-xl p-6 mb-12">
          <h3 className="font-bold text-base text-gray-900 mb-3">
            Related Comparisons &amp; Resources
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/compare/pictory-vs-invideo"
              className="p-4 bg-white border border-gray-200 rounded-lg hover:border-[#2563EB] transition-colors block"
            >
              <span className="text-xs font-bold text-[#2563EB] uppercase block mb-1">
                Video Stack Comparison
              </span>
              <span className="font-bold text-gray-900 block text-sm">
                Pictory vs InVideo: Best AI Video Tool for Faceless Channels?
              </span>
            </Link>

            <Link
              href="/blog/how-to-start-a-faceless-channel-2026"
              className="p-4 bg-white border border-gray-200 rounded-lg hover:border-[#2563EB] transition-colors block"
            >
              <span className="text-xs font-bold text-[#2563EB] uppercase block mb-1">
                Monetization Blueprint
              </span>
              <span className="font-bold text-gray-900 block text-sm">
                How to Start a Faceless Channel in 2026: The Complete Guide
              </span>
            </Link>
          </div>
        </section>

        {/* Final CTA Box */}
        <section className="bg-[#0B1F3A] text-white rounded-2xl p-8 text-center border border-slate-700 mb-12">
          <h3 className="text-2xl font-extrabold text-white mb-3">
            Ready to Build Your Creator Funnel?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Get started with 2,000 contacts, unlimited email broadcasts, and zero platform transaction fees on the free tier.
          </p>
          <a
            href="#"
            onClick={handleOutboundClick}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-base font-bold bg-[#F59E0B] hover:bg-[#D97706] text-[#0B1F3A] transition-colors shadow-md"
          >
            <span>Try Systeme.io Free</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <p className="text-[11px] text-slate-400 mt-3">
            No credit card required. Free forever plan available.
          </p>
        </section>
      </article>

      {/* Sticky Mobile Bottom Bar with the "Try Systeme.io Free" CTA on small screens */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-[#0B1F3A] border-t border-slate-700 p-3 sm:hidden shadow-2xl flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-white">Systeme.io</span>
          <span className="text-[10px] text-slate-300">Free forever plan available</span>
        </div>
        <a
          href="#"
          onClick={handleOutboundClick}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-[#F59E0B] text-[#0B1F3A] hover:bg-[#D97706] transition-colors shrink-0"
        >
          <span>Try Free</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
