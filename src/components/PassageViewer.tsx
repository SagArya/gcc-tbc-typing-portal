// src/components/PassageViewer.tsx
"use client";

import React from "react";
import { FileText, Loader2 } from "lucide-react";

interface PassageViewerProps {
  passageText: string;
  userInput: string;
  title?: string;
  loading?: boolean;
  fontSize?: number;
}

function normalizeMarathiWord(str: string): string {
  if (!str) return "";
  return str
    .normalize("NFD")
    .replace(/\u093E\u0948/g, "\u094C")
    .replace(/\u093E\u0947/g, "\u094B")
    .replace(/\u093E\u0945/g, "\u0949")
    .replace(/[\u200B-\u200D\uFEFF\u00AD]/g, "")
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
      <div className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center h-full min-h-[350px]">
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs sm:text-sm animate-pulse">
          <Loader2 className="w-5 h-5 animate-spin text-amber-500" />
          <span>उतारा लोड होत आहे...</span>
        </div>
      </div>
    );
  }

  const allTypedTokens = userInput.trimStart().split(/\s+/);
  const isTrailingSpace = /\s$/.test(userInput);

  const completedWords = isTrailingSpace
    ? allTypedTokens.filter(Boolean)
    : allTypedTokens.filter(Boolean).slice(0, -1);

  const currentActiveIndex = completedWords.length;
  const paragraphs = passageText.split("\n");
  let globalWordCounter = 0;

  return (
    <div className="flex flex-col h-full select-none">
      {/* Header */}
      <div className="flex justify-between items-center mb-3 pb-3 border-b border-slate-200 dark:border-white/[0.06] shrink-0">
        <div className="flex items-center gap-2 font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider text-[11px] sm:text-xs">
          <FileText className="w-4 h-4 text-amber-500 dark:text-amber-400" />
          <span>मूळ परीक्षा उतारा (QUESTION PASSAGE)</span>
        </div>
        {title && (
          <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.06] px-2.5 py-0.5 rounded-lg border border-slate-200 dark:border-white/[0.08] truncate max-w-[200px]">
            {title}
          </span>
        )}
      </div>

      {/* 🎯 Exact 1:1 Matched font-mono Box */}
      <div
        style={{
          fontSize: `${fontSize}px`,
          lineHeight: "1.8",
          letterSpacing: "0px",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
        }}
        className="flex-1 p-4 sm:p-5 bg-slate-50 dark:bg-black/40 rounded-2xl border border-slate-200 dark:border-white/[0.06] font-normal tracking-normal space-y-3 select-none overflow-y-auto shadow-inner text-left antialiased text-slate-600 dark:text-slate-400"
      >
        {paragraphs.map((para, paraIndex) => {
          const paraWords = para.trim().split(/\s+/).filter(Boolean);
          if (paraWords.length === 0) return null;

          return (
            <p key={paraIndex} className="m-0 break-words whitespace-normal leading-relaxed">
              {/* 🎯 ४ स्पेसेसचा अचूक टॅब (No Icon) */}
              <span className="select-none tracking-normal">
                &nbsp;&nbsp;&nbsp;&nbsp;
              </span>

              {paraWords.map((word, wIdx) => {
                const wordIndex = globalWordCounter;
                globalWordCounter++;

                const isCompleted = wordIndex < completedWords.length;
                const isCurrent = wordIndex === currentActiveIndex;

                const userWordNorm = normalizeMarathiWord(completedWords[wordIndex] || "");
                const targetWordNorm = normalizeMarathiWord(word);

                const isCorrect = isCompleted && userWordNorm === targetWordNorm;
                const isWrong = isCompleted && userWordNorm !== targetWordNorm;

                let wordStyle = "transition-colors duration-100";

                if (isCorrect) {
                  wordStyle = "text-emerald-600 dark:text-emerald-400 font-bold";
                } else if (isWrong) {
                  wordStyle = "text-rose-600 dark:text-rose-400 line-through decoration-rose-500 font-bold";
                } else if (isCurrent) {
                  wordStyle = "text-amber-700 dark:text-amber-300 font-bold bg-amber-500/20 px-0.5 rounded";
                }

                return (
                  <React.Fragment key={wordIndex}>
                    <span className={wordStyle}>{word}</span>
                    {wIdx < paraWords.length - 1 && " "}
                  </React.Fragment>
                );
              })}
            </p>
          );
        })}
      </div>
    </div>
  );
}