// src/app/disclaimer/page.tsx
import React from "react";
import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer & Terms of Use | GCC-TBC Typing Practice Portal",
  description:
    "Official disclaimer stating that this website is an independent practice tool for GCC-TBC typing exam preparation.",
};

export default function DisclaimerPage() {
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

        <div className="glass-panel p-6 sm:p-10 rounded-3xl space-y-6">
          <div className="space-y-2 border-b border-slate-200 dark:border-white/[0.08] pb-6">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              <span>Important Notice</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Disclaimer & Terms of Use (अस्वीकरण आणि अटी)
            </h1>
          </div>

          <div className="space-y-5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                1. Non-Affiliation Disclaimer (शासकीय संलग्नतेबाबत स्पष्टीकरण)
              </h2>
              <p>
                <strong>GCC-TBC Typing Practice Portal</strong> is an independent educational and skill-practice website created to assist students preparing for computer typing examinations. We are <strong>NOT</strong> affiliated, associated, authorized, endorsed by, or in any way officially connected with the <strong>Maharashtra State Council of Examination (MSCE, Pune)</strong> or any government body.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                2. Accuracy of Practice Material (सराव साहित्याची अचूकता)
              </h2>
              <p>
                All typing passages, Remington GAIL keyboard mappings, speed calculation formulas (WPM & Accuracy), and MCQ questions provided on this website are designed strictly for educational practice purposes. While we strive to match the official exam pattern as closely as possible, actual exam software behavior and evaluation rules may vary.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                3. Fair Use & Intellectual Property
              </h2>
              <p>
                Users are free to use this platform for personal exam preparation and educational training. Automated scraping, copying of source code, or commercial redistribution of our curated lessons and test modules without prior permission is prohibited.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}