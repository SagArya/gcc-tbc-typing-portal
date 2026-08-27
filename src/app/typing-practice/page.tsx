// src/app/typing-practice/page.tsx
"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import VirtualKeyboardHands from "@/components/VirtualKeyboardHands";
import CustomPassageModal from "@/components/CustomPassageModal";
import WeakKeysDrawer from "@/components/WeakKeysDrawer";
import TypingResultModal from "@/components/TypingResultModal";
import MarathiTextarea from "@/components/MarathiTextarea";
import GlowCursor from "@/components/GlowCursor";
import ThemeToggle from "@/components/ThemeToggle";
import { useWeakKeysTracker } from "@/hooks/useWeakKeysTracker";
import {
  ArrowLeft,
  Timer,
  UploadCloud,
  Crosshair,
  HandMetal,
  RotateCcw,
  CheckCircle,
  FileText,
  Keyboard,
  Sparkles,
} from "lucide-react";

export interface PassageItem {
  id: string;
  title: string;
  text: string;
  lang?: "marathi" | "english";
}

const DEFAULT_PASSAGES: PassageItem[] = [
  {
    id: "default-1",
    title: "शासकीय परिपत्रक सराव - १ (मराठी ३० WPM)",
    text: "शासकीय सेवेतील सर्व अधिकारी व कर्मचारी यांनी कार्यालयीन कामकाजाच्या वेळेत उपस्थित राहणे अनिवार्य आहे. संगणकीय प्रणालीद्वारे दैनंदिन नोंदी वेळेवर पूर्ण कराव्यात.",
    lang: "marathi",
  },
  {
    id: "default-2",
    title: "Official Government Circular (English 40 WPM)",
    text: "It is mandatory for all officers and employees in government service to be present during official working hours. Daily entries should be completed on time through the computerized system.",
    lang: "english",
  },
];

