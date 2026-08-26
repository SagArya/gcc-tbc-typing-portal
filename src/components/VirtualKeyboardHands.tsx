// src/components/VirtualKeyboardHands.tsx
"use client";

import React from "react";
import { KEY_FINGER_MAP, Hand, Finger, FINGER_NAMES_MARATHI, HAND_NAMES_MARATHI } from "@/utils/keyboardFingerMap";

interface VirtualKeyboardHandsProps {
  activeChar: string;
}

export default function VirtualKeyboardHands({ activeChar }: VirtualKeyboardHandsProps) {
  const guide = KEY_FINGER_MAP[activeChar] || null;

  const isFingerActive = (hand: Hand, finger: Finger) => {
    if (!guide) return false;
    return guide.hand === hand && guide.finger === finger;
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-4">
      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase text-amber-400 tracking-wider">
            ⌨️ व्हिज्युअल फिंगर गाईड (Finger Placement Guide)
          </span>
        </div>

        {guide ? (
          <div className="flex items-center gap-2 text-xs bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
            <span className="text-slate-400">वापरावे लागणारे बोट:</span>
            <span className="font-bold text-emerald-400">
              {HAND_NAMES_MARATHI[guide.hand]} ➔ {FINGER_NAMES_MARATHI[guide.finger]}
            </span>
            {guide.requiresShift && (
              <span className="bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded text-[10px] font-bold border border-rose-500/30">
                + SHIFT
              </span>
            )}
          </div>
        ) : (
          <span className="text-xs text-slate-500">कोणतेही अक्षर दाबा</span>
        )}
      </div>

      {/* Visual Hands Indicator */}
      <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto py-2">
        {/* Left Hand */}
        <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 text-center">
          <span className="text-xs font-semibold text-slate-400 block mb-2">डावा हात (Left Hand)</span>
          <div className="flex justify-center items-end gap-1.5 h-20">
            {(["pinky", "ring", "middle", "index", "thumb"] as Finger[]).map((f) => {
              const active = isFingerActive("left", f);
              const heights: Record<Finger, string> = {
                pinky: "h-10",
                ring: "h-14",
                middle: "h-16",
                index: "h-13",
                thumb: "h-8",
              };
              return (
                <div key={f} className="flex flex-col items-center gap-1">
                  <div
                    className={`w-6 ${heights[f]} rounded-t-lg transition-all duration-200 border ${
                      active
                        ? "bg-amber-400 border-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.6)] scale-105"
                        : "bg-slate-800 border-slate-700 opacity-60"
                    }`}
                  />
                  <span className="text-[9px] text-slate-500 uppercase">{f[0]}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Hand */}
        <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 text-center">
          <span className="text-xs font-semibold text-slate-400 block mb-2">उजवा हात (Right Hand)</span>
          <div className="flex justify-center items-end gap-1.5 h-20">
            {(["thumb", "index", "middle", "ring", "pinky"] as Finger[]).map((f) => {
              const active = isFingerActive("right", f);
              const heights: Record<Finger, string> = {
                thumb: "h-8",
                index: "h-13",
                middle: "h-16",
                ring: "h-14",
                pinky: "h-10",
              };
              return (
                <div key={f} className="flex flex-col items-center gap-1">
                  <div
                    className={`w-6 ${heights[f]} rounded-t-lg transition-all duration-200 border ${
                      active
                        ? "bg-emerald-400 border-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.6)] scale-105"
                        : "bg-slate-800 border-slate-700 opacity-60"
                    }`}
                  />
                  <span className="text-[9px] text-slate-500 uppercase">{f[0]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}