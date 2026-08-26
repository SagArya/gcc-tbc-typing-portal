// src/components/CustomPassageModal.tsx
"use client";

import React, { useState } from "react";

interface CustomPassageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyPassage: (
    title: string,
    text: string,
    lang?: "marathi" | "english"
  ) => void;
}

export default function CustomPassageModal({
  isOpen,
  onClose,
  onApplyPassage,
}: CustomPassageModalProps) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [lang, setLang] = useState<"marathi" | "english">("marathi");

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setTitle(file.name.replace(/\.[^/.]+$/, ""));
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = (event.target?.result as string) || "";
      setText(content);
      const hasDevanagari = /[\u0900-\u097F]/.test(content);
      setLang(hasDevanagari ? "marathi" : "english");
    };
    reader.readAsText(file);
  };

  const handleStart = () => {
    if (!text.trim()) return;
    onApplyPassage(title.trim() || "कस्टम सराव उतारा", text.trim(), lang);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div 
        className="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full p-6 shadow-2xl space-y-4 relative z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
          <h3 className="text-base font-bold text-amber-400">
            📝 स्वतःचा उतारा जोडा (Marathi / English Passage)
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white text-lg font-bold p-1 cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="space-y-3">
          <div>
            <label className="text-xs font-semibold text-slate-400 block mb-1.5">
              उताऱ्याची भाषा निवडा (Language):
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setLang("marathi")}
                className={`py-2 px-3 text-xs font-bold rounded-xl border transition cursor-pointer ${
                  lang === "marathi"
                    ? "bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-sm"
                    : "bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800"
                }`}
              >
                🇮🇳 मराठी (Remington GAIL)
              </button>
              <button
                type="button"
                onClick={() => setLang("english")}
                className={`py-2 px-3 text-xs font-bold rounded-xl border transition cursor-pointer ${
                  lang === "english"
                    ? "bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-sm"
                    : "bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800"
                }`}
              >
                🇬🇧 English (Standard Typing)
              </button>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-400 block mb-1">
              उताऱ्याचे नाव (Title):
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="उदा. GCC-TBC सराव उतारा"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-400 block mb-1">
              टेक्स्ट फाईल (.txt) निवडा:
            </label>
            <input
              type="file"
              accept=".txt"
              onChange={handleFileUpload}
              className="w-full text-xs text-slate-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-slate-800 file:text-slate-200 hover:file:bg-slate-700 cursor-pointer"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-400 block mb-1">
              किंवा मजकूर थेट पेस्ट करा:
            </label>
            <textarea
              rows={5}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="येथे तुमचा मराठी किंवा इंग्रजी उतारा पेस्ट करा..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 focus:outline-none focus:border-amber-500 leading-relaxed font-sans"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl transition cursor-pointer"
          >
            रद्द करा
          </button>
          <button
            type="button"
            onClick={handleStart}
            disabled={!text.trim()}
            className="px-5 py-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 text-xs font-bold rounded-xl transition shadow-lg shadow-amber-500/20 cursor-pointer"
          >
            सराव सुरू करा
          </button>
        </div>
      </div>
    </div>
  );
}