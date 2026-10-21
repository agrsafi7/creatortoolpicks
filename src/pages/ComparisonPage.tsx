import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { EmailCapture } from '../components/EmailCapture';
import {
  Scale,
  Clock,
  ShieldCheck,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Check,
  Video,
  Film,
  Layers,
  ArrowRight,
} from 'lucide-react';

export const ComparisonPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handlePictoryClick = (e: React.MouseEvent) => {
    // Outbound affiliate link placeholder
    // TODO: Replace with real affiliate link for Pictory
    e.preventDefault();
    window.open('https://pictory.ai', '_blank');
  };

  const handleInVideoClick = (e: React.MouseEvent) => {
    // Outbound affiliate link placeholder
    // TODO: Replace with real affiliate link for InVideo
    e.preventDefault();
    window.open('https://invideo.io', '_blank');
  };

  const comparisonRows = [
    {
      feature: 'Free Trial / Free Access',
      pictory: 'Free trial allowing 3 video projects (up to 10 minutes each) with watermark.',
      invideo: 'Free tier with weekly export allowance and watermark.',
    },
    {
      feature: 'Faceless Video Capabilities',
      pictory: 'Specialized for script-to-video, article-to-video, and long-form YouTube documentary assembly.',
      invideo: 'Specialized for prompt-to-video AI scripts, social vertical edits, and rapid template rendering.',
    },
    {
      feature: 'AI Voiceovers',
      pictory: 'Integrated synthetic AI voices with auto-alignment to video scene timing.',
      invideo: 'Integrated AI text-to-speech engine with multi-language and accent options.',
    },
    {
      feature: 'Stock Media Library',
      pictory: 'Access to millions of royalty-free stock videos and images via Storyblocks & Getty partnerships.',
      invideo: 'Access to iStock and Storyblocks stock libraries directly inside the video canvas.',
    },
    {
      feature: 'Subtitle & Caption Automation',
      pictory: 'Automatic auto-captioning with word-by-word highlight animations and subtitle burning.',
      invideo: 'Automated subtitles with kinetic text presets, custom fonts, and multi-track styling.',
    },
    {
      feature: 'Timeline & Granular Editing',
      pictory: 'Scene-based storyboarding editor with simple clip swaps and audio leveling.',
      invideo: 'Advanced multi-track timeline editor allowing frame-accurate trimming, transitions, and overlays.',
    },
    {
      feature: 'Watermark Policy',
      pictory: 'Watermarks removed on all standard paid subscriptions.',
      invideo: 'Watermarks removed on all paid creator plans.',
    },
    {
      feature: 'Commercial Rights',
      pictory: 'Full commercial usage rights included on paid plan exports.',
      invideo: 'Full commercial rights granted for YouTube, TikTok, and social distribution.',
    },
    {
      feature: 'Customer Support',
      pictory: 'Help center documentation, video tutorials, and ticketing email assistance.',
      invideo: 'Comprehensive knowledge base, community group, and email support desk.',
    },
  ];

  const faqs = [
    {
      q: 'Which tool is better for faceless YouTube documentaries?',
      a: 'Pictory is typically better suited for long-form YouTube documentaries because its scene-matching engine processes full 2,000+ word scripts and automatically pairs individual sentences with relevant B-roll footage.',
    },
    {
      q: 'Can I generate YouTube Shorts and TikToks automatically?',
      a: 'Both tools support vertical (9:16) video generation. InVideo excels when generating short-form videos from quick thematic prompts, while Pictory allows you to automatically extract highlights from longer video recordings.',
    },
    {
      q: 'Can I upload my own custom voiceovers from ElevenLabs?',
      a: 'Yes. Both Pictory and InVideo allow you to upload MP3 or WAV voiceover files and automatically sync visual scenes and auto-generated captions to your recorded audio.',
    },
    {
      q: 'Are the stock footage clips safe from copyright strikes?',
      a: 'Yes. Stock media from Storyblocks, iStock, and Getty provided inside both platforms comes with commercial clearance for online media distribution when exported through an active paid account.',
    },
    {
      q: 'Do I need video editing experience to use either platform?',
      a: 'No. Both platforms are designed for non-editors. Pictory uses a scene-by-scene script interface, while InVideo provides an AI prompt assistant alongside an optional multi-layer timeline for users who want deeper control.',
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-slate-50 border-b border-gray-200 text-xs text-gray-500 py-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <span>/</span>
          <Link href="/tools-gear" className="hover:text-gray-900">Comparisons</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">Pictory vs InVideo</span>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Title & Metadata */}
        <div className="space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-bold uppercase tracking-wider rounded">
            Side-by-Side Evaluation
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
            Pictory vs InVideo — Best AI Video Tool for Faceless Channels?
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
            <span className="text-[#2563EB] font-medium">Side-by-Side Review</span>
          </div>
        </div>

        {/* State the Evaluation Criteria FIRST */}
        <div className="bg-slate-50 border border-gray-200 rounded-xl p-6 sm:p-7 mb-10">
          <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Standardized Evaluation Framework</span>
          </div>
          <h2 className="text-xl font-bold text-[#111827] mb-2">
            Our Evaluation Criteria for AI Video Tools
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Before comparing workflows and features, we evaluated both tools against our six foundational testing criteria:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs text-gray-700">
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <strong className="block text-gray-900 mb-1">1. Core Functionality</strong>
              <span>Accuracy of automated scene-to-script pairing and caption rendering.</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <strong className="block text-gray-900 mb-1">2. Ease of Use</strong>
              <span>Speed from script pasting or prompt generation to final preview render.</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <strong className="block text-gray-900 mb-1">3. Integrations</strong>
              <span>Support for external voiceover imports (e.g. ElevenLabs) and stock libraries.</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <strong className="block text-gray-900 mb-1">4. Pricing &amp; Value</strong>
              <span>Monthly video quotas, export resolutions, and commercial licensing terms.</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <strong className="block text-gray-900 mb-1">5. Scalability</strong>
              <span>Performance handling batch rendering and recurring weekly channel pipelines.</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <strong className="block text-gray-900 mb-1">6. Support</strong>
              <span>Comprehensive documentation, ticketing turnaround, and tutorial resources.</span>
            </div>
          </div>
        </div>

        {/* Two-Column Verdict Box by Use Case (NO SCORES, NO PRICES) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Pictory Verdict Card */}
          <div className="bg-white border-2 border-[#2563EB] rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
                  Platform 1
                </span>
                <span className="text-xs font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
                  Budget Pick
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#111827] mb-2">Pictory</h3>
              <div className="text-sm text-gray-700 mb-4 pb-4 border-b border-gray-100">
                <strong className="text-gray-900 block mb-1">Verdict by Use Case:</strong>
                <span>Best for long-form script-to-video and documentary-style faceless YouTube channels.</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Excels when you bring a pre-written, detailed script and want individual sentences automatically mapped to thematic B-roll with synced captions.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <a
                href="#"
                onClick={handlePictoryClick}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold text-[#0B1F3A] bg-[#F59E0B] hover:bg-[#D97706] transition-colors"
              >
                <span>Visit Pictory Site</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* InVideo Verdict Card */}
          <div className="bg-white border-2 border-slate-700 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Platform 2
                </span>
                <span className="text-xs font-bold bg-slate-100 text-slate-800 px-2 py-0.5 rounded">
                  Prompt Generator
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#111827] mb-2">InVideo</h3>
              <div className="text-sm text-gray-700 mb-4 pb-4 border-b border-gray-100">
                <strong className="text-gray-900 block mb-1">Verdict by Use Case:</strong>
                <span>Best for Shorts/Reels, prompt-to-video generation, and granular timeline adjustments.</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Excels when you want an AI copilot to write the script from a prompt, select visuals, generate voiceover, and provide an open timeline for frame-by-frame adjustments.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <a
                href="#"
                onClick={handleInVideoClick}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold text-white bg-[#0B1F3A] hover:bg-slate-800 transition-colors"
              >
                <span>Visit InVideo Site</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Side-by-Side Comparison Table */}
        <section className="mb-14">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#111827]">
              Feature-by-Feature Comparison
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Factual assessment of capabilities, media rights, and editing controls.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl overflow-x-auto shadow-xs">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#0B1F3A] text-white">
                  <th className="p-4 font-bold text-xs uppercase tracking-wider w-1/4">Feature / Capability</th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider w-3/8 border-l border-slate-700">Pictory</th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider w-3/8 border-l border-slate-700">InVideo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-800">
                {comparisonRows.map((row, idx) => (
                  <tr key={row.feature} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                    <td className="p-4 font-semibold text-gray-900 align-top text-xs sm:text-sm">
                      {row.feature}
                    </td>
                    <td className="p-4 align-top text-xs sm:text-sm border-l border-gray-200 leading-relaxed">
                      {row.pictory}
                    </td>
                    <td className="p-4 align-top text-xs sm:text-sm border-l border-gray-200 leading-relaxed">
                      {row.invideo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pricing Section (Pointing readers to official sites with NO prices) */}
        <section className="bg-slate-50 border border-gray-200 rounded-xl p-6 sm:p-8 mb-14 text-center">
          <h2 className="text-2xl font-bold text-[#111827] mb-2">
            Subscription Pricing &amp; Quotas
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-6">
            Both platforms update plan tiers, monthly video minute quotas, and annual promotions periodically. We recommend checking current official pricing directly before subscribing:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              onClick={handlePictoryClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-[#0B1F3A] bg-[#F59E0B] hover:bg-[#D97706] transition-colors"
            >
              <span>Check Pictory Pricing</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="#"
              onClick={handleInVideoClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white bg-[#0B1F3A] hover:bg-slate-800 transition-colors"
            >
              <span>Check InVideo Pricing</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Both tools offer free preview tiers to test scene generation before upgrading.
          </p>
        </section>

        {/* Head-to-Head Detailed Sections */}
        <div className="prose prose-slate max-w-none space-y-10 text-gray-800 leading-relaxed text-base">
          <section>
            <h2 className="text-2xl font-bold text-[#111827] mb-3">
              1. Workflow &amp; Ease of Use
            </h2>
            <p>
              The core workflow difference lies in the starting point. Pictory was engineered around the assumption that you already possess a completed text script or article. You paste your text into the script editor, and Pictory breaks your copy into discrete scenes sentence by sentence.
            </p>
            <p className="mt-3">
              InVideo operates with a prompt-first design language. You can enter an open instruction such as "Create an informative 60-second video on how jet engines work with dramatic background music", and the system writes the script, selects visual scenes, and layers a generated voiceover in a single automated step.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111827] mb-3">
              2. Stock Media &amp; Visual Relevance
            </h2>
            <p>
              Both platforms license extensive stock catalogs from providers such as Storyblocks and iStock. In Pictory, if an automatically selected video clip does not match your creative vision, you click the "Visuals" tab, search an alternate keyword, and replace the clip with a single click while preserving subtitles and audio timing.
            </p>
            <p className="mt-3">
              InVideo allows both prompt-based script visual changes (for instance typing "Replace scene 3 with an aerial clip of an airport") and manual drag-and-drop substitutions from the asset panel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111827] mb-3">
              3. AI Voice Quality
            </h2>
            <p>
              Both platforms include built-in synthetic text-to-speech voices across multiple accents. However, serious faceless channel operators frequently prefer dedicated voice engines such as ElevenLabs for enhanced emotional inflection and natural cadence.
            </p>
            <p className="mt-3">
              Both Pictory and InVideo support external audio file uploads. You can generate a voiceover file in ElevenLabs, import the audio file into either platform, and let the software synchronize subtitles and scene transitions to the vocal waveform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111827] mb-3">
              4. Shorts vs. Long-Form
            </h2>
            <p>
              For vertical short-form content (YouTube Shorts, Instagram Reels, and TikTok), InVideo provides dynamic caption templates with glowing word highlights, animated stickers, and fast-paced sound effects tailored to high-retention feeds.
            </p>
            <p className="mt-3">
              Pictory shines in 8 to 15 minute long-form YouTube explainer videos where consistency, clean scene-by-scene organization, and rapid text editing take precedence over flashy kinetic overlays.
            </p>
          </section>
        </div>

        {/* Final Verdict by Use Case */}
        <section className="bg-slate-50 border border-gray-200 rounded-xl p-6 sm:p-8 my-12">
          <h2 className="text-2xl font-bold text-[#111827] mb-4">
            Final Recommendation by Use Case
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <strong className="text-gray-900 block font-bold text-base mb-1">
                Choose Pictory if:
              </strong>
              <p className="text-sm text-gray-700">
                You focus primarily on <strong>YouTube long-form content</strong>, write your own comprehensive scripts, and want a streamlined scene-by-scene workflow with straightforward B-roll matching.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <strong className="text-gray-900 block font-bold text-base mb-1">
                Choose InVideo if:
              </strong>
              <p className="text-sm text-gray-700">
                You focus heavily on <strong>Shorts/Reels</strong>, want prompt-to-video AI scripting, or desire <strong>granular timeline control</strong> where you can layer sound effects, customize video tracks, and adjust precise keyframes.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Accordion with 5 Genuine Questions */}
        <section className="mb-14">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#111827]">
              Frequently Asked Questions: Pictory vs InVideo
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Practical answers to help you determine which rendering engine fits your channel format.
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

        {/* Email Capture Box */}
        <section className="my-12">
          <EmailCapture
            title="Get the Free Faceless Creator Starter Kit"
            subtitle="Includes our prompt templates for video tools, stock search keyword cheat sheet, and 2026 channel launch checklist."
          />
        </section>
      </article>
    </div>
  );
};
