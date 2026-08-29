// src/app/mcq-test/page.tsx
"use client";

import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import Link from "next/link";
import GlowCursor from "@/components/GlowCursor";
import ThemeToggle from "@/components/ThemeToggle";

// --- English Datasets ---
import { MS_WORD_ENGLISH_MCQ } from "@/data/mcq/english/msWord";
import { MS_EXCEL_ENGLISH_MCQ } from "@/data/mcq/english/msExcel";
import { MS_POWERPOINT_ENGLISH_MCQ } from "@/data/mcq/english/msPowerPoint";
import { COMPUTER_FUNDAMENTALS_ENGLISH_MCQ } from "@/data/mcq/english/fundamentals";
import { INTERNET_EMAIL_ENGLISH_MCQ } from "@/data/mcq/english/internetEmail";

// --- Marathi Datasets ---
import { MS_WORD_MARATHI_MCQ } from "@/data/mcq/marathi/msWord";
import { MS_EXCEL_MARATHI_MCQ } from "@/data/mcq/marathi/msExcel";
import { MS_POWERPOINT_MARATHI_MCQ } from "@/data/mcq/marathi/msPowerPoint";
import { COMPUTER_FUNDAMENTALS_MARATHI_MCQ } from "@/data/mcq/marathi/fundamentals";
import { INTERNET_EMAIL_MARATHI_MCQ } from "@/data/mcq/marathi/internetEmail";

import {
  ArrowLeft,
  Timer,
  CheckCircle2,
  XCircle,
  RotateCcw,
  BookOpen,
  Keyboard,
} from "lucide-react";

interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

const TOTAL_TEST_TIME = 1500; // २५ मिनिटे

