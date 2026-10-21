import React from 'react';
import { Link } from '../context/RouterContext';
import {
  ShieldCheck,
  CheckCircle,
  XCircle,
  ArrowRight,
  Sliders,
  DollarSign,
  Maximize2,
  FileQuestion,
  Search,
  CheckSquare,
  RefreshCw,
  Award,
} from 'lucide-react';

export const HowWeTestPage: React.FC = () => {
  const criteria = [
    {
      num: '01',
      title: 'Core Functionality',
      desc: 'Does the software or piece of studio gear deliver on its fundamental promise? For AI voice tools, we test pronunciation, inflection, and consistency. For video generators, we measure rendering stability, subtitle timing, and export clarity.',
    },
    {
      num: '02',
      title: 'Ease of Use',
      desc: 'How quickly can a solo creator or team navigate the dashboard without referencing external manuals? We assess interface ergonomics, clarity of navigation, template discovery, and minimal click paths for routine tasks.',
    },
    {
      num: '03',
      title: 'Integrations & Workflow',
      desc: 'Does the tool operate smoothly inside a multi-software creator ecosystem? We examine export formats, cloud storage connections, webhook flexibility, payment gateways, and compatibility with standard video editors.',
    },
    {
      num: '04',
      title: 'Pricing Model & Value',
      desc: 'We examine transparency of billing, free plan viability, watermarking rules, and export allowances. We highlight hidden cost cliffs, forced annual commitments, or transaction fee surcharges.',
    },
    {
      num: '05',
      title: 'Scalability',
      desc: 'Can the tool support an expanding production schedule? We test how software handles increased video rendering volume, larger contact databases, multi-channel pipelines, and batch operations without throttling.',
    },
    {
      num: '06',
      title: 'Support & Documentation',
      desc: 'Is help readily available when production bugs occur? We review documentation thoroughness, video onboarding quality, knowledge base searchability, and customer support ticket response times.',
    },
  ];

  const steps = [
    {
      step: 'Step 1',
      title: 'Research',
      desc: 'We map the full landscape of software tools and creator hardware in each category. We monitor platform feature releases, API updates, and workflow changes to identify products worthy of evaluation.',
      icon: <Search className="w-5 h-5 text-[#2563EB]" />,
    },
    {
      step: 'Step 2',
      title: 'Evaluation',
      desc: 'Our editorial team runs each product through standardized production workflows—such as generating a full 8-minute faceless documentary script, testing audio capture with studio microphones, or setting up a 2-step opt-in funnel.',
      icon: <Sliders className="w-5 h-5 text-[#2563EB]" />,
    },
    {
      step: 'Step 3',
      title: 'Scoring Against Criteria',
      desc: 'We evaluate the tool across our six core criteria. Rather than publishing arbitrary numeric scores or star ratings that mislead readers, we deliver clear qualitative verdicts highlighting exact strengths, limits, and ideal use cases.',
      icon: <CheckSquare className="w-5 h-5 text-[#2563EB]" />,
    },
    {
      step: 'Step 4',
      title: 'Updates & Re-evaluation',
      desc: 'Software moves quickly. When platforms release major version upgrades, adjust plan quotas, or revamp their interfaces, we revisit our evaluations to keep our guides accurate for 2026.',
      icon: <RefreshCw className="w-5 h-5 text-[#2563EB]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-14 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Editorial Standards &amp; Methodology</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
            How We Test
          </h1>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            At CreatorToolPicks, our recommendations are grounded in independent research, structured criteria, and practical creator workflows.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* 6 Evaluation Criteria Cards */}
        <section>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block mb-1">
              Standardized Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
              Our 6 Evaluation Criteria
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Every tool and piece of hardware is assessed consistently across these six functional pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {criteria.map((c) => (
              <div
                key={c.num}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-[#2563EB] transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-extrabold text-[#2563EB] uppercase tracking-wider block mb-2">
                    {c.num}
                  </span>
                  <h3 className="text-lg font-bold text-[#111827] mb-2">
                    {c.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4-Step Process */}
        <section className="bg-slate-50 border border-gray-200 rounded-2xl p-6 sm:p-10">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block mb-1">
              From Discovery to Publication
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
              Our 4-Step Evaluation Process
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              A transparent breakdown of how products move through our review lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div key={st.step} className="bg-white border border-gray-200 rounded-xl p-5 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  {st.icon}
                </div>
                <div>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                    {st.step}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 mt-0.5">
                    {st.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How We Make Money */}
        <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block mb-2">
              Financial Model &amp; Transparency
            </span>
            <h2 className="text-2xl font-bold text-[#111827] mb-4">
              How We Make Money
            </h2>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                CreatorToolPicks is reader-supported. When readers click affiliate links on our site and make a purchase or subscribe to a software plan, we may receive an affiliate commission from the merchant.
              </p>
              <p>
                This commission comes at no additional cost to you. In many instances, affiliate partnerships allow us to highlight verified pricing tiers or standard free access periods.
              </p>
              <p>
                Crucially, affiliate commercial relationships <strong>never</strong> dictate which products we recommend or how we evaluate them. If a tool fails our functionality or ease-of-use evaluation, it does not receive a top recommendation regardless of commission rate.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do Not Do */}
        <section className="bg-rose-50/40 border border-rose-200 rounded-2xl p-6 sm:p-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-wider block mb-2">
              Ethical Guardrails
            </span>
            <h2 className="text-2xl font-bold text-[#111827] mb-4">
              What We Do Not Do
            </h2>
            <div className="space-y-3 text-sm text-gray-800">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">No Paid Rankings:</strong> We never sell the "#1 Top Pick" spot or allow brands to buy placement in our comparison tables.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">No Fake Scores or Star Ratings:</strong> We do not fabricate arbitrary decimal scores (e.g., 9.7/10) to create a false impression of scientific precision. We provide nuanced, qualitative use-case verdicts.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">No Undisclosed Sponsorships:</strong> We never publish sponsored blog articles disguised as independent editorial reviews. Every commercial link is paired with a clear disclosure.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-900">No Income Guarantees:</strong> We do not make unrealistic income claims or promise overnight channel success. Content production requires disciplined systems and quality output.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Button to /tools-gear */}
        <section className="text-center py-6">
          <Link
            href="/tools-gear"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-base font-bold bg-[#F59E0B] hover:bg-[#D97706] text-[#0B1F3A] transition-colors shadow-sm"
          >
            <span>Explore Tested Tools &amp; Gear</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </div>
    </div>
  );
};
