// src/app/typing-practice/page.tsx
"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import VirtualKeyboardHands from "@/components/VirtualKeyboardHands";
import CustomPassageModal from "@/components/CustomPassageModal";
import WeakKeysDrawer from "@/components/WeakKeysDrawer";
import TypingResultModal from "@/components/TypingResultModal";
import { useWeakKeysTracker } from "@/hooks/useWeakKeysTracker";
// import { normalKeyMap, shiftKeyMap } from "@/app/keyboard-drills/page";
import { normalKeyMap, shiftKeyMap } from "@/utils/keyboardMaps";

export interface PassageItem {
  id: string;
  title: string;
  text: string;
  lang?: "marathi" | "english";
}

const DEFAULT_PASSAGES: PassageItem[] = [
  {
    id: "default-1",
    title: "शासकीय परिपत्रक सराव - १ (मराठी ३० WPM)",
    text: "शासकीय सेवेतील सर्व अधिकारी व कर्मचारी यांनी कार्यालयीन कामकाजाच्या वेळेत उपस्थित राहणे अनिवार्य आहे. संगणकीय प्रणालीद्वारे दैनंदिन नोंदी वेळेवर पूर्ण कराव्यात.",
    lang: "marathi",
  },
  {
    id: "default-2",
    title: "Official Government Circular (English 40 WPM)",
    text: "It is mandatory for all officers and employees in government service to be present during official working hours. Daily entries should be completed on time through the computerized system.",
    lang: "english",
  },
];

const HALF_TO_FULL_MAP: Record<string, string> = {
  "ध्": "ध",
  "थ्": "थ",
  "भ्": "भ",
  "श्": "श",
  "ख्": "ख",
  "ग्": "ग",
  "घ्": "घ",
  "च्": "च",
  "ज्": "ज",
  "झ्": "झ",
  "ण्": "ण",
  "त्": "त",
  "न्": "न",
  "प्": "प",
  "ब्": "ब",
  "म्": "म",
  "ल्": "ल",
  "व्": "व",
  "स्": "स",
  "ष्": "ष",
  "ळ्": "ळ",
  "क्": "क",
};

