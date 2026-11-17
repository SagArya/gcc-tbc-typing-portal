// src/app/contact/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-xs font-semibold hover:bg-slate-100 dark:hover:bg-white/[0.08] transition"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-500" />
          <span>मुख्य पानावर जा (Back to Home)</span>
        </Link>

        <div className="glass-panel p-6 sm:p-10 rounded-3xl space-y-8">
          <div className="space-y-2 border-b border-slate-200 dark:border-white/[0.08] pb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Get In Touch
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              संपर्क साधा (Contact Us)
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              वेबसाइटबद्दल काही सूचना, तांत्रिक अडचण किंवा नवीन उताऱ्यांची मागणी असल्यास आम्हाला नक्की कळवा.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">ईमेल संपर्क (Email Support)</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      आम्ही २४ ते ४८ तासांत उत्तर देण्याचा प्रयत्न करतो.
                    </p>
                    <p className="text-sm font-mono font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                      sagarpawar.arya@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-200 dark:border-white/[0.06]">
                  <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">स्थान (Location)</h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                      पुणे / पिंपरी-चिंचवड, महाराष्ट्र, भारत
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Contact Form */}
            <div>
              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto" />
                  <h3 className="text-base font-bold text-emerald-700 dark:text-emerald-300">
                    तुमचा संदेश यशस्वीरित्या पाठवला गेला आहे!
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    संपर्क साधल्याबद्दल धन्यवाद. आम्ही लवकरच आपल्या ईमेलवर प्रतिसाद देऊ.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setEmail("");
                      setMessage("");
                    }}
                    className="px-4 py-2 bg-emerald-500 text-slate-950 font-bold rounded-xl text-xs cursor-pointer"
                  >
                    नवीन संदेश पाठवा
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                      तुमचे पूर्ण नाव (Your Name) *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="उदा. राहुल पाटील"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/[0.1] text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                      ईमेल पत्ता (Email Address) *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/[0.1] text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                      तुमचा संदेश / प्रश्न (Message) *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="तुमचा प्रश्न किंवा सूचना येथे लिहा..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/[0.1] text-sm focus:outline-none focus:border-emerald-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold rounded-xl text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>संदेश पाठवा (Send Message)</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}