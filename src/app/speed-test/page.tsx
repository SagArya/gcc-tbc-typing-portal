// src/app/speed-test/page.tsx
"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import PassageViewer from "@/components/PassageViewer";
import MarathiTextarea from "@/components/MarathiTextarea";
import ResultCard from "@/components/ResultCard";
import MistakeReviewer from "@/components/MistakeReviewer";
import HistoryDashboard, { TestRecord } from "@/components/HistoryDashboard";
import GlowCursor from "@/components/GlowCursor";
import ThemeToggle from "@/components/ThemeToggle";
import { updateDailyStreak } from "@/utils/streakManager";
import { ENGLISH_40_PASSAGES } from "@/data/english40Passages";
import { MARATHI_30_PASSAGES } from "@/data/marathi30Passages";
import {
  ArrowLeft,
  Timer,
  History,
  RotateCcw,
  CheckCircle,
  Keyboard,
  Award,
  Upload,
  Layers,
  FileText,
  Activity,
} from "lucide-react";

interface Passage {
  id: string;
  language: string;
  speed: number;
  title: string;
  text: string;
}

const EXAM_TIME_SECONDS = 420; // ७ मिनिटे (GCC-TBC Standard)
const TOTAL_EXAM_MARKS = 40;
const PASSING_MARKS = 16;
const STORAGE_KEY = "gcc_tbc_typing_history";

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

export default function SpeedTestPage() {
  const [passages, setPassages] = useState<Passage[]>([]);
  const [selectedPassage, setSelectedPassage] = useState<Passage | null>(null);
  const [language, setLanguage] = useState("english");
  const [speed, setSpeed] = useState("40");
  const [loading, setLoading] = useState(true);

  // Passage Source: Batch vs Custom
  const [passageSource, setPassageSource] = useState<"batch" | "custom">("batch");
  const [customPassageInput, setCustomPassageInput] = useState("");

  const [userInput, setUserInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(EXAM_TIME_SECONDS);
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);

  const [history, setHistory] = useState<TestRecord[]>([]);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [weakKeysMap, setWeakKeysMap] = useState<{ [char: string]: number }>({});

  const [metrics, setMetrics] = useState({
  totalTargetWords: 0,
  typedWordsCount: 0,
  correctWordsCount: 0,
  wrongWordsCount: 0,
  remainingWordsCount: 0,
  mistakesCount: 0,
  marksObtained: 0,
  totalMarks: TOTAL_EXAM_MARKS,
  passingMarks: PASSING_MARKS,
  wpm: 0,
  accuracy: 100,
  targetSpeed: 40,
  language: "english",
  isPassed: false,
});

  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse history", e);
      }
    }
  }, []);

  // भाषा व स्पीडनुसार पॅसेजेस लोड करणे
  useEffect(() => {
    async function loadPassages() {
      if (passageSource === "custom") return;

      setLoading(true);

      // १. मराठी ३० WPM साठी लोकल डेटा
      if (language === "marathi" && speed === "30") {
        const formattedPassages: Passage[] = MARATHI_30_PASSAGES.map((p: any) => ({
          id: p.id,
          language: "marathi",
          speed: 30,
          title: p.title || `Batch ${p.batchNo}`,
          text: p.text || p.content || "",
        }));

        setPassages(formattedPassages);
        setSelectedPassage(formattedPassages[0] || null);
        setLoading(false);
        resetTest();
        return;
      }

      // २. इंग्रजी ४० WPM साठी लोकल डेटा
      if (language === "english" && speed === "40") {
        const formattedPassages: Passage[] = ENGLISH_40_PASSAGES.map((p: any) => ({
          id: p.id,
          language: "english",
          speed: 40,
          title: p.title || `Batch ${p.batchNo}`,
          text: p.text || p.content || "",
        }));

        setPassages(formattedPassages);
        setSelectedPassage(formattedPassages[0] || null);
        setLoading(false);
        resetTest();
        return;
      }

      // ३. इतर कॉम्बिनेशन्ससाठी API
      try {
        const res = await fetch(`/api/passages?lang=${language}&speed=${speed}`);
        const result = await res.json();
        if (result.success && result.data.length > 0) {
          setPassages(result.data);
          setSelectedPassage(result.data[0]);
        } else {
          setPassages([]);
          setSelectedPassage(null);
        }
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
        resetTest();
      }
    }
    loadPassages();
  }, [language, speed, passageSource]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      finishTest();
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const handleApplyCustomPassage = () => {
    if (customPassageInput.trim().length > 10) {
      const customP: Passage = {
        id: "custom-" + Date.now(),
        language: language,
        speed: Number(speed),
        title: "Custom Uploaded Passage",
        text: customPassageInput.trim(),
      };
      setSelectedPassage(customP);
      resetTest();
    }
  };

  const finishTest = () => {
    setIsActive(false);
    setIsFinished(true);
    setShowResultModal(true);

    if (!selectedPassage) return;

    const timeSpentMinutes = (EXAM_TIME_SECONDS - timeLeft) / 60 || 1 / 60;
    const typedWords = userInput.trim().split(/\s+/).filter(Boolean);
    const targetWords = selectedPassage.text.trim().split(/\s+/).filter(Boolean);

    let correctCount = 0;
    let wrongCount = 0;
    const newWeakKeys: { [char: string]: number } = {};

    typedWords.forEach((word, index) => {
      const tgt = targetWords[index];
      if (tgt && normalizeText(word) === normalizeText(tgt)) {
        correctCount++;
      } else {
        wrongCount++;
        if (tgt) {
          for (let i = 0; i < tgt.length; i++) {
            const char = tgt[i];
            if (word[i] !== char) {
              newWeakKeys[char] = (newWeakKeys[char] || 0) + 1;
            }
          }
        }
      }
    });

    setWeakKeysMap(newWeakKeys);

    const remainingCount = Math.max(0, targetWords.length - typedWords.length);
    const totalMistakes = wrongCount + remainingCount;
    const marks = Math.max(0, TOTAL_EXAM_MARKS - totalMistakes);

    const calculatedWpm = Math.round(correctCount / timeSpentMinutes);
    const calculatedAcc =
      typedWords.length > 0 ? Math.round((correctCount / typedWords.length) * 100) : 0;

    const passed = marks >= PASSING_MARKS;

    const resultMetrics = {
      totalTargetWords: targetWords.length,
      typedWordsCount: typedWords.length,
      correctWordsCount: correctCount,
      wrongWordsCount: wrongCount,
      remainingWordsCount: remainingCount,
      mistakesCount: totalMistakes,
      marksObtained: marks,
      totalMarks: TOTAL_EXAM_MARKS,
      passingMarks: PASSING_MARKS,
      wpm: calculatedWpm,
      accuracy: calculatedAcc,
      targetSpeed: Number(speed),
      language: language,
      isPassed: passed,
    };

    setMetrics(resultMetrics);

    const newRecord: TestRecord = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("mr-IN", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      }),
      language: language,
      targetSpeed: Number(speed),
      wpm: calculatedWpm,
      accuracy: calculatedAcc,
      marksObtained: marks,
      totalMarks: TOTAL_EXAM_MARKS,
      isPassed: passed,
      passageTitle: selectedPassage.title,
    };

    const updatedHistory = [newRecord, ...history];
    setHistory(updatedHistory);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));

    updateDailyStreak();
  };

  const resetTest = () => {
    setUserInput("");
    setTimeLeft(EXAM_TIME_SECONDS);
    setIsActive(false);
    setIsFinished(false);
    setShowResultModal(false);
    setIsReviewMode(false);
    setWeakKeysMap({});
    inputRef.current?.focus();
  };

  const handleReview = () => {
    setShowResultModal(false);
    setIsReviewMode(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const sortedWeakKeys = Object.entries(weakKeysMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 flex flex-col justify-between selection:bg-amber-400 selection:text-black font-sans relative overflow-x-hidden p-4 sm:p-6">
      
      {/* Background Glow Engine */}
      <GlowCursor />

      {/* Grid Pattern Overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-5">
        
        {/* Top Floating Navigation */}
        <header className="glass-panel p-4 sm:p-5 rounded-3xl flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-300 text-xs transition duration-200 border border-slate-200 dark:border-white/[0.08] flex items-center gap-1.5 font-medium"
            >
              <ArrowLeft className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              <span>Back</span>
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-extrabold tracking-tight">
                  Speed Test Simulator
                </h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                  Official Exam
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                40 Marks • Passing: 16 Marks • Strict 7 Min Window
              </span>
            </div>
          </div>

          {/* Selectors & Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Source Switcher */}
            <div>
              <label className="block text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-1">
                Source
              </label>
              <div className="bg-slate-100 dark:bg-black/40 p-1 rounded-xl border border-slate-200 dark:border-white/[0.08] flex gap-1">
                <button
                  onClick={() => setPassageSource("batch")}
                  disabled={isActive || isReviewMode}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1 disabled:opacity-50 ${
                    passageSource === "batch"
                      ? "bg-amber-500 text-slate-950 shadow-sm"
                      : "text-slate-600 dark:text-slate-400"
                  }`}
                >
                  <Layers className="w-3 h-3" />
                  <span>Batches</span>
                </button>
                <button
                  onClick={() => setPassageSource("custom")}
                  disabled={isActive || isReviewMode}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1 disabled:opacity-50 ${
                    passageSource === "custom"
                      ? "bg-amber-500 text-slate-950 shadow-sm"
                      : "text-slate-600 dark:text-slate-400"
                  }`}
                >
                  <Upload className="w-3 h-3" />
                  <span>Custom</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-1">
                Language
              </label>
              <select
                value={language}
                disabled={isActive || isReviewMode}
                onChange={(e) => {
                  const newLang = e.target.value;
                  setLanguage(newLang);
                  if (newLang === "marathi" && (speed === "50" || speed === "60")) {
                    setSpeed("30");
                  }
                }}
                className="bg-white dark:bg-black/40 border border-slate-200 dark:border-white/[0.08] rounded-xl px-3 py-1.5 text-xs text-slate-800 dark:text-slate-200 font-semibold focus:outline-none focus:border-amber-500 disabled:opacity-50"
              >
                <option value="marathi">🇮🇳 Marathi (मराठी)</option>
                <option value="english">🇬🇧 English (इंग्रजी)</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-1">
                Target Speed
              </label>
              <select
                value={speed}
                disabled={isActive || isReviewMode}
                onChange={(e) => setSpeed(e.target.value)}
                className="bg-white dark:bg-black/40 border border-slate-200 dark:border-white/[0.08] rounded-xl px-3 py-1.5 text-xs text-slate-800 dark:text-slate-200 font-semibold focus:outline-none focus:border-amber-500 disabled:opacity-50"
              >
                <option value="30">30 WPM (210 Words)</option>
                <option value="40">40 WPM (280 Words)</option>
                {language === "english" && (
                  <>
                    <option value="50">50 WPM (350 Words)</option>
                    <option value="60">60 WPM (420 Words)</option>
                  </>
                )}
              </select>
            </div>

            {passageSource === "batch" && (
              <div>
                <label className="block text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-1">
                  Exam Batch
                </label>
                <select
                  value={selectedPassage?.id || ""}
                  disabled={isActive || isReviewMode}
                  onChange={(e) => {
                    const found = passages.find((p) => p.id === e.target.value);
                    if (found) {
                      setSelectedPassage(found);
                      resetTest();
                    }
                  }}
                  className="bg-white dark:bg-black/40 border border-slate-200 dark:border-white/[0.08] rounded-xl px-3 py-1.5 text-xs text-amber-600 dark:text-amber-300 font-bold focus:outline-none focus:border-amber-500 disabled:opacity-50 max-w-[170px] truncate"
                >
                  {passages.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="flex items-end gap-2 pt-4 sm:pt-0">
              <button
                onClick={() => setShowHistoryModal(true)}
                className="px-3.5 py-1.5 bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-200 font-semibold rounded-xl text-xs transition duration-200 border border-slate-200 dark:border-white/[0.08] flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <History className="w-3.5 h-3.5 text-sky-500 dark:text-cyan-400" />
                <span>History ({history.length})</span>
              </button>

              {isReviewMode && (
                <button
                  onClick={() => setShowResultModal(true)}
                  className="px-3.5 py-1.5 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl text-xs transition duration-200 shadow-md cursor-pointer flex items-center gap-1.5"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Result Card</span>
                </button>
              )}

              {isActive && (
                <button
                  onClick={finishTest}
                  className="px-4 py-1.5 bg-rose-500 hover:bg-rose-400 text-white font-bold rounded-xl text-xs transition duration-200 shadow-md cursor-pointer flex items-center gap-1.5"
                >
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Submit Exam</span>
                </button>
              )}

              <button
                onClick={resetTest}
                className="px-3.5 py-1.5 bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-200 font-semibold rounded-xl text-xs border border-slate-200 dark:border-white/[0.08] transition duration-200 flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{isReviewMode ? "New Test" : "Restart"}</span>
              </button>

              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Custom Passage Input Drawer */}
        {passageSource === "custom" && !isActive && !isReviewMode && (
          <div className="glass-panel p-5 rounded-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
              <FileText className="w-4 h-4 text-amber-500" />
              <span>Paste Custom Exam Passage (येथे तुमचा स्वतःचा सराव उतारा पेस्ट करा):</span>
            </div>
            <textarea
              rows={3}
              value={customPassageInput}
              onChange={(e) => setCustomPassageInput(e.target.value)}
              placeholder="Paste your custom Marathi or English paragraph here..."
              className="w-full bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/[0.08] rounded-2xl p-4 text-xs sm:text-sm font-mono focus:outline-none focus:border-amber-500 resize-none placeholder-slate-400"
            />
            <button
              onClick={handleApplyCustomPassage}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition shadow-md cursor-pointer"
            >
              Apply Custom Passage
            </button>
          </div>
        )}

        {/* Live Status Ribbon */}
        <div className="glass-panel px-5 py-3 rounded-2xl flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span
              className={`w-3 h-3 rounded-full ${
                isReviewMode
                  ? "bg-amber-500 shadow-[0_0_8px_#f59e0b]"
                  : isActive
                  ? "bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"
                  : "bg-slate-400 dark:bg-slate-600"
              }`}
            />
            <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
              {isReviewMode
                ? "Diagnostic Review Mode • Red: Mistake, Green: Exact Match"
                : isActive
                ? "Exam Session Active • Type precisely as per official rules..."
                : "Type in the right box to auto-trigger the official 7-minute timer."}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
              {isReviewMode ? "Score:" : "Time Left:"}
            </span>
            <div className="flex items-center gap-1.5 px-3.5 py-1 bg-slate-100 dark:bg-black/50 border border-slate-200 dark:border-white/[0.08] rounded-xl font-mono text-lg sm:text-xl font-black text-amber-600 dark:text-amber-400">
              <Timer className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              <span>{isReviewMode ? `${metrics.marksObtained}/40` : formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>

        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Left Column: Passage Viewer */}
          <div className="flex flex-col">
            <PassageViewer
              passageText={selectedPassage?.text || ""}
              userInput={userInput}
              title={selectedPassage?.title}
              loading={loading}
            />
          </div>

          {/* Right Column: Workspace OR Mistake Reviewer */}
          <div className="glass-panel p-6 rounded-3xl flex flex-col min-h-[420px] lg:min-h-[500px]">
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-200 dark:border-white/[0.06]">
              <div className="flex items-center gap-2 font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider text-[11px]">
                <Keyboard className="w-4 h-4 text-sky-500 dark:text-sky-400" />
                <span>{isReviewMode ? "Candidate Submission Review" : "Answer Typing Workspace"}</span>
              </div>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Words: {userInput.trim().split(/\s+/).filter(Boolean).length} /{" "}
                {selectedPassage?.text.trim().split(/\s+/).filter(Boolean).length || 0}
              </span>
            </div>

            {isReviewMode ? (
              <div className="flex-1 flex flex-col justify-between space-y-4">
                <MistakeReviewer
                  originalText={selectedPassage?.text || ""}
                  userTypedText={userInput}
                />

                {/* Weak Keys Display in Review Mode */}
                {sortedWeakKeys.length > 0 && (
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400">
                      <Activity className="w-3.5 h-3.5" />
                      <span>Weak Keys Diagnostic (या अक्षरांमध्ये सर्वाधिक चुका झाल्या):</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {sortedWeakKeys.map(([char, count]) => (
                        <span
                          key={char}
                          className="px-2.5 py-1 bg-white dark:bg-black/50 border border-amber-500/30 rounded-lg text-xs font-mono font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1"
                        >
                          <span className="text-rose-600 font-black">{char}</span>
                          <span className="text-[10px] text-slate-400">({count}x)</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <MarathiTextarea
                ref={inputRef}
                value={userInput}
                onChangeValue={(val) => {
                  if (!isActive && timeLeft > 0 && !isFinished) {
                    setIsActive(true);
                  }
                  setUserInput(val);
                }}
                isMarathi={language === "marathi"}
                disabled={timeLeft === 0 || isFinished || loading}
                placeholder="येथे डाव्या बाजूचा उतारा पाहून टाईप करा (परिच्छेदासाठी Tab आणि Enter वापरा)..."
                className="flex-1 w-full p-5 bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/[0.06] rounded-2xl focus:outline-none focus:border-amber-500 text-[14px] sm:text-[15px] text-slate-900 dark:text-slate-100 font-mono leading-relaxed resize-none placeholder-slate-400 dark:placeholder-slate-600 shadow-inner transition-colors duration-200"
              />
            )}
          </div>
        </div>

        {/* Modals & Dialogs */}
        <ResultCard
          isOpen={showResultModal}
          onRestart={resetTest}
          onReview={handleReview}
          metrics={metrics}
          weakKeys={weakKeysMap}
        />

        <HistoryDashboard
          isOpen={showHistoryModal}
          onClose={() => setShowHistoryModal(false)}
          history={history}
          onClearHistory={() => {
            if (confirm("तुम्हाला सर्व सराव इतिहास काढून टाकायचा आहे का?")) {
              setHistory([]);
              localStorage.removeItem(STORAGE_KEY);
            }
          }}
        />
      </div>

      <footer className="relative z-10 max-w-7xl mx-auto w-full pt-8 text-center text-xs text-slate-500 font-mono">
        <span>GCC-TBC Verified Speed Simulator • 7 Minute Timed Engine</span>
      </footer>
    </main>
  );
}