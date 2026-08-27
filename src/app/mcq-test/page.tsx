// src/app/mcq-test/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import GlowCursor from "@/components/GlowCursor";
import ThemeToggle from "@/components/ThemeToggle";
import {
  ArrowLeft,
  Timer,
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Sparkles,
  BookOpen,
} from "lucide-react";

interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const TOTAL_TEST_TIME = 1500; // २५ मिनिटे

export default function MCQTestPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");

  const [timeLeft, setTimeLeft] = useState(TOTAL_TEST_TIME);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    async function fetchQuestions() {
      setLoading(true);
      try {
        const res = await fetch(`/api/mcq?category=${category}`);
        const result = await res.json();
        if (result.success) {
          setQuestions(result.data);
          setSelectedAnswers({});
          setCurrentIndex(0);
          setIsSubmitted(false);
          setTimeLeft(TOTAL_TEST_TIME);
        }
      } catch (err) {
        console.error("MCQ Load Error", err);
      } finally {
        setLoading(false);
      }
    }
    fetchQuestions();
  }, [category]);

  // टायमर
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isSubmitted && timeLeft > 0 && !loading) {
      interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && !isSubmitted) {
      setIsSubmitted(true);
    }
    return () => clearInterval(interval);
  }, [timeLeft, isSubmitted, loading]);

  const handleSelectOption = (qId: number, optIdx: number) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correct++;
      }
    });
    return {
      correctCount: correct,
      marks: correct * 2, // प्रत्येक प्रश्नाला २ गुण (एकूण ५० गुण)
      totalMarks: questions.length * 2,
      isPassed: correct * 2 >= 20, // किमान २०/५० गुण उत्तीर्ण होण्यासाठी
    };
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${rem.toString().padStart(2, "0")}`;
  };

  const currentQ = questions[currentIndex];
  const stats = calculateScore();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 font-sans p-4 sm:p-6 relative selection:bg-purple-500 selection:text-white">
      <GlowCursor />

      {/* Grid Background Pattern */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto space-y-4">
        
        {/* Top Header */}
        <header className="glass-panel p-4 rounded-2xl flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-300 text-xs transition duration-200 border border-slate-200 dark:border-white/[0.08] flex items-center gap-1.5 font-medium"
            >
              <ArrowLeft className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Back</span>
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-black tracking-tight">
                  GCC-TBC Theory MCQs
                </h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-700 dark:text-purple-300 uppercase tracking-wider">
                  50 Marks
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                २५ प्रश्न • प्रत्येक योग्य उत्तराला २ गुण • उत्तीर्ण निकष २० गुण
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <select
              value={category}
              disabled={isSubmitted}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-white dark:bg-black/50 border border-slate-200 dark:border-white/[0.08] rounded-xl px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-purple-500 disabled:opacity-50"
            >
              <option value="all">सर्व विषय (Full Mock)</option>
              <option value="Computer Fundamentals">Computer Fundamentals</option>
              <option value="MS Word">MS Word</option>
              <option value="MS Excel">MS Excel</option>
              <option value="MS PowerPoint">MS PowerPoint</option>
              <option value="Internet">Internet</option>
            </select>

            <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-black/50 border border-slate-200 dark:border-white/[0.08] font-mono text-amber-600 dark:text-amber-400 font-bold text-sm flex items-center gap-1.5 shadow-inner">
              <Timer className="w-4 h-4 text-amber-500 animate-pulse" />
              <span>{formatTime(timeLeft)}</span>
            </div>

            <ThemeToggle />
          </div>
        </header>

        {loading ? (
          <div className="glass-panel p-16 text-center text-slate-500 dark:text-slate-400 rounded-3xl">
            प्रश्न लोड होत आहेत...
          </div>
        ) : questions.length === 0 ? (
          <div className="glass-panel p-16 text-center text-slate-500 dark:text-slate-400 rounded-3xl">
            या विषयाचे प्रश्न उपलब्ध नाहीत.
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
            
            {/* Main Question Area */}
            <div className="lg:col-span-2 glass-panel p-6 rounded-3xl flex flex-col justify-between min-h-[460px]">
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

                  {/* Options */}
                  <div className="space-y-3">
                    {currentQ.options.map((opt, oIdx) => {
                      const isSelected = selectedAnswers[currentQ.id] === oIdx;
                      const isCorrect = currentQ.correctIndex === oIdx;

                      let btnStyle =
                        "bg-slate-50 dark:bg-black/30 border-slate-200 dark:border-white/[0.08] text-slate-800 dark:text-slate-200 hover:border-slate-400 dark:hover:border-white/[0.2]";

                      if (isSubmitted) {
                        if (isCorrect) {
                          btnStyle = "bg-emerald-500/15 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold shadow-sm";
                        } else if (isSelected && !isCorrect) {
                          btnStyle = "bg-rose-500/15 border-rose-500 text-rose-700 dark:text-rose-300 line-through";
                        }
                      } else if (isSelected) {
                        btnStyle = "bg-purple-500/15 border-purple-500 text-purple-700 dark:text-purple-300 font-bold shadow-sm";
                      }

                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleSelectOption(currentQ.id, oIdx)}
                          className={`w-full text-left p-3.5 rounded-2xl border text-sm sm:text-base transition-all duration-150 flex items-center gap-3 cursor-pointer ${btnStyle}`}
                        >
                          <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold ${
                            isSelected 
                              ? "bg-purple-600 text-white shadow-md shadow-purple-500/30" 
                              : "bg-slate-200 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300"
                          }`}>
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span className="flex-1">{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation (After Submit) */}
                  {isSubmitted && (
                    <div className="mt-5 p-4 rounded-2xl bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/[0.08] text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed shadow-inner">
                      💡 <span className="font-bold text-amber-600 dark:text-amber-400">स्पष्टीकरण:</span> {currentQ.explanation}
                    </div>
                  )}
                </div>
              )}

              {/* Navigation Controls */}
              <div className="flex justify-between items-center pt-6 mt-6 border-t border-slate-200 dark:border-white/[0.06]">
                <button
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex((prev) => prev - 1)}
                  className="px-4 py-2 bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] disabled:opacity-40 text-slate-700 dark:text-slate-200 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer"
                >
                  ← मागील
                </button>

                {!isSubmitted ? (
                  currentIndex === questions.length - 1 ? (
                    <button
                      onClick={() => setIsSubmitted(true)}
                      className="px-6 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-rose-600/25 transition cursor-pointer"
                    >
                      चाचणी सबमिट करा
                    </button>
                  ) : (
                    <button
                      onClick={() => setCurrentIndex((prev) => prev + 1)}
                      className="px-5 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-purple-600/25 transition cursor-pointer"
                    >
                      पुढील →
                    </button>
                  )
                ) : (
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setSelectedAnswers({});
                      setCurrentIndex(0);
                      setTimeLeft(TOTAL_TEST_TIME);
                    }}
                    className="px-5 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center gap-1.5 shadow-md"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>पुन्हा सराव करा</span>
                  </button>
                )}
              </div>
            </div>

            {/* Sidebar / Question Palette & Score */}
            <div className="space-y-4">
              
              {/* Score / Result Banner */}
              {isSubmitted && (
                <div className={`glass-panel p-5 rounded-3xl border text-center ${stats.isPassed ? "border-emerald-500/40 bg-emerald-500/5" : "border-rose-500/40 bg-rose-500/5"}`}>
                  <div className="text-3xl mb-1">{stats.isPassed ? "🏆" : "❌"}</div>
                  <h3 className="text-base font-black">{stats.isPassed ? "उत्तीर्ण (PASS)" : "अनुत्तीर्ण (FAIL)"}</h3>
                  <div className="text-3xl font-black mt-2 text-emerald-600 dark:text-emerald-400">
                    {stats.marks} <span className="text-xs font-normal text-slate-500 dark:text-slate-400">/ {stats.totalMarks} गुण</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">बरोबर: {stats.correctCount} / {questions.length} प्रश्न</p>
                </div>
              )}

              {/* Question Navigation Grid */}
              <div className="glass-panel p-5 rounded-3xl">
                <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                  प्रश्न पत्रिका (Question Palette)
                </h3>
                <div className="grid grid-cols-5 gap-2">
                  {questions.map((q, idx) => {
                    const isAnswered = selectedAnswers[q.id] !== undefined;
                    const isCurrent = currentIndex === idx;

                    let bg = "bg-slate-100 dark:bg-black/30 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/[0.08]";
                    if (isSubmitted) {
                      bg =
                        selectedAnswers[q.id] === q.correctIndex
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-rose-600 text-white border-rose-600";
                    } else if (isAnswered) {
                      bg = "bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-500/40 font-bold";
                    }

                    return (
                      <button
                        key={q.id}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-9 rounded-xl border text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${bg} ${
                          isCurrent ? "ring-2 ring-amber-500 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-950 scale-105" : ""
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

      {/* Modern Minimal Footer */}
      <footer className="relative z-10 max-w-5xl mx-auto w-full pt-8 text-center text-xs text-slate-500 font-mono">
        <span>TypeForge PRO • Official 50 Marks Theory Preparation</span>
      </footer>
    </div>
  );
}