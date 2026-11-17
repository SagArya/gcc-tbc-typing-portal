// src/app/about/page.tsx
import React from "react";
import Link from "next/link";
import { ArrowLeft, Target, Award, Keyboard, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | GCC-TBC Marathi & English Typing Practice Portal",
  description:
    "Learn about our mission to help Maharashtra students prepare for GCC-TBC 30 WPM and 40 WPM Marathi (Remington GAIL) and English typing exams.",
};

export default function AboutPage() {
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
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              About Our Platform
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              GCC-TBC टायपिंग सराव पोर्टल बद्दल (About Us)
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              महाराष्ट्रातील विद्यार्थ्यांना शासकीय संगणक टायपिंग प्रमाणपत्र परीक्षा (GCC-TBC) पहिल्याच प्रयत्नात उत्तीर्ण होण्यासाठी मदत करणारे आधुनिक शैक्षणिक व्यासपीठ.
            </p>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>
              <strong>GCC-TBC Typing Practice Portal</strong> ची निर्मिती खास अशा विद्यार्थ्यांसाठी करण्यात आली आहे जे महाराष्ट्र राज्य परीक्षा परिषद (MSCE, Pune) मार्फत घेतल्या जाणाऱ्या <strong>English 30/40 WPM</strong> आणि <strong>Marathi 30/40 WPM (Remington GAIL Layout)</strong> परीक्षेची तयारी करत आहेत.
            </p>
            <p>
              अनेक विद्यार्थ्यांना टायपिंग इन्स्टिट्यूटच्या वेळेव्यतिरिक्त घरी किंवा लॅपटॉपवर अचूक <strong>Remington GAIL</strong> कीबोर्ड लेआउटवर सराव करण्यासाठी योग्य सॉफ्टवेअर उपलब्ध नसते. हीच अडचण लक्षात घेऊन आम्ही हे मोफत आणि परीक्षा-भिमुख (Exam-Oriented) ऑनलाइन पोर्टल तयार केले आहे.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-600 dark:text-emerald-400">
                <Keyboard className="w-5 h-5" />
                <h3>अधिकृत Remington GAIL सपोर्ट</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                कोणत्याही बाह्य फॉन्ट किंवा सॉफ्टवेअरशिवाय थेट ब्राउझरमध्ये अचूक मराठी जोडाक्षरे, रफार आणि विरामचिन्हांसह टायपिंग सराव.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-600 dark:text-amber-400">
                <Target className="w-5 h-5" />
                <h3>६१ टप्प्यांचा अभ्यासक्रम</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                नवशिक्यांपासून (Beginner) ते प्रगत (Advanced) स्तरापर्यंत बोटांची ठेवण आणि वेग वाढवणारे ६१ सविस्तर धडे.
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-white/[0.08]">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-500" />
              <span>आमची प्रमुख वैशिष्ट्ये</span>
            </h2>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                <span>प्रत्यक्ष परीक्षेप्रमाणे ७ मिनिटांचा रिव्हर्स टाइमर आणि अचूक WPM व Accuracy विश्लेषण.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                <span>चुकीच्या शब्दांचे (Mistake Review) आणि कमजोर कीजचे (Weak Keys) सखोल निदान.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                <span>संगणक ज्ञानावर आधारित GCC-TBC Objective MCQ सराव प्रश्नसंच.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}