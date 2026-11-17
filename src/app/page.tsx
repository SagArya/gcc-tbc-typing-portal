// src/app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import GlowCursor from "@/components/GlowCursor";
import ThemeToggle from "@/components/ThemeToggle";
import SeoContentSection from "@/components/SeoContentSection";
import {
  Timer,
  BookOpen,
  Keyboard,
  Award,
  ShieldCheck,
  ArrowRight,
  Flame,
  FileCheck,
  Sparkles,
  HelpCircle,
  FileEdit,
  Smartphone,
  CheckCircle2,
  BookMarked,
} from "lucide-react";

export default function HomePage() {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const savedStreak = localStorage.getItem("gcctbc_daily_streak");
    if (savedStreak) {
      try {
        const data = JSON.parse(savedStreak);
        setStreak(data.count || 0);
      } catch (e) {
        setStreak(0);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 font-sans relative overflow-x-hidden selection:bg-amber-400 selection:text-black">
      <GlowCursor />

      {/* Decorative Grid Pattern */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient Glows */}
      <div className="pointer-events-none fixed top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-amber-500/15 via-emerald-500/10 to-transparent blur-[120px] rounded-full z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-12 sm:space-y-16">
        {/* Navigation Bar */}
        <header className="glass-panel px-4 sm:px-6 py-3.5 rounded-3xl flex flex-wrap justify-between items-center gap-4 shadow-lg border border-slate-200/80 dark:border-white/[0.08] backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20">
              <Keyboard className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-base sm:text-lg tracking-tight bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 bg-clip-text text-transparent">
                  GCC TBC Typing
                </span>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 tracking-wider">
                  Exam Suite
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
                MSCE GCC-TBC 30 & 40 WPM परीक्षा पॅटर्न आधारित
              </p>
            </div>
          </Link>

          {/* Top Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-600 dark:text-slate-300">
            <Link href="/speed-test" className="hover:text-amber-500 transition">
              Speed Test
            </Link>
            <Link href="/lessons" className="hover:text-amber-500 transition">
              61 Lessons
            </Link>
            <Link href="/mcq-test" className="hover:text-amber-500 transition">
              MCQ Practice
            </Link>
            <Link href="/exam-guide" className="hover:text-emerald-500 transition flex items-center gap-1">
              <BookMarked className="w-3.5 h-3.5 text-emerald-500" />
              <span>Exam Guide</span>
            </Link>
            <Link href="/about" className="hover:text-amber-500 transition">
              About
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {streak > 0 && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-amber-600 dark:text-amber-400 font-bold text-xs shadow-sm">
                <Flame className="w-4 h-4 fill-amber-500 text-amber-500 animate-bounce" />
                <span>{streak} Day Streak</span>
              </div>
            )}
            <ThemeToggle />
          </div>
        </header>

        {/* Mobile Device Tip Banner */}
        <div className="md:hidden p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-3 text-xs text-slate-700 dark:text-slate-300">
          <Smartphone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>मोबाईल युजर्ससाठी टीप:</strong> प्रत्यक्ष टायपिंग सरावासाठी कॉम्प्युटर/लॅपटॉप किंवा मोबाईलला <strong>OTG कीबोर्ड</strong> जोडा. मोबाईल स्क्रीनवर तुम्ही <strong>MCQ सराव चाचणी</strong> सहज सोडवू शकता!
          </p>
        </div>

        {/* Hero Section */}
        <section className="text-center space-y-6 max-w-4xl mx-auto pt-2 sm:pt-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/[0.04] dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.1] text-xs font-bold text-slate-700 dark:text-slate-300 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>शासकीय GCC-TBC प्रत्यक्ष परीक्षेतील मूळ प्रश्न आणि बॅचेस</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-900 dark:text-white">
            GCC-TBC परीक्षेत १००% यशाची खात्री! <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-400 bg-clip-text text-transparent">
              Speed Passages + Real Exam MCQs
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            शासकीय परीक्षेतील <strong className="text-slate-900 dark:text-white font-bold">मूळ बॅचेसचे उतारे</strong>,
            तंतोतंत <strong className="text-slate-900 dark:text-white font-bold">७ मिनिटांची स्पीड टेस्ट (४० गुण)</strong>,
            स्वतःचा मजकूर जोडून <strong className="text-violet-600 dark:text-violet-400 font-bold">कस्टम पॅसेज सराव</strong> आणि
            मागील वर्षांत प्रत्यक्ष विचारलेले <strong className="text-emerald-600 dark:text-emerald-400 font-bold">१०००+ अधिकृत Computer MCQ प्रश्न</strong>.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
            <Link
              href="/speed-test"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/25 flex items-center gap-2 cursor-pointer"
            >
              <Timer className="w-4 h-4" />
              <span>स्पीड टेस्ट सुरू करा (४० गुण)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/typing-practice"
              className="px-6 py-3.5 rounded-2xl bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/15 text-white font-bold text-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl border border-slate-800 dark:border-white/10 flex items-center gap-2 cursor-pointer"
            >
              <FileEdit className="w-4 h-4 text-violet-400" />
              <span>कस्टम सराव लॅब</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/mcq-test"
              className="px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/25 flex items-center gap-2 cursor-pointer"
            >
              <Award className="w-4 h-4" />
              <span>परीक्षेतील MCQs सोडवा (२५ गुण)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Primary Action Cards (4 Cards Grid) */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Speed Test */}
          <Link
            href="/speed-test"
            className="group relative glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-white/[0.08] hover:border-amber-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all duration-500" />
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-500 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shadow-sm">
                  <Timer className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                  Section-C • ४० गुण
                </span>
              </div>

              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                  GCC-TBC स्पीड टेस्ट
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  प्रत्यक्ष शासकीय परीक्षेतील मूळ बॅचेसचे उतारे. ४० पैकी किमान १६ गुण मिळवण्याच्या अचूक पद्धतीसह परीक्षा हॉल अनुभव.
                </p>
              </div>

              <div className="pt-1 flex flex-wrap gap-1">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300">
                  मराठी ३०/४०
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300">
                  Eng 30/40/50/60
                </span>
              </div>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400 relative z-10">
              <span>टेस्ट सुरू करा</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
            </div>
          </Link>

          {/* Card 2: Custom Passage Practice Lab */}
          <Link
            href="/typing-practice"
            className="group relative glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-white/[0.08] hover:border-violet-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-all duration-500" />
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-500 group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  <FileEdit className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-violet-500/15 text-violet-600 dark:text-violet-400 border border-violet-500/30">
                  Custom • No Timer
                </span>
              </div>

              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-violet-500 transition-colors">
                  कस्टम सराव लॅब
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  स्वतःचा मजकूर किंवा फाईल अपलोड करून वेळेच्या दबावाशिवाय शांतपणे सराव करा. शब्द मोजणी व कमजोर की ट्रॅकर उपलब्ध.
                </p>
              </div>

              <div className="pt-1 flex flex-wrap gap-1">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
                  Word Count Only
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300">
                  Weak Keys Tracker
                </span>
              </div>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-bold text-violet-600 dark:text-violet-400 relative z-10">
              <span>सराव लॅब उघडा</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
            </div>
          </Link>

          {/* Card 3: MCQ Test */}
          <Link
            href="/mcq-test"
            className="group relative glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-white/[0.08] hover:border-emerald-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500" />
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300 shadow-sm">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  Section-A • २५ गुण
                </span>
              </div>

              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                  परीक्षेतील अधिकृत MCQs
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  GCC-TBC परीक्षेत वारंवार येणारे १०००+ मूळ प्रश्न. Word, Excel, PowerPoint, Windows व Internet चे २५ वस्तुनिष्ठ प्रश्न (किमान १० गुण आवश्यक).
                </p>
              </div>

              <div className="pt-1 flex flex-wrap gap-1">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                  २५ प्रश्न • २५ गुण
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300">
                  मराठी/English
                </span>
              </div>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400 relative z-10">
              <span>MCQ सराव सुरू करा</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
            </div>
          </Link>

          {/* Card 4: Guided Lessons */}
          <Link
            href="/lessons"
            className="group relative glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-white/[0.08] hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500" />
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-500 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300 shadow-sm">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
                  स्टेप-बाय-स्टेप
                </span>
              </div>

              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                  टायपिंग अकॅडमी (६१ धडे)
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  Home row, Upper row, Bottom row आणि वेलांटी-काण्याचे अचूक नियम. नवशिक्यांपासून ॲडव्हान्स विद्यार्थ्यांसाठी संपूर्ण धडे.
                </p>
              </div>

              <div className="pt-1 flex flex-wrap gap-1">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300">
                  Remington GAIL
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300">
                  Star Progression
                </span>
              </div>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-bold text-cyan-600 dark:text-cyan-400 relative z-10">
              <span>धडे उघडा</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
            </div>
          </Link>
        </section>

        {/* GCC-TBC Official Exam Structure & Passing Criteria Table */}
        <section className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-white/[0.08] space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/[0.06] pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Marks Required To Pass • उत्तीर्ण होण्यासाठी आवश्यक गुण
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
                GCC-TBC परीक्षेचे स्वरूप आणि उत्तीर्ण गुण (Passing Criteria)
              </h2>
            </div>
            <Link
              href="/exam-guide"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline"
            >
              <span>संपूर्ण परीक्षा मार्गदर्शक वाचा</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/[0.1] text-slate-700 dark:text-slate-200 bg-slate-100/70 dark:bg-white/[0.03]">
                  <th className="py-3.5 px-4 font-extrabold rounded-tl-xl">विभाग (Section)</th>
                  <th className="py-3.5 px-4 font-extrabold">प्रश्न प्रकार (Question)</th>
                  <th className="py-3.5 px-4 font-extrabold">एकूण गुण (Max Marks)</th>
                  <th className="py-3.5 px-4 font-extrabold rounded-tr-xl">उत्तीर्ण गुण (Must Pass)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 dark:divide-white/[0.06] text-slate-600 dark:text-slate-300">
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">
                    Section-A (Must Pass)
                  </td>
                  <td className="py-3.5 px-4">Objective (वस्तुनिष्ठ प्रश्न)</td>
                  <td className="py-3.5 px-4 font-bold">२५ गुण</td>
                  <td className="py-3.5 px-4 text-emerald-600 dark:text-emerald-400 font-bold">
                    किमान १० गुण
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">
                    Section-B (Must Pass)
                  </td>
                  <td className="py-3.5 px-4">Email / Letter / Statement</td>
                  <td className="py-3.5 px-4 font-bold">३५ गुण</td>
                  <td className="py-3.5 px-4 text-emerald-600 dark:text-emerald-400 font-bold">
                    किमान १४ गुण
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">
                    Section-C (Must Pass)
                  </td>
                  <td className="py-3.5 px-4">Speed Passage (गती उतारा)</td>
                  <td className="py-3.5 px-4 font-bold">४० गुण</td>
                  <td className="py-3.5 px-4 text-emerald-600 dark:text-emerald-400 font-bold">
                    किमान १६ गुण
                  </td>
                </tr>
                <tr className="bg-slate-100/60 dark:bg-white/[0.04] font-extrabold text-slate-900 dark:text-white">
                  <td className="py-3.5 px-4" colSpan={2}>
                    एकूण (Total Marks)
                  </td>
                  <td className="py-3.5 px-4">१०० गुण</td>
                  <td className="py-3.5 px-4 text-amber-600 dark:text-amber-400">
                    किमान ४० गुण
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400 pt-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span>
              <strong>महत्त्वाचे:</strong> परीक्षेत उत्तीर्ण होण्यासाठी Section-A (किमान १० गुण), Section-B (किमान १४ गुण) आणि Section-C (किमान १६ गुण) या तिन्ही विभागांमध्ये स्वतंत्रपणे उत्तीर्ण होणे अनिवार्य आहे.
            </span>
          </div>
        </section>

        {/* Features Section */}
        <section className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-white/[0.08] space-y-8 shadow-xl">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              परीक्षेच्या १००% यशाची खात्री देणारी वैशिष्ट्ये
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              GCC-TBC च्या प्रत्यक्ष परीक्षेतील प्रत्येक बारकाव्याचा अभ्यास करून तयार केलेली अचूक प्रणाली.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900/[0.02] dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-500">
                <FileCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Original Exam Passages
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                मागील वर्षांच्या अधिकृत परीक्षांचे पॅसेजेस बॅच क्रमांकानुसार सरावासाठी उपलब्ध.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-emerald-700 dark:text-emerald-400">
                १०००+ Real Exam MCQs
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                शासकीय परीक्षेत विचारले जाणारे MS-Office, Windows व इंटरनेटचे सर्व अधिकृत प्रश्न.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/[0.02] dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/15 flex items-center justify-center text-sky-500">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                अचूक GCC-TBC मार्किंग
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                चुका, शिल्लक राहिलेले शब्द आणि वेळेवर आधारित हुबेहूब अधिकृत गुणदान व निकाल.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/[0.02] dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-500">
                <Keyboard className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Remington GAIL लेआउट
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                मराठीसाठी पहिली वेलांटी ('f' की) आणि रफार-काना जोडणीचे अचूक इनबिल्ट इंजिन.
              </p>
            </div>
          </div>
        </section>

        {/* SEO Rich Content & FAQ Section */}
        <section className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-white/[0.08] shadow-xl">
          <SeoContentSection />
        </section>
      </div>
    </div>
  );
}