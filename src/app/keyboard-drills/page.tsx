// src/app/keyboard-drills/page.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import MarathiTextarea from "@/components/MarathiTextarea";
import { COMMON_WORDS_DATA } from "@/data/commonWords";

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
    // १. अदृश्य कॅरेक्टर्स आणि Non-breaking spaces काढून टाकणे
    .replace(/[\u200B-\u200D\uFEFF\u00AD\u00A0]/g, "")
    // २. देवनागरीचे सर्व घटक सुटे करणे
    .normalize("NFD")
    // ३. काना + दोन मात्रा => औ
    .replace(/\u093E\u0948/g, "\u094C")
    // ४. काना + एक मात्रा => ओ
    .replace(/\u093E\u0947/g, "\u094B")
    // ५. काना + अर्धचंद्र => ऑ
    .replace(/\u093E\u0945/g, "\u0949")
    // ६. इंग्रजी पूर्णविराम (.) आणि दंड (।) एकसमान करणे
    .replace(/\./g, "।")
    // ७. सर्वसामान्य NFC फॉर्ममध्ये एकत्रित करणे
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

  // १. मूळ शब्द आणि युझरने टाईप केलेले शब्द वेगळे करणे
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

    // अचूकता मोजणे
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
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 font-sans selection:bg-amber-500/30">
      <div className="max-w-5xl mx-auto flex items-center justify-between pb-6 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-xl text-amber-400">
            ⌨️
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-slate-100">कीबोर्ड व सामान्य शब्द सराव</h1>
            <p className="text-xs text-slate-400">Word Drills & Row Practice (Word-by-Word Engine)</p>
          </div>
        </div>
        <Link
          href="/"
          className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white transition"
        >
          ← मुख्य पान
        </Link>
      </div>

      <div className="max-w-5xl mx-auto mt-8 space-y-6">
        <div className="bg-slate-900/60 border border-slate-800/80 p-4 rounded-2xl flex flex-wrap items-center justify-between gap-4 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-semibold">मोड:</span>
            <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex gap-1">
              <button
                onClick={() => setDrillType("words")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  drillType === "words"
                    ? "bg-amber-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                📚 सामान्य शब्द
              </button>
              <button
                onClick={() => setDrillType("row")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  drillType === "row"
                    ? "bg-amber-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                ⌨️ रो सराव
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-semibold">भाषा:</span>
            <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex gap-1">
              <button
                onClick={() => setLanguage("marathi")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  language === "marathi"
                    ? "bg-emerald-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                🇮🇳 मराठी
              </button>
              <button
                onClick={() => setLanguage("english")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  language === "english"
                    ? "bg-emerald-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                🇬🇧 English
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-1 min-w-[260px]">
            <span className="text-xs text-slate-400 font-semibold">कॅटेगरी:</span>
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-amber-300 font-medium w-full focus:outline-none focus:border-amber-500/50"
            >
              {drillType === "row"
                ? KEYBOARD_ROW_DRILLS[language].map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.title}
                    </option>
                  ))
                : filteredCategories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title} ({c.words.length} शब्द)
                    </option>
                  ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-2xl text-center">
            <span className="text-[11px] text-slate-400 font-bold block uppercase">गती (Speed)</span>
            <span className="text-2xl font-black text-amber-400">
              {wpm} <span className="text-xs font-normal text-slate-400">WPM</span>
            </span>
          </div>
          <div className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-2xl text-center">
            <span className="text-[11px] text-slate-400 font-bold block uppercase">अचूकता (Accuracy)</span>
            <span className={`text-2xl font-black ${accuracy >= 95 ? "text-emerald-400" : "text-rose-400"}`}>
              {accuracy}%
            </span>
          </div>
          <div className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-2xl text-center">
            <span className="text-[11px] text-slate-400 font-bold block uppercase">प्रगती (Progress)</span>
            <span className="text-2xl font-black text-sky-400">
              {Math.min(100, Math.round((completedWords.length / (targetWords.length || 1)) * 100))}%
            </span>
          </div>
        </div>

        {/* Word Display Box */}
        <div className="bg-slate-900/70 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6 shadow-xl backdrop-blur-xl">
          <div className="flex flex-wrap gap-2.5 text-lg sm:text-xl font-medium leading-relaxed tracking-wide font-mono bg-slate-950/80 p-6 rounded-2xl border border-slate-800/80 max-h-56 overflow-y-auto select-none">
            {targetWords.map((word, idx) => {
              const isDone = idx < completedWords.length;
              const isCurrent = idx === activeWordIdx;
              const isFuture = idx > activeWordIdx;

              let wordClass = "text-slate-400 px-1.5 py-0.5 rounded";

              if (isDone) {
                const userWord = completedWords[idx] || "";
                if (normalizeText(userWord) === normalizeText(word)) {
                  wordClass = "text-emerald-400 bg-emerald-500/10 font-bold px-1.5 py-0.5 rounded";
                } else {
                  wordClass = "text-rose-400 bg-rose-500/20 line-through px-1.5 py-0.5 rounded";
                }
              } else if (isCurrent) {
                wordClass = "text-slate-950 bg-amber-400 font-bold px-2 py-0.5 rounded shadow-md animate-pulse";
              } else if (isFuture) {
                wordClass = "text-slate-500 px-1.5 py-0.5";
              }

              return (
                <span key={idx} className={wordClass}>
                  {word}
                </span>
              );
            })}
          </div>

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
                  : "Start typing in English..."
              }
              className="w-full bg-slate-950 border border-slate-700/80 focus:border-amber-500/60 rounded-2xl px-5 py-4 text-base sm:text-lg text-slate-100 font-mono focus:outline-none transition shadow-inner resize-none"
              autoFocus
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-400">
              💡 टीप: प्रत्येक अक्षर/शब्द पूर्ण झाल्यावर <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300">Space</kbd> दाबा.
            </span>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-bold rounded-xl transition"
            >
              🔄 पुन्हा सुरू करा
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}