// src/app/keyboard-drills/page.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import MarathiTextarea from "@/components/MarathiTextarea";
import GlowCursor from "@/components/GlowCursor";
import ThemeToggle from "@/components/ThemeToggle";
import { COMMON_WORDS_DATA } from "@/data/commonWords";
import {
  ArrowLeft,
  Keyboard,
  RotateCcw,
  Zap,
  Target,
  TrendingUp,
  Sparkles,
  Layers,
  BookOpen,
  Info,
} from "lucide-react";

const KEYBOARD_ROW_DRILLS = {
  marathi: [
    {
      id: "mr-home",
      title: "Home Row (मध्यम ओळ - क म त न स)",
      text: "क म त न स य ल व र ह क म त न स य ल व र ह",
    },
    {
      id: "mr-top",
      title: "Top Row (वरची ओळ - ज ड ण च प)",
      text: "ज ड ण च प ट ठ ग ब द ज ड ण च प ट ठ ग ब द",
    },
    {
      id: "mr-bottom",
      title: "Bottom Row (खालची ओळ - झ ढ ध फ)",
      text: "झ ढ ध फ भ घ ळ श ष झ ढ ध फ भ घ ळ श ष",
    },
    {
      id: "mr-matra",
      title: "मात्रा व काना सराव",
      text: "का की कु के कै को कौ कं का की कु के कै को कौ कं",
    },
  ],
  english: [
    {
      id: "en-home",
      title: "Home Row (ASDF JKL;)",
      text: "asdf jkl; asdf jkl; aadd ssff jjkk ll;; asdf jkl;",
    },
    {
      id: "en-top",
      title: "Top Row (QWERTY UIOP)",
      text: "qwer tyui op qw er ty ui op qwert yuiop",
    },
    {
      id: "en-bottom",
      title: "Bottom Row (ZXCVBNM)",
      text: "zxcv bnm zx cv bn m zxcv bnm zxcvbnm",
    },
    {
      id: "en-all",
      title: "Full Alphabet (A-Z)",
      text: "the quick brown fox jumps over the lazy dog",
    },
  ],
};

function normalizeText(str: string): string {
  if (!str) return "";

  return str
    .replace(/[\u200B-\u200D\uFEFF\u00AD\u00A0]/g, "")
    .normalize("NFD")
    .replace(/\u093E\u0948/g, "\u094C")
    .replace(/\u093E\u0947/g, "\u094B")
    .replace(/\u093E\u0945/g, "\u0949")
    .replace(/\./g, "।")
    .normalize("NFC")
    .trim();
}

