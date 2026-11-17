// src/components/Footer.tsx
import React from "react";
import Link from "next/link";
import { Keyboard, ShieldCheck, Mail, Info, FileText } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200 dark:border-white/[0.08] bg-white/80 dark:bg-[#030712]/90 backdrop-blur-md mt-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-200 dark:border-white/[0.06]">
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-extrabold text-lg">
              <div className="p-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                <Keyboard className="w-5 h-5" />
              </div>
              <span>GCC-TBC Typing Portal</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              महाराष्ट्र राज्य परीक्षा परिषद (MSCE) आयोजित GCC-TBC 30 WPM आणि 40 WPM (मराठी Remington GAIL व इंग्रजी) टायपिंग व MCQ परीक्षेच्या परिपूर्ण सरावासाठी समर्पित व्यासपीठ.
            </p>
          </div>

          {/* Quick Practice Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              सराव विभाग (Practice Modules)
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/speed-test" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">
                  • GCC-TBC Speed Test (30 / 40 WPM)
                </Link>
              </li>
              <li>
                <Link href="/lessons" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">
                  • ६१ स्टेप-बाय-स्टेप टायपिंग धडे (Lessons)
                </Link>
              </li>
              <li>
                <Link href="/typing-practice" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">
                  • Custom Passage Practice Lab
                </Link>
              </li>
              <li>
                <Link href="/mcq-test" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">
                  • GCC-TBC Objective MCQ सराव चाचणी
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & AdSense Required Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              महत्त्वाची माहिती (Legal & Policies)
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/about" className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition">
                  <Info className="w-3.5 h-3.5 text-emerald-500" />
                  <span>About Us (आमच्याबद्दल)</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition">
                  <Mail className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Contact Us (संपर्क साधा)</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Privacy Policy (गोपनीयता धोरण)</span>
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition">
                  <FileText className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Disclaimer & Terms (अस्वीकरण)</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {currentYear} GCC-TBC Typing Practice Portal. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Disclaimer: This is an independent educational practice platform and is not officially affiliated with MSCE Pune.
          </p>
        </div>
      </div>
    </footer>
  );
}