export default function MCQTestPage() {
  const [language, setLanguage] = useState<"marathi" | "english">("marathi");
  const [category, setCategory] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [timeLeft, setTimeLeft] = useState<number>(TOTAL_TEST_TIME);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);

  const rawQuestionsList: Question[] = useMemo(() => {
    const isMr = language === "marathi";

    const wordData = isMr ? MS_WORD_MARATHI_MCQ : MS_WORD_ENGLISH_MCQ;
    const excelData = isMr ? MS_EXCEL_MARATHI_MCQ : MS_EXCEL_ENGLISH_MCQ;
    const pptData = isMr ? MS_POWERPOINT_MARATHI_MCQ : MS_POWERPOINT_ENGLISH_MCQ;
    const fundData = isMr ? COMPUTER_FUNDAMENTALS_MARATHI_MCQ : COMPUTER_FUNDAMENTALS_ENGLISH_MCQ;
    const netData = isMr ? INTERNET_EMAIL_MARATHI_MCQ : INTERNET_EMAIL_ENGLISH_MCQ;

    const formatList = (list: any[], catName: string, idOffset: number) =>
      list.map((q) => ({
        id: idOffset + q.id,
        category: catName,
        question: q.question,
        options: q.options,
        correctIndex: q.correctAnswer,
        explanation: isMr
          ? `योग्य उत्तर: पर्याय ${String.fromCharCode(65 + q.correctAnswer)} (${q.options[q.correctAnswer]})`
          : `Correct Answer: Option ${String.fromCharCode(65 + q.correctAnswer)} (${q.options[q.correctAnswer]})`,
      }));

    return [
      ...formatList(wordData, "MS Word", 1000),
      ...formatList(excelData, "MS Excel", 2000),
      ...formatList(pptData, "MS PowerPoint", 3000),
      ...formatList(fundData, "Computer Fundamentals", 4000),
      ...formatList(netData, "Internet & Email", 5000),
    ];
  }, [language]);

  const handleRestart = useCallback(() => {
    let filtered = rawQuestionsList;
    if (category !== "all") {
      filtered = rawQuestionsList.filter((q) => q.category === category);
    }
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 25));
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsSubmitted(false);
    setTimeLeft(TOTAL_TEST_TIME);
  }, [category, rawQuestionsList]);

  useEffect(() => {
    handleRestart();
  }, [handleRestart]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isSubmitted && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && !isSubmitted) {
      setIsSubmitted(true);
    }
    return () => clearInterval(interval);
  }, [timeLeft, isSubmitted]);

  const handleSelectOption = useCallback(
    (qId: number, optIdx: number) => {
      if (isSubmitted) return;
      setSelectedAnswers((prev) => ({ ...prev, [qId]: optIdx }));
    },
    [isSubmitted]
  );

  const currentQ = questions[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["input", "textarea"].includes((e.target as HTMLElement).tagName.toLowerCase())) {
        return;
      }

      if (isSubmitted) {
        if (e.key === "Enter" || e.key.toLowerCase() === "r") {
          e.preventDefault();
          handleRestart();
        }
        return;
      }

      if (currentQ) {
        const key = e.key.toUpperCase();
        if (["1", "2", "3", "4"].includes(key)) {
          const idx = parseInt(key) - 1;
          if (idx < currentQ.options.length) {
            e.preventDefault();
            handleSelectOption(currentQ.id, idx);
          }
        } else if (["A", "B", "C", "D"].includes(key)) {
          const idx = key.charCodeAt(0) - 65;
          if (idx < currentQ.options.length) {
            e.preventDefault();
            handleSelectOption(currentQ.id, idx);
          }
        }
      }

      if (e.key === "ArrowRight") {
        e.preventDefault();
        if (currentIndex < questions.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        } else if (currentIndex === questions.length - 1 && !isSubmitted) {
          setIsSubmitted(true);
        }
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, questions.length, isSubmitted, currentQ, handleSelectOption, handleRestart]);

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correct++;
      }
    });
    return {
      correctCount: correct,
      marks: correct * 2,
      totalMarks: questions.length * 2,
      isPassed: correct * 2 >= 20,
    };
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${rem.toString().padStart(2, "0")}`;
  };

  const stats = calculateScore();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 font-sans p-3 sm:p-6 relative selection:bg-purple-500 selection:text-white">
      <GlowCursor />

      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto space-y-4">
        {/* Header */}
        <header className="glass-panel p-4 rounded-2xl flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              tabIndex={0}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-300 text-xs transition border border-slate-200 dark:border-white/[0.08] flex items-center gap-1.5 font-medium focus:ring-2 focus:ring-purple-500 focus:outline-none"
            >
              <ArrowLeft className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>{language === "marathi" ? "मागे (Back)" : "Back"}</span>
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-black tracking-tight">
                  GCC-TBC Theory MCQs
                </h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-700 dark:text-purple-300 uppercase">
                  1000 Question Bank
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
                <span>२५ प्रश्न • ५० गुण</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline text-purple-600 dark:text-purple-400 font-semibold flex items-center gap-1">
                  <Keyboard className="w-3 h-3" /> [1-4 / A-D: उत्तर | Tab ➔ Enter: पुढील | Shift+Tab: मागील]
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="bg-slate-100 dark:bg-black/50 p-1 rounded-xl border border-slate-200 dark:border-white/[0.08] flex items-center gap-1">
              <button
                tabIndex={0}
                onClick={() => setLanguage("marathi")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer focus:ring-2 focus:ring-purple-500 focus:outline-none ${
                  language === "marathi"
                    ? "bg-purple-600 text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400"
                }`}
              >
                मराठी
              </button>
              <button
                tabIndex={0}
                onClick={() => setLanguage("english")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer focus:ring-2 focus:ring-purple-500 focus:outline-none ${
                  language === "english"
                    ? "bg-purple-600 text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400"
                }`}
              >
                English
              </button>
            </div>

            <select
              value={category}
              disabled={isSubmitted}
              tabIndex={0}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-white dark:bg-black/50 border border-slate-200 dark:border-white/[0.08] rounded-xl px-2.5 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer disabled:opacity-50"
            >
              <option value="all">सर्व विषय (Full Mock - 25 Qs)</option>
              <option value="MS Word">MS Word</option>
              <option value="MS Excel">MS Excel</option>
              <option value="MS PowerPoint">MS PowerPoint</option>
              <option value="Computer Fundamentals">Computer Fundamentals</option>
              <option value="Internet & Email">Internet & Email</option>
            </select>

            <div className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-black/50 border border-slate-200 dark:border-white/[0.08] font-mono text-amber-600 dark:text-amber-400 font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-inner">
              <Timer className="w-4 h-4 text-amber-500 animate-pulse" />
              <span>{formatTime(timeLeft)}</span>
            </div>

            <ThemeToggle />
          </div>
        </header>

        {questions.length === 0 ? (
          <div className="glass-panel p-16 text-center text-slate-500 dark:text-slate-400 rounded-3xl">
            प्रश्न लोड होत आहेत...
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
            <div className="lg:col-span-2 glass-panel p-5 sm:p-6 rounded-3xl flex flex-col justify-between min-h-[460px]">
              {currentQ && (
                <div>
                  <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-200 dark:border-white/[0.06]">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20">
                      {currentQ.category}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      प्रश्न {currentIndex + 1} / {questions.length}
                    </span>
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-6 leading-relaxed">
                    {currentIndex + 1}. {currentQ.question}
                  </h2>

                  <div className="space-y-3">
                    {currentQ.options.map((opt, oIdx) => {
                      const isSelected = selectedAnswers[currentQ.id] === oIdx;
                      const isCorrect = currentQ.correctIndex === oIdx;

                      let btnStyle =
                        "bg-slate-50 dark:bg-black/30 border-slate-200 dark:border-white/[0.08] text-slate-800 dark:text-slate-200 hover:border-purple-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 focus:outline-none";

                      if (isSubmitted) {
                        if (isCorrect) {
                          btnStyle =
                            "bg-emerald-500/15 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold shadow-sm";
                        } else if (isSelected && !isCorrect) {
                          btnStyle =
                            "bg-rose-500/15 border-rose-500 text-rose-700 dark:text-rose-300 line-through";
                        }
                      } else if (isSelected) {
                        btnStyle =
                          "bg-purple-500/15 border-purple-500 text-purple-700 dark:text-purple-300 font-bold shadow-sm ring-2 ring-purple-500/50";
                      }

                      return (
                        <button
                          key={oIdx}
                          tabIndex={oIdx + 1}
                          onClick={() => handleSelectOption(currentQ.id, oIdx)}
                          className={`w-full text-left p-3.5 rounded-2xl border text-sm sm:text-base transition-all duration-150 flex items-center gap-3 cursor-pointer ${btnStyle}`}
                        >
                          <span
                            className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold ${
                              isSelected
                                ? "bg-purple-600 text-white shadow-md shadow-purple-500/30"
                                : "bg-slate-200 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300"
                            }`}
                          >
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span className="flex-1">{opt}</span>
                          <span className="text-[10px] font-mono text-slate-400 dark:text-slate-600 px-1.5 py-0.5 rounded border border-slate-200 dark:border-white/[0.08]">
                            {oIdx + 1}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {isSubmitted && currentQ.explanation && (
                    <div className="mt-5 p-4 rounded-2xl bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/[0.08] text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed shadow-inner">
                      💡 <span className="font-bold text-amber-600 dark:text-amber-400">स्पष्टीकरण:</span> {currentQ.explanation}
                    </div>
                  )}
                </div>
              )}

              {/* Navigation Buttons with Tab Order */}
              <div className="flex justify-between items-center pt-6 mt-6 border-t border-slate-200 dark:border-white/[0.06]">
                <button
                  ref={prevBtnRef}
                  disabled={currentIndex === 0}
                  tabIndex={5}
                  onClick={() => setCurrentIndex((prev) => prev - 1)}
                  className="px-4 py-2.5 bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 text-slate-700 dark:text-slate-200 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer border border-slate-200 dark:border-white/[0.08] disabled:opacity-40 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                >
                  ← {language === "marathi" ? "मागील (Shift+Tab)" : "Previous (Shift+Tab)"}
                </button>

                {!isSubmitted ? (
                  currentIndex === questions.length - 1 ? (
                    <button
                      ref={nextBtnRef}
                      tabIndex={6}
                      onClick={() => setIsSubmitted(true)}
                      className="px-6 py-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-rose-600/25 transition cursor-pointer focus:ring-2 focus:ring-rose-400 focus:outline-none"
                    >
                      {language === "marathi" ? "चाचणी सबमिट करा (Tab ➔ Enter)" : "Submit Test (Tab ➔ Enter)"}
                    </button>
                  ) : (
                    <button
                      ref={nextBtnRef}
                      tabIndex={6}
                      onClick={() => setCurrentIndex((prev) => prev + 1)}
                      className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-purple-600/25 transition cursor-pointer focus:ring-2 focus:ring-purple-400 focus:outline-none"
                    >
                      {language === "marathi" ? "पुढील (Tab ➔ Enter)" : "Next (Tab ➔ Enter)"}
                    </button>
                  )
                ) : (
                  <button
                    ref={nextBtnRef}
                    tabIndex={6}
                    onClick={handleRestart}
                    className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center gap-1.5 shadow-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{language === "marathi" ? "पुन्हा टेस्ट सुरू करा (Enter / R)" : "Restart (Enter / R)"}</span>
                  </button>
                )}
              </div>
            </div>

            <div className="space-y-4">
              {isSubmitted && (
                <div
                  className={`glass-panel p-5 rounded-3xl border text-center ${
                    stats.isPassed
                      ? "border-emerald-500/40 bg-emerald-500/5"
                      : "border-rose-500/40 bg-rose-500/5"
                  }`}
                >
                  <div className="text-3xl mb-1">{stats.isPassed ? "🏆" : "❌"}</div>
                  <h3 className="text-base font-black">
                    {stats.isPassed
                      ? language === "marathi" ? "उत्तीर्ण (PASS)" : "PASSED"
                      : language === "marathi" ? "अनुत्तीर्ण (FAIL)" : "FAILED"}
                  </h3>
                  <div className="text-3xl font-black mt-2 text-emerald-600 dark:text-emerald-400">
                    {stats.marks}{" "}
                    <span className="text-xs font-normal text-slate-500 dark:text-slate-400">
                      / {stats.totalMarks} {language === "marathi" ? "गुण" : "Marks"}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {language === "marathi"
                      ? `बरोबर: ${stats.correctCount} / ${questions.length} प्रश्न`
                      : `Correct: ${stats.correctCount} / ${questions.length} Qs`}
                  </p>
                </div>
              )}

              <div className="glass-panel p-5 rounded-3xl">
                <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                  {language === "marathi" ? "प्रश्न पत्रिका" : "Question Palette"}
                </h3>
                <div className="grid grid-cols-5 gap-2">
                  {questions.map((q, idx) => {
                    const isAnswered = selectedAnswers[q.id] !== undefined;
                    const isCurrent = currentIndex === idx;

                    let bg =
                      "bg-slate-100 dark:bg-black/30 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/[0.08]";
                    if (isSubmitted) {
                      bg =
                        selectedAnswers[q.id] === q.correctIndex
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-rose-600 text-white border-rose-600";
                    } else if (isAnswered) {
                      bg =
                        "bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-500/40 font-bold";
                    }

                    return (
                      <button
                        key={q.id}
                        tabIndex={-1}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-9 rounded-xl border text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${bg} ${
                          isCurrent
                            ? "ring-2 ring-amber-500 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-950 scale-105"
                            : ""
                        }`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="relative z-10 max-w-5xl mx-auto w-full pt-8 text-center text-xs text-slate-500 font-mono">
        <span>TypeForge PRO • Official 50 Marks Theory Preparation</span>
      </footer>
    </div>
  );
}