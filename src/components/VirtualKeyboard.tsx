// src/components/VirtualKeyboard.tsx
"use client";

import React, { useMemo } from "react";
import { normalKeyMap, shiftKeyMap } from "@/utils/remingtonMap";

interface VirtualKeyboardProps {
  nextChar?: string;
  isMarathi?: boolean;
}

interface KeyDefinition {
  code: string;
  enNormal: string;
  enShift: string;
  mrNormal: string;
  mrShift: string;
  width?: string;
  finger: "l-pinky" | "l-ring" | "l-middle" | "l-index" | "thumb" | "r-index" | "r-middle" | "r-ring" | "r-pinky";
}

const KEYBOARD_ROWS: KeyDefinition[][] = [
  // Number Row
  [
    { code: "Backquote", enNormal: "`", enShift: "~", mrNormal: "`", mrShift: "द्य", finger: "l-pinky" },
    { code: "Digit1", enNormal: "1", enShift: "!", mrNormal: "१", mrShift: "!", finger: "l-pinky" },
    { code: "Digit2", enNormal: "2", enShift: "@", mrNormal: "२", mrShift: "/", finger: "l-ring" },
    { code: "Digit3", enNormal: "3", enShift: "#", mrNormal: "३", mrShift: "ः", finger: "l-middle" },
    { code: "Digit4", enNormal: "4", enShift: "$", mrNormal: "४", mrShift: "*", finger: "l-index" },
    { code: "Digit5", enNormal: "5", enShift: "%", mrNormal: "५", mrShift: "-", finger: "l-index" },
    { code: "Digit6", enNormal: "6", enShift: "^", mrNormal: "६", mrShift: "‘", finger: "r-index" },
    { code: "Digit7", enNormal: "7", enShift: "&", mrNormal: "७", mrShift: "’", finger: "r-index" },
    { code: "Digit8", enNormal: "8", enShift: "*", mrNormal: "८", mrShift: "द्ध", finger: "r-middle" },
    { code: "Digit9", enNormal: "9", enShift: "(", mrNormal: "९", mrShift: "त्र", finger: "r-ring" },
    { code: "Digit0", enNormal: "0", enShift: ")", mrNormal: "०", mrShift: "ऋ", finger: "r-pinky" },
    { code: "Minus", enNormal: "-", enShift: "_", mrNormal: "-", mrShift: "_", finger: "r-pinky" },
    { code: "Equal", enNormal: "=", enShift: "+", mrNormal: "ृ", mrShift: "्", finger: "r-pinky" },
    { code: "Backspace", enNormal: "Backspace", enShift: "Backspace", mrNormal: "⌫", mrShift: "⌫", width: "w-16 md:w-20", finger: "r-pinky" },
  ],
  // Top Row
  [
    { code: "Tab", enNormal: "Tab", enShift: "Tab", mrNormal: "Tab", mrShift: "Tab", width: "w-14 md:w-16", finger: "l-pinky" },
    { code: "KeyQ", enNormal: "q", enShift: "Q", mrNormal: "ु", mrShift: "फ", finger: "l-pinky" },
    { code: "KeyW", enNormal: "w", enShift: "W", mrNormal: "ू", mrShift: "ॅ", finger: "l-ring" },
    { code: "KeyE", enNormal: "e", enShift: "E", mrNormal: "म", mrShift: "म्", finger: "l-middle" },
    { code: "KeyR", enNormal: "r", enShift: "R", mrNormal: "त", mrShift: "त्", finger: "l-index" },
    { code: "KeyT", enNormal: "t", enShift: "T", mrNormal: "ज", mrShift: "ज्", finger: "l-index" },
    { code: "KeyY", enNormal: "y", enShift: "Y", mrNormal: "ल", mrShift: "ल्", finger: "r-index" },
    { code: "KeyU", enNormal: "u", enShift: "U", mrNormal: "न", mrShift: "न्", finger: "r-index" },
    { code: "KeyI", enNormal: "i", enShift: "I", mrNormal: "प", mrShift: "प्", finger: "r-middle" },
    { code: "KeyO", enNormal: "o", enShift: "O", mrNormal: "व", mrShift: "व्", finger: "r-ring" },
    { code: "KeyP", enNormal: "p", enShift: "P", mrNormal: "च", mrShift: "च्", finger: "r-pinky" },
    { code: "BracketLeft", enNormal: "[", enShift: "{", mrNormal: "ख", mrShift: "क्ष", finger: "r-pinky" },
    { code: "BracketRight", enNormal: "]", enShift: "}", mrNormal: ",", mrShift: "द्व", finger: "r-pinky" },
    { code: "Backslash", enNormal: "\\", enShift: "|", mrNormal: ".", mrShift: ")", width: "w-12 md:w-14", finger: "r-pinky" },
  ],
  // Home Row
  [
    { code: "CapsLock", enNormal: "Caps", enShift: "Caps", mrNormal: "Caps", mrShift: "Caps", width: "w-16 md:w-20", finger: "l-pinky" },
    { code: "KeyA", enNormal: "a", enShift: "A", mrNormal: "ं", mrShift: "ा", finger: "l-pinky" },
    { code: "KeyS", enNormal: "s", enShift: "S", mrNormal: "े", mrShift: "ै", finger: "l-ring" },
    { code: "KeyD", enNormal: "d", enShift: "D", mrNormal: "क", mrShift: "क्", finger: "l-middle" },
    { code: "KeyF", enNormal: "f", enShift: "F", mrNormal: "ि", mrShift: "थ्", finger: "l-index" },
    { code: "KeyG", enNormal: "g", enShift: "G", mrNormal: "ह", mrShift: "ळ", finger: "l-index" },
    { code: "KeyH", enNormal: "h", enShift: "H", mrNormal: "ी", mrShift: "भ्", finger: "r-index" },
    { code: "KeyJ", enNormal: "j", enShift: "J", mrNormal: "र", mrShift: "श्र", finger: "r-index" },
    { code: "KeyK", enNormal: "k", enShift: "K", mrNormal: "ा", mrShift: "ज्ञ", finger: "r-middle" },
    { code: "KeyL", enNormal: "l", enShift: "L", mrNormal: "स", mrShift: "स्", finger: "r-ring" },
    { code: "Semicolon", enNormal: ";", enShift: ":", mrNormal: "य", mrShift: "रू", finger: "r-pinky" },
    { code: "Quote", enNormal: "'", enShift: "\"", mrNormal: "श्", mrShift: "ष्", finger: "r-pinky" },
    { code: "Enter", enNormal: "Enter", enShift: "Enter", mrNormal: "↵", mrShift: "↵", width: "w-20 md:w-24", finger: "r-pinky" },
  ],
  // Bottom Row
  [
    { code: "ShiftLeft", enNormal: "Shift", enShift: "Shift", mrNormal: "Shift", mrShift: "Shift", width: "w-20 md:w-24", finger: "l-pinky" },
    { code: "KeyZ", enNormal: "z", enShift: "Z", mrNormal: "्र", mrShift: "र्", finger: "l-pinky" },
    { code: "KeyX", enNormal: "x", enShift: "X", mrNormal: "ग", mrShift: "ग्", finger: "l-ring" },
    { code: "KeyC", enNormal: "c", enShift: "C", mrNormal: "ब", mrShift: "ब्", finger: "l-middle" },
    { code: "KeyV", enNormal: "v", enShift: "V", mrNormal: "अ", mrShift: "ट", finger: "l-index" },
    { code: "KeyB", enNormal: "b", enShift: "B", mrNormal: "इ", mrShift: "ठ", finger: "l-index" },
    { code: "KeyN", enNormal: "n", enShift: "N", mrNormal: "द", mrShift: "छ", finger: "r-index" },
    { code: "KeyM", enNormal: "m", enShift: "M", mrNormal: "उ", mrShift: "ड", finger: "r-index" },
    { code: "Comma", enNormal: ",", enShift: "<", mrNormal: "ए", mrShift: "ढ", finger: "r-middle" },
    { code: "Period", enNormal: ".", enShift: ">", mrNormal: "ण्", mrShift: "झ", finger: "r-ring" },
    { code: "Slash", enNormal: "/", enShift: "?", mrNormal: "ध्", mrShift: "घ्", finger: "r-pinky" },
    { code: "ShiftRight", enNormal: "Shift", enShift: "Shift", mrNormal: "Shift", mrShift: "Shift", width: "w-20 md:w-24", finger: "r-pinky" },
  ],
  // Space Row
  [
    { code: "Space", enNormal: "Space", enShift: "Space", mrNormal: "Space", mrShift: "Space", width: "w-72 md:w-96", finger: "thumb" },
  ],
];

