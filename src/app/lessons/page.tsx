// src/app/lessons/page.tsx
"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import GlowCursor from "@/components/GlowCursor";
import ThemeToggle from "@/components/ThemeToggle";
import { LESSONS_DATA, LessonItem } from "@/data/lessonsData";
import {
  ArrowLeft,
  Lock,
  Play,
  Star,
  Trophy,
  CheckCircle2,
} from "lucide-react";

function LessonsDashboardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlLang = searchParams.get("lang") as "marathi" | "english" | null;

  const [language, setLanguage] = useState<"marathi" | "english">("marathi");
  const [userProgress, setUserProgress] = useState<{
    [lessonId: string]: { stars: number; completed: boolean };
  }>({});

  // १. आधी URL पॅरामीटर किंवा LocalStorage मधून भाषा लोड करणे
  useEffect(() => {
    if (urlLang === "marathi" || urlLang === "english") {
      setLanguage(urlLang);
      localStorage.setItem("typeforge_selected_lang", urlLang);
    } else {
      const savedLang = localStorage.getItem("typeforge_selected_lang") as "marathi" | "english" | null;
      if (savedLang) {
        setLanguage(savedLang);
      }
    }
  }, [urlLang]);

  // २. भाषा बदलल्यावर LocalStorage व URL अपडेट करणे
  const handleLanguageChange = (newLang: "marathi" | "english") => {
    setLanguage(newLang);
    localStorage.setItem("typeforge_selected_lang", newLang);
    router.replace(`/lessons?lang=${newLang}`);
  };

  useEffect(() => {
    const saved = localStorage.getItem("typeforge_lessons_progress");
    if (saved) {
      try {
        setUserProgress(JSON.parse(saved));
      } catch (e) {
        console.error("Progress load error", e);
      }
    }
  }, []);

  // Global Escape Key to go Home
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.push("/");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  const filteredLessons = LESSONS_DATA.filter((l) => l.language === language);
  const beginnerLessons = filteredLessons.filter((l) => l.tier === "beginner");
  const commonWordsLessons = filteredLessons.filter((l) => l.tier === "common_words");
  const intermediateLessons = filteredLessons.filter((l) => l.tier === "intermediate");
  const advancedLessons = filteredLessons.filter((l) => l.tier === "advanced");

  const totalStars = filteredLessons.reduce(
    (acc, curr) => acc + (userProgress[curr.id]?.stars || 0),
    0
  );
  const completedCount = filteredLessons.filter(
    (l) => userProgress[l.id]?.completed
  ).length;

  const renderTierSection = (
    tierTitle: string,
    tierBadgeColor: string,
    lessons: LessonItem[]
  ) => {
    if (!lessons || lessons.length === 0) return null;

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/[0.08] pb-3">
          <div className="flex items-center gap-2.5">
            <span className={`w-3 h-3 rounded-full ${tierBadgeColor}`} />
            <div>
              <h2 className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-slate-100">
                {tierTitle}
              </h2>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
            {lessons.length} Lessons
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lessons.map((lesson) => {
            const progress = userProgress[lesson.id] || { stars: 0, completed: false };
            
            const globalIdx = filteredLessons.findIndex((l) => l.id === lesson.id);
            const prevLesson = filteredLessons[globalIdx - 1];
            const isUnlocked =
              globalIdx === 0 ||
              (prevLesson && userProgress[prevLesson.id]?.completed) ||
              progress.completed;

            return (
              <div
                key={lesson.id}
                className={`glass-panel p-5 rounded-3xl flex flex-col justify-between transition-all duration-200 ${
                  isUnlocked
                    ? "hover:border-cyan-500/50 hover:shadow-xl"
                    : "opacity-60 grayscale cursor-not-allowed"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08]">
                      Lesson {globalIdx + 1}
                    </span>

                    <div className="flex items-center gap-1">
                      {[1, 2, 3].map((s) => (
                        <Star
                          key={s}
                          className={`w-3.5 h-3.5 ${
                            progress.stars >= s
                              ? "text-amber-400 fill-amber-400"
                              : "text-slate-300 dark:text-slate-700"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                      {language === "marathi" ? lesson.marathiTitle : lesson.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                      {lesson.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    {lesson.totalSteps} Steps
                  </span>

                  {isUnlocked ? (
                    <Link
                      href={`/lessons/${lesson.id}`}
                      tabIndex={0}
                      className="px-3.5 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs transition duration-200 shadow-md shadow-cyan-500/20 flex items-center gap-1.5 focus:ring-2 focus:ring-cyan-400 focus:outline-none cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-slate-950" />
                      <span>{progress.completed ? "Review" : "Start"}</span>
                    </Link>
                  ) : (
                    <div className="flex items-center gap-1 text-slate-400 text-xs font-semibold">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Locked</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 font-sans relative overflow-x-hidden p-4 sm:p-6 selection:bg-cyan-400 selection:text-black">
      <GlowCursor />

      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-8">
        {/* Navigation Header */}
        <header className="glass-panel p-4 sm:p-5 rounded-3xl flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              tabIndex={0}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-300 text-xs transition duration-200 border border-slate-200 dark:border-white/[0.08] flex items-center gap-1.5 font-medium focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            >
              <ArrowLeft className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Back (Esc)</span>
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-black tracking-tight">
                  Typing Academy & Guided Lessons
                </h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 uppercase tracking-wider">
                  Curriculum
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <span>Step-by-step touch typing mastery</span>
                <span className="hidden sm:inline text-cyan-600 dark:text-cyan-400 font-semibold">
                  • [Tab ➔ Enter to open lesson]
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="bg-slate-100 dark:bg-black/50 p-1 rounded-xl border border-slate-200 dark:border-white/[0.08] flex gap-1">
              <button
                tabIndex={0}
                onClick={() => handleLanguageChange("marathi")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer focus:ring-2 focus:ring-amber-400 focus:outline-none ${
                  language === "marathi"
                    ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                🇮🇳 Marathi
              </button>
              <button
                tabIndex={0}
                onClick={() => handleLanguageChange("english")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer focus:ring-2 focus:ring-amber-400 focus:outline-none ${
                  language === "english"
                    ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                🇬🇧 English
              </button>
            </div>

            <ThemeToggle />
          </div>
        </header>

        {/* Summary Stats Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="glass-panel p-5 rounded-3xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-500">
              <Star className="w-6 h-6 fill-amber-500" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block">
                Total Stars Earned
              </span>
              <div className="text-2xl font-black font-mono text-amber-500">{totalStars} ⭐</div>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-3xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block">
                Completed Lessons
              </span>
              <div className="text-2xl font-black font-mono text-emerald-500">
                {completedCount} / {filteredLessons.length}
              </div>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-3xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-500">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block">
                Current Standing
              </span>
              <div className="text-base font-black text-cyan-600 dark:text-cyan-400">
                {completedCount > 6 ? "Advanced Master 🚀" : completedCount > 2 ? "Intermediate Typist ⚡" : "Beginner Typist 🎯"}
              </div>
            </div>
          </div>
        </div>

        {/* Tier Sections */}
        <div className="space-y-10">
          {renderTierSection("Tier 1: Beginner (Row Foundation)", "bg-emerald-500", beginnerLessons)}
          {renderTierSection("Tier 2: Common Words (High-Frequency Flow)", "bg-sky-500", commonWordsLessons)}
          {renderTierSection("Tier 3: Intermediate (Diacritics & Shift Keys)", "bg-amber-500", intermediateLessons)}
          {renderTierSection("Tier 4: Advanced (Speed Exam & Paragraphs)", "bg-purple-500", advancedLessons)}
        </div>
      </div>

      <footer className="relative z-10 max-w-6xl mx-auto w-full pt-12 pb-6 text-center text-xs text-slate-500 font-mono">
        <span>TypeForge PRO • Structured Typing Academy</span>
      </footer>
    </main>
  );
}

export default function LessonsDashboardPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-sm font-bold">Loading...</div>}>
      <LessonsDashboardContent />
    </Suspense>
  );
}