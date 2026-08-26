// src/app/keyboard-drills/page.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { COMMON_WORDS_DATA } from "@/data/commonWords";

// मूलभूत कीबोर्ड रो ड्रिल्स
const KEYBOARD_ROW_DRILLS = {
  marathi: [
    { id: "mr-home", title: "Home Row (मध्यम ओळ - क म त न स)", text: "क म त न स य ल व र ह क म त न स य ल व र ह" },
    { id: "mr-top", title: "Top Row (वरची ओळ - ज ड ण च प)", text: "ज ड ण च प ट ठ ग ब द ज ड ण च प ट ठ ग ब द" },
    { id: "mr-bottom", title: "Bottom Row (खालची ओळ - झ ढ ध फ)", text: "झ ढ ध फ भ घ ळ श ष झ ढ ध फ भ घ ळ श ष" },
    { id: "mr-matra", title: "मात्रा व काना सराव", text: "का की कु के कै को कौ कं का की कु के कै को कौ कं" },
  ],
  english: [
    { id: "en-home", title: "Home Row (ASDF JKL;)", text: "asdf jkl; asdf jkl; aadd ssff jjkk ll;; asdf jkl;" },
    { id: "en-top", title: "Top Row (QWERTY UIOP)", text: "qwer tyui op qw er ty ui op qwert yuiop" },
    { id: "en-bottom", title: "Bottom Row (ZXCVBNM)", text: "zxcv bnm zx cv bn m zxcv bnm zxcvbnm" },
    { id: "en-all", title: "Full Alphabet (A-Z)", text: "the quick brown fox jumps over the lazy dog" },
  ],
};

export default function KeyboardDrillsPage() {
  const [drillType, setDrillType] = useState<"row" | "words">("words");
  const [language, setLanguage] = useState<"marathi" | "english">("marathi");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [targetText, setTargetText] = useState<string>("");
  const [userInput, setUserInput] = useState<string>("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [accuracy, setAccuracy] = useState<number>(100);
  const [wpm, setWpm] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  // भाषा किंवा मोड बदलल्यावर योग्य शब्द लोड करणे
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
        // कॅटेगरीमधील शब्द स्पेस देऊन जोडणे
        setTargetText(availableCats[0].words.join(" "));
      }
    }
    setUserInput("");
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
  }, [drillType, language]);

  // कॅटेगरी ड्रॉपडाउन बदलल्यावर
  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    if (drillType === "row") {
      const item = KEYBOARD_ROW_DRILLS[language].find((r) => r.id === catId);
      if (item) setTargetText(item.text);
    } else {
      const item = COMMON_WORDS_DATA.find((c) => c.id === catId);
      if (item) {
        setTargetText(item.words.join(" "));
      }
    }
    setUserInput("");
    setStartTime(null);
    inputRef.current?.focus();
  };

  // टायपिंग इनपुट हँडलर
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (!startTime) setStartTime(Date.now());
    setUserInput(val);

    let correctChars = 0;
    for (let i = 0; i < val.length; i++) {
      if (val[i] === targetText[i]) correctChars++;
    }

    const currentAcc = val.length > 0 ? Math.round((correctChars / val.length) * 100) : 100;
    setAccuracy(currentAcc);

    if (startTime) {
      const elapsedMins = (Date.now() - startTime) / 60000;
      if (elapsedMins > 0.05) {
        const wordsTyped = val.length / 5;
        setWpm(Math.round(wordsTyped / elapsedMins));
      }
    }
  };

  // रिसेट
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
      
      {/* 🧭 Top Bar */}
      <div className="max-w-5xl mx-auto flex items-center justify-between pb-6 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-xl text-amber-400">
            ⌨️
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-slate-100">कीबोर्ड व सामान्य शब्द सराव</h1>
            <p className="text-xs text-slate-400">Word Drills & Row Practice</p>
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

        {/* ⚙️ Controls */}
        <div className="bg-slate-900/60 border border-slate-800/80 p-4 rounded-2xl flex flex-wrap items-center justify-between gap-4 backdrop-blur-md">
          
          {/* Mode Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-semibold">मोड:</span>
            <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex gap-1">
              <button
                onClick={() => setDrillType("words")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  drillType === "words" ? "bg-amber-500 text-slate-950 shadow-md" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                📚 सामान्य शब्द
              </button>
              <button
                onClick={() => setDrillType("row")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  drillType === "row" ? "bg-amber-500 text-slate-950 shadow-md" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                ⌨️ रो सराव
              </button>
            </div>
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-semibold">भाषा:</span>
            <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex gap-1">
              <button
                onClick={() => setLanguage("marathi")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  language === "marathi" ? "bg-emerald-500 text-slate-950 shadow-md" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                🇮🇳 मराठी
              </button>
              <button
                onClick={() => setLanguage("english")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  language === "english" ? "bg-emerald-500 text-slate-950 shadow-md" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                🇬🇧 English
              </button>
            </div>
          </div>

          {/* Category Dropdown */}
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

        {/* 📊 Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-2xl text-center">
            <span className="text-[11px] text-slate-400 font-bold block uppercase">गती (Speed)</span>
            <span className="text-2xl font-black text-amber-400">{wpm} <span className="text-xs font-normal text-slate-400">WPM</span></span>
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
              {Math.min(100, Math.round((userInput.length / (targetText.length || 1)) * 100))}%
            </span>
          </div>
        </div>

        {/* 📝 Typing Practice Box */}
        <div className="bg-slate-900/70 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6 shadow-xl backdrop-blur-xl">
          
          <div className="text-lg sm:text-xl font-medium leading-relaxed tracking-wide font-mono bg-slate-950/80 p-6 rounded-2xl border border-slate-800/80 max-h-56 overflow-y-auto select-none">
            {targetText.split("").map((char, index) => {
              let colorClass = "text-slate-400";
              if (index < userInput.length) {
                colorClass = userInput[index] === char ? "text-emerald-400 bg-emerald-500/10 rounded" : "text-rose-400 bg-rose-500/20 rounded underline";
              } else if (index === userInput.length) {
                colorClass = "text-slate-950 bg-amber-400 rounded px-0.5 animate-pulse";
              }
              return (
                <span key={index} className={colorClass}>
                  {char}
                </span>
              );
            })}
          </div>

          <div className="space-y-2">
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={handleInputChange}
              placeholder="येथे पाहून टाईप करण्यास सुरुवात करा..."
              className="w-full bg-slate-950 border border-slate-700/80 focus:border-amber-500/60 rounded-2xl px-5 py-4 text-base sm:text-lg text-slate-100 font-mono focus:outline-none transition shadow-inner"
              autoFocus
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-400">
              💡 टीप: शब्द पूर्ण झाल्यावर <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300">Space</kbd> दाबा.
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