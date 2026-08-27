// src/app/lessons/[id]/page.tsx
"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import GlowCursor from "@/components/GlowCursor";
import ThemeToggle from "@/components/ThemeToggle";
import MarathiTextarea from "@/components/MarathiTextarea";
import VirtualKeyboardHands from "@/components/VirtualKeyboardHands";
import { LESSONS_DATA, LessonItem, LessonStep } from "@/data/lessonsData";
import {
  ArrowLeft,
  RotateCcw,
  Star,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award,
  Zap,
  Target,
  Trophy,
  BookOpen,
} from "lucide-react";

import VirtualKeyboard from "@/components/VirtualKeyboard";

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

export default function LessonPlayerPage() {
  const params = useParams();
  const router = useRouter();
  const lessonId = params.id as string;

  const currentLesson: LessonItem | undefined = useMemo(() => {
    return LESSONS_DATA.find((l) => l.id === lessonId);
  }, [lessonId]);

  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);
  const [userInput, setUserInput] = useState<string>("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState<number>(0);
  const [accuracy, setAccuracy] = useState<number>(100);
  const [isStepFinished, setIsStepFinished] = useState<boolean>(false);
  const [isLessonComplete, setIsLessonComplete] = useState<boolean>(false);
  const [earnedStars, setEarnedStars] = useState<number>(0);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const currentStep: LessonStep | undefined = currentLesson?.steps[currentStepIdx];
  const isMarathi = currentLesson?.language === "marathi";

  const targetWords = useMemo(() => {
    return (currentStep?.targetText || "").trim().split(/\s+/).filter(Boolean);
  }, [currentStep]);

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
  const activeTargetWord = targetWords[activeWordIdx] || "";
  const activeChar = activeTargetWord[currentWord.length] || activeTargetWord[0] || "";

  useEffect(() => {
    handleResetStep();
  }, [currentStepIdx, lessonId]);

  const handleResetStep = () => {
    setUserInput("");
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setIsStepFinished(false);
    inputRef.current?.focus();
  };

  const calculateStars = (finalAcc: number) => {
    if (finalAcc >= 97) return 3;
    if (finalAcc >= 90) return 2;
    return 1;
  };

  const saveProgress = (stars: number) => {
    try {
      const saved = localStorage.getItem("typeforge_lessons_progress");
      const parsed = saved ? JSON.parse(saved) : {};
      const currentHighest = parsed[lessonId]?.stars || 0;

      parsed[lessonId] = {
        stars: Math.max(currentHighest, stars),
        completed: true,
      };

      localStorage.setItem("typeforge_lessons_progress", JSON.stringify(parsed));
    } catch (e) {
      console.error("Failed to save progress", e);
    }
  };

  const updateTypingState = (val: string) => {
    if (isStepFinished || isLessonComplete) return;

    const currentTime = startTime || Date.now();
    if (!startTime) setStartTime(currentTime);
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

    const elapsedMins = Math.max((Date.now() - currentTime) / 60000, 0.02);
    const wordsTyped = val.length / 5;
    const currentWpm = Math.round(wordsTyped / elapsedMins);
    setWpm(currentWpm);

    // Auto-step completion
    const hasFinishedBySpace = typedList.length >= targetWords.length && isTrailingSpace;
    const hasFinishedExactLastWord =
      typedList.length === targetWords.length &&
      normalizeText(typedList[typedList.length - 1]) ===
        normalizeText(targetWords[targetWords.length - 1]);

    if (targetWords.length > 0 && (hasFinishedBySpace || hasFinishedExactLastWord)) {
      setIsStepFinished(true);

      if (currentLesson && currentStepIdx === currentLesson.steps.length - 1) {
        const finalStars = calculateStars(currentAcc);
        setEarnedStars(finalStars);
        saveProgress(finalStars);
        setIsLessonComplete(true);
      }
    }
  };

  const handleNextStep = () => {
    if (currentLesson && currentStepIdx < currentLesson.steps.length - 1) {
      setCurrentStepIdx((prev) => prev + 1);
    }
  };

  const handleNextLesson = () => {
    const allFiltered = LESSONS_DATA.filter((l) => l.language === currentLesson?.language);
    const currentLessonIdx = allFiltered.findIndex((l) => l.id === lessonId);
    const nextLesson = allFiltered[currentLessonIdx + 1];

    if (nextLesson) {
      router.push(`/lessons/${nextLesson.id}`);
    } else {
      router.push("/lessons");
    }
  };

  if (!currentLesson || !currentStep) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-center">
        <div className="glass-panel p-8 rounded-3xl space-y-4">
          <p className="text-sm font-bold text-slate-500">धडा सापडला नाही (Lesson Not Found)</p>
          <Link href="/lessons" className="px-4 py-2 bg-cyan-500 text-black font-bold rounded-xl text-xs inline-block">
            धड्यांच्या यादीकडे परत जा
          </Link>
        </div>
      </div>
    );
  }

  const progressPercent = Math.round(((currentStepIdx + (isStepFinished ? 1 : 0)) / currentLesson.steps.length) * 100);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 font-sans relative overflow-x-hidden p-4 sm:p-6 selection:bg-cyan-400 selection:text-black">
      <GlowCursor />

      {/* Grid Pattern Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full space-y-6">
        {/* Top Floating Navigation Header */}
        <header className="glass-panel p-4 rounded-2xl flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/lessons"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-300 text-xs transition duration-200 border border-slate-200 dark:border-white/[0.08] flex items-center gap-1.5 font-medium"
            >
              <ArrowLeft className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Lessons Menu</span>
            </Link>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-extrabold tracking-tight">
                  {isMarathi ? currentLesson.marathiTitle : currentLesson.title}
                </h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 uppercase tracking-wider">
                  Screen {currentStepIdx + 1} of {currentLesson.steps.length}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                {currentStep.instruction}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleResetStep}
              className="px-3 py-1.5 bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-xl transition duration-200 flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Restart Screen</span>
            </button>

            <ThemeToggle />
          </div>
        </header>

        {/* Step Progression Bar */}
        <div className="w-full bg-slate-200 dark:bg-black/40 h-2 rounded-full overflow-hidden border border-slate-200 dark:border-white/[0.06]">
          <div
            className="bg-cyan-500 h-full transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Typing Bento Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
          {/* Target Stream */}
          <div className="flex flex-wrap gap-2 text-base sm:text-lg font-medium leading-relaxed tracking-wide font-mono bg-slate-100 dark:bg-black/40 p-6 rounded-2xl border border-slate-200 dark:border-white/[0.06] max-h-52 overflow-y-auto select-none shadow-inner">
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

          {/* Input Box */}
          <MarathiTextarea
            ref={inputRef}
            rows={2}
            value={userInput}
            onChangeValue={updateTypingState}
            isMarathi={isMarathi}
            disabled={isStepFinished || isLessonComplete}
            placeholder={
              isStepFinished
                ? "🎉 Screen completed! Click Next Screen below."
                : isMarathi
                ? "येथे पाहून टाईप करा (प्रत्येक शब्दानंतर Space दाबा)..."
                : "Type the target text here (press Space after each word)..."
            }
            className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/[0.08] focus:border-cyan-500 rounded-2xl px-5 py-4 text-base sm:text-lg text-slate-900 dark:text-slate-100 font-mono focus:outline-none transition-colors shadow-inner resize-none placeholder-slate-400 dark:placeholder-slate-600 disabled:opacity-50"
            autoFocus
          />

          {/* Live Mini Stats & Step Action */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-200 dark:border-white/[0.06]">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-xs font-mono">
                <span className="text-slate-500 dark:text-slate-400">Speed:</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400">{wpm} WPM</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono">
                <span className="text-slate-500 dark:text-slate-400">Accuracy:</span>
                <span className={`font-bold ${accuracy >= 95 ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                  {accuracy}%
                </span>
              </div>
            </div>

            {isStepFinished && !isLessonComplete && (
              <button
                onClick={handleNextStep}
                className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-xl text-xs sm:text-sm transition duration-200 shadow-lg shadow-cyan-500/25 cursor-pointer flex items-center gap-1.5 animate-bounce"
              >
                <span>पुढील स्क्रीन (Next Screen)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        // src/app/lessons/[id]/page.tsx मध्ये:

            // १. वर इम्पोर्ट जोडा:
            import VirtualKeyboard from "@/components/VirtualKeyboard";

            // २. रिटर्न JSX मध्ये टायपिंग टेक्स्टएरियाच्या खाली हा कॉम्पोनंट जोडा:
            <div className="mt-6">
                <VirtualKeyboard 
                    nextChar={activeChar} 
                    isMarathi={isMarathi} 
                />
                </div>
      </div>

      {/* 🏆 LESSON COMPLETION FINAL MODAL */}
      {isLessonComplete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl max-w-md w-full text-center space-y-6 shadow-2xl relative">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-500">
              <Award className="w-8 h-8 animate-bounce" />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                Lesson Completed! 🎓
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                अभिनंदन! तुम्ही हा धडा यशस्वीरीत्या पूर्ण केला आहे.
              </p>
            </div>

            {/* Earned Stars */}
            <div className="flex justify-center items-center gap-2">
              {[1, 2, 3].map((s) => (
                <Star
                  key={s}
                  className={`w-8 h-8 transition-transform duration-300 ${
                    earnedStars >= s
                      ? "text-amber-400 fill-amber-400 scale-110"
                      : "text-slate-300 dark:text-slate-700"
                  }`}
                />
              ))}
            </div>

            {/* Final Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/[0.08]">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block mb-1">
                  Average Speed
                </span>
                <div className="text-2xl font-black font-mono text-cyan-600 dark:text-cyan-400">
                  {wpm} <span className="text-xs font-normal text-slate-400">WPM</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/[0.08]">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block mb-1">
                  Accuracy
                </span>
                <div className="text-2xl font-black font-mono text-emerald-600 dark:text-emerald-400">
                  {accuracy}%
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  setIsLessonComplete(false);
                  setCurrentStepIdx(0);
                  handleResetStep();
                }}
                className="flex-1 py-3 bg-slate-100 dark:bg-white/[0.06] hover:bg-slate-200 dark:hover:bg-white/[0.1] text-slate-800 dark:text-slate-200 font-bold rounded-xl text-xs sm:text-sm transition border border-slate-300 dark:border-white/[0.1] cursor-pointer flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                <span>पुन्हा सोडवा</span>
              </button>

              <button
                onClick={handleNextLesson}
                className="flex-1 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-xl text-xs sm:text-sm transition duration-200 shadow-lg shadow-cyan-500/25 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>पुढचा धडा</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 max-w-5xl mx-auto w-full pt-8 text-center text-xs text-slate-500 font-mono">
        <span>TypeForge PRO • Interactive Lesson Engine</span>
      </footer>
    </main>
  );
}