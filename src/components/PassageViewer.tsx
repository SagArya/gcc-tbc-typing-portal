// src/components/PassageViewer.tsx
"use client";

import React from "react";

interface PassageViewerProps {
  passageText: string;
  userInput: string;
  title?: string;
  loading?: boolean;
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
}: PassageViewerProps) {
  if (loading) {
    return (
      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex items-center justify-center min-h-[350px] lg:min-h-[500px]">
        <div className="text-slate-400 text-sm animate-pulse">
          उतारा लोड होत आहे...
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
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col shadow-xl">
      {/* Title Header */}
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-800">
        <h2 className="text-sm font-bold text-amber-400 uppercase tracking-wider">
          📄 मूळ परीक्षा उतारा (Question Passage)
        </h2>
        {title && (
          <span className="text-xs font-semibold text-slate-300 bg-slate-800 px-3 py-1 rounded-lg border border-slate-700">
            {title}
          </span>
        )}
      </div>

      {/* Paragraphs with Tab & Enter Preserved */}
      <div className="flex-1 p-5 bg-slate-950 rounded-xl border border-slate-800 text-base sm:text-lg font-normal tracking-wide leading-relaxed space-y-4 select-none overflow-y-auto max-h-[500px]">
        {paragraphs.map((para, paraIndex) => {
          const paraWords = para.trim().split(/\s+/).filter(Boolean);

          if (paraWords.length === 0) return null;

          return (
            <div
              key={paraIndex}
              className="flex flex-wrap gap-x-2 gap-y-2 items-center"
            >
              {/* Tab Indentation */}
              <span className="inline-block w-8 sm:w-10 text-slate-700 font-mono text-xs select-none">
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

                let wordStyle = "text-slate-400 transition-colors";

                if (isCorrect) {
                  wordStyle = "text-emerald-400 font-medium";
                } else if (isWrong) {
                  wordStyle = "text-rose-400 line-through decoration-rose-500 font-medium";
                } else if (isCurrent) {
                  wordStyle = "text-amber-300 font-semibold border-b-2 border-amber-400 pb-0.5 animate-pulse";
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