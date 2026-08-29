// src/app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import GlowCursor from "@/components/GlowCursor";
import ThemeToggle from "@/components/ThemeToggle";
import {
  Keyboard,
  Award,
  BookOpen,
  ArrowRight,
  Timer,
  CheckSquare,
  Flame,
  Sparkles,
} from "lucide-react";

const TYPING_PHRASES = [
  { text: "महाराष्ट्र शासन GCC-TBC टायपिंग परीक्षा", lang: "मराठी (Remington GAIL)" },
  { text: "Master Touch Typing with Real-Time Analytics", lang: "English 30 / 40 WPM" },
  { text: "अचूकता आणि गती यांचे परिपूर्ण संतुलन", lang: "Speed & Accuracy" },
  { text: "४० मराठी व ३० इंग्रजी परिपूर्ण धडे", lang: "Structured Curriculum" },
];

export default function HomePage() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    const currentFullText = TYPING_PHRASES[phraseIdx].text;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.slice(0, displayText.length + 1));
        setTypingSpeed(75);

        if (displayText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentFullText.slice(0, displayText.length - 1));
        setTypingSpeed(35);

        if (displayText.length === 0) {
          setIsDeleting(false);
          setPhraseIdx((prev) => (prev + 1) % TYPING_PHRASES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIdx, typingSpeed]);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 font-sans relative overflow-x-hidden p-4 sm:p-6 md:p-8 selection:bg-cyan-400 selection:text-black">
      <GlowCursor />

      {/* 🌟 1. Glowing Gradient Aura Blobs (Pulse Animation) */}
      <div className="pointer-events-none fixed top-10 left-1/2 -translate-x-1/2 w-[580px] h-[360px] bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-indigo-500/15 blur-[110px] rounded-full animate-pulse z-0" />
      <div className="pointer-events-none fixed bottom-12 right-12 w-[380px] h-[380px] bg-gradient-to-br from-amber-500/10 to-emerald-500/10 blur-[100px] rounded-full animate-pulse delay-1000 z-0" />

      {/* ✨ 2. Floating Ambient Particles */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 rounded-full bg-cyan-400/40 blur-[1px] animate-bounce duration-[4000ms]" />
        <div className="absolute top-1/3 right-1/5 w-2.5 h-2.5 rounded-full bg-blue-400/35 blur-[1px] animate-pulse duration-[3000ms]" />
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full bg-amber-400/30 blur-[1px] animate-bounce duration-[6000ms]" />
        <div className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-emerald-400/35 blur-[1px] animate-pulse duration-[5000ms]" />
      </div>

      {/* 🌐 3. Background Grid Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full space-y-10">
        {/* Navigation Bar */}
        <header className="glass-panel px-5 py-3 rounded-2xl flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
              <Keyboard className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-base font-black tracking-tight flex items-center gap-1.5">
                TypeForge <span className="text-cyan-500">PRO</span>
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold block">
                GCC-TBC Remington GAIL & English Portal
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/lessons"
              className="px-4 py-2 bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] text-xs font-bold rounded-xl transition duration-200 hidden sm:flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-cyan-500" />
              <span>Lessons Menu</span>
            </Link>
            <ThemeToggle />
          </div>
        </header>

        {/* Hero Section */}
        <div className="text-center space-y-5 pt-2 sm:pt-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider shadow-sm animate-bounce">
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            <span>महाराष्ट्र शासन GCC-TBC अधिकृत मानक</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
            टायपिंग शिका{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500">
              स्मार्ट आणि अचूक
            </span>
          </h1>

          <p className="text-xs sm:text-base text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            Remington GAIL Marathi & English Typing, Interactive Virtual Keyboard Guide, and GCC-TBC Computer MCQ Test Preparation.
          </p>

          {/* Interactive Typewriter Box */}
          <div className="glass-panel p-4 sm:p-5 rounded-3xl border border-cyan-500/30 dark:border-cyan-500/20 shadow-xl shadow-cyan-500/5 max-w-2xl mx-auto text-left space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-2">
              <span className="font-mono flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Live Interactive Simulator
              </span>
              <span className="text-[11px] font-semibold text-cyan-500">
                {TYPING_PHRASES[phraseIdx].lang}
              </span>
            </div>

            <div className="min-h-[48px] flex items-center text-base sm:text-xl font-bold font-mono text-slate-900 dark:text-slate-100">
              <span>{displayText}</span>
              <span className="w-0.5 h-5 bg-cyan-500 ml-1 animate-pulse" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3 pt-1">
            <Link
              href="/lessons/mr-1"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black rounded-2xl text-xs sm:text-sm transition duration-200 shadow-lg shadow-cyan-500/25 flex items-center gap-2 cursor-pointer group"
            >
              <span>मराठी टायपिंग सुरू करा</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/lessons/en-1"
              className="px-6 py-3 bg-slate-900 dark:bg-white/[0.06] hover:bg-slate-800 dark:hover:bg-white/[0.1] text-white font-bold rounded-2xl text-xs sm:text-sm transition border border-slate-700 dark:border-white/[0.1] flex items-center gap-2"
            >
              <span>English Typing Practice</span>
            </Link>
          </div>
        </div>

        {/* 🎯 English Core Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {/* Card 1: Interactive Lessons */}
          <Link
            href="/lessons"
            className="glass-panel p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] hover:border-cyan-500/60 dark:hover:border-cyan-500/60 transition-all duration-300 group flex flex-col justify-between space-y-4 hover:shadow-xl hover:shadow-cyan-500/10 cursor-pointer"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black tracking-tight">Interactive Lessons</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                40 Marathi (Remington GAIL) & 30 English lessons. Master Home, Top, Bottom rows, Shift combinations, and Ligatures step-by-step.
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-white/[0.06] text-xs font-bold text-cyan-600 dark:text-cyan-400">
              <span>Start Learning</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </div>
          </Link>

          {/* Card 2: Speed Test */}
          <Link
            href="/speed-test"
            className="glass-panel p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] hover:border-amber-500/60 dark:hover:border-amber-500/60 transition-all duration-300 group flex flex-col justify-between space-y-4 hover:shadow-xl hover:shadow-amber-500/10 cursor-pointer"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                <Timer className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black tracking-tight">Speed Test (Exam Mode)</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                1, 2, 5 & 10-minute timer tests. Evaluate typing speed (WPM) and accuracy on official 30 & 40 WPM GCC-TBC passages.
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-white/[0.06] text-xs font-bold text-amber-600 dark:text-amber-400">
              <span>Take Speed Test</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </div>
          </Link>

          {/* Card 3: MCQ Exam */}
          <Link
            href="/mcq-test"
            className="glass-panel p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] hover:border-emerald-500/60 dark:hover:border-emerald-500/60 transition-all duration-300 group flex flex-col justify-between space-y-4 hover:shadow-xl hover:shadow-emerald-500/10 cursor-pointer"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <CheckSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black tracking-tight">GCC-TBC MCQ Exam</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Comprehensive practice tests with 25 questions covering Computer Fundamentals, MS Office, Windows, and Internet basics.
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-white/[0.06] text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <span>Start MCQ Test</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </div>
          </Link>
        </div>

        {/* Quick Features Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="glass-panel p-3 rounded-2xl text-center space-y-0.5">
            <span className="text-base font-black text-cyan-500">40</span>
            <p className="text-[11px] text-slate-500 font-medium">Marathi Lessons</p>
          </div>
          <div className="glass-panel p-3 rounded-2xl text-center space-y-0.5">
            <span className="text-base font-black text-blue-500">30</span>
            <p className="text-[11px] text-slate-500 font-medium">English Lessons</p>
          </div>
          <div className="glass-panel p-3 rounded-2xl text-center space-y-0.5">
            <span className="text-base font-black text-amber-500">30 / 40 WPM</span>
            <p className="text-[11px] text-slate-500 font-medium">Exam Benchmarks</p>
          </div>
          <div className="glass-panel p-3 rounded-2xl text-center space-y-0.5">
            <span className="text-base font-black text-emerald-500">Remington</span>
            <p className="text-[11px] text-slate-500 font-medium">GAIL Layout</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="glass-panel px-6 py-4 rounded-2xl flex flex-wrap justify-between items-center text-xs text-slate-500 dark:text-slate-400 gap-3">
          <p>© 2026 TypeForge PRO • Maharashtra State GCC-TBC Typing Portal</p>
          <div className="flex items-center gap-4">
            <Link href="/lessons" className="hover:text-cyan-500 transition">
              Lessons
            </Link>
            <span>•</span>
            <Link href="/speed-test" className="hover:text-amber-500 transition">
              Speed Test
            </Link>
            <span>•</span>
            <Link href="/mcq" className="hover:text-emerald-500 transition">
              MCQ Exam
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}