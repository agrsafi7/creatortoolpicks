import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

interface EmailCaptureProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const EmailCapture: React.FC<EmailCaptureProps> = ({
  title = 'Get the Free Faceless Creator Starter Kit',
  subtitle = 'Checklists, standard operating procedures, and our tested setup blueprints for launching in 2026.',
  className = '',
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Form placeholder for newsletter / starter kit capture
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    // Non-functional email capture placeholder - logs intent and shows clean confirmation
    setSubmitted(true);
  };

  return (
    <div
      className={`bg-[#0B1F3A] text-white rounded-xl p-6 sm:p-8 border border-slate-700 shadow-md ${className}`}
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#2563EB]/20 text-[#2563EB] mb-4">
          <Mail className="w-6 h-6 text-[#2563EB]" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-slate-300 mb-6">{subtitle}</p>

        {submitted ? (
          <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-lg p-4 flex items-center justify-center gap-3 text-emerald-200">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-sm font-medium">
              Check your inbox! We've prepared the Faceless Creator Starter Kit for <strong>{email}</strong>.
            </span>
          </div>
        ) : (
          /* Form placeholder for email capture */
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="px-4 py-2.5 rounded-lg bg-slate-900/90 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent text-sm grow"
            />
            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-[#F59E0B] hover:bg-[#D97706] text-[#0B1F3A] font-bold text-sm transition-colors shrink-0 shadow-sm"
            >
              Get Free Kit
            </button>
          </form>
        )}

        <p className="text-xs text-slate-400 mt-3">
          Zero spam. Practical creator workflows only. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};