// बोटांनुसार रंग (TypingWale Soft Theme)
const FINGER_COLORS: Record<string, string> = {
  "l-pinky": "border-rose-400/40 bg-rose-500/10 text-rose-300",
  "l-ring": "border-amber-400/40 bg-amber-500/10 text-amber-300",
  "l-middle": "border-emerald-400/40 bg-emerald-500/10 text-emerald-300",
  "l-index": "border-cyan-400/40 bg-cyan-500/10 text-cyan-300",
  thumb: "border-purple-400/40 bg-purple-500/10 text-purple-300",
  "r-index": "border-blue-400/40 bg-blue-500/10 text-blue-300",
  "r-middle": "border-emerald-400/40 bg-emerald-500/10 text-emerald-300",
  "r-ring": "border-amber-400/40 bg-amber-500/10 text-amber-300",
  "r-pinky": "border-rose-400/40 bg-rose-500/10 text-rose-300",
};

const FINGER_NAMES: Record<string, string> = {
  "l-pinky": "डावे करंगळी (Left Pinky)",
  "l-ring": "डावे अनामिका (Left Ring)",
  "l-middle": "डावे मधले बोट (Left Middle)",
  "l-index": "डावे तर्जनी (Left Index)",
  thumb: "अंगठा (Thumb)",
  "r-index": "उजवे तर्जनी (Right Index)",
  "r-middle": "उजवे मधले बोट (Right Middle)",
  "r-ring": "उजवे अनामिका (Right Ring)",
  "r-pinky": "उजवे करंगळी (Right Pinky)",
};

