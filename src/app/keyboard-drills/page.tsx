// src/app/keyboard-drills/page.tsx
"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import drillLessons from "@/data/drillLessons.json";

// अधिकृत Remington GAIL Normal Keymap
export const normalKeyMap: Record<string, string> = {
  "`": "़",
  "1": "१",
  "2": "२",
  "3": "३",
  "4": "४",
  "5": "५",
  "6": "६",
  "7": "७",
  "8": "८",
  "9": "९",
  "0": "०",
  "-": "-",
  "=": "ृ",
  q: "ु",
  w: "ू",
  e: "म",
  r: "त",
  t: "ज",
  y: "ल",
  u: "न",
  i: "प",
  o: "व",
  p: "च",
  "[": "ख्",
  "]": ",",
  "\\": ".",
  a: "ं",
  s: "े",
  d: "क",
  f: "ि",
  g: "ह",
  h: "ी",
  j: "र",
  k: "ा",
  l: "स",
  ";": "य",
  "'": "श्",
  z: "्र",
  x: "ग",
  c: "ब",
  v: "अ",
  b: "इ",
  n: "द",
  m: "उ",
  ",": "ए",
  ".": "ण्",
  "/": "ध्",
  " ": " ",
};

// अधिकृत Remington GAIL Shift Keymap
export const shiftKeyMap: Record<string, string> = {
  "~": "र्‍",
  "!": "!",
  "@": "ॅ",
  "#": "्र",
  $: "र्",
  "%": "ः",
  "^": "‘",
  "&": "’",
  "*": "ँ",
  "(": "त्र",
  ")": "ऋ",
  _: "–",
  "+": "्",
  Q: "फ",
  W: "ॉ",
  E: "म्",
  R: "त्",
  T: "ज्",
  Y: "ल्",
  U: "न्",
  I: "प्",
  O: "व्",
  P: "च्",
  "{": "क्ष",
  "}": "द्व",
  "|": "द्य",
  A: "ँ",
  S: "ै",
  D: "क्",
  F: "थ्",
  G: "ळ",
  H: "भ",
  J: "श्र",
  K: "ज्ञ",
  L: "स्",
  ":": "रू",
  '"': "ष्",
  Z: "र्",
  X: "ग्",
  C: "ब्",
  V: "ट",
  B: "ठ",
  N: "छ",
  M: "ड",
  "<": "ढ",
  ">": "झ",
  "?": "घ",
};

