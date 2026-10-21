import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Product Suggestion');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Form placeholder for contact inquiries (marked as non-functional placeholder in code)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    // Contact form placeholder: shows clean feedback message to user
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-gradient-to-b from-slate-50 to-white py-14 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block mb-2">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
            Contact Editorial Team
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto leading-relaxed">
            Have a tool suggestion, correction, or question about our testing criteria? Reach out to our research staff.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Message Received</h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Thank you, <strong>{name || 'reader'}</strong>. Our editorial team reviews reader submissions weekly and will follow up at <strong>{email}</strong> if relevant.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setMessage('');
                }}
                className="mt-4 px-5 py-2 text-xs font-bold text-[#2563EB] bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            /* Non-functional contact form placeholder marked in code */
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Subject / Topic
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                >
                  <option value="Product Suggestion">Suggest a Tool or Studio Gear</option>
                  <option value="Editorial Correction">Report Pricing or Feature Change</option>
                  <option value="Methodology Question">Question Regarding Criteria</option>
                  <option value="General">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about the tool, feedback, or verification question..."
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent resize-y"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-[#F59E0B] hover:bg-[#D97706] text-[#0B1F3A] transition-colors shadow-sm"
                >
                  <span>Send Message to Editorial Team</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-gray-500 text-center">
                Note: We do not accept sponsored article requests or paid link placements.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
