"use client";

import React, { useRef, useImperativeHandle, forwardRef, useState } from "react";
import { normalKeyMap, shiftKeyMap } from "@/utils/remingtonMap";

interface MarathiTextareaProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  isMarathi: boolean;
  className?: string;
}

const MarathiTextarea = forwardRef<HTMLTextAreaElement, MarathiTextareaProps>(
  ({ value, onChange, disabled, placeholder, isMarathi, className }, ref) => {
    const internalRef = useRef<HTMLTextAreaElement>(null);
    const [pendingMatra, setPendingMatra] = useState<string | null>(null);

    useImperativeHandle(ref, () => internalRef.current as HTMLTextAreaElement);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.ctrlKey || e.altKey || e.metaKey) return;

      const textarea = internalRef.current;
      if (!textarea) return;

      // १. TAB KEY HANDLING (परिच्छेद इंडेंटेशनसाठी)
      if (e.key === "Tab") {
        e.preventDefault(); // फोकस बाहेर जाण्यापासून रोखणे
        document.execCommand("insertText", false, "\t");
        onChange(textarea.value);
        setPendingMatra(null);
        return;
      }

      // २. ENTER KEY HANDLING (नवीन परिच्छेदासाठी)
      if (e.key === "Enter") {
        setPendingMatra(null);
        // Enter सामान्यपणे नवीन ओळ (\n) घेईल
        return;
      }

      // ३. नेव्हिगेशन कीज
      if (
        [
          "ArrowLeft",
          "ArrowRight",
          "ArrowUp",
          "ArrowDown",
          "Home",
          "End",
        ].includes(e.key)
      ) {
        setPendingMatra(null);
        return;
      }

      if (e.key === "Backspace" || e.key === "Delete") {
        if (pendingMatra) {
          setPendingMatra(null);
          e.preventDefault();
        }
        return;
      }

      // जर इंग्रजी मोड असेल तर खालील रेमिंग्टन मॅपिंग लागू होणार नाही
      if (!isMarathi) return;

      // ४. पहिली वेलांटी (f key)
      if (e.key === "f" && !e.shiftKey) {
        e.preventDefault();
        setPendingMatra("\u093F");
        return;
      }

      const map = e.shiftKey ? shiftKeyMap : normalKeyMap;
      const marathiChar = map[e.key];

      if (marathiChar !== undefined) {
        e.preventDefault();

        const start = textarea.selectionStart;
        const currentVal = textarea.value;

        // ५. 'k' की (काना आणि हलंत निवारण)
        if (e.key === "k" && !e.shiftKey) {
          const prevChar = currentVal.substring(start - 1, start);

          // अ + काना = आ
          if (prevChar === "अ") {
            textarea.setSelectionRange(start - 1, start);
            document.execCommand("insertText", false, "आ");
            onChange(textarea.value);
            return;
          }

          // अर्धे अक्षर + काना = पूर्ण अक्षर
          if (prevChar === "\u094D") {
            textarea.setSelectionRange(start - 1, start);
            document.execCommand("delete");

            if (pendingMatra) {
              document.execCommand("insertText", false, pendingMatra);
              setPendingMatra(null);
            }
            onChange(textarea.value);
            return;
          }
        }

        // ६. पद्यातील रकार (z key = ्र)
        if (e.key === "z" && !e.shiftKey) {
          const prevTwo = currentVal.substring(start - 2, start);
          if (prevTwo.endsWith("\u093F")) {
            const baseChar = prevTwo.charAt(0);
            textarea.setSelectionRange(start - 2, start);
            document.execCommand(
              "insertText",
              false,
              `${baseChar}\u094D\u0930\u093F`
            );
            onChange(textarea.value);
            return;
          }
        }

        // ७. रफार (Shift + Z किंवा Shift + 4 दाबताच)
        if (e.shiftKey && (e.key === "Z" || e.key === "$")) {
          const prevChar = currentVal.substring(start - 1, start);
          if (prevChar && ![" ", "\t", "\n"].includes(prevChar)) {
            textarea.setSelectionRange(start - 1, start);
            document.execCommand("insertText", false, `\u0930\u094D${prevChar}`);
            onChange(textarea.value);
            return;
          }
        }

        let charToInsert = marathiChar;

        // ८. वेलांटी जोडणे
        if (pendingMatra) {
          if (!marathiChar.endsWith("\u094D")) {
            charToInsert = marathiChar + pendingMatra;
            setPendingMatra(null);
          }
        }

        document.execCommand("insertText", false, charToInsert);
        onChange(textarea.value);
      }
    };

    return (
      <div className="relative flex-1 flex flex-col w-full h-full">
        {pendingMatra && (
          <div className="absolute top-2 right-4 px-2.5 py-1 bg-amber-500/20 border border-amber-500/50 text-amber-300 text-xs rounded-md font-mono select-none pointer-events-none z-10 animate-pulse">
            वेलांटी (ि) सक्रिय • अक्षर पूर्ण करा
          </div>
        )}

        <textarea
          ref={internalRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder={placeholder}
          className={className}
          spellCheck={false}
          autoComplete="off"
        />
      </div>
    );
  }
);

MarathiTextarea.displayName = "MarathiTextarea";

export default MarathiTextarea;