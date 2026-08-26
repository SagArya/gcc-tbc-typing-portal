// src/components/WeakKeysDrawer.tsx
"use client";

import React from "react";
import { KeyMistakeStat } from "@/hooks/useWeakKeysTracker";
import { KEY_FINGER_MAP, FINGER_NAMES_MARATHI, HAND_NAMES_MARATHI } from "@/utils/keyboardFingerMap";

interface WeakKeysDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  weakKeys: KeyMistakeStat[];
  onClear: () => void;
  onStartRemedialDrill: (keys: string[]) => void;
}

export default function WeakKeysDrawer({
  isOpen,
  onClose,
  weakKeys,
  onClear,
  onStartRemedialDrill,
}: WeakKeysDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full p-6 shadow-2xl space-y-4">
        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">🎯</span>
            <h3 className="text-base font-bold text-amber-400">
              कमजोर अक्षरे विश्लेषण (Weak Keys & Finger Analytics)
            </h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white text-lg font-bold">
            ✕
          </button>
        </div>

        {weakKeys.length === 0 ? (
          <div className="py-8 text-center text-slate-400 text-sm">
            🎉 अप्रतिम! अजून एकही वारंवार चुकणारे अक्षर नोंदवले गेलेले नाही.
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-xs text-slate-400">
              सराव करताना तुम्ही सर्वाधिक वेळा चुकलेली अक्षरे आणि त्यासाठी योग्य बोटांची रचना:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-60 overflow-y-auto pr-1">
              {weakKeys.map((item) => {
                const guide = KEY_FINGER_MAP[item.char];
                return (
                  <div
                    key={item.char}
                    className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 flex items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 flex items-center justify-center bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-lg text-xl font-bold font-mono">
                        {item.char}
                      </span>
                      <div className="text-[11px] text-slate-300">
                        <div>चुका: <strong className="text-rose-400">{item.mistakesCount}</strong> वेळा</div>
                        {guide && (
                          <div className="text-slate-500 text-[10px]">
                            {HAND_NAMES_MARATHI[guide.hand].split(" ")[0]} • {FINGER_NAMES_MARATHI[guide.finger]}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex flex-wrap justify-between items-center gap-3 border-t border-slate-800">
              <button
                onClick={onClear}
                className="text-xs text-rose-400 hover:text-rose-300 transition underline"
              >
                इतिहास मिटवा (Clear Stats)
              </button>
              <button
                onClick={() => {
                  onStartRemedialDrill(weakKeys.map((w) => w.char));
                  onClose();
                }}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl transition shadow-lg shadow-amber-500/20"
              >
                ⚡ फक्त या अक्षरांचा सराव सुरू करा (Custom Drill)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}