// src/app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import GlowCursor from "@/components/GlowCursor";
import ThemeToggle from "@/components/ThemeToggle";
import {
  Zap,
  FileQuestion,
  Sparkles,
  ChevronRight,
  Activity,
  GraduationCap,
} from "lucide-react";

export default function HomePage() {
  const [liveWpm, setLiveWpm] = useState(42);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveWpm((prev) => (prev >= 52 ? 38 : prev + 1));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between relative selection:bg-amber-400 selection:text-black font-sans">
      <GlowCursor />

      {/* Dynamic Grid Pattern */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.04] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      {/* Floating Glass Navigation */}
      <header className="relative z-20 max-w-6xl mx-auto w-full px-6 pt-6">
        <div className="theme-panel rounded-2xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center text-white dark:text-black font-black text-xl shadow-lg shadow-amber-500/25">
              ⚡
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight">
                  TypeForge
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 uppercase tracking-wider">
                  PRO
                </span>
              </div>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium block">
                Official GCC-TBC Exam Suite
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/lessons"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-bold text-cyan-700 dark:text-cyan-300 transition"
            >
              <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Academy</span>
            </Link>

            <Link
              href="/mcq-test"
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-xs font-bold text-purple-700 dark:text-purple-300 transition"
            >
              <FileQuestion className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Theory 50 Marks</span>
            </Link>

            <div className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
              Remington GAIL
            </div>

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-6xl mx-auto w-full px-6 py-12 sm:py-16 space-y-12">
        
        {/* Pitch Area */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-200/70 dark:bg-white/[0.04] border border-slate-300 dark:border-white/[0.08] text-xs font-semibold text-slate-700 dark:text-slate-300 backdrop-blur-xl">
            <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400 animate-pulse" />
            <span>Zero Inaccuracy Drift • 45 Timed Exam Batches</span>
          </div>

          <h1 className="text-4xl sm:text-7xl font-black tracking-tight leading-[1.05]">
            Precision Speed. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 dark:from-amber-300 dark:via-amber-400 dark:to-yellow-500">
              Exam Certification.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Engineered for Maharashtra GCC-TBC typing exams with intelligent Marathi ligature recognition, live penalty deductions, custom passages, and weak keys diagnostics.
          </p>

          {/* Exam Grade Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <div className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-amber-500/30 text-xs font-bold shadow-sm">
              <span className="text-slate-500 dark:text-slate-400 mr-2">🇮🇳 Marathi:</span>
              <span className="text-amber-600 dark:text-amber-400 font-mono text-sm">30 WPM</span>
              <span className="text-slate-300 dark:text-slate-700 mx-1.5">•</span>
              <span className="text-amber-600 dark:text-amber-400 font-mono text-sm">40 WPM</span>
            </div>

            <div className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/30 text-xs font-bold shadow-sm">
              <span className="text-slate-500 dark:text-slate-400 mr-2">🇬🇧 English:</span>
              <span className="text-sky-600 dark:text-cyan-400 font-mono text-sm">40 WPM</span>
              <span className="text-slate-300 dark:text-slate-700 mx-1.5">•</span>
              <span className="text-sky-600 dark:text-cyan-400 font-mono text-sm">50 WPM</span>
              <span className="text-slate-300 dark:text-slate-700 mx-1.5">•</span>
              <span className="text-sky-600 dark:text-cyan-400 font-mono text-sm">60 WPM</span>
            </div>
          </div>
        </div>

        {/* 3 Streamlined Core Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Guided Lessons (Typing Academy) */}
          <Link href="/lessons" className="group">
            <div className="theme-panel h-full p-7 rounded-3xl flex flex-col justify-between group-hover:-translate-y-2 transition-all duration-300 border-cyan-500/30">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-xl font-black group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition">
                    Guided Lessons
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    Step-by-step curriculum from Beginner to Advanced with common words, hand visuals, and star ratings.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between text-xs font-bold text-cyan-600 dark:text-cyan-400">
                <span>Start Curriculum</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition" />
              </div>
            </div>
          </Link>

          {/* Card 2: Speed Test (Exam Simulator + Custom Passage + Weak Keys) */}
          <Link href="/speed-test" className="group">
            <div className="theme-panel h-full p-7 rounded-3xl flex flex-col justify-between group-hover:-translate-y-2 transition-all duration-300 border-amber-500/30">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300 shadow-md">
                  <Zap className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-xl font-black group-hover:text-amber-600 dark:group-hover:text-amber-300 transition">
                    Speed Test & Exam
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    Official 7-minute timed exam batches, custom passage upload & real-time weak keys diagnostic tracker.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400">
                <span>Start Exam Simulator</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition" />
              </div>
            </div>
          </Link>

          {/* Card 3: Theory MCQs */}
          <Link href="/mcq-test" className="group">
            <div className="theme-panel h-full p-7 rounded-3xl flex flex-col justify-between group-hover:-translate-y-2 transition-all duration-300 border-purple-500/30">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shadow-md">
                  <FileQuestion className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-xl font-black group-hover:text-purple-600 dark:group-hover:text-purple-300 transition">
                    Theory MCQs Exam
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    Complete 50 Marks objective exam covering Windows, MS Word, Excel, PowerPoint & Internet syllabus.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between text-xs font-bold text-purple-600 dark:text-purple-400">
                <span>Solve MCQs Test</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition" />
              </div>
            </div>
          </Link>

        </div>

        {/* Live Telemetry Banner */}
        <div className="theme-panel p-6 sm:p-8 rounded-3xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-white/[0.08] pb-4">
            <div className="flex items-center gap-3">
              <Activity className="w-5 h-5 text-amber-500 dark:text-amber-400 animate-pulse" />
              <span className="text-sm font-bold tracking-wide">
                Live Typing Telemetry
              </span>
            </div>
            <div className="flex items-center gap-5 text-xs font-mono">
              <span className="text-amber-700 dark:text-amber-400 font-bold bg-amber-500/10 px-3 py-1 rounded-xl border border-amber-500/20">
                ⚡ Speed: {liveWpm} WPM
              </span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/20">
                🎯 Accuracy: 98.6%
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-100 dark:bg-black/60 border border-slate-200 dark:border-white/[0.08] font-mono text-lg text-slate-800 dark:text-slate-300 flex items-center justify-between shadow-inner">
            <div>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">शासकीय सेवेतील </span>
              <span className="text-amber-800 dark:text-amber-300 bg-amber-500/20 px-1 rounded">सर्व</span> अधिकारी व कर्मचारी...
            </div>
            <span className="text-xs text-slate-400 hidden sm:block font-sans">
              Remington GAIL Active
            </span>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-6xl mx-auto w-full px-6 py-6 border-t border-slate-200 dark:border-white/[0.08] text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span>© 2026 TypeForge PRO • GCC-TBC Maharashtra</span>
        <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
          <span>Marathi 30/40</span>
          <span>•</span>
          <span>English 40/50/60</span>
        </div>
      </footer>
    </div>
  );
}