export default function KeyboardDrillsPage() {
  const [drillType, setDrillType] = useState<"row" | "words">("words");
  const [language, setLanguage] = useState<"marathi" | "english">("marathi");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [targetText, setTargetText] = useState<string>("");
  const [userInput, setUserInput] = useState<string>("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [accuracy, setAccuracy] = useState<number>(100);
  const [wpm, setWpm] = useState<number>(0);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (drillType === "row") {
      const rows = KEYBOARD_ROW_DRILLS[language];
      if (rows && rows.length > 0) {
        setSelectedCategory(rows[0].id);
        setTargetText(rows[0].text);
      }
    } else {
      const availableCats = COMMON_WORDS_DATA.filter((c) => c.language === language);
      if (availableCats && availableCats.length > 0) {
        setSelectedCategory(availableCats[0].id);
        setTargetText(availableCats[0].words.join(" "));
      }
    }
    handleReset();
  }, [drillType, language]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    if (drillType === "row") {
      const item = KEYBOARD_ROW_DRILLS[language].find((r) => r.id === catId);
      if (item) setTargetText(item.text);
    } else {
      const item = COMMON_WORDS_DATA.find((c) => c.id === catId);
      if (item) setTargetText(item.words.join(" "));
    }
    handleReset();
  };

  const targetWords = targetText.trim().split(/\s+/).filter(Boolean);
  const isTrailingSpace = /\s$/.test(userInput);
  const rawTypedWords = userInput.trimStart().split(/\s+/).filter(Boolean);

  let completedWords: string[] = [];
  let currentWord = "";

  if (userInput.trimStart().length === 0) {
    completedWords = [];
    currentWord = "";
  } else if (isTrailingSpace) {
    completedWords = rawTypedWords;
    currentWord = "";
  } else {
    completedWords = rawTypedWords.slice(0, -1);
    currentWord = rawTypedWords[rawTypedWords.length - 1] || "";
  }

  const activeWordIdx = completedWords.length;

  const updateTypingState = (val: string) => {
    if (!startTime) setStartTime(Date.now());
    setUserInput(val);

    const typedList = val.trimStart().split(/\s+/).filter(Boolean);
    let correctWords = 0;
    typedList.forEach((word, idx) => {
      if (targetWords[idx] && normalizeText(word) === normalizeText(targetWords[idx])) {
        correctWords++;
      }
    });

    const currentAcc =
      typedList.length > 0 ? Math.round((correctWords / typedList.length) * 100) : 100;
    setAccuracy(currentAcc);

    if (startTime) {
      const elapsedMins = (Date.now() - startTime) / 60000;
      if (elapsedMins > 0.02) {
        const wordsTyped = val.length / 5;
        setWpm(Math.round(wordsTyped / elapsedMins));
      }
    }
  };

  const handleReset = () => {
    setUserInput("");
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    inputRef.current?.focus();
  };

  const filteredCategories = COMMON_WORDS_DATA.filter((c) => c.language === language);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 flex flex-col justify-between selection:bg-cyan-400 selection:text-black font-sans relative overflow-x-hidden p-4 sm:p-6">
      
      {/* Dynamic Background Glow */}
      <GlowCursor />

      {/* Grid Pattern Overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-6">
        
        {/* Top Floating Glass Navigation */}
        <header className="glass-panel p-4 sm:p-5 rounded-3xl flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-300 text-xs transition duration-200 border border-slate-200 dark:border-white/[0.08] flex items-center gap-1.5 font-medium"
            >
              <ArrowLeft className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Back</span>
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-extrabold tracking-tight">
                  Keyboard & Word Drills
                </h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                  Muscle Memory
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                Targeted Row Workouts & High-Frequency Word Engine
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleReset}
              className="px-3.5 py-1.5 bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-200 font-semibold rounded-xl text-xs border border-slate-200 dark:border-white/[0.08] transition duration-200 flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Reset Drill</span>
            </button>

            {/* Theme Toggle Button */}
            <ThemeToggle />
          </div>
        </header>

        {/* Drill Controls Bar */}
        <div className="glass-panel p-4 rounded-2xl flex flex-wrap items-center justify-between gap-4">
          
          {/* Mode Switcher */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Mode:</span>
            <div className="bg-slate-100 dark:bg-black/50 p-1 rounded-xl border border-slate-200 dark:border-white/[0.08] flex gap-1">
              <button
                onClick={() => setDrillType("words")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  drillType === "words"
                    ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Common Words</span>
              </button>
              <button
                onClick={() => setDrillType("row")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  drillType === "row"
                    ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                <Keyboard className="w-3.5 h-3.5" />
                <span>Row Practice</span>
              </button>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Language:</span>
            <div className="bg-slate-100 dark:bg-black/50 p-1 rounded-xl border border-slate-200 dark:border-white/[0.08] flex gap-1">
              <button
                onClick={() => setLanguage("marathi")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  language === "marathi"
                    ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                🇮🇳 Marathi
              </button>
              <button
                onClick={() => setLanguage("english")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  language === "english"
                    ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                🇬🇧 English
              </button>
            </div>
          </div>

          {/* Category Dropdown */}
          <div className="flex items-center gap-2 flex-1 min-w-[260px]">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Category:</span>
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="bg-white dark:bg-black/50 border border-slate-200 dark:border-white/[0.08] rounded-xl px-3.5 py-2 text-xs text-cyan-700 dark:text-cyan-300 font-semibold w-full focus:outline-none focus:border-cyan-500"
            >
              {drillType === "row"
                ? KEYBOARD_ROW_DRILLS[language].map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.title}
                    </option>
                  ))
                : filteredCategories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title} ({c.words.length} words)
                    </option>
                  ))}
            </select>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-3 gap-4">
          <div className="glass-panel p-4 sm:p-5 rounded-2xl text-center">
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block mb-1">
              Typing Speed
            </span>
            <div className="flex items-center justify-center gap-1">
              <span className="text-2xl sm:text-3xl font-black font-mono text-cyan-600 dark:text-cyan-400">{wpm}</span>
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">WPM</span>
            </div>
          </div>

          <div className="glass-panel p-4 sm:p-5 rounded-2xl text-center">
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block mb-1">
              Accuracy
            </span>
            <div className="flex items-center justify-center gap-1">
              <span className={`text-2xl sm:text-3xl font-black font-mono ${accuracy >= 95 ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                {accuracy}
              </span>
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">%</span>
            </div>
          </div>

          <div className="glass-panel p-4 sm:p-5 rounded-2xl text-center">
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block mb-1">
              Progress
            </span>
            <div className="flex items-center justify-center gap-1">
              <span className="text-2xl sm:text-3xl font-black font-mono text-amber-600 dark:text-amber-400">
                {Math.min(100, Math.round((completedWords.length / (targetWords.length || 1)) * 100))}
              </span>
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">%</span>
            </div>
          </div>
        </div>

        {/* Word Display & Typing Bento Container */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
          
          {/* Target Words Stream */}
          <div className="flex flex-wrap gap-2 text-base sm:text-lg font-medium leading-relaxed tracking-wide font-mono bg-slate-100 dark:bg-black/40 p-6 rounded-2xl border border-slate-200 dark:border-white/[0.06] max-h-56 overflow-y-auto select-none shadow-inner">
            {targetWords.map((word, idx) => {
              const isDone = idx < completedWords.length;
              const isCurrent = idx === activeWordIdx;
              const isFuture = idx > activeWordIdx;

              let wordClass = "text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded";

              if (isDone) {
                const userWord = completedWords[idx] || "";
                if (normalizeText(userWord) === normalizeText(word)) {
                  wordClass = "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 font-bold px-2 py-0.5 rounded";
                } else {
                  wordClass = "text-rose-600 dark:text-rose-400 bg-rose-500/10 dark:bg-rose-500/20 line-through px-2 py-0.5 rounded";
                }
              } else if (isCurrent) {
                wordClass = "text-black bg-cyan-400 font-black px-2.5 py-0.5 rounded shadow-lg shadow-cyan-400/20 animate-pulse";
              } else if (isFuture) {
                wordClass = "text-slate-400 dark:text-slate-500 px-2 py-0.5";
              }

              return (
                <span key={idx} className={wordClass}>
                  {word}
                </span>
              );
            })}
          </div>

          {/* Interactive Input Box */}
          <div className="space-y-2">
            <MarathiTextarea
              ref={inputRef}
              rows={2}
              value={userInput}
              onChangeValue={(val) => updateTypingState(val)}
              isMarathi={language === "marathi"}
              placeholder={
                language === "marathi"
                  ? "येथे पाहून टाईप करा (प्रत्येक शब्दानंतर Space दाबा)..."
                  : "Type the target words here (press Space after each word)..."
              }
              className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/[0.08] focus:border-cyan-500 rounded-2xl px-5 py-4 text-base sm:text-lg text-slate-900 dark:text-slate-100 font-mono focus:outline-none transition-colors shadow-inner resize-none placeholder-slate-400 dark:placeholder-slate-600"
              autoFocus
            />
          </div>

          {/* Tip & Reset Helper */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-white/[0.06]">
            <div className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>
                Tip: Press <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-black/60 rounded border border-slate-300 dark:border-white/[0.1] text-cyan-700 dark:text-cyan-300 font-mono text-[10px]">Space</kbd> after completing each word.
              </span>
            </div>

            <button
              onClick={handleReset}
              className="px-3 py-1 bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-lg transition duration-200 cursor-pointer flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Restart Drill</span>
            </button>
          </div>
        </div>

      </div>

      {/* Modern Minimal Footer */}
      <footer className="relative z-10 max-w-6xl mx-auto w-full pt-8 text-center text-xs text-slate-500 font-mono">
        <span>TypeForge PRO • Keyboard Muscle Memory Engine</span>
      </footer>
    </main>
  );
}