export default function TypingPracticePage() {
  const [passages, setPassages] = useState<PassageItem[]>(DEFAULT_PASSAGES);
  const [selectedPassageId, setSelectedPassageId] = useState(DEFAULT_PASSAGES[0].id);
  const [userInput, setUserInput] = useState("");

  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [isWeakKeysOpen, setIsWeakKeysOpen] = useState(false);
  const [isResultOpen, setIsResultOpen] = useState(false);
  const [showHandsGuide, setShowHandsGuide] = useState(true);

  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isTypingActive, setIsTypingActive] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { getTopWeakKeys, clearStats } = useWeakKeysTracker();

  const currentPassage = useMemo(() => {
    return passages.find((p) => p.id === selectedPassageId) || passages[0];
  }, [passages, selectedPassageId]);

  const isEnglish = currentPassage.lang === "english";

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTypingActive && startTime) {
      interval = setInterval(() => {
        setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTypingActive, startTime]);

  // चालू शब्द व अक्षराचे ट्रॅकिंग
  const typedTokens = userInput.trimStart().split(/\s+/);
  const isTrailingSpace = /\s$/.test(userInput);
  const currentWordIndex = isTrailingSpace
    ? typedTokens.filter(Boolean).length
    : Math.max(0, typedTokens.filter(Boolean).length - 1);

  const passageWords = useMemo(() => {
    return currentPassage.text.trim().split(/\s+/).filter(Boolean);
  }, [currentPassage.text]);

  const activeTargetWord = passageWords[currentWordIndex] || "";
  const currentTypedWord = isTrailingSpace ? "" : typedTokens[typedTokens.length - 1] || "";

  const activeCharIndex = currentTypedWord.length;
  const activeChar = activeTargetWord[activeCharIndex] || activeTargetWord[0] || "";

  // निकाल मोजणी (NFC Normalization सह)
  const resultStats = useMemo(() => {
    const userWords = userInput.trim().split(/\s+/).filter(Boolean);
    const targetWords = currentPassage.text.trim().split(/\s+/).filter(Boolean);

    let correct = 0;
    userWords.forEach((word, idx) => {
      if (
        targetWords[idx] &&
        word.normalize("NFC") === targetWords[idx].normalize("NFC")
      ) {
        correct++;
      }
    });

    const total = userWords.length;
    const wrong = Math.max(0, total - correct);
    const timeInMinutes = Math.max(elapsedSeconds / 60, 0.1);

    const grossWpm = Math.round(total / timeInMinutes);
    const netWpm = Math.max(0, Math.round(correct / timeInMinutes));
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

    return {
      totalWords: total,
      correctWords: correct,
      wrongWords: wrong,
      accuracy,
      grossWpm,
      netWpm,
      timeTakenSeconds: elapsedSeconds,
    };
  }, [userInput, currentPassage, elapsedSeconds]);

  const handleInputChange = (val: string) => {
    if (!isTypingActive && val.length > 0) {
      setIsTypingActive(true);
      setStartTime(Date.now());
    }
    setUserInput(val);
  };

  const handleReset = () => {
    setUserInput("");
    setIsTypingActive(false);
    setStartTime(null);
    setElapsedSeconds(0);
    textareaRef.current?.focus();
  };

  const handleApplyCustomPassage = (
    title: string,
    text: string,
    lang?: "marathi" | "english"
  ) => {
    const selectedLang = lang || (/[^\u0900-\u097F]/.test(text) ? "english" : "marathi");
    const customItem: PassageItem = {
      id: `custom-${Date.now()}`,
      title: `${selectedLang === "english" ? "🇬🇧" : "🇮🇳"} ${title}`,
      text: text,
      lang: selectedLang,
    };
    setPassages((prev) => [customItem, ...prev]);
    setSelectedPassageId(customItem.id);
    handleReset();
  };

  const handleStartRemedialDrill = (keys: string[]) => {
    if (keys.length === 0) return;
    const drillText = keys
      .map((k) => `${k} ${k} ${k} ${k}${k} ${k} `)
      .join("")
      .repeat(4);

    handleApplyCustomPassage(
      "🎯 कमजोर अक्षरांचा सराव",
      drillText.trim(),
      "marathi"
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 flex flex-col justify-between selection:bg-emerald-400 selection:text-black font-sans relative overflow-x-hidden p-4 sm:p-6">
      
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

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-6">
        
        {/* Top Floating Glass Navigation */}
        <header className="glass-panel p-4 rounded-2xl flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-300 text-xs transition duration-200 border border-slate-200 dark:border-white/[0.08] flex items-center gap-1.5 font-medium"
            >
              <ArrowLeft className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Back</span>
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-extrabold tracking-tight">
                  Practice Lab
                </h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Diagnostic
                </span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                Mode: {isEnglish ? "🇬🇧 English Standard" : "🇮🇳 Marathi Remington GAIL"}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Live Timer Pill */}
            <div className="px-3.5 py-1.5 bg-slate-100 dark:bg-black/50 rounded-xl border border-slate-200 dark:border-white/[0.08] text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5 shadow-inner">
              <Timer className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
              <span>
                {Math.floor(elapsedSeconds / 60)}:
                {(elapsedSeconds % 60).toString().padStart(2, "0")}
              </span>
            </div>

            <button
              onClick={() => setIsCustomModalOpen(true)}
              className="px-3.5 py-1.5 bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/[0.08] rounded-xl text-xs font-semibold transition duration-200 flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <UploadCloud className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
              <span>Custom Passage</span>
            </button>

            <button
              onClick={() => setIsWeakKeysOpen(true)}
              className="px-3.5 py-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-500/30 rounded-xl text-xs font-semibold transition duration-200 flex items-center gap-1.5 cursor-pointer"
            >
              <Crosshair className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400" />
              <span>Weak Keys</span>
            </button>

            <button
              onClick={() => setShowHandsGuide((prev) => !prev)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition duration-200 flex items-center gap-1.5 cursor-pointer ${
                showHandsGuide
                  ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30"
                  : "bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/[0.08]"
              }`}
            >
              <HandMetal className="w-3.5 h-3.5" />
              <span>Finger Guide: {showHandsGuide ? "ON" : "OFF"}</span>
            </button>

            {/* Theme Toggle Button */}
            <ThemeToggle />
          </div>
        </header>

        {/* Bento Grid: Left (Question Passage) | Right (Interactive Typing Box) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* डावी बाजू: प्रश्न उतारा */}
          <div className="glass-panel p-6 rounded-3xl flex flex-col min-h-[420px] lg:min-h-[500px]">
            <div className="flex justify-between items-center text-xs border-b border-slate-200 dark:border-white/[0.06] pb-3 mb-4">
              <div className="flex items-center gap-2 font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider text-[11px]">
                <FileText className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span>Target Passage</span>
              </div>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-[220px] font-mono">
                {currentPassage.title}
              </span>
            </div>

            {/* Highlighting सह उतारा */}
            <div className="flex-1 bg-slate-100 dark:bg-black/40 p-5 rounded-2xl border border-slate-200 dark:border-white/[0.06] overflow-y-auto leading-relaxed text-base sm:text-lg font-sans select-none shadow-inner">
              {passageWords.map((word, idx) => {
                const userWord = typedTokens[idx];
                const isCurrent = idx === currentWordIndex;
                let wordColor = "text-slate-600 dark:text-slate-400";

                if (userWord !== undefined) {
                  if (userWord.normalize("NFC") === word.normalize("NFC")) {
                    wordColor = "text-emerald-600 dark:text-emerald-400 font-semibold";
                  } else {
                    wordColor = "text-rose-600 dark:text-rose-400 font-semibold underline decoration-rose-500/50";
                  }
                }

                return (
                  <span
                    key={idx}
                    className={`inline-block mr-2 mb-1 px-1.5 py-0.5 rounded transition-colors ${wordColor} ${
                      isCurrent ? "bg-amber-500/20 text-amber-800 dark:text-amber-300 border-b-2 border-amber-500 font-bold" : ""
                    }`}
                  >
                    {word}
                  </span>
                );
              })}
            </div>
          </div>

          {/* उजवी बाजू: टायपिंग बॉक्स */}
          <div className="glass-panel p-6 rounded-3xl flex flex-col min-h-[420px] lg:min-h-[500px]">
            <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400 mb-4 pb-3 border-b border-slate-200 dark:border-white/[0.06]">
              <div className="flex items-center gap-2 font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider text-[11px]">
                <Keyboard className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                <span>Live Interactive Input</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-3 py-1 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04] transition duration-200 flex items-center gap-1 cursor-pointer text-xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
                <button
                  onClick={() => {
                    setIsTypingActive(false);
                    setIsResultOpen(true);
                  }}
                  disabled={userInput.trim().length === 0}
                  className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-30 text-slate-950 font-black rounded-xl transition duration-200 text-xs shadow-md shadow-emerald-500/20 flex items-center gap-1.5 cursor-pointer"
                >
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Submit & Review</span>
                </button>
              </div>
            </div>

            <MarathiTextarea
              ref={textareaRef}
              value={userInput}
              onChangeValue={handleInputChange}
              isMarathi={!isEnglish}
              placeholder={
                isEnglish
                  ? "Type the target English passage here..."
                  : "येथे परीक्षा उताऱ्याप्रमाणे टायपिंग सुरू करा..."
              }
              className="flex-1 w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/[0.06] rounded-2xl p-5 text-base sm:text-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-500 leading-relaxed font-sans resize-none shadow-inner transition-colors duration-200 placeholder-slate-400 dark:placeholder-slate-600"
              autoFocus
            />
          </div>
        </div>

        {/* Visual Finger Guide */}
        {showHandsGuide && !isEnglish && (
          <div className="glass-panel p-6 rounded-3xl">
            <VirtualKeyboardHands activeChar={activeChar} />
          </div>
        )}

        {/* Modals & Diagnostic Drawers */}
        <CustomPassageModal
          isOpen={isCustomModalOpen}
          onClose={() => setIsCustomModalOpen(false)}
          onApplyPassage={handleApplyCustomPassage}
        />

        <WeakKeysDrawer
          isOpen={isWeakKeysOpen}
          onClose={() => setIsWeakKeysOpen(false)}
          weakKeys={getTopWeakKeys(8)}
          onClear={clearStats}
          onStartRemedialDrill={handleStartRemedialDrill}
        />

        <TypingResultModal
          isOpen={isResultOpen}
          onClose={() => setIsResultOpen(false)}
          onRetry={() => {
            setIsResultOpen(false);
            handleReset();
          }}
          title={currentPassage.title}
          {...resultStats}
        />
      </div>

      {/* Modern Minimal Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto w-full pt-8 text-center text-xs text-slate-500 font-mono">
        <span>TypeForge Engine • Diagnostic Practice Lab</span>
      </footer>
    </div>
  );
}