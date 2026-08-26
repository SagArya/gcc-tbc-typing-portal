// src/components/TypingResultModal.tsx
"use client";

import React from "react";

interface TypingResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRetry: () => void;
  title: string;
  totalWords: number;
  correctWords: number;
  wrongWords: number;
  accuracy: number;
  grossWpm: number;
  netWpm: number;
  timeTakenSeconds: number;
}

export default function TypingResultModal({
  isOpen,
  onClose,
  onRetry,
  title,
  totalWords,
  correctWords,
  wrongWords,
  accuracy,
  grossWpm,
  netWpm,
  timeTakenSeconds,
}: TypingResultModalProps) {
  if (!isOpen) return null;

  const minutes = Math.floor(timeTakenSeconds / 60);
  const seconds = timeTakenSeconds % 60;
  const isPassed = accuracy >= 90 && netWpm >= 30;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-2 border-b border-slate-800 pb-4">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-400 text-3xl mb-1">
            {isPassed ? "🏆" : "📊"}
          </div>
          <h2 className="text-xl font-black text-slate-100">
            टायपिंग परीक्षा निकाल (Typing Result)
          </h2>
          <p className="text-xs text-slate-400 truncate px-4">{title}</p>
        </div>

        {/* Big Speed Badges */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center space-y-1">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Net Speed (अचूक गती)
            </span>
            <div className="text-3xl font-black text-emerald-400">
              {netWpm}{" "}
              <span className="text-xs font-normal text-slate-400">WPM</span>
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center space-y-1">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Accuracy (अचूकता)
            </span>
            <div
              className={`text-3xl font-black ${
                accuracy >= 90 ? "text-amber-400" : "text-rose-400"
              }`}
            >
              {accuracy}
              <span className="text-xs font-normal text-slate-400">%</span>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-800/80 space-y-2 text-xs">
          <div className="flex justify-between text-slate-300 py-1 border-b border-slate-800/50">
            <span>एकूण वेळ (Time Taken):</span>
            <span className="font-mono font-bold text-slate-100">
              {minutes} मि. {seconds} से.
            </span>
          </div>
          <div className="flex justify-between text-slate-300 py-1 border-b border-slate-800/50">
            <span>Gross Speed (एकूण गती):</span>
            <span className="font-mono font-bold text-slate-100">
              {grossWpm} WPM
            </span>
          </div>
          <div className="flex justify-between text-slate-300 py-1 border-b border-slate-800/50">
            <span>एकूण शब्द (Total Typed):</span>
            <span className="font-mono font-bold text-slate-100">
              {totalWords}
            </span>
          </div>
          <div className="flex justify-between text-slate-300 py-1 border-b border-slate-800/50">
            <span>बरोबर शब्द (Correct):</span>
            <span className="font-mono font-bold text-emerald-400">
              {correctWords}
            </span>
          </div>
          <div className="flex justify-between text-slate-300 py-1">
            <span>चुकीचे शब्द (Mistakes):</span>
            <span className="font-mono font-bold text-rose-400">
              {wrongWords}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <button
            onClick={onClose}
            className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-2xl transition"
          >
            बंद करा
          </button>
          <button
            onClick={onRetry}
            className="flex-1 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-2xl transition shadow-lg shadow-amber-500/20"
          >
            🔄 पुन्हा सराव करा
          </button>
        </div>
      </div>
    </div>
  );
}