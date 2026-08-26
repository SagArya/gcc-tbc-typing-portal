"use client";

import React from "react";

interface MistakeReviewerProps {
  originalText: string;
  userTypedText: string;
}

export default function MistakeReviewer({
  originalText,
  userTypedText,
}: MistakeReviewerProps) {
  const targetWords = originalText.trim().split(/\s+/).filter(Boolean);
  const typedWords = userTypedText.trim().split(/\s+/).filter(Boolean);

  return (
    <div className="flex-1 bg-slate-950 p-5 rounded-xl border border-slate-800 text-base sm:text-lg leading-loose overflow-y-auto max-h-[500px]">
      <div className="flex flex-wrap gap-x-2 gap-y-2">
        {targetWords.map((targetWord, index) => {
          const userWord = typedWords[index];

          // १. टाईप न झालेला शब्द
          if (userWord === undefined) {
            return (
              <span
                key={index}
                className="bg-amber-500/10 text-amber-400/80 px-1.5 py-0.5 rounded border border-dashed border-amber-500/40 text-sm"
                title="हा शब्द टाईप करायचा राहिला"
              >
                {targetWord} (सुटला)
              </span>
            );
          }

          // २. बरोबर टाईप झालेला शब्द
          if (userWord === targetWord) {
            return (
              <span key={index} className="text-emerald-400 font-medium">
                {userWord}
              </span>
            );
          }

          // ३. चुकलेला शब्द
          return (
            <span
              key={index}
              className="bg-rose-500/20 text-rose-300 px-1.5 py-0.5 rounded border border-rose-500/50 inline-flex flex-col text-sm"
            >
              <span className="line-through text-rose-400 font-bold">{userWord}</span>
              <span className="text-[11px] text-emerald-400 font-normal">
                ✓ {targetWord}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}