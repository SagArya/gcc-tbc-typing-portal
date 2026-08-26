"use client";

import React from "react";

export interface TestRecord {
  id: string;
  date: string;
  language: string;
  targetSpeed: number;
  wpm: number;
  accuracy: number;
  marksObtained: number;
  totalMarks: number;
  isPassed: boolean;
  passageTitle: string;
}

interface HistoryDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  history: TestRecord[];
  onClearHistory: () => void;
}

export default function HistoryDashboard({
  isOpen,
  onClose,
  history,
  onClearHistory,
}: HistoryDashboardProps) {
  if (!isOpen) return null;

  // सरासरी आकडेवारी (Averages & Stats)
  const totalTests = history.length;
  const passedTests = history.filter((t) => t.isPassed).length;
  const avgWpm =
    totalTests > 0
      ? Math.round(history.reduce((acc, curr) => acc + curr.wpm, 0) / totalTests)
      : 0;
  const avgAcc =
    totalTests > 0
      ? Math.round(history.reduce((acc, curr) => acc + curr.accuracy, 0) / totalTests)
      : 0;
  const passRate = totalTests > 0 ? Math.round((passedTests / totalTests) * 100) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-3xl bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 bg-slate-900 border-b border-slate-700 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-black text-emerald-400">
              📊 प्रोग्रेस हिस्ट्री डॅशबोर्ड (Performance Tracker)
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              तुमच्या मागील सर्व सराव चाचण्यांचे रेकॉर्ड
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
          >
            ✕
          </button>
        </div>

        {/* Aggregate Stats Cards */}
        <div className="p-5 grid grid-cols-2 sm:grid-cols-4 gap-3 border-b border-slate-700/80 bg-slate-950/40">
          <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-700 text-center">
            <span className="text-[11px] text-slate-400 block font-medium">एकूण टेस्ट्स</span>
            <span className="text-2xl font-bold text-slate-100">{totalTests}</span>
          </div>
          <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-700 text-center">
            <span className="text-[11px] text-slate-400 block font-medium">सरासरी गती</span>
            <span className="text-2xl font-bold text-sky-400">{avgWpm} WPM</span>
          </div>
          <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-700 text-center">
            <span className="text-[11px] text-slate-400 block font-medium">सरासरी अचूकता</span>
            <span className="text-2xl font-bold text-emerald-400">{avgAcc}%</span>
          </div>
          <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-700 text-center">
            <span className="text-[11px] text-slate-400 block font-medium">पास प्रमाण</span>
            <span className={`text-2xl font-bold ${passRate >= 75 ? "text-emerald-400" : "text-amber-400"}`}>
              {passRate}%
            </span>
          </div>
        </div>

        {/* History Table */}
        <div className="flex-1 p-5 overflow-y-auto">
          {history.length === 0 ? (
            <div className="p-12 text-center text-slate-500 text-sm">
              अद्याप कोणताही सराव इतिहास सेव्ह झालेला नाही. चाचणी पूर्ण झाल्यावर निकाल येथे आपोआप दिसेल.
            </div>
          ) : (
            <div className="space-y-2">
              {history.map((record) => (
                <div
                  key={record.id}
                  className="bg-slate-900/70 p-3.5 rounded-xl border border-slate-700/70 flex flex-wrap justify-between items-center gap-3 hover:border-slate-600 transition"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                          record.isPassed
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                            : "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                        }`}
                      >
                        {record.isPassed ? "PASS" : "FAIL"}
                      </span>
                      <span className="text-sm font-semibold text-slate-200">
                        {record.passageTitle}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      {record.language === "marathi" ? "मराठी" : "इंग्रजी"} {record.targetSpeed} WPM • {record.date}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs">
                    <div className="text-right">
                      <span className="text-slate-400 block text-[10px]">गती</span>
                      <span className="font-bold text-sky-400 text-sm">{record.wpm} WPM</span>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-400 block text-[10px]">अचूकता</span>
                      <span className="font-bold text-emerald-400 text-sm">{record.accuracy}%</span>
                    </div>
                    <div className="text-right min-w-[55px]">
                      <span className="text-slate-400 block text-[10px]">गुण</span>
                      <span className={`font-bold text-sm ${record.isPassed ? "text-emerald-400" : "text-rose-400"}`}>
                        {record.marksObtained}/{record.totalMarks}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-900 border-t border-slate-700 flex justify-between items-center">
          {history.length > 0 && (
            <button
              onClick={onClearHistory}
              className="text-xs text-rose-400 hover:text-rose-300 font-semibold px-3 py-1.5 rounded-lg hover:bg-rose-950/40 transition"
            >
              🗑️ इतिहास क्लिअर करा
            </button>
          )}
          <button
            onClick={onClose}
            className="ml-auto px-5 py-2 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl text-xs sm:text-sm transition"
          >
            बंद करा
          </button>
        </div>

      </div>
    </div>
  );
}