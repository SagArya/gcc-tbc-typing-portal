// src/components/ResultCard.tsx
"use client";

import React from "react";
import {
  Award,
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  Search,
  Activity,
  AlertTriangle,
} from "lucide-react";

interface ResultMetrics {
  totalTargetWords: number;
  typedWordsCount: number;
  correctWordsCount: number;
  wrongWordsCount: number;
  remainingWordsCount: number;
  mistakesCount: number;
  marksObtained: number;
  totalMarks: number;
  passingMarks: number;
  wpm: number;
  accuracy: number;
  targetSpeed: number;
  language: string;
  isPassed: boolean;
}

interface ResultCardProps {
  isOpen: boolean;
  onRestart: () => void;
  onReview: () => void;
  metrics: ResultMetrics;
  weakKeys?: { [char: string]: number };
}

export default function ResultCard({
  isOpen,
  onRestart,
  onReview,
  metrics,
  weakKeys = {},
}: ResultCardProps) {
  if (!isOpen) return null;

  const sortedWeakKeys = Object.entries(weakKeys)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-[#111827] border border-slate-800 text-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl relative my-8">
        
        {/* Top Header Banner */}
        <div
          className={`p-6 text-center text-white relative ${
            metrics.isPassed
              ? "bg-gradient-to-b from-emerald-600 to-emerald-700"
              : "bg-gradient-to-b from-rose-600 to-rose-700"
          }`}
        >
          <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2 backdrop-blur-sm">
            {metrics.isPassed ? (
              <CheckCircle2 className="w-8 h-8 text-white animate-bounce" />
            ) : (
              <XCircle className="w-8 h-8 text-white animate-pulse" />
            )}
          </div>

          <h2 className="text-2xl font-black tracking-tight">
            {metrics.isPassed ? "निकाल: उत्तीर्ण (PASS)" : "निकाल: अनुत्तीर्ण (FAIL)"}
          </h2>
          <p className="text-xs text-white/80 mt-1 font-medium">
            GCC-TBC {metrics.language === "marathi" ? "मराठी" : "English"} {metrics.targetSpeed} WPM अधिकृत स्पीड टेस्ट
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          
          {/* Marks Summary Box */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                प्राप्त गुण (MARKS)
              </span>
              <div className="text-2xl font-black text-rose-500 font-mono">
                {metrics.marksObtained} <span className="text-xs text-slate-400">/ {metrics.totalMarks}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                उत्तीर्ण निकष
              </span>
              <span className="text-xs font-bold text-amber-400">
                किमान {metrics.passingMarks} / {metrics.totalMarks} गुण
              </span>
            </div>
          </div>

          {/* Speed & Accuracy Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                गती (Speed WPM)
              </span>
              <span className="text-2xl font-black text-cyan-400 font-mono">
                {metrics.wpm}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                अचूकता (Accuracy)
              </span>
              <span className="text-2xl font-black text-amber-400 font-mono">
                {metrics.accuracy}%
              </span>
            </div>
          </div>

          {/* Words Breakdown Table */}
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
            <div className="text-[11px] font-bold text-slate-300 pb-1 border-b border-slate-800">
              शब्दांचे विश्लेषण
            </div>
            <div className="flex justify-between text-slate-300">
              <span>📄 एकूण शब्द:</span>
              <span className="font-mono font-bold text-white">{metrics.totalTargetWords}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>✅ बरोबर शब्द:</span>
              <span className="font-mono font-bold text-emerald-400">{metrics.correctWordsCount}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>❌ चुकलेले शब्द:</span>
              <span className="font-mono font-bold text-rose-400">{metrics.wrongWordsCount}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>⏳ न टाईप केलेले शब्द:</span>
              <span className="font-mono font-bold text-amber-400">{metrics.remainingWordsCount}</span>
            </div>
          </div>

          {/* 🎯 WEAK KEYS DIAGNOSTIC SECTION */}
          {sortedWeakKeys.length > 0 && (
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
                <Activity className="w-3.5 h-3.5 text-amber-400" />
                <span>Weak Keys (या अक्षरांमध्ये सर्वाधिक चुका झाल्या):</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {sortedWeakKeys.map(([char, count]) => (
                  <span
                    key={char}
                    className="px-2.5 py-1 bg-black/60 border border-amber-500/30 rounded-lg text-xs font-mono font-bold text-amber-300 flex items-center gap-1"
                  >
                    <span className="text-rose-400 font-black">{char}</span>
                    <span className="text-[10px] text-slate-400">({count}x)</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={onReview}
              className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl text-xs transition duration-200 border border-slate-700 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span>चुका तपासा (Review)</span>
            </button>

            <button
              onClick={onRestart}
              className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl text-xs transition duration-200 shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>नवीन सराव (Restart)</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}