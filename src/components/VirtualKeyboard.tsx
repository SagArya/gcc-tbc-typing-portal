// src/components/VirtualKeyboard.tsx
"use client";

import React, { useState, useEffect, useMemo } from "react";

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
    { code: "Enter", enNormal: "Enter", enShift: "Enter", mrNormal: "↵", mrShift: "↵", width: "w-18 md:w-24", finger: "r-pinky" },
  ],
  // Bottom Row
  [
    { code: "ShiftLeft", enNormal: "Shift", enShift: "Shift", mrNormal: "Shift", mrShift: "Shift", width: "w-18 md:w-24", finger: "l-pinky" },
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
    { code: "ShiftRight", enNormal: "Shift", enShift: "Shift", mrNormal: "Shift", mrShift: "Shift", width: "w-18 md:w-24", finger: "r-pinky" },
  ],
  // Space Row
  [
    { code: "Space", enNormal: "Space", enShift: "Space", mrNormal: "Space", mrShift: "Space", width: "w-72 md:w-96", finger: "thumb" },
  ],
];

// बोटांनुसार रंग (Light & Dark Theme साठी अधिक उठावदार)
const FINGER_STYLES: Record<string, string> = {
  "l-pinky": "border-rose-300 dark:border-rose-500/30 bg-rose-50/90 dark:bg-rose-500/10 text-rose-700 dark:text-rose-300",
  "l-ring": "border-amber-300 dark:border-amber-500/30 bg-amber-50/90 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300",
  "l-middle": "border-emerald-300 dark:border-emerald-500/30 bg-emerald-50/90 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  "l-index": "border-sky-300 dark:border-sky-500/30 bg-sky-50/90 dark:bg-sky-500/10 text-sky-700 dark:text-sky-300",
  thumb: "border-purple-300 dark:border-purple-500/30 bg-purple-50/90 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300",
  "r-index": "border-blue-300 dark:border-blue-500/30 bg-blue-50/90 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300",
  "r-middle": "border-emerald-300 dark:border-emerald-500/30 bg-emerald-50/90 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  "r-ring": "border-amber-300 dark:border-amber-500/30 bg-amber-50/90 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300",
  "r-pinky": "border-rose-300 dark:border-rose-500/30 bg-rose-50/90 dark:bg-rose-500/10 text-rose-700 dark:text-rose-300",
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
  const [isShiftPressed, setIsShiftPressed] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Shift") setIsShiftPressed(true);
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Shift") setIsShiftPressed(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const targetInfo = useMemo(() => {
    if (!nextChar) return null;
    if (nextChar === " ") return { code: "Space", requiresShift: false, finger: "thumb" as const };

    for (const row of KEYBOARD_ROWS) {
      for (const key of row) {
        if (isMarathi) {
          if (key.mrNormal === nextChar) return { code: key.code, requiresShift: false, finger: key.finger };
          if (key.mrShift === nextChar) return { code: key.code, requiresShift: true, finger: key.finger };
        } else {
          if (key.enNormal === nextChar) return { code: key.code, requiresShift: false, finger: key.finger };
          if (key.enShift === nextChar) return { code: key.code, requiresShift: true, finger: key.finger };
        }
      }
    }
    return null;
  }, [nextChar, isMarathi]);

  const activeShiftSide = useMemo(() => {
    if (!targetInfo?.requiresShift) return null;
    if (targetInfo.finger.startsWith("l-")) return "ShiftRight";
    return "ShiftLeft";
  }, [targetInfo]);

  return (
    <div className="w-full max-w-5xl mx-auto p-3 bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl backdrop-blur-md transition-colors">
      {/* शीर्ष गाईड पट्टी */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200 dark:border-slate-800 text-xs md:text-sm font-medium">
        <div className="flex items-center gap-2">
          <span className="text-slate-500 dark:text-slate-400">पुढील की:</span>
          <span className="px-2.5 py-0.5 rounded bg-sky-100 dark:bg-sky-500/20 text-sky-700 dark:text-sky-300 font-bold border border-sky-300 dark:border-sky-500/40 text-sm">
            {nextChar === " " ? "Spacebar" : nextChar || "—"}
          </span>
          {(targetInfo?.requiresShift || isShiftPressed) && (
            <span className={`px-2 py-0.5 rounded text-xs font-semibold border transition-all duration-150 ${
              isShiftPressed 
                ? "bg-amber-400 text-slate-950 border-amber-500 font-bold shadow-sm" 
                : "bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-500/40 animate-pulse"
            }`}>
              {isShiftPressed ? "⚡ Shift Active" : "+ Shift Key"}
            </span>
          )}
        </div>
        <div className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
          बोट: <span className="font-semibold text-sky-600 dark:text-sky-400">{targetInfo ? FINGER_NAMES[targetInfo.finger] : "सज्ज रहा"}</span>
        </div>
      </div>

      {/* ऑन-स्क्रीन डायनॅमिक कीबोर्ड (मोठ्या आकाराच्या कीज) */}
      <div className="flex flex-col gap-1.5 items-center select-none overflow-x-auto">
        {KEYBOARD_ROWS.map((row, rIdx) => (
          <div key={rIdx} className="flex gap-1.5 justify-center w-full">
            {row.map((k) => {
              const isTargetKey = targetInfo?.code === k.code;
              const isShiftKey = k.code === "ShiftLeft" || k.code === "ShiftRight";
              const isShiftHighlight = activeShiftSide === k.code;
              const isHighlighted = isTargetKey || isShiftHighlight || (isShiftKey && isShiftPressed);

              const baseColor = FINGER_STYLES[k.finger] || "border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300";

              const primaryChar = isMarathi
                ? (isShiftPressed ? k.mrShift : k.mrNormal)
                : (isShiftPressed ? k.enShift : k.enNormal);

              const secondaryChar = isMarathi
                ? (isShiftPressed ? k.mrNormal : k.mrShift)
                : (isShiftPressed ? k.enNormal : k.enShift);

              return (
                <div
                  key={k.code}
                  className={`
                    flex flex-col items-center justify-between p-1.5 rounded-lg border transition-all duration-100
                    ${k.width || "w-9 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12"}
                    ${
                      isHighlighted
                        ? "!bg-amber-400 !text-slate-950 !border-amber-500 shadow-[0_0_15px_rgba(251,191,36,0.75)] scale-105 z-10 font-bold"
                        : `${baseColor} hover:brightness-95 dark:hover:brightness-110`
                    }
                  `}
                >
                  {/* वरचा दुय्यम भाग */}
                  <span className={`text-[9px] sm:text-[10px] leading-none self-start font-medium ${isHighlighted ? "!text-slate-900" : "opacity-60"}`}>
                    {secondaryChar}
                  </span>

                  {/* मुख्य सक्रिय अक्षर (फॉन्ट साइज मोठी केली) */}
                  <span className={`text-xs sm:text-sm md:text-base font-extrabold leading-none ${isHighlighted ? "!text-slate-950 scale-110" : ""}`}>
                    {primaryChar}
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