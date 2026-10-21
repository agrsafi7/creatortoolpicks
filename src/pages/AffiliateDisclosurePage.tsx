import React from 'react';
import { Link } from '../context/RouterContext';
import { ShieldCheck, Info, CheckCircle2, AlertCircle } from 'lucide-react';

export const AffiliateDisclosurePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-gradient-to-b from-slate-50 to-white py-14 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 text-[#0B1F3A] text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            <Info className="w-4 h-4 text-[#F59E0B]" />
            <span>Compliance &amp; Transparency (2026)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
            Affiliate Disclosure
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Full plain-language disclosure regarding how CreatorToolPicks is funded, our affiliate partnerships, and our commitment to editorial independence.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10 text-gray-800 leading-relaxed text-base">
        <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-6 text-sm text-gray-800 space-y-3">
          <div className="font-bold text-[#0B1F3A] text-base flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#2563EB]" />
            Summary for Readers
          </div>
          <p>
            CreatorToolPicks is reader-supported. When you click links on our site and make a purchase or subscribe to a software plan, we may earn an affiliate commission.
          </p>
          <p className="font-semibold text-gray-900">
            This commission never increases the price you pay, and it never influences our verdicts, rankings, or product badges.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#111827]">What Are Affiliate Links?</h2>
          <p>
            Some of the links on CreatorToolPicks are affiliate links. When you click on an affiliate link and subsequently purchase a product or sign up for a paid subscription on the merchant's website, a tracking cookie registers that you arrived from our site. If you complete a transaction, the vendor pays us a referral commission.
          </p>
          <p>
            This funding model allows us to pay our editorial researchers, maintain our testing infrastructure, and keep our guides, comparison tables, and directory free to all readers without disruptive pop-up banner advertising.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#111827]">Zero Influence on Rankings and Verdicts</h2>
          <p>
            Our editorial integrity is our only asset. We adhere to strict internal separation between commercial relationships and editorial reviews:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
            <li>
              <strong>No Pay-to-Rank:</strong> Software companies cannot purchase top spots, "Top Pick" badges, or favored placements in our comparison tables.
            </li>
            <li>
              <strong>Consistent Criteria:</strong> Products are evaluated against our published six testing criteria (Core Functionality, Ease of Use, Integrations, Pricing &amp; Value, Scalability, and Support).
            </li>
            <li>
              <strong>Unbiased Critique:</strong> If a tool suffers from rigid automations, dated templates, or poor export quotas, we highlight those drawbacks prominently in our pros and cons.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#111827]">Amazon Associates Disclosure</h2>
          <p>
            CreatorToolPicks participates in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and affiliated international marketplaces.
          </p>
          <p>
            When we recommend studio microphones, desk lighting, or laptop stands, we link to verified product listings on Amazon.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#111827]">Our Own Products</h2>
          <p>
            In addition to reviewing third-party tools, we offer our own educational resources, such as the <strong>Faceless Digital Marketing Playbook</strong> ($37). These products are clearly badged with &ldquo;Our Product&rdquo; across our site so you always know when you are purchasing directly from CreatorToolPicks.
          </p>
        </section>

        <section className="border-t border-gray-200 pt-8 text-xs text-gray-500">
          <p>
            Last updated: October 2026. If you have questions regarding our disclosures or editorial guidelines, please contact us via our <Link href="/contact" className="text-[#2563EB] underline">Contact Page</Link>.
          </p>
        </section>
      </div>
    </div>
  );
};