export default function TypingPracticePage() {
  const [passages, setPassages] = useState<PassageItem[]>(DEFAULT_PASSAGES);
  const [selectedPassageId, setSelectedPassageId] = useState(DEFAULT_PASSAGES[0].id);
  const [userInput, setUserInput] = useState("");

  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [isWeakKeysOpen, setIsWeakKeysOpen] = useState(false);
  const [isResultOpen, setIsResultOpen] = useState(false);
  const [showHandsGuide, setShowHandsGuide] = useState(true);

  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isTypingActive, setIsTypingActive] = useState(false);

  const [pendingVelanti, setPendingVelanti] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { getTopWeakKeys, clearStats } = useWeakKeysTracker();

  const currentPassage = useMemo(() => {
    return passages.find((p) => p.id === selectedPassageId) || passages[0];
  }, [passages, selectedPassageId]);

  const isEnglish = currentPassage.lang === "english";

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTypingActive && startTime) {
      interval = setInterval(() => {
        setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTypingActive, startTime]);

  // चालू शब्द व अक्षराचे ट्रॅकिंग
  const typedTokens = userInput.trimStart().split(/\s+/);
  const isTrailingSpace = /\s$/.test(userInput);
  const currentWordIndex = isTrailingSpace
    ? typedTokens.filter(Boolean).length
    : Math.max(0, typedTokens.filter(Boolean).length - 1);

  const passageWords = useMemo(() => {
    return currentPassage.text.trim().split(/\s+/).filter(Boolean);
  }, [currentPassage.text]);

  const activeTargetWord = passageWords[currentWordIndex] || "";
  const currentTypedWord = isTrailingSpace ? "" : typedTokens[typedTokens.length - 1] || "";

  const activeCharIndex = currentTypedWord.length;
  const activeChar = activeTargetWord[activeCharIndex] || activeTargetWord[0] || "";

  // निकाल मोजणी
  const resultStats = useMemo(() => {
    const userWords = userInput.trim().split(/\s+/).filter(Boolean);
    const targetWords = currentPassage.text.trim().split(/\s+/).filter(Boolean);

    let correct = 0;
    userWords.forEach((word, idx) => {
      if (
        targetWords[idx] &&
        word.normalize("NFC") === targetWords[idx].normalize("NFC")
      ) {
        correct++;
      }
    });

    const total = userWords.length;
    const wrong = Math.max(0, total - correct);
    const timeInMinutes = Math.max(elapsedSeconds / 60, 0.1);

    const grossWpm = Math.round(total / timeInMinutes);
    const netWpm = Math.max(0, Math.round(correct / timeInMinutes));
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

    return {
      totalWords: total,
      correctWords: correct,
      wrongWords: wrong,
      accuracy,
      grossWpm,
      netWpm,
      timeTakenSeconds: elapsedSeconds,
    };
  }, [userInput, currentPassage, elapsedSeconds]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!isTypingActive && userInput.length === 0) {
      setIsTypingActive(true);
      setStartTime(Date.now());
    }

    if (
      e.ctrlKey ||
      e.altKey ||
      e.metaKey ||
      e.key === "CapsLock" ||
      e.key === "Shift"
    ) {
      return;
    }

    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const before = userInput.substring(0, start);
    const after = userInput.substring(end);

    if (e.key === "Tab") {
      e.preventDefault();
      const tabSpace = "    ";
      const updated = before + tabSpace + after;
      setUserInput(updated);
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + tabSpace.length;
      }, 0);
      return;
    }

    if (e.key === "Backspace") {
      if (pendingVelanti) {
        setPendingVelanti(false);
        e.preventDefault();
        return;
      }
      return;
    }

    if (
      e.key === "Delete" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight" ||
      e.key === "ArrowUp" ||
      e.key === "ArrowDown"
    ) {
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      setPendingVelanti(false);
      const updated = before + "\n" + after;
      setUserInput(updated);
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 1;
      }, 0);
      return;
    }

    if (e.key === " ") {
      e.preventDefault();
      setPendingVelanti(false);
      const updated = before + " " + after;
      setUserInput(updated);
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 1;
      }, 0);
      return;
    }

    if (isEnglish) {
      return;
    }

    const rawKey = e.key;

    if (rawKey === "f" && !e.shiftKey) {
      e.preventDefault();
      setPendingVelanti(true);
      return;
    }

    let marathiChar = "";
    if (e.shiftKey && shiftKeyMap[rawKey]) {
      marathiChar = shiftKeyMap[rawKey];
    } else if (normalKeyMap[rawKey]) {
      marathiChar = normalKeyMap[rawKey];
    }

    if (marathiChar) {
      e.preventDefault();
      let updatedText = "";
      let newCursorPos = start;

      if (rawKey === "k" && !e.shiftKey && before.endsWith("अ")) {
        const textWithoutA = before.slice(0, -1);
        updatedText = (textWithoutA + "आ" + after).normalize("NFC");
        newCursorPos = start;
      } else if (
        rawKey === "k" &&
        !e.shiftKey &&
        before.length >= 2 &&
        HALF_TO_FULL_MAP[before.slice(-2)]
      ) {
        const fullChar = HALF_TO_FULL_MAP[before.slice(-2)];
        const textBeforeHalf = before.slice(0, -2);

        if (pendingVelanti) {
          updatedText = (textBeforeHalf + fullChar + "ि" + after).normalize("NFC");
          setPendingVelanti(false);
          newCursorPos = start;
        } else {
          updatedText = (textBeforeHalf + fullChar + after).normalize("NFC");
          newCursorPos = start - 1;
        }
      } else if (pendingVelanti) {
        if (marathiChar.endsWith("्")) {
          updatedText = (before + marathiChar + after).normalize("NFC");
          newCursorPos = start + marathiChar.length;
        } else {
          updatedText = (before + marathiChar + "ि" + after).normalize("NFC");
          setPendingVelanti(false);
          newCursorPos = start + marathiChar.length + 1;
        }
      } else if ((rawKey === "Z" || rawKey === "$") && before.length > 0) {
        const match = before.match(
          /([\u0915-\u0939\u0958-\u095F](?:[\u094D][\u0915-\u0939\u0958-\u095F])*[\u093E-\u094F\u0901-\u0903]*)$/
        );
        if (match && match.index !== undefined) {
          const cluster = match[0];
          const prefix = before.substring(0, match.index);
          updatedText = (prefix + "र्" + cluster + after).normalize("NFC");
          newCursorPos = start + 2;
        } else {
          const lastChar = before.slice(-1);
          const prefix = before.slice(0, -1);
          updatedText = (prefix + "र्" + lastChar + after).normalize("NFC");
          newCursorPos = start + 2;
        }
      } else if (rawKey.toLowerCase() === "s" && before.endsWith("ा")) {
        const textWithoutKana = before.slice(0, -1);
        updatedText = (
          textWithoutKana +
          (e.shiftKey ? "ौ" : "ो") +
          after
        ).normalize("NFC");
        newCursorPos = start;
      } else {
        updatedText = (before + marathiChar + after).normalize("NFC");
        newCursorPos = start + marathiChar.length;
      }

      setUserInput(updatedText);
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = newCursorPos;
      }, 0);
    }
  };

  const handleReset = () => {
    setUserInput("");
    setPendingVelanti(false);
    setIsTypingActive(false);
    setStartTime(null);
    setElapsedSeconds(0);
    textareaRef.current?.focus();
  };

  const handleApplyCustomPassage = (
    title: string,
    text: string,
    lang?: "marathi" | "english"
  ) => {
    const selectedLang = lang || (/[^\u0900-\u097F]/.test(text) ? "english" : "marathi");
    const customItem: PassageItem = {
      id: `custom-${Date.now()}`,
      title: `${selectedLang === "english" ? "🇬🇧" : "🇮🇳"} ${title}`,
      text: text,
      lang: selectedLang,
    };
    setPassages((prev) => [customItem, ...prev]);
    setSelectedPassageId(customItem.id);
    handleReset();
  };

  const handleStartRemedialDrill = (keys: string[]) => {
    if (keys.length === 0) return;
    const drillText = keys
      .map((k) => `${k} ${k} ${k} ${k}${k} ${k} `)
      .join("")
      .repeat(4);

    handleApplyCustomPassage(
      "🎯 कमजोर अक्षरांचा सराव",
      drillText.trim(),
      "marathi"
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 space-y-6">
      <div className="max-w-7xl mx-auto space-y-5">
        {/* Header Bar */}
        <header className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition border border-slate-700"
            >
              ← मुख्य पान
            </Link>
            <div>
              <h1 className="text-lg font-black text-amber-400">
                स्मार्ट टायपिंग लॅब (Practice Lab)
              </h1>
              <span className="text-[11px] font-semibold text-slate-400">
                मोड: {isEnglish ? "🇬🇧 English Standard" : "🇮🇳 Marathi Remington GAIL"}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="px-3 py-1.5 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-amber-400 font-bold">
              ⏱️ {Math.floor(elapsedSeconds / 60)}:
              {(elapsedSeconds % 60).toString().padStart(2, "0")}
            </div>

            <button
              onClick={() => setIsCustomModalOpen(true)}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer"
            >
              📤 स्वतःचा उतारा जोडा
            </button>
            <button
              onClick={() => setIsWeakKeysOpen(true)}
              className="px-3 py-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer"
            >
              🎯 कमजोर अक्षरे
            </button>
            <button
              onClick={() => setShowHandsGuide((prev) => !prev)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition cursor-pointer ${
                showHandsGuide
                  ? "bg-amber-500/10 text-amber-300 border-amber-500/30"
                  : "bg-slate-800 text-slate-400 border-slate-700"
              }`}
            >
              🖐️ बोटे {showHandsGuide ? "चालू" : "बंद"}
            </button>
          </div>
        </header>

        {/* 🔲 Side-by-Side Clean Grid (Left: Single Passage Viewer | Right: Single Textarea) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
          
          {/* डावी बाजू: मूळ प्रश्न उतारा */}
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 flex flex-col shadow-xl min-h-[400px] lg:min-h-[480px]">
            <div className="flex justify-between items-center text-xs border-b border-slate-800 pb-3 mb-3">
              <span className="font-bold text-amber-400 uppercase tracking-wider">
                📄 प्रश्न उतारा (Question Passage)
              </span>
              <span className="text-[11px] text-slate-400 truncate max-w-[200px]">
                {currentPassage.title}
              </span>
            </div>

            {/* Highlighting सह उतारा */}
            <div className="flex-1 bg-slate-950 p-4 rounded-xl border border-slate-800/80 overflow-y-auto leading-relaxed text-base sm:text-lg font-sans">
              {passageWords.map((word, idx) => {
                const userWord = typedTokens[idx];
                const isCurrent = idx === currentWordIndex;
                let wordColor = "text-slate-400"; // टाईप न झालेला शब्द

                if (userWord !== undefined) {
                  if (userWord.normalize("NFC") === word.normalize("NFC")) {
                    wordColor = "text-emerald-400 font-semibold"; // बरोबर
                  } else {
                    wordColor = "text-rose-400 font-semibold underline decoration-rose-500/50"; // चूक
                  }
                }

                return (
                  <span
                    key={idx}
                    className={`inline-block mr-2 mb-1 px-1 rounded transition-colors ${wordColor} ${
                      isCurrent ? "bg-amber-500/20 text-amber-300 border-b-2 border-amber-400" : ""
                    }`}
                  >
                    {word}
                  </span>
                );
              })}
            </div>
          </div>

          {/* उजवी बाजू: टायपिंग इनपुट बॉक्स */}
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 flex flex-col shadow-xl min-h-[400px] lg:min-h-[480px]">
            <div className="flex justify-between items-center text-xs text-slate-400 mb-3 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="font-bold text-emerald-400 uppercase tracking-wider">
                  ⌨️ तुमचा टायपिंग बॉक्स
                </span>
                {pendingVelanti && (
                  <span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded text-[10px] font-bold border border-amber-500/30 animate-pulse">
                    वेलांटी (ि) सक्रिय
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleReset}
                  className="text-slate-400 hover:text-white transition cursor-pointer"
                >
                  रिसेट
                </button>
                <button
                  onClick={() => {
                    setIsTypingActive(false);
                    setIsResultOpen(true);
                  }}
                  disabled={userInput.trim().length === 0}
                  className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-slate-950 font-bold rounded-xl transition text-xs shadow-lg shadow-emerald-500/20 cursor-pointer"
                >
                  ✅ सबमिट आणि निकाल
                </button>
              </div>
            </div>

            <textarea
              ref={textareaRef}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={
                isEnglish
                  ? "Type the English passage here..."
                  : "येथे परीक्षा उताऱ्याप्रमाणे टायपिंग सुरू करा..."
              }
              className="flex-1 w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-base sm:text-lg text-slate-100 focus:outline-none focus:border-amber-500 leading-relaxed font-sans resize-none"
              autoFocus
            />
          </div>
        </div>

        {/* Visual Hands Guide (फक्त मराठी उतार्‍यासाठी) */}
        {showHandsGuide && !isEnglish && (
          <VirtualKeyboardHands activeChar={activeChar} />
        )}

        {/* Modals & Drawers */}
        <CustomPassageModal
          isOpen={isCustomModalOpen}
          onClose={() => setIsCustomModalOpen(false)}
          onApplyPassage={handleApplyCustomPassage}
        />

        <WeakKeysDrawer
          isOpen={isWeakKeysOpen}
          onClose={() => setIsWeakKeysOpen(false)}
          weakKeys={getTopWeakKeys(8)}
          onClear={clearStats}
          onStartRemedialDrill={handleStartRemedialDrill}
        />

        <TypingResultModal
          isOpen={isResultOpen}
          onClose={() => setIsResultOpen(false)}
          onRetry={() => {
            setIsResultOpen(false);
            handleReset();
          }}
          title={currentPassage.title}
          {...resultStats}
        />
      </div>
    </div>
  );
}