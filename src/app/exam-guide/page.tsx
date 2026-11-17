// src/app/exam-guide/page.tsx
import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Clock,
  Keyboard,
  Target,
  Award,
  Sparkles,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GCC-TBC Exam Guide 2026 | Syllabus, Passing Marks & Remington GAIL Tips",
  description:
    "Complete guide for MSCE GCC-TBC 30 WPM and 40 WPM Marathi & English typing exam. Learn Section-A, B, C passing criteria, negative marking rules, and Remington GAIL shortcuts.",
  keywords: [
    "GCC TBC exam pattern",
    "GCC TBC passing marks",
    "Marathi Remington GAIL typing tips",
    "GCC TBC 30 WPM syllabus",
    "GCC TBC 40 WPM speed test",
  ],
};

export default function ExamGuidePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-xs font-semibold hover:bg-slate-100 dark:hover:bg-white/[0.08] transition"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-500" />
          <span>मुख्य पानावर जा (Back to Home)</span>
        </Link>

        {/* Main Article Container */}
        <article className="glass-panel p-6 sm:p-10 rounded-3xl space-y-8 border border-slate-200/80 dark:border-white/[0.08] shadow-xl">
          {/* Article Header */}
          <header className="space-y-3 border-b border-slate-200 dark:border-white/[0.08] pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>GCC-TBC Complete Study & Exam Guide</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              GCC-TBC (30 & 40 WPM) परीक्षेची संपूर्ण माहिती, गुणांकन पद्धत आणि यशाचे तंत्र
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              महाराष्ट्र राज्य परीक्षा परिषद (MSCE, Pune) मार्फत घेण्यात येणारी शासकीय संगणक टायपिंग प्रमाणपत्र परीक्षा (GCC-TBC) पहिल्याच प्रयत्नात उत्तीर्ण होण्यासाठी संपूर्ण मार्गदर्शक.
            </p>
          </header>

          {/* Section 1: Exam Pattern */}
          <section className="space-y-4">
            <h2 className="text-xl font-extrabold flex items-center gap-2 text-slate-900 dark:text-white">
              <Target className="w-5 h-5 text-amber-500" />
              <span>१. परीक्षेचे स्वरूप आणि उत्तीर्ण होण्याचे निकष (Section-A, B & C)</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              GCC-TBC परीक्षा एकूण <strong>१०० गुणांची</strong> असते आणि ती ३ स्वतंत्र विभागांमध्ये विभागलेली असते. सर्वात महत्त्वाचा नियम म्हणजे उमेदवाराला <strong>Section-A, Section-B आणि Section-C या तिन्ही विभागांमध्ये स्वतंत्रपणे किमान ४०% गुण मिळवून उत्तीर्ण होणे अनिवार्य आहे.</strong>
            </p>

            <div className="overflow-x-auto pt-2">
              <table className="w-full text-left border-collapse text-xs sm:text-sm border border-slate-200 dark:border-white/[0.08] rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-100 dark:bg-white/[0.05] text-slate-800 dark:text-slate-200">
                    <th className="py-3 px-4 font-bold">विभाग (Section)</th>
                    <th className="py-3 px-4 font-bold">प्रश्नाचे स्वरूप</th>
                    <th className="py-3 px-4 font-bold">एकूण गुण</th>
                    <th className="py-3 px-4 font-bold">उत्तीर्ण गुण (Must Pass)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-white/[0.06] text-slate-600 dark:text-slate-300">
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">Section-A</td>
                    <td className="py-3 px-4">Objective MCQs (२५ प्रश्न)</td>
                    <td className="py-3 px-4">२५ गुण</td>
                    <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-bold">किमान १० गुण</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">Section-B</td>
                    <td className="py-3 px-4">Email, Letter & Statement</td>
                    <td className="py-3 px-4">३५ गुण</td>
                    <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-bold">किमान १४ गुण</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">Section-C</td>
                    <td className="py-3 px-4">Speed Passage (७ मिनिटे)</td>
                    <td className="py-3 px-4">४० गुण</td>
                    <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-bold">किमान १६ गुण</td>
                  </tr>
                  <tr className="bg-amber-500/10 font-extrabold text-slate-900 dark:text-white">
                    <td className="py-3 px-4" colSpan={2}>एकूण गुण (Total)</td>
                    <td className="py-3 px-4">१०० गुण</td>
                    <td className="py-3 px-4 text-amber-600 dark:text-amber-400">किमान ४० गुण</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Speed Passage Rules */}
          <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-white/[0.08]">
            <h2 className="text-xl font-extrabold flex items-center gap-2 text-slate-900 dark:text-white">
              <Clock className="w-5 h-5 text-emerald-500" />
              <span>२. गती उतारा (Section-C Speed Passage) महत्त्वाचे नियम</span>
            </h2>
            <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                <span>
                  <strong>वेळ मर्यादा:</strong> गती उताऱ्यासाठी फक्त <strong>०७ मिनिटे (४२० सेकंद)</strong> वेळ मिळतो.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                <span>
                  <strong>शब्द संख्या:</strong> ३० WPM परीक्षेसाठी किमान <strong>२१० शब्द</strong> (१०५० की-स्ट्रोक्स) आणि ४० WPM परीक्षेसाठी किमान <strong>२८० शब्द</strong> (१४०० की-स्ट्रोक्स) अचूक टाईप करणे आवश्यक असते.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                <span>
                  <strong>चुकांची वजावट:</strong> प्रत्येक चुकीच्या शब्दासाठी (स्पेलिंग, काना-मात्रा, अनुस्वार किंवा विरामचिन्ह चूक) गुण वजा केले जातात. त्यामुळे वेगासोबतच <strong>९५% पेक्षा जास्त अचूकता (Accuracy)</strong> ठेवणे गरजेचे आहे.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 3: Marathi Remington GAIL Tips */}
          <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-white/[0.08]">
            <h2 className="text-xl font-extrabold flex items-center gap-2 text-slate-900 dark:text-white">
              <Keyboard className="w-5 h-5 text-cyan-500" />
              <span>३. मराठी टायपिंग (Remington GAIL) महत्त्वाचे शॉर्टकट्स</span>
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              मराठी टायपिंग करताना विद्यार्थ्यांच्या सर्वाधिक चुका जोडाक्षरे आणि विरामचिन्हांमध्ये होतात. खालील कीज नेहमी लक्षात ठेवा:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] flex justify-between">
                <span className="font-semibold">पहिली वेलांटी (ि)</span>
                <code className="font-mono font-bold text-amber-600 dark:text-amber-400">f (अक्षराच्या आधी)</code>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] flex justify-between">
                <span className="font-semibold">पूर्णविराम (.)</span>
                <code className="font-mono font-bold text-amber-600 dark:text-amber-400">\ (Backslash)</code>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] flex justify-between">
                <span className="font-semibold">स्वल्पविराम (,)</span>
                <code className="font-mono font-bold text-amber-600 dark:text-amber-400">] (Right Bracket)</code>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] flex justify-between">
                <span className="font-semibold">रफार (र्)</span>
                <code className="font-mono font-bold text-amber-600 dark:text-amber-400">Shift + Z (अक्षरानंतर)</code>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] flex justify-between">
                <span className="font-semibold">पदेन र (्र - उदा. प्र, क्र)</span>
                <code className="font-mono font-bold text-amber-600 dark:text-amber-400">z (अक्षरानंतर)</code>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] flex justify-between">
                <span className="font-semibold">हलंत (् - अर्धे अक्षर)</span>
                <code className="font-mono font-bold text-amber-600 dark:text-amber-400">Shift + = (+)</code>
              </div>
            </div>
          </section>

          {/* Section 4: Exam Day Strategy */}
          <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-white/[0.08]">
            <h2 className="text-xl font-extrabold flex items-center gap-2 text-slate-900 dark:text-white">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <span>४. परीक्षेपूर्वीच्या ३० दिवसांचे नियोजन कसे करावे?</span>
            </h2>
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/25 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <p className="flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400">
                <AlertCircle className="w-4 h-4" />
                <span>दररोजचा सराव पॅटर्न:</span>
              </p>
              <p>
                १. दररोज सकाळी २० मिनिटे <strong>६१ टायपिंग धडे (Lessons)</strong> मधील कठीण जोडाक्षरांचा सराव करा.<br />
                २. दुपारी किंवा संध्याकाळी किमान तीन <strong>७ मिनिटांच्या स्पीड टेस्ट्स (Section-C)</strong> द्या आणि आपल्या चुका (Mistake Review) तपासा.<br />
                ३. दररोज किमान ५० <strong>Computer MCQs (Section-A)</strong> सोडवा, जेणेकरून २५ पैकी २२+ गुण सहज मिळतील.
              </p>
            </div>
          </section>

          {/* Call to Action Buttons */}
          <div className="pt-6 border-t border-slate-200 dark:border-white/[0.08] flex flex-wrap gap-3 justify-center">
            <Link
              href="/speed-test"
              className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm transition flex items-center gap-2"
            >
              <Award className="w-4 h-4" />
              <span>आता स्पीड टेस्ट देऊन पहा</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/mcq-test"
              className="px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm transition flex items-center gap-2"
            >
              <span>MCQ सराव सुरू करा</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}