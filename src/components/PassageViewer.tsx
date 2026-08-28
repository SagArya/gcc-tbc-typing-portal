// src/components/PassageViewer.tsx
"use client";

import React from "react";
import { FileText, Loader2 } from "lucide-react";

interface PassageViewerProps {
  passageText: string;
  userInput: string;
  title?: string;
  loading?: boolean;
  fontSize?: number; // 🔍 Font Size (Zoom) Support
}

// देवनागरीतील काना-मात्रा, जोडाक्षरे व अदृश्य कॅरेक्टर्स यांचे १००% अचूक एकत्रीकरण
function normalizeMarathiWord(str: string): string {
  if (!str) return "";

  return str
    .normalize("NFD")
    // १. काना (ा \u093E) + दोन मात्रा (ै \u0948) => औ-कार (ौ \u094C) [उदा. मौल्यवान]
    .replace(/\u093E\u0948/g, "\u094C")
    // २. काना (ा \u093E) + एक मात्रा (े \u0947) => ओ-कार (ो \u094B) [उदा. गोष्ट, येतो, उपयोग]
    .replace(/\u093E\u0947/g, "\u094B")
    // ३. काना (ा \u093E) + अर्धचंद्र (ॅ \u0945) => ऑ-कार (ॉ \u0949)
    .replace(/\u093E\u0945/g, "\u0949")
    // ४. अदृश्य कॅरेक्टर्स (ZWJ, ZWNJ, Soft Hyphen) काढणे
    .replace(/[\u200B-\u200D\uFEFF\u00AD]/g, "")
    // ५. सर्वसामान्य NFC फॉर्ममध्ये आणणे
    .normalize("NFC")
    .trim();
}

export default function PassageViewer({
  passageText,
  userInput,
  title,
  loading,
  fontSize = 15,
}: PassageViewerProps) {
  if (loading) {
    return (
      <div className="glass-panel p-6 rounded-3xl flex flex-col items-center justify-center h-full min-h-[350px]">
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs sm:text-sm animate-pulse">
          <Loader2 className="w-5 h-5 animate-spin text-amber-500" />
          <span>उतारा लोड होत आहे...</span>
        </div>
      </div>
    );
  }

  // युझरने टाईप केलेले सर्व शब्द
  const allTypedTokens = userInput.trimStart().split(/\s+/);
  const isTrailingSpace = /\s$/.test(userInput);

  // स्पेस दिल्यानंतरच शब्द तपासणीसाठी पूर्ण मानला जाईल
  const completedWords = isTrailingSpace
    ? allTypedTokens.filter(Boolean)
    : allTypedTokens.filter(Boolean).slice(0, -1);

  // चालू टायपिंग शब्द इंडेक्स
  const currentActiveIndex = completedWords.length;

  // परिच्छेदानुसार (Enter/Paragraph) विभाजन
  const paragraphs = passageText.split("\n");
  let globalWordCounter = 0;

  return (
    <div className="flex flex-col h-full">
      {/* Title Header */}
      <div className="flex justify-between items-center mb-3 pb-3 border-b border-slate-200 dark:border-white/[0.06] shrink-0">
        <div className="flex items-center gap-2 font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider text-[11px] sm:text-xs">
          <FileText className="w-4 h-4 text-amber-500 dark:text-amber-400" />
          <span>मूळ परीक्षा उतारा (Question Passage)</span>
        </div>
        {title && (
          <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.06] px-2.5 py-0.5 rounded-lg border border-slate-200 dark:border-white/[0.08] truncate max-w-[200px]">
            {title}
          </span>
        )}
      </div>

      {/* Paragraphs with Dynamic Font Size & Internal Scroll */}
      <div
        style={{ fontSize: `${fontSize}px` }}
        className="flex-1 p-4 sm:p-5 bg-slate-50 dark:bg-black/40 rounded-2xl border border-slate-200 dark:border-white/[0.06] font-normal font-mono tracking-normal leading-relaxed space-y-3 select-none overflow-y-auto shadow-inner"
      >
        {paragraphs.map((para, paraIndex) => {
          const paraWords = para.trim().split(/\s+/).filter(Boolean);

          if (paraWords.length === 0) return null;

          return (
            <div
              key={paraIndex}
              className="flex flex-wrap gap-x-1.5 gap-y-1.5 items-center"
            >
              {/* Tab Indentation (शासकीय फॉरमॅट) */}
              <span className="inline-block w-6 sm:w-8 text-slate-400 dark:text-slate-600 font-mono text-xs select-none">
                ⇥
              </span>

              {paraWords.map((word) => {
                const wordIndex = globalWordCounter;
                globalWordCounter++;

                const isCompleted = wordIndex < completedWords.length;
                const isCurrent = wordIndex === currentActiveIndex;

                // दोन्ही शब्दांचे संपूर्ण देवनागरी नॉर्मलायझेशन करून तुलना
                const userWordNorm = normalizeMarathiWord(completedWords[wordIndex] || "");
                const targetWordNorm = normalizeMarathiWord(word);

                const isCorrect = isCompleted && userWordNorm === targetWordNorm;
                const isWrong = isCompleted && userWordNorm !== targetWordNorm;

                let wordStyle = "text-slate-600 dark:text-slate-400 transition-colors";

                if (isCorrect) {
                  wordStyle = "text-emerald-600 dark:text-emerald-400 font-bold";
                } else if (isWrong) {
                  wordStyle = "text-rose-600 dark:text-rose-400 line-through decoration-rose-500 font-bold";
                } else if (isCurrent) {
                  wordStyle = "text-amber-700 dark:text-amber-300 font-bold border-b-2 border-amber-500 bg-amber-500/10 dark:bg-amber-500/20 px-1 rounded pb-0.5 animate-pulse";
                }

                return (
                  <span key={wordIndex} className={wordStyle}>
                    {word}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}