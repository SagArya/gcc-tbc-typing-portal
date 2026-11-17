// src/app/privacy-policy/page.tsx
import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | GCC-TBC Typing Practice Portal",
  description:
    "Read our Privacy Policy regarding user data, local storage, cookies, and Google AdSense advertising practices.",
};

export default function PrivacyPolicyPage() {
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
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Legal Compliance</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Privacy Policy (गोपनीयता धोरण)
            </h1>
            <p className="text-xs text-slate-500">Last Updated: November 2026</p>
          </div>

          <div className="space-y-5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                1. Information We Collect (आम्ही कोणती माहिती गोळा करतो)
              </h2>
              <p>
                GCC-TBC Typing Practice Portal respects your privacy. We do not require mandatory account registration to practice typing tests or lessons. Your typing speed (WPM), accuracy statistics, and weak keys progress are stored locally in your browser&apos;s <strong>LocalStorage</strong> solely to enhance your learning experience.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                2. Cookies and Web Beacons (कुकीज)
              </h2>
              <p>
                Like any other website, we use cookies to store information including visitors&apos; preferences (such as Dark/Light theme mode) and the pages on the website that the visitor accessed or visited. This information is used to optimize the users&apos; experience by customizing our web page content.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                3. Google DoubleClick DART Cookie & AdSense
              </h2>
              <p>
                Google is one of the third-party vendors on our site. It uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our website and other sites on the internet. Visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at:{" "}
                <a
                  href="https://policies.google.com/technologies/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 dark:text-emerald-400 underline"
                >
                  https://policies.google.com/technologies/ads
                </a>
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                4. Third-Party Privacy Policies
              </h2>
              <p>
                Our Privacy Policy does not apply to other advertisers or websites. Thus, we advise you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. You can choose to disable cookies through your individual browser options.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                5. Consent (संमती)
              </h2>
              <p>
                By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}