export default function KeyboardDrillsPage() {
  const [selectedLessonId, setSelectedLessonId] = useState(drillLessons[0].id);
  const currentLesson = drillLessons.find((l) => l.id === selectedLessonId) || drillLessons[0];

  const [inputCharIndex, setInputCharIndex] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [lastKeyPressed, setLastKeyPressed] = useState<string>("");

  // की-स्ट्रोक बफर (उदा. आधी 'k' दाबली की बफरमध्ये 'ा' राहील)
  const [typedBuffer, setTypedBuffer] = useState<string>("");

  const targetChars = useMemo(() => {
    return Array.from(currentLesson.text);
  }, [currentLesson.text]);

  const currentCharToType = targetChars[inputCharIndex] || "";

  useEffect(() => {
    setInputCharIndex(0);
    setMistakes(0);
    setStartTime(null);
    setWpm(0);
    setIsCompleted(false);
    setLastKeyPressed("");
    setTypedBuffer("");
  }, [selectedLessonId]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (typeof document !== "undefined" && document.activeElement instanceof HTMLSelectElement) {
        document.activeElement.blur();
      }

      if (e.ctrlKey || e.altKey || e.metaKey || e.key === "Tab" || e.key === "CapsLock" || e.key === "Shift") {
        return;
      }

      if (isCompleted) return;

      if (e.key === " ") {
        e.preventDefault();
      }

      const rawKey = e.key;
      let typedChar = rawKey;

      if (currentLesson.language === "marathi") {
        if (shiftKeyMap[rawKey]) {
          typedChar = shiftKeyMap[rawKey];
        } else if (normalKeyMap[rawKey]) {
          typedChar = normalKeyMap[rawKey];
        }
      }

      setLastKeyPressed(typedChar === " " ? "SPACE" : typedChar);

      if (!startTime) {
        setStartTime(Date.now());
      }

      const expectedChar = targetChars[inputCharIndex];

      // --- १. 'ो' (ओ-कार) विशेष हँडलिंग ---
      if (expectedChar === "ो" || expectedChar === "\u094B") {
        if (typedBuffer === "" && (typedChar === "ा" || rawKey.toLowerCase() === "k")) {
          setTypedBuffer("ा");
          return;
        } else if (typedBuffer === "ा" && (typedChar === "े" || rawKey.toLowerCase() === "s")) {
          setTypedBuffer("");
          const nextIndex = inputCharIndex + 1;
          setInputCharIndex(nextIndex);
          if (nextIndex >= targetChars.length) setIsCompleted(true);
          return;
        } else if (typedChar === "ो" || typedChar === "\u094B") {
          setTypedBuffer("");
          const nextIndex = inputCharIndex + 1;
          setInputCharIndex(nextIndex);
          if (nextIndex >= targetChars.length) setIsCompleted(true);
          return;
        } else {
          setTypedBuffer("");
          setMistakes((prev) => prev + 1);
          return;
        }
      }

      // --- २. 'ौ' (औ-कार) विशेष हँडलिंग ---
      if (expectedChar === "ौ" || expectedChar === "\u094C") {
        if (typedBuffer === "" && (typedChar === "ा" || rawKey.toLowerCase() === "k")) {
          setTypedBuffer("ा");
          return;
        } else if (typedBuffer === "ा" && (typedChar === "ै" || rawKey === "S")) {
          setTypedBuffer("");
          const nextIndex = inputCharIndex + 1;
          setInputCharIndex(nextIndex);
          if (nextIndex >= targetChars.length) setIsCompleted(true);
          return;
        } else {
          setTypedBuffer("");
          setMistakes((prev) => prev + 1);
          return;
        }
      }

      // --- ३. काना जोडून पूर्ण होणारी अक्षरे (ण, श, ष, ख, ध, थ, आ) ---
      const prefixPairs: Record<string, { prefixChar: string; prefixKey: string }> = {
        "ण": { prefixChar: "ण्", prefixKey: "." },
        "श": { prefixChar: "श्", prefixKey: "'" },
        "ष": { prefixChar: "ष्", prefixKey: '"' },
        "ख": { prefixChar: "ख्", prefixKey: "[" },
        "ध": { prefixChar: "ध्", prefixKey: "/" },
        "थ": { prefixChar: "थ्", prefixKey: "F" },
        "आ": { prefixChar: "अ", prefixKey: "v" },
      };

      if (expectedChar in prefixPairs) {
        const pair = prefixPairs[expectedChar];
        if (typedBuffer === "" && (typedChar === pair.prefixChar || rawKey === pair.prefixKey)) {
          setTypedBuffer(pair.prefixChar);
          return;
        } else if (typedBuffer === pair.prefixChar && (typedChar === "ा" || rawKey.toLowerCase() === "k")) {
          setTypedBuffer("");
          const nextIndex = inputCharIndex + 1;
          setInputCharIndex(nextIndex);
          if (nextIndex >= targetChars.length) setIsCompleted(true);
          return;
        } else if (typedChar === expectedChar) {
          setTypedBuffer("");
          const nextIndex = inputCharIndex + 1;
          setInputCharIndex(nextIndex);
          if (nextIndex >= targetChars.length) setIsCompleted(true);
          return;
        } else {
          setTypedBuffer("");
          setMistakes((prev) => prev + 1);
          return;
        }
      }

      // --- ४. सामान्य सरळ अक्षरांसाठी थेट तपासणी ---
      if (typedChar === expectedChar) {
        setTypedBuffer("");
        const nextIndex = inputCharIndex + 1;
        setInputCharIndex(nextIndex);

        if (startTime) {
          const timeMins = (Date.now() - startTime) / 60000 || 1 / 60000;
          const wordsTyped = nextIndex / 5;
          setWpm(Math.round(wordsTyped / timeMins));
        }

        if (nextIndex >= targetChars.length) {
          setIsCompleted(true);
        }
      } else {
        setTypedBuffer("");
        setMistakes((prev) => prev + 1);
      }
    },
    [inputCharIndex, targetChars, currentLesson, startTime, isCompleted, typedBuffer]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const accuracy =
    inputCharIndex + mistakes > 0
      ? Math.round((inputCharIndex / (inputCharIndex + mistakes)) * 100)
      : 100;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-4 sm:p-6 select-none">
      <div className="max-w-5xl mx-auto space-y-5">
        
        {/* Header */}
        <header className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs transition"
            >
              ← मुख्य पान
            </Link>
            <div>
              <h1 className="text-lg sm:text-xl font-black text-amber-400">
                कीबोर्ड रो सराव (Remington GAIL Drills)
              </h1>
              <p className="text-xs text-slate-400">
                Home Row (d=क, g=ह, j=र, l=स, ;=य, k=ा, s=े)
              </p>
            </div>
          </div>

          <select
            value={selectedLessonId}
            onChange={(e) => {
              setSelectedLessonId(e.target.value);
              e.target.blur();
            }}
            onKeyDown={(e) => {
              if (e.key !== "ArrowUp" && e.key !== "ArrowDown" && e.key !== "Enter") {
                e.preventDefault();
              }
            }}
            className="bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-amber-500"
          >
            {drillLessons.map((l) => (
              <option key={l.id} value={l.id}>
                {l.title}
              </option>
            ))}
          </select>
        </header>

        {/* Live Score Strip */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-center">
            <span className="text-[11px] text-slate-400">गती (Speed)</span>
            <div className="text-xl font-black text-emerald-400 mt-0.5">{wpm} WPM</div>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-center">
            <span className="text-[11px] text-slate-400">अचूकता (Accuracy)</span>
            <div className="text-xl font-black text-cyan-400 mt-0.5">{accuracy}%</div>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-center">
            <span className="text-[11px] text-slate-400">चुका (Mistakes)</span>
            <div className="text-xl font-black text-rose-400 mt-0.5">{mistakes}</div>
          </div>
        </div>

        {/* Main Drill Visualizer */}
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-center space-y-6 shadow-2xl relative overflow-hidden">
          {!isCompleted ? (
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                आता ही की दाबा (Press Key):
              </span>
              <div className="text-6xl font-black text-amber-400 font-mono tracking-wider py-2">
                {currentCharToType === " " ? "SPACE" : currentCharToType}
                {currentCharToType === "ो" && (
                  <span className="text-xs block text-amber-300 font-sans font-normal mt-1">
                    {typedBuffer === "ा" ? "👉 आता 's' (े) दाबा" : "👉 आधी 'k' (ा) नंतर 's' (े) दाबा"}
                  </span>
                )}
                {currentCharToType === "ण" && (
                  <span className="text-xs block text-amber-300 font-sans font-normal mt-1">
                    {typedBuffer === "ण्" ? "👉 आता 'k' (ा) दाबा" : "👉 आधी '.' (ण्) नंतर 'k' (ा) दाबा"}
                  </span>
                )}
                {currentCharToType === "आ" && (
                  <span className="text-xs block text-amber-300 font-sans font-normal mt-1">
                    {typedBuffer === "अ" ? "👉 आता 'k' (ा) दाबा" : "👉 आधी 'v' (अ) नंतर 'k' (ा) दाबा"}
                  </span>
                )}
                {currentCharToType === "श" && (
                  <span className="text-xs block text-amber-300 font-sans font-normal mt-1">
                    {typedBuffer === "श्" ? "👉 आता 'k' (ा) दाबा" : "👉 आधी '\'' (श्) नंतर 'k' (ा) दाबा"}
                  </span>
                )}
                {currentCharToType === "ष" && (
                  <span className="text-xs block text-amber-300 font-sans font-normal mt-1">
                    {typedBuffer === "ष्" ? "👉 आता 'k' (ा) दाबा" : "👉 आधी Shift+'\"' (ष्) नंतर 'k' (ा) दाबा"}
                  </span>
                )}
              </div>
              {lastKeyPressed && (
                <div className="text-xs text-slate-500">
                  दाबली गेलेली की: <span className="text-slate-300 font-mono">{lastKeyPressed}</span>
                  {typedBuffer && (
                    <span className="text-amber-400 ml-2 font-bold animate-pulse">
                      [बफर: {typedBuffer} - पुढील की दाबा]
                    </span>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="py-4 space-y-2">
              <div className="text-4xl">🎉</div>
              <h2 className="text-2xl font-black text-emerald-400">अभिनंदन! हा सराव पूर्ण झाला!</h2>
              <p className="text-xs text-slate-400">गती: {wpm} WPM • अचूकता: {accuracy}%</p>
              <button
                onClick={() => {
                  setInputCharIndex(0);
                  setMistakes(0);
                  setStartTime(null);
                  setIsCompleted(false);
                  setLastKeyPressed("");
                  setTypedBuffer("");
                }}
                className="mt-3 px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition"
              >
                पुन्हा सराव करा
              </button>
            </div>
          )}

          {/* Full Single-Line Window View */}
          <div className="w-full min-h-[110px] bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-center px-6 py-4 my-4 shadow-inner">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 text-3xl sm:text-4xl md:text-5xl font-mono tracking-widest leading-loose">
              {targetChars.map((char, index) => {
                const currentChunk = Math.floor(inputCharIndex / 15);
                const charChunk = Math.floor(index / 15);

                if (charChunk !== currentChunk) return null;

                const isCurrent = index === inputCharIndex;
                const isTyped = index < inputCharIndex;

                let charStyle = "text-slate-600";
                if (isTyped) {
                  charStyle = "text-emerald-400 font-semibold";
                } else if (isCurrent) {
                  charStyle = "text-amber-400 font-bold border-b-4 border-amber-400 pb-1 animate-pulse scale-105";
                }

                return (
                  <span key={index} className={`inline-block px-1 text-center transition-all ${charStyle}`}>
                    {char === " " ? "␣" : char}
                  </span>
                );
              })}
            </div>
          </div>

          <p className="text-xs text-slate-500">
            ⌨️ <strong>'ो'</strong> = <strong>k + s</strong> | <strong>'ण'</strong> = <strong>. + k</strong> | <strong>'श'</strong> = <strong>&apos; + k</strong> | <strong>'ष'</strong> = <strong>Shift+&apos; + k</strong>
          </p>
        </div>

        {/* Row Keys Palette */}
        <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-bold text-slate-400">या धड्यातील मुख्य अक्षरे:</span>
          <div className="flex flex-wrap gap-2">
            {currentLesson.keys.map((k, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-bold text-slate-200"
              >
                {k}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}