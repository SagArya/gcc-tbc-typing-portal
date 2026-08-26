"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-4 sm:p-6">
      <div className="max-w-5xl mx-auto space-y-4">
        
        {/* Top Header */}
        <header className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs transition"
            >
              ← मुख्य पान
            </Link>
            <div>
              <h1 className="text-lg sm:text-xl font-black text-emerald-400">
                GCC-TBC Objective सराव (५० गुण)
              </h1>
              <p className="text-xs text-slate-400">२५ प्रश्न • प्रत्येक योग्य उत्तराला २ गुण • उत्तीर्ण निकष २० गुण</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <select
              value={category}
              disabled={isSubmitted}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
            >
              <option value="all">सर्व विषय (Full Mock)</option>
              <option value="Computer Fundamentals">Computer Fundamentals</option>
              <option value="MS Word">MS Word</option>
              <option value="MS Excel">MS Excel</option>
              <option value="MS PowerPoint">MS PowerPoint</option>
              <option value="Internet">Internet</option>
            </select>

            <div className="px-3.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 font-mono text-amber-400 font-bold text-sm">
              ⏳ {formatTime(timeLeft)}
            </div>
          </div>
        </header>

        {loading ? (
          <div className="p-16 text-center text-slate-400">प्रश्न लोड होत आहेत...</div>
        ) : questions.length === 0 ? (
          <div className="p-16 text-center text-slate-400">या विषयाचे प्रश्न उपलब्ध नाहीत.</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            
            {/* Main Question Area */}
            <div className="lg:col-span-2 bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between min-h-[460px]">
              {currentQ && (
                <div>
                  <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-800">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {currentQ.category}
                    </span>
                    <span className="text-xs text-slate-400">
                      प्रश्न {currentIndex + 1} / {questions.length}
                    </span>
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-slate-100 mb-6 leading-relaxed">
                    {currentIndex + 1}. {currentQ.question}
                  </h2>

                  {/* Options */}
                  <div className="space-y-3">
                    {currentQ.options.map((opt, oIdx) => {
                      const isSelected = selectedAnswers[currentQ.id] === oIdx;
                      const isCorrect = currentQ.correctIndex === oIdx;

                      let btnStyle =
                        "bg-slate-950 border-slate-800 text-slate-200 hover:border-slate-600";

                      if (isSubmitted) {
                        if (isCorrect) {
                          btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold";
                        } else if (isSelected && !isCorrect) {
                          btnStyle = "bg-rose-500/20 border-rose-500 text-rose-300 line-through";
                        }
                      } else if (isSelected) {
                        btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-semibold";
                      }

                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleSelectOption(currentQ.id, oIdx)}
                          className={`w-full text-left p-3.5 rounded-xl border text-sm sm:text-base transition flex items-center gap-3 ${btnStyle}`}
                        >
                          <span className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-300">
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation (After Submit) */}
                  {isSubmitted && (
                    <div className="mt-5 p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300">
                      💡 <span className="font-bold text-amber-400">स्पष्टीकरण:</span> {currentQ.explanation}
                    </div>
                  )}
                </div>
              )}

              {/* Navigation Controls */}
              <div className="flex justify-between items-center pt-6 mt-6 border-t border-slate-800">
                <button
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex((prev) => prev - 1)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 rounded-lg text-xs sm:text-sm font-semibold transition"
                >
                  ← मागील
                </button>

                {!isSubmitted ? (
                  currentIndex === questions.length - 1 ? (
                    <button
                      onClick={() => setIsSubmitted(true)}
                      className="px-6 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs sm:text-sm font-bold shadow-lg transition"
                    >
                      चाचणी सबमिट करा
                    </button>
                  ) : (
                    <button
                      onClick={() => setCurrentIndex((prev) => prev + 1)}
                      className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs sm:text-sm font-bold transition"
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
                    className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs sm:text-sm font-bold transition"
                  >
                    🔄 पुन्हा सराव करा
                  </button>
                )}
              </div>
            </div>

            {/* Sidebar / Question Palette & Score */}
            <div className="space-y-4">
              
              {/* Live Status Card */}
              {isSubmitted && (
                <div className={`p-5 rounded-2xl border text-center ${stats.isPassed ? "bg-emerald-950/40 border-emerald-500/40" : "bg-rose-950/40 border-rose-500/40"}`}>
                  <div className="text-3xl mb-1">{stats.isPassed ? "🏆" : "❌"}</div>
                  <h3 className="text-lg font-black">{stats.isPassed ? "उत्तीर्ण (PASS)" : "अनुत्तीर्ण (FAIL)"}</h3>
                  <div className="text-3xl font-black mt-2 text-emerald-400">
                    {stats.marks} <span className="text-sm font-normal text-slate-400">/ {stats.totalMarks} गुण</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">बरोबर: {stats.correctCount} / {questions.length} प्रश्न</p>
                </div>
              )}

              {/* Question Navigation Grid */}
              <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  प्रश्न पत्रिका (Question Palette)
                </h3>
                <div className="grid grid-cols-5 gap-2">
                  {questions.map((q, idx) => {
                    const isAnswered = selectedAnswers[q.id] !== undefined;
                    const isCurrent = currentIndex === idx;

                    let bg = "bg-slate-950 text-slate-400 border-slate-800";
                    if (isSubmitted) {
                      bg =
                        selectedAnswers[q.id] === q.correctIndex
                          ? "bg-emerald-600 text-white border-emerald-500"
                          : "bg-rose-600 text-white border-rose-500";
                    } else if (isAnswered) {
                      bg = "bg-emerald-500/20 text-emerald-400 border-emerald-500/40 font-bold";
                    }

                    return (
                      <button
                        key={q.id}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-9 rounded-lg border text-xs font-bold transition flex items-center justify-center ${bg} ${
                          isCurrent ? "ring-2 ring-amber-400 ring-offset-2 ring-offset-slate-900" : ""
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
    </div>
  );
}