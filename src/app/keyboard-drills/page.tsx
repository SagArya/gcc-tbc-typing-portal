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
  Award,
  ArrowRight,
} from "lucide-react";

const KEYBOARD_ROW_DRILLS = {
  marathi: [
    {
      id: "mr-home-letters",
      title: "Home Row: अक्षरे (क म त न स य ल व र ह)",
      text: "क म त न स य ल व र ह क म त न स य ल व र ह कक मम तत नन सस यय लल वव रर हह कम तन सय लव रह कत सन यव लर हम सन यल वर हक मत नस यल वर ह",
    },
    {
      id: "mr-home-words",
      title: "Home Row: शब्द सराव (Home Row Words)",
      text: "कर सर तर वर नर मन तन वन सन मत सत कत रस लस नस लय वय लय वर करवत तरस कसरत नवरस सरवत समरस वतन तरक मकर नमक हरवत समय",
    },
    {
      id: "mr-top-letters",
      title: "Top Row: अक्षरे (ज ड ण च प ट ठ ग ब द)",
      text: "ज ड ण च प ट ठ ग ब द ज ड ण च प ट ठ ग ब द जज डड णण चच पप टट ठठ गग बब दद जड णच पट ठग बद जप चट ठब दण जद गट डब पण",
    },
    {
      id: "mr-top-words",
      title: "Top Row: शब्द सराव (Top Row Words)",
      text: "पट चट तट गट दड जड ठग बड चण पड पटपट चटचट गडबड दगड बडबड चटक पटक दणका ठसका टप टप चप चप घट घट दप दप",
    },
    {
      id: "mr-bottom-letters",
      title: "Bottom Row: अक्षरे (झ ढ ध फ भ घ ळ श ष)",
      text: "झ ढ ध फ भ घ ळ श ष झ ढ ध फ भ घ ळ श ष झझ ढढ धध फफ भभ घघ ळळ शश षष झढ धफ भघ ळश षझ ढध फभ घळ शष झफ ढभ धघ फळ भश घष",
    },
    {
      id: "mr-bottom-words",
      title: "Bottom Row: शब्द सराव (Bottom Row Words)",
      text: "धड फळ भट घट झट ढग फणस भडक धडक झडक घमघम झळझळ भलभल धन घट भर फळ शप शपथ धनंजय भाषण घोषणा ढकल भरण घडण",
    },
    {
      id: "mr-home-top-mix",
      title: "Home + Top Row: मिश्र शब्द (Combined Words)",
      text: "कपट गमन तपन नगर चमन पदक मदत जनक पतन कदम गगन पवन जगत तडक कडक चमक दमक चवदार चमकदार पटकन पटकन मदतगार जनमत परवाना",
    },
    {
      id: "mr-all-rows-advanced",
      title: "All Rows: संपूर्ण कीबोर्ड मास्टर सराव",
      text: "सकल जनमानसात आदर निर्माण करणारा मनुष्य नेहमी यशस्वी ठरतो सत्य आणि न्याय यांच्या मार्गावर चालणे हेच प्रत्येक नागरिकाचे परम कर्तव्य आहे सतत अभ्यास आणि सराव यामुळे टायपिंगचा वेग निश्चित वाढतो",
    },
    {
      id: "mr-matra-advanced",
      title: "मात्रा, काना, वेलांटी व उकार सराव",
      text: "का की कु कू के कै को कौ कं कः मा मी मु मू मे मै मो मौ मं मः ता ती तु तू ते तै तो तौ तं तः सा सी सु सू से सै सो सौ सं सः काम कीर कुल केस कोट कौल कासव जीवन पाऊस गौरव",
    },
  ],
  english: [
    {
      id: "en-home-letters",
      title: "Home Row: Letters (ASDF JKL;)",
      text: "asdf jkl; asdf jkl; aadd ssff jjkk ll;; aa ss dd ff jj kk ll ;; asdfg ;lkjh asdf jkl; gfdsa hjkl; aaddssff jjkkll;; asdf jkl; fdsa ;lkj",
    },
    {
      id: "en-home-words",
      title: "Home Row: Word Builder",
      text: "all fall salad flash glad alfalfa ask dad sad lad hall dash flask gas had half sash fall alas shall flags flasks Dallas salads alfalfa dads lads",
    },
    {
      id: "en-top-letters",
      title: "Top Row: Letters (QWERTY UIOP)",
      text: "qwer tyui op qw er ty ui op qwert yuiop poiuy trewq qq ww ee rr tt yy uu ii oo pp qwer uiop trew poiu wert yuiop qwert poiuy",
    },
    {
      id: "en-top-words",
      title: "Top Row: Word Builder",
      text: "type write power quiet poetry equity require tower root pure pour tree trip peer rope wire territory pepper priority twitter output pretty route",
    },
    {
      id: "en-bottom-letters",
      title: "Bottom Row: Letters (ZXCVBNM)",
      text: "zxcv bnm zx cv bn m zxcv bnm zxcvbnm mnbvcxz zz xx cc vv bb nn mm zxc vbn mnb vcx zxcv bnm mnbv cxz zxcvb nmzxc vbnm",
    },
    {
      id: "en-bottom-words",
      title: "Bottom Row: Word Builder",
      text: "man can ban van cab mob zinc exam comb coax bacon cabin civic bomb mimic amaze buzz maximum venom vacuum mix cabman",
    },
    {
      id: "en-home-top-mix",
      title: "Home + Top Row: Common Combinations",
      text: "there their where great trade quiet write state order power street plate water little letter please pretty factor filter reply simple figure people",
    },
    {
      id: "en-all-rows-advanced",
      title: "All Rows: Pangrams & Muscle Flow",
      text: "the quick brown fox jumps over the lazy dog pack my box with five dozen liquor jugs sphinx of black quartz judge my vow how razorback jumping frogs can level six piqued gymnasts",
    },
    {
      id: "en-speed-burst",
      title: "High-Frequency Speed Bursts",
      text: "about after again below could every first great house large might never other place right small there under water where world years youth daily early found group light money night party state",
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
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [showResultModal, setShowResultModal] = useState<boolean>(false);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const filteredCategories = COMMON_WORDS_DATA.filter((c) => c.language === language);
  const currentCategoryList = drillType === "row" ? KEYBOARD_ROW_DRILLS[language] : filteredCategories;

  useEffect(() => {
    if (drillType === "row") {
      const rows = KEYBOARD_ROW_DRILLS[language];
      if (rows && rows.length > 0) {
        setSelectedCategory(rows[0].id);
        setTargetText(rows[0].text);
      }
    } else {
      if (filteredCategories && filteredCategories.length > 0) {
        setSelectedCategory(filteredCategories[0].id);
        setTargetText(filteredCategories[0].words.join(" "));
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

  const handleNextDrill = () => {
    const currentIndex = currentCategoryList.findIndex((item) => item.id === selectedCategory);
    const nextIndex = (currentIndex + 1) % currentCategoryList.length;
    const nextItem = currentCategoryList[nextIndex];

    if (nextItem) {
      handleCategoryChange(nextItem.id);
    }
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
    if (isFinished) return;

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

    // 🎯 AUTO SUBMISSION CHECK
    const hasFinishedBySpace = typedList.length >= targetWords.length && isTrailingSpace;
    const hasFinishedExactLastWord =
      typedList.length === targetWords.length &&
      normalizeText(typedList[typedList.length - 1]) === normalizeText(targetWords[targetWords.length - 1]);

    if (targetWords.length > 0 && (hasFinishedBySpace || hasFinishedExactLastWord)) {
      setIsFinished(true);
      setShowResultModal(true);
    }
  };

  const handleReset = () => {
    setUserInput("");
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setIsFinished(false);
    setShowResultModal(false);
    inputRef.current?.focus();
  };

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
                disabled={isFinished}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50 ${
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
                disabled={isFinished}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50 ${
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
                disabled={isFinished}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer disabled:opacity-50 ${
                  language === "marathi"
                    ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                🇮🇳 Marathi
              </button>
              <button
                onClick={() => setLanguage("english")}
                disabled={isFinished}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer disabled:opacity-50 ${
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
              disabled={isFinished}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="bg-white dark:bg-black/50 border border-slate-200 dark:border-white/[0.08] rounded-xl px-3.5 py-2 text-xs text-cyan-700 dark:text-cyan-300 font-semibold w-full focus:outline-none focus:border-cyan-500 disabled:opacity-50"
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
              disabled={isFinished}
              placeholder={
                isFinished
                  ? "🎉 Drill Completed! Check your results."
                  : language === "marathi"
                  ? "येथे पाहून टाईप करा (प्रत्येक शब्दानंतर Space दाबा)..."
                  : "Type the target words here (press Space after each word)..."
              }
              className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/[0.08] focus:border-cyan-500 rounded-2xl px-5 py-4 text-base sm:text-lg text-slate-900 dark:text-slate-100 font-mono focus:outline-none transition-colors shadow-inner resize-none placeholder-slate-400 dark:placeholder-slate-600 disabled:opacity-50"
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

      {/* 🏆 AUTO-TRIGGERED DRILL RESULT MODAL */}
      {showResultModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl max-w-md w-full text-center space-y-6 shadow-2xl relative">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-600 dark:text-cyan-400">
              <Award className="w-8 h-8 animate-bounce" />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                Drill Completed! 🎉
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                उत्कृष्ट सराव! खालीलप्रमाणे तुमचा निकाल आहे:
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/[0.08]">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block mb-1">
                  Speed
                </span>
                <div className="text-2xl sm:text-3xl font-black font-mono text-cyan-600 dark:text-cyan-400">
                  {wpm} <span className="text-xs font-normal text-slate-400">WPM</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/[0.08]">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block mb-1">
                  Accuracy
                </span>
                <div className={`text-2xl sm:text-3xl font-black font-mono ${accuracy >= 95 ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                  {accuracy}%
                </div>
              </div>
            </div>

            {/* Action Buttons: Repeat + Next Drill */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleReset}
                className="flex-1 py-3 bg-slate-100 dark:bg-white/[0.06] hover:bg-slate-200 dark:hover:bg-white/[0.1] text-slate-800 dark:text-slate-200 font-bold rounded-xl text-xs sm:text-sm transition duration-200 border border-slate-300 dark:border-white/[0.1] cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
              >
                <RotateCcw className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>पुन्हा सराव करा</span>
              </button>

              <button
                onClick={handleNextDrill}
                className="flex-1 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-xl text-xs sm:text-sm transition duration-200 shadow-lg shadow-cyan-500/25 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>पुढचा सराव</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modern Minimal Footer */}
      <footer className="relative z-10 max-w-6xl mx-auto w-full pt-8 text-center text-xs text-slate-500 font-mono">
        <span>TypeForge PRO • Keyboard Muscle Memory Engine</span>
      </footer>
    </main>
  );
}