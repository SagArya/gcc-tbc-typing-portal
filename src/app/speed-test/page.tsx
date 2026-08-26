// src/app/speed-test/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import PassageViewer from "@/components/PassageViewer";
import MarathiTextarea from "@/components/MarathiTextarea";
import ResultCard from "@/components/ResultCard";
import MistakeReviewer from "@/components/MistakeReviewer";
import HistoryDashboard, { TestRecord } from "@/components/HistoryDashboard";

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

export default function SpeedTestPage() {
  const [passages, setPassages] = useState<Passage[]>([]);
  const [selectedPassage, setSelectedPassage] = useState<Passage | null>(null);
  const [language, setLanguage] = useState("marathi");
  const [speed, setSpeed] = useState("30");
  const [loading, setLoading] = useState(true);

  const [userInput, setUserInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(EXAM_TIME_SECONDS);
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);

  const [history, setHistory] = useState<TestRecord[]>([]);
  const [showHistoryModal, setShowHistoryModal] = useState(false);

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
    targetSpeed: 30,
    language: "marathi",
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

  useEffect(() => {
    async function loadPassages() {
      setLoading(true);
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
  }, [language, speed]);

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

    typedWords.forEach((word, index) => {
      if (word === targetWords[index]) {
        correctCount++;
      } else {
        wrongCount++;
      }
    });

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
  };

  const resetTest = () => {
    setUserInput("");
    setTimeLeft(EXAM_TIME_SECONDS);
    setIsActive(false);
    setIsFinished(false);
    setShowResultModal(false);
    setIsReviewMode(false);
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

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center p-4 lg:p-6 font-sans">
      
      {/* Top Bar with Back to Home Button */}
      <header className="w-full max-w-7xl bg-slate-900/90 backdrop-blur-xl p-4 rounded-2xl border border-slate-800 shadow-xl mb-4 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition"
            title="मुख्य पानावर जा"
          >
            ← मुख्य पान
          </Link>
          <div>
            <h1 className="text-lg sm:text-xl font-black text-emerald-400">
              GCC-TBC Speed Test Simulator
            </h1>
            <p className="text-[11px] text-slate-400">
              एकूण ४० गुण • उत्तीर्ण गुण १६ • ७ मिनिटे परीक्षा
            </p>
          </div>
        </div>

        {/* Dropdowns & History */}
        <div className="flex flex-wrap items-center gap-3">
          <div>
            <label className="block text-[10px] text-slate-400 font-semibold mb-0.5">भाषा</label>
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
              className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-emerald-500 disabled:opacity-50"
            >
              <option value="marathi">मराठी (Marathi)</option>
              <option value="english">इंग्रजी (English)</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] text-slate-400 font-semibold mb-0.5">गती (Speed)</label>
            <select
              value={speed}
              disabled={isActive || isReviewMode}
              onChange={(e) => setSpeed(e.target.value)}
              className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-emerald-500 disabled:opacity-50"
            >
              <option value="30">30 WPM (२१० शब्द)</option>
              <option value="40">40 WPM (२८० शब्द)</option>
              {language === "english" && (
                <>
                  <option value="50">50 WPM (३५० शब्द)</option>
                  <option value="60">60 WPM (४२० शब्द)</option>
                </>
              )}
            </select>
          </div>

          <div>
            <label className="block text-[10px] text-slate-400 font-semibold mb-0.5">उतारा निवडा</label>
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
              className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-emerald-500 disabled:opacity-50 max-w-[190px] truncate"
            >
              {passages.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end gap-2 pt-3">
            <button
              onClick={() => setShowHistoryModal(true)}
              className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg text-xs sm:text-sm transition flex items-center gap-1.5 shadow-sm"
            >
              📊 इतिहास ({history.length})
            </button>

            {isReviewMode && (
              <button
                onClick={() => setShowResultModal(true)}
                className="px-4 py-1.5 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-lg text-xs sm:text-sm transition shadow-sm"
              >
                रिझल्ट कार्ड
              </button>
            )}
            {isActive && (
              <button
                onClick={finishTest}
                className="px-4 py-1.5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-lg text-xs sm:text-sm transition shadow-sm"
              >
                सबमिट करा
              </button>
            )}
            <button
              onClick={resetTest}
              className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-lg text-xs sm:text-sm border border-slate-700 transition"
            >
              {isReviewMode ? "नवीन चाचणी" : "रीस्टार्ट"}
            </button>
          </div>
        </div>
      </header>

      {/* Timer / Status Bar */}
      <div className="w-full max-w-7xl bg-slate-900/70 backdrop-blur-md px-5 py-3 rounded-xl border border-slate-800 flex justify-between items-center mb-4">
        <div className="flex items-center gap-2.5">
          <span
            className={`w-3 h-3 rounded-full ${
              isReviewMode
                ? "bg-amber-400"
                : isActive
                ? "bg-emerald-500 animate-pulse"
                : "bg-slate-600"
            }`}
          />
          <span className="text-xs sm:text-sm font-semibold text-slate-300">
            {isReviewMode
              ? "🔍 चाचणी विश्लेषण मोड (लाल: चूक, हिरवा: बरोबर)"
              : isActive
              ? "परीक्षा चालू आहे (टाइप करत राहा)..."
              : "उजव्या बाजूला टाईप करायला सुरुवात करा (टायमर आपोआप सुरू होईल)"}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400 font-medium">
            {isReviewMode ? "गुण:" : "शिल्लक वेळ:"}
          </span>
          <span className="text-xl sm:text-2xl font-mono font-black text-amber-400 tracking-tight">
            {isReviewMode ? `${metrics.marksObtained}/40` : formatTime(timeLeft)}
          </span>
        </div>
      </div>

      {/* Split Screen Layout */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1">
        
        {/* Left Column: Passage */}
        <PassageViewer
          passageText={selectedPassage?.text || ""}
          userInput={userInput}
          title={selectedPassage?.title}
          loading={loading}
        />

        {/* Right Column: Typing Window OR Review */}
        <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 flex flex-col shadow-xl">
          <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
            <h2 className="text-sm font-bold text-sky-400 uppercase tracking-wider">
              {isReviewMode ? "📋 विद्यार्थ्यांचा मसुदा (Mistake Review)" : "⌨️ टायपिंग विंडो (Answer Area)"}
            </h2>
            <span className="text-xs text-slate-400">
              शब्द: {userInput.trim().split(/\s+/).filter(Boolean).length} / {selectedPassage?.text.trim().split(/\s+/).filter(Boolean).length || 0}
            </span>
          </div>

          {isReviewMode ? (
            <MistakeReviewer
              originalText={selectedPassage?.text || ""}
              userTypedText={userInput}
            />
          ) : (
            <MarathiTextarea
              ref={inputRef}
              value={userInput}
              onChange={(val) => {
                if (!isActive && timeLeft > 0 && !isFinished) {
                  setIsActive(true);
                }
                setUserInput(val);
              }}
              isMarathi={language === "marathi"}
              disabled={timeLeft === 0 || isFinished || loading}
              placeholder="येथे डाव्या बाजूचा उतारा पाहून टाईप करा (परिच्छेदासाठी Tab आणि Enter वापरा)..."
              className="flex-1 w-full p-5 bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:border-emerald-500 text-base sm:text-lg text-slate-100 leading-relaxed resize-none placeholder-slate-600 min-h-[350px] lg:min-h-[500px]"
            />
          )}
        </div>
      </div>

      {/* Modals */}
      <ResultCard
        isOpen={showResultModal}
        onRestart={resetTest}
        onReview={handleReview}
        metrics={metrics}
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
    </main>
  );
}