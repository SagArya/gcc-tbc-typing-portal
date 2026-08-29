// src/app/speed-test/page.tsx
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import PassageViewer from "@/components/PassageViewer";
import MarathiTextarea from "@/components/MarathiTextarea";
import ResultCard from "@/components/ResultCard";
import MistakeReviewer from "@/components/MistakeReviewer";
import HistoryDashboard, { TestRecord } from "@/components/HistoryDashboard";
import GlowCursor from "@/components/GlowCursor";
import ThemeToggle from "@/components/ThemeToggle";
import { updateDailyStreak } from "@/utils/streakManager";

// 📚 Passages Data Imports
import { MARATHI_30_PASSAGES } from "@/data/marathi30Passages";
import { marathi40Passages } from "@/data/marathi40Passages";
import { ENGLISH_40_PASSAGES } from "@/data/english40Passages";
import { english50Passages } from "@/data/english50Passages";
import { english60Passages } from "@/data/english60Passages";

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
  ZoomIn,
  ZoomOut,
  Shuffle,
} from "lucide-react";

interface Passage {
  id: string;
  language: string;
  speed: number;
  title: string;
  text: string;
}

const EXAM_TIME_SECONDS = 420; // ७ मिनिटे
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

function getRandomItem<T>(items: T[]): T | null {
  if (!items || items.length === 0) return null;
  return items[Math.floor(Math.random() * items.length)];
}