export default function VirtualKeyboard({ nextChar, isMarathi = true }: VirtualKeyboardProps) {
  // पुढची कोणती की दाबायची आणि Shift आवश्यक आहे का ते ठरवणे
  const targetInfo = useMemo(() => {
    if (!nextChar) return null;
    if (nextChar === " ") return { code: "Space", requiresShift: false, finger: "thumb" as const };

    for (const row of KEYBOARD_ROWS) {
      for (const key of row) {
        if (isMarathi) {
          if (key.mrNormal === nextChar) {
            return { code: key.code, requiresShift: false, finger: key.finger };
          }
          if (key.mrShift === nextChar) {
            return { code: key.code, requiresShift: true, finger: key.finger };
          }
        } else {
          if (key.enNormal === nextChar) {
            return { code: key.code, requiresShift: false, finger: key.finger };
          }
          if (key.enShift === nextChar) {
            return { code: key.code, requiresShift: true, finger: key.finger };
          }
        }
      }
    }
    return null;
  }, [nextChar, isMarathi]);

  // जर डाव्या हाताची की असेल तर उजवी Shift, आणि उजव्या हाताची की असेल तर डावी Shift हायलाइट करणे
  const activeShiftSide = useMemo(() => {
    if (!targetInfo?.requiresShift) return null;
    if (targetInfo.finger.startsWith("l-")) return "ShiftRight";
    return "ShiftLeft";
  }, [targetInfo]);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl backdrop-blur-md">
      {/* वरची गाईड पट्टी (Active Finger & Key Info) */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-sm font-medium">
        <div className="flex items-center gap-2">
          <span className="text-slate-400">पुढील अक्षर:</span>
          <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 font-bold text-base border border-cyan-500/40">
            {nextChar === " " ? "Spacebar" : nextChar || "—"}
          </span>
          {targetInfo?.requiresShift && (
            <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-xs border border-amber-500/40 animate-pulse">
              + Shift Key
            </span>
          )}
        </div>
        <div className="text-slate-300 text-xs md:text-sm">
          बोट: <span className="font-semibold text-cyan-400">{targetInfo ? FINGER_NAMES[targetInfo.finger] : "सज्ज रहा"}</span>
        </div>
      </div>

      {/* ऑन-स्क्रीन कीबोर्ड */}
      <div className="flex flex-col gap-1.5 items-center select-none overflow-x-auto py-1">
        {KEYBOARD_ROWS.map((row, rIdx) => (
          <div key={rIdx} className="flex gap-1.5 justify-center w-full">
            {row.map((k) => {
              const isTargetKey = targetInfo?.code === k.code;
              const isShiftHighlight = activeShiftSide === k.code;
              const isHighlighted = isTargetKey || isShiftHighlight;

              const baseColor = FINGER_COLORS[k.finger] || "border-slate-700 bg-slate-800/60 text-slate-300";

              return (
                <div
                  key={k.code}
                  className={`
                    flex flex-col items-center justify-between p-1 md:p-1.5 rounded-lg border transition-all duration-150
                    ${k.width || "w-9 md:w-12 h-11 md:h-13"}
                    ${
                      isHighlighted
                        ? "bg-amber-400 text-slate-950 border-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.6)] scale-105 z-10 font-bold"
                        : `${baseColor} hover:border-slate-500`
                    }
                  `}
                >
                  {/* वरचा Shift भाग */}
                  <span className={`text-[10px] md:text-xs self-start ${isHighlighted ? "text-slate-900" : "text-slate-400"}`}>
                    {isMarathi ? k.mrShift : k.enShift}
                  </span>

                  {/* मुख्य Normal भाग */}
                  <span className={`text-xs md:text-sm font-semibold ${isHighlighted ? "text-slate-950" : ""}`}>
                    {isMarathi ? k.mrNormal : k.enNormal}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}