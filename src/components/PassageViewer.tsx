"use client";

import React, { useEffect, useRef } from "react";

interface PassageViewerProps {
  passageText: string;
  userInput: string;
  title?: string;
  loading?: boolean;
}

export default function PassageViewer({
  passageText,
  userInput,
  title,
  loading,
}: PassageViewerProps) {
  const activeWordRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // पॅसेज परिच्छेदांमध्ये विभागणे
  const paragraphs = passageText.split("\n").filter((p) => p.trim().length > 0);
  
  // शब्दांची विभागणी
  const allTargetWords = passageText.trim().split(/\s+/).filter(Boolean);
  const isTrailingSpace =
    userInput.endsWith(" ") || userInput.endsWith("\n") || userInput.endsWith("\t");
  const typedWords = userInput.trim().split(/\s+/).filter(Boolean);
  
  const activeWordIndex = isTrailingSpace
    ? typedWords.length
    : Math.max(0, typedWords.length - 1);

  // चालू शब्दावर आपोआप स्क्रोल होणे
  useEffect(() => {
    if (activeWordRef.current && containerRef.current) {
      activeWordRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [activeWordIndex]);

  let globalWordCounter = 0;

  return (
    <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 flex flex-col shadow-lg h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-700">
        <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">
          📄 मूळ उतारा (Question Passage)
        </h2>
        <span className="text-xs text-slate-400 font-medium">
          {title ? `विषय: ${title}` : "लोड होत आहे..."}
        </span>
      </div>

      {/* Main Passage Window */}
      <div
        ref={containerRef}
        className="flex-1 bg-slate-950 p-5 rounded-xl border border-slate-800 text-base sm:text-lg leading-relaxed text-slate-200 select-none overflow-y-auto max-h-[350px] lg:max-h-[500px] space-y-3"
      >
        {loading ? (
          <p className="text-slate-500 text-center mt-10">उतारा लोड होत आहे...</p>
        ) : (
          paragraphs.map((para, pIdx) => {
            const wordsInPara = para.trim().split(/\s+/).filter(Boolean);
            return (
              /* text-left आणि प्लॅन स्पेसिंग वापरल्यामुळे जास्तीचा गॅप पूर्णपणे निघून जाईल */
              <p key={pIdx} className="text-left indent-6 sm:indent-8">
                {wordsInPara.map((word, wIdx) => {
                  const currentWordIndex = globalWordCounter;
                  globalWordCounter++;

                  const isTyped = currentWordIndex < activeWordIndex;
                  const isActive = currentWordIndex === activeWordIndex;
                  const userWord = typedWords[currentWordIndex] || "";

                  let statusClass = "text-slate-300";

                  if (isTyped) {
                    statusClass =
                      userWord === word
                        ? "text-emerald-400 font-medium"
                        : "text-rose-400 font-medium line-through decoration-rose-500/70";
                  } else if (isActive) {
                    statusClass =
                      "bg-amber-400/20 text-amber-300 font-bold px-1 rounded border border-amber-400/50 shadow-sm";
                  }

                  return (
                    <React.Fragment key={wIdx}>
                      <span
                        ref={isActive ? activeWordRef : null}
                        className={`transition-colors duration-100 ${statusClass}`}
                      >
                        {word}
                      </span>
                      {/* दोन शब्दांमध्ये फक्त एकच सामान्य स्पेस */}
                      {" "}
                    </React.Fragment>
                  );
                })}
              </p>
            );
          })
        )}
      </div>

      {/* Progress Footer */}
      <div className="mt-3 flex justify-between items-center text-xs text-slate-400 font-medium">
        <span>
          प्रगती: {Math.min(activeWordIndex, allTargetWords.length)} / {allTargetWords.length} शब्द
        </span>
        <span className="text-emerald-400">
          {allTargetWords.length > 0
            ? `${Math.round((Math.min(activeWordIndex, allTargetWords.length) / allTargetWords.length) * 100)}% पूर्ण`
            : "0%"}
        </span>
      </div>
    </div>
  );
}