export default function SpeedTestPage() {
  const [passages, setPassages] = useState<Passage[]>([]);
  const [selectedPassage, setSelectedPassage] = useState<Passage | null>(null);

  const [language, setLanguage] = useState("english");
  const [speed, setSpeed] = useState("40");
  const [loading, setLoading] = useState(true);
  const [fontSize, setFontSize] = useState<number>(16);

  const handleZoomIn = () => setFontSize((prev) => Math.min(prev + 1, 24));
  const handleZoomOut = () => setFontSize((prev) => Math.max(prev - 1, 14));

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
  const userInputRef = useRef(userInput);
  userInputRef.current = userInput;

  const timeLeftRef = useRef(timeLeft);
  timeLeftRef.current = timeLeft;

  const selectedPassageRef = useRef(selectedPassage);
  selectedPassageRef.current = selectedPassage;

  const timerRef = useRef<NodeJS.Timeout | null>(null);

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

  // 🛑 Safe Reset Logic (No re-render loops)
  const resetTest = useCallback((newPassage?: Passage) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (newPassage) {
      setSelectedPassage(newPassage);
    }
    setUserInput("");
    setTimeLeft(EXAM_TIME_SECONDS);
    setIsActive(false);
    setIsFinished(false);
    setShowResultModal(false);
    setIsReviewMode(false);
    setWeakKeysMap({});
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  }, []);

  // 📚 Safe Passage Loading
  useEffect(() => {
    if (passageSource === "custom") return;

    let formatted: Passage[] = [];

    if (language === "marathi" && speed === "30") {
      formatted = (MARATHI_30_PASSAGES || []).map((p: any) => ({
        id: String(p.id),
        language: "marathi",
        speed: 30,
        title: p.title || `Batch ${p.batchNo || p.id}`,
        text: p.text || p.content || "",
      }));
    } else if (language === "marathi" && speed === "40") {
      formatted = (marathi40Passages || []).map((p: any) => ({
        id: String(p.id),
        language: "marathi",
        speed: 40,
        title: p.title ? `${p.id}. ${p.title}` : `Passage ${p.id}`,
        text: p.content || p.text || "",
      }));
    } else if (language === "english" && speed === "40") {
      formatted = (ENGLISH_40_PASSAGES || []).map((p: any) => ({
        id: String(p.id),
        language: "english",
        speed: 40,
        title: p.title || `Batch ${p.batchNo || p.id}`,
        text: p.text || p.content || "",
      }));
    } else if (language === "english" && speed === "50") {
      formatted = (english50Passages || []).map((p: any) => ({
        id: String(p.id),
        language: "english",
        speed: 50,
        title: p.title ? `${p.id}. ${p.title}` : `Passage ${p.id}`,
        text: p.content || p.text || "",
      }));
    } else if (language === "english" && speed === "60") {
      formatted = (english60Passages || []).map((p: any) => ({
        id: String(p.id),
        language: "english",
        speed: 60,
        title: p.title ? `${p.id}. ${p.title}` : `Passage ${p.id}`,
        text: p.content || p.text || "",
      }));
    }

    if (formatted.length > 0) {
      setPassages(formatted);
      const randP = getRandomItem(formatted);
      setSelectedPassage(randP);
      setLoading(false);
      setUserInput("");
      setTimeLeft(EXAM_TIME_SECONDS);
      setIsActive(false);
      setIsFinished(false);
      return;
    }

    async function fetchFromApi() {
      try {
        setLoading(true);
        const res = await fetch(`/api/passages?lang=${language}&speed=${speed}`);
        const result = await res.json();
        if (result.success && result.data?.length > 0) {
          setPassages(result.data);
          const randApi = getRandomItem(result.data as Passage[]);
          setSelectedPassage(randApi);
        } else {
          setPassages([]);
          setSelectedPassage(null);
        }
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
        setUserInput("");
        setTimeLeft(EXAM_TIME_SECONDS);
        setIsActive(false);
        setIsFinished(false);
      }
    }

    fetchFromApi();
  }, [language, speed, passageSource]);

  const handlePickRandomPassage = () => {
    if (passages.length > 0) {
      const rand = getRandomItem(passages);
      if (rand) resetTest(rand);
    }
  };

  const finishTest = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsActive(false);
    setIsFinished(true);
    setShowResultModal(true);

    const currentPassage = selectedPassageRef.current;
    if (!currentPassage) return;

    const currentTyped = userInputRef.current;
    const currentRemainingTime = timeLeftRef.current;

    const timeSpentMinutes = (EXAM_TIME_SECONDS - currentRemainingTime) / 60 || 1 / 60;
    const typedWords = currentTyped.trim().split(/\s+/).filter(Boolean);
    const targetWords = currentPassage.text.trim().split(/\s+/).filter(Boolean);

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

    setMetrics({
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
    });

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
      passageTitle: currentPassage.title,
    };

    setHistory((prev) => {
      const updated = [newRecord, ...prev];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });

    updateDailyStreak();
  }, [speed, language]);

  useEffect(() => {
    if (isActive && !isFinished) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            timerRef.current = null;
            finishTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isActive, isFinished, finishTest]);

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "Enter") {
        e.preventDefault();
        if (isActive && !isFinished) {
          finishTest();
        }
        return;
      }

      if (e.key === "Escape") {
        if (showHistoryModal) {
          setShowHistoryModal(false);
          return;
        }
        if (showResultModal) {
          setShowResultModal(false);
          return;
        }
      }

      if ((showResultModal || isReviewMode) && (e.key === "Enter" || e.key.toLowerCase() === "r")) {
        if ((e.target as HTMLElement).tagName?.toLowerCase() !== "textarea") {
          e.preventDefault();
          resetTest();
        }
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [isActive, isFinished, showHistoryModal, showResultModal, isReviewMode, finishTest, resetTest]);

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
      resetTest(customP);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <main className="h-screen w-screen overflow-hidden bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 flex flex-col selection:bg-amber-400 selection:text-black font-sans relative px-3 pt-2 pb-2">
      <GlowCursor />

      <div className="relative z-10 w-full flex-1 flex flex-col gap-2 max-w-[1600px] mx-auto min-h-0">
        {/* Top Header Tab */}
        <header className="glass-panel px-3 py-1.5 rounded-2xl flex flex-wrap justify-between items-center gap-2 shrink-0">
          <div className="flex items-center gap-2.5">
            <Link
              href="/"
              tabIndex={1}
              className="p-1.5 rounded-xl bg-slate-100 dark:bg-black/40 hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-300 text-xs transition border border-slate-200 dark:border-white/[0.08] flex items-center gap-1 font-medium cursor-pointer focus:ring-2 focus:ring-amber-500 focus:outline-none"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-amber-500" />
              <span className="hidden sm:inline">Back</span>
            </Link>

            <div className="flex items-center gap-2">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  isReviewMode
                    ? "bg-amber-500 shadow-[0_0_8px_#f59e0b]"
                    : isActive
                    ? "bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"
                    : "bg-slate-400 dark:bg-slate-600"
                }`}
              />
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 truncate max-w-[220px] md:max-w-[320px]">
                {isReviewMode
                  ? "Review Mode: Green = Match, Red = Error"
                  : isActive
                  ? "Exam Active... [Ctrl+Enter: Submit]"
                  : "Type in workspace to start 7-min timer."}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="bg-slate-100 dark:bg-black/40 p-0.5 rounded-xl border border-slate-200 dark:border-white/[0.08] flex gap-0.5">
              <button
                tabIndex={2}
                onClick={() => setPassageSource("batch")}
                disabled={isActive || isReviewMode}
                className={`px-2 py-1 rounded-lg text-[11px] font-bold transition flex items-center gap-1 cursor-pointer focus:ring-2 focus:ring-amber-500 focus:outline-none ${
                  passageSource === "batch"
                    ? "bg-amber-500 text-slate-950 shadow-sm"
                    : "text-slate-600 dark:text-slate-400"
                }`}
              >
                <Layers className="w-3 h-3" />
                <span>Batches</span>
              </button>
              <button
                tabIndex={3}
                onClick={() => setPassageSource("custom")}
                disabled={isActive || isReviewMode}
                className={`px-2 py-1 rounded-lg text-[11px] font-bold transition flex items-center gap-1 cursor-pointer focus:ring-2 focus:ring-amber-500 focus:outline-none ${
                  passageSource === "custom"
                    ? "bg-amber-500 text-slate-950 shadow-sm"
                    : "text-slate-600 dark:text-slate-400"
                }`}
              >
                <Upload className="w-3 h-3" />
                <span>Custom</span>
              </button>
            </div>

            <select
              tabIndex={4}
              value={language}
              disabled={isActive || isReviewMode}
              onChange={(e) => {
                const newLang = e.target.value;
                setLanguage(newLang);
                if (newLang === "marathi" && (speed === "50" || speed === "60")) {
                  setSpeed("40");
                }
              }}
              className="bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/[0.08] rounded-xl px-2 py-1 text-[11px] text-slate-800 dark:text-slate-200 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
            >
              <option value="english" className="bg-white dark:bg-slate-900">🇬🇧 English</option>
              <option value="marathi" className="bg-white dark:bg-slate-900">🇮🇳 Marathi</option>
            </select>

            <select
              tabIndex={5}
              value={speed}
              disabled={isActive || isReviewMode}
              onChange={(e) => setSpeed(e.target.value)}
              className="bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/[0.08] rounded-xl px-2 py-1 text-[11px] text-slate-800 dark:text-slate-200 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
            >
              <option value="40" className="bg-white dark:bg-slate-900">40 WPM</option>
              <option value="30" className="bg-white dark:bg-slate-900">30 WPM</option>
              {language === "english" && (
                <>
                  <option value="50" className="bg-white dark:bg-slate-900">50 WPM</option>
                  <option value="60" className="bg-white dark:bg-slate-900">60 WPM</option>
                </>
              )}
            </select>

            {passageSource === "batch" && (
              <div className="flex items-center gap-1">
                <select
                  tabIndex={6}
                  value={selectedPassage?.id || ""}
                  disabled={isActive || isReviewMode}
                  onChange={(e) => {
                    const found = passages.find((p) => p.id === e.target.value);
                    if (found) {
                      resetTest(found);
                    }
                  }}
                  className="bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/[0.08] rounded-xl px-2 py-1 text-[11px] text-amber-600 dark:text-amber-300 font-bold focus:outline-none focus:ring-2 focus:ring-amber-500 max-w-[130px] sm:max-w-[170px] truncate cursor-pointer"
                >
                  {passages.map((p) => (
                    <option key={p.id} value={p.id} className="bg-white dark:bg-slate-900">
                      {p.title}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  tabIndex={7}
                  onClick={handlePickRandomPassage}
                  disabled={isActive || isReviewMode}
                  title="Random Passage निवडा"
                  className="p-1.5 rounded-xl bg-slate-100 dark:bg-black/40 hover:bg-slate-200 dark:hover:bg-white/[0.08] text-amber-500 border border-slate-200 dark:border-white/[0.08] transition cursor-pointer focus:ring-2 focus:ring-amber-500 focus:outline-none"
                >
                  <Shuffle className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            <div className="bg-slate-100 dark:bg-black/50 p-0.5 rounded-xl border border-slate-200 dark:border-white/[0.08] flex items-center gap-1">
              <button
                type="button"
                tabIndex={8}
                onClick={handleZoomOut}
                title="Font Size लहान करा"
                className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-white/[0.1] text-slate-700 dark:text-slate-300 transition cursor-pointer focus:ring-2 focus:ring-amber-500 focus:outline-none"
              >
                <ZoomOut className="w-3 h-3" />
              </button>
              <span className="text-[11px] font-mono font-bold px-1 text-amber-600 dark:text-amber-400">
                {fontSize}px
              </span>
              <button
                type="button"
                tabIndex={9}
                onClick={handleZoomIn}
                title="Font Size मोठी करा"
                className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-white/[0.1] text-slate-700 dark:text-slate-300 transition cursor-pointer focus:ring-2 focus:ring-amber-500 focus:outline-none"
              >
                <ZoomIn className="w-3 h-3" />
              </button>
            </div>

            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 dark:bg-black/60 border border-slate-200 dark:border-white/[0.08] rounded-xl font-mono text-xs sm:text-sm font-black text-amber-600 dark:text-amber-400">
              <Timer className="w-3.5 h-3.5 text-amber-500" />
              <span>{isReviewMode ? `${metrics.marksObtained}/40` : formatTime(timeLeft)}</span>
            </div>

            <button
              tabIndex={10}
              onClick={() => setShowHistoryModal(true)}
              className="px-2 py-1 bg-slate-100 dark:bg-black/40 hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-200 font-semibold rounded-xl text-[11px] border border-slate-200 dark:border-white/[0.08] flex items-center gap-1 cursor-pointer focus:ring-2 focus:ring-amber-500 focus:outline-none"
            >
              <History className="w-3.5 h-3.5 text-sky-500" />
              <span>({history.length})</span>
            </button>

            {isReviewMode && (
              <button
                tabIndex={11}
                onClick={() => setShowResultModal(true)}
                className="px-2.5 py-1 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl text-[11px] shadow-sm cursor-pointer flex items-center gap-1 focus:ring-2 focus:ring-sky-300 focus:outline-none"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Result</span>
              </button>
            )}

            {isActive && (
              <button
                tabIndex={12}
                onClick={finishTest}
                className="px-3 py-1 bg-rose-500 hover:bg-rose-400 text-white font-bold rounded-xl text-[11px] shadow-sm cursor-pointer flex items-center gap-1 animate-pulse focus:ring-2 focus:ring-rose-300 focus:outline-none"
              >
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Submit (Ctrl+↵)</span>
              </button>
            )}

            <button
              tabIndex={13}
              onClick={() => resetTest()}
              className="px-2 py-1 bg-slate-100 dark:bg-black/40 hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-200 font-semibold rounded-xl text-[11px] border border-slate-200 dark:border-white/[0.08] flex items-center gap-1 cursor-pointer focus:ring-2 focus:ring-amber-500 focus:outline-none"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isReviewMode ? "New (Enter)" : "Reset"}</span>
            </button>

            <ThemeToggle />
          </div>
        </header>

        {/* Custom Passage Drawer */}
        {passageSource === "custom" && !isActive && !isReviewMode && (
          <div className="glass-panel p-3 rounded-2xl space-y-2 shrink-0">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
              <FileText className="w-4 h-4 text-amber-500" />
              <span>Paste Custom Exam Passage:</span>
            </div>
            <textarea
              rows={2}
              tabIndex={14}
              value={customPassageInput}
              onChange={(e) => setCustomPassageInput(e.target.value)}
              placeholder="Paste your Marathi/English passage here..."
              className="w-full bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/[0.08] rounded-xl p-2.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
            />
            <button
              tabIndex={15}
              onClick={handleApplyCustomPassage}
              className="px-3 py-1 bg-amber-500 text-slate-950 font-bold rounded-xl text-xs transition shadow-md cursor-pointer focus:ring-2 focus:ring-amber-400 focus:outline-none"
            >
              Apply Passage
            </button>
          </div>
        )}

        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-stretch flex-1 min-h-0 pb-0">
          {/* Left Column: Passage Viewer */}
          <div className="glass-panel p-3 sm:p-4 rounded-2xl flex flex-col h-full min-h-0">
            <PassageViewer
              passageText={selectedPassage?.text || ""}
              userInput={userInput}
              title={selectedPassage?.title}
              loading={loading}
              fontSize={fontSize}
            />
          </div>

          {/* Right Column: Workspace OR Mistake Reviewer */}
          <div className="glass-panel p-3 sm:p-4 rounded-2xl flex flex-col h-full min-h-0">
            <div className="flex justify-between items-center mb-2.5 pb-2 border-b border-slate-200/80 dark:border-white/[0.08] shrink-0">
              <div className="flex items-center gap-2 font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider text-[11px]">
                <span className="p-1 rounded-lg bg-sky-500/10 border border-sky-500/25 text-sky-500 shadow-sm">
                  <Keyboard className="w-3.5 h-3.5" />
                </span>
                <span className="font-black">
                  {isReviewMode ? "Candidate Submission Review" : "Answer Typing Workspace"}
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-white/[0.06] px-3 py-1 rounded-xl border border-slate-200 dark:border-white/[0.08] shadow-sm">
                Words: {userInput.trim().split(/\s+/).filter(Boolean).length} /{" "}
                {selectedPassage?.text.trim().split(/\s+/).filter(Boolean).length || 0}
              </span>
            </div>

            {isReviewMode ? (
              <div className="flex-1 overflow-y-auto pr-1 space-y-2.5 min-h-0">
                <MistakeReviewer
                  originalText={selectedPassage?.text || ""}
                  userTypedText={userInput}
                />
              </div>
            ) : (
              <MarathiTextarea
                  ref={inputRef}
                  tabIndex={16}
                  value={userInput}
                  onChangeValue={(val) => {
                    if (!isActive && timeLeft > 0 && !isFinished) {
                      setIsActive(true);
                    }
                    setUserInput(val);
                  }}
                  isMarathi={language === "marathi"}
                  disabled={timeLeft === 0 || isFinished || loading}
                  placeholder={
                    language === "marathi"
                      ? "येथे डाव्या बाजूचा उतारा पाहून टाईप करा (परिच्छेदासाठी Tab आणि Enter वापरा)..."
                      : "Type the left side passage here (use Tab for paragraph and Ctrl+Enter to submit)..."
                  }
                  style={{
                    fontSize: `${fontSize}px`,
                    lineHeight: "1.8",
                    letterSpacing: "0px",
                    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                    fontWeight: 400,
                    tabSize: 4,
                  }}
                  className="flex-1 w-full p-4 sm:p-5 bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/[0.06] rounded-2xl focus:outline-none focus:border-amber-500 text-slate-600 dark:text-slate-400 leading-relaxed resize-none placeholder-slate-400 dark:placeholder-slate-600 shadow-inner overflow-y-auto min-h-0 text-left antialiased selection:bg-amber-500 selection:text-black"
                />
            )}
          </div>
        </div>

        {/* Modals & Dialogs */}
        <ResultCard
          isOpen={showResultModal}
          onRestart={() => resetTest()}
          onReview={() => {
            setShowResultModal(false);
            setIsReviewMode(true);
          }}
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
    </main>
  );
}