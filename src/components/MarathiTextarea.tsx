// src/components/MarathiTextarea.tsx
"use client";

import React, { forwardRef, useState } from "react";
import { normalKeyMap, shiftKeyMap } from "@/utils/remingtonMap";

interface MarathiTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  onChangeValue?: (val: string) => void;
  isMarathi?: boolean;
}

function combineLigatures(text: string, char: string): string {
  if (!text) return char;

  const lastChar = text.slice(-1);
  const lastTwoChars = text.slice(-2);

  // १. रफार लॉजिक (उदा. माग + र् => मार्ग)
  const RAFAAR = "\u0930\u094D";
  if (char === RAFAAR || char === "र्") {
    const match = text.match(/([\u0915-\u0939][\u093E-\u094C\u0901-\u0903]?)$/);
    if (match) {
      const targetCluster = match[0];
      const prefix = text.slice(0, -targetCluster.length);
      return prefix + RAFAAR + targetCluster;
    }
  }

  // २. अर्ध्या अक्षरांना काना (k / Shift+A) लागल्यास पूर्ण बनवणे
  if (char === "\u093E" || char === "ा") {
    if (lastTwoChars === "ध्") return text.slice(0, -2) + "ध";
    if (lastTwoChars === "ण्") return text.slice(0, -2) + "ण";
    if (lastTwoChars === "श्") return text.slice(0, -2) + "श";
    if (lastTwoChars === "ख्") return text.slice(0, -2) + "ख";
    if (lastTwoChars === "थ्") return text.slice(0, -2) + "थ";
    if (lastTwoChars === "भ्") return text.slice(0, -2) + "भ";
    if (lastTwoChars === "ष्") return text.slice(0, -2) + "ष";
    if (lastTwoChars === "क्") return text.slice(0, -2) + "क";
    if (lastTwoChars === "ग्") return text.slice(0, -2) + "ग";
    if (lastTwoChars === "च्") return text.slice(0, -2) + "च";
    if (lastTwoChars === "ज्") return text.slice(0, -2) + "ज";
    if (lastTwoChars === "त्") return text.slice(0, -2) + "त";
    if (lastTwoChars === "न्") return text.slice(0, -2) + "न";
    if (lastTwoChars === "प्") return text.slice(0, -2) + "प";
    if (lastTwoChars === "म्") return text.slice(0, -2) + "म";
    if (lastTwoChars === "ल्") return text.slice(0, -2) + "ल";
    if (lastTwoChars === "व्") return text.slice(0, -2) + "व";
    if (lastTwoChars === "स्") return text.slice(0, -2) + "स";
    if (lastTwoChars === "घ्") return text.slice(0, -2) + "घ";
    if (lastChar === "अ") return text.slice(0, -1) + "आ";
  }

  // ३. स्वर जोडणी
  if (lastChar === "आ" && char === "े") return text.slice(0, -1) + "ओ";
  if ((lastChar === "आ" || lastChar === "ओ") && (char === "ै" || char === "े"))
    return text.slice(0, -1) + "औ";
  if (lastChar === "आ" && char === "ॅ") return text.slice(0, -1) + "ऑ";
  if (lastChar === "ए" && char === "े") return text.slice(0, -1) + "ऐ";
  if (lastChar === "इ" && char === "ी") return text.slice(0, -1) + "ई";
  if (lastChar === "उ" && char === "ू") return text.slice(0, -1) + "ऊ";

  return text + char;
}

const MarathiTextarea = forwardRef<HTMLTextAreaElement, MarathiTextareaProps>(
  ({ value, onChangeValue, onChange, isMarathi = true, ...props }, ref) => {
    const [pendingVelanti, setPendingVelanti] = useState(false);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Tab") {
        e.preventDefault();
        setPendingVelanti(false);
        const nextVal = value + "\t";
        if (onChangeValue) onChangeValue(nextVal);
        return;
      }

      if (!isMarathi) return;

      if (
        e.ctrlKey ||
        e.altKey ||
        e.metaKey ||
        e.key === "Escape" ||
        e.key.startsWith("Arrow")
      ) {
        return;
      }

      // Spacebar
      if (e.key === " " || e.code === "Space") {
        e.preventDefault();
        setPendingVelanti(false);
        const nextVal = value + " ";
        if (onChangeValue) onChangeValue(nextVal);
        return;
      }

      // Backspace
      if (e.key === "Backspace") {
        e.preventDefault();
        if (pendingVelanti) {
          setPendingVelanti(false);
          return;
        }
        const nextVal = value.slice(0, -1);
        if (onChangeValue) onChangeValue(nextVal);
        return;
      }

      // Enter
      if (e.key === "Enter") {
        e.preventDefault();
        setPendingVelanti(false);
        const nextVal = value + "\n";
        if (onChangeValue) onChangeValue(nextVal);
        return;
      }

      // पहिली वेलांटी ('f')
      if (!e.shiftKey && e.key === "f") {
        e.preventDefault();
        setPendingVelanti(true);
        return;
      }

      let mappedChar = e.shiftKey ? shiftKeyMap[e.key] : normalKeyMap[e.key];

      if (mappedChar) {
        e.preventDefault();

        if (pendingVelanti) {
          if ((e.key === "k" || mappedChar === "\u093E" || mappedChar === "ा") && value.endsWith("्")) {
            setPendingVelanti(false);
            const baseWithoutHalant = combineLigatures(value, mappedChar);
            const nextVal = baseWithoutHalant + "ि";
            if (onChangeValue) onChangeValue(nextVal);
            return;
          }

          if (!mappedChar.endsWith("्")) {
            setPendingVelanti(false);
            mappedChar = mappedChar + "ि";
          }
        } else {
          if (mappedChar === "\u093E" || mappedChar === "ा") {
            const nextVal = combineLigatures(value, mappedChar);
            if (onChangeValue) onChangeValue(nextVal);
            return;
          }
        }

        const nextVal = combineLigatures(value, mappedChar);
        if (onChangeValue) onChangeValue(nextVal);
      }
    };

    return (
      <textarea
        ref={ref}
        value={value}
        onKeyDown={handleKeyDown}
        onChange={(e) => {
          if (!isMarathi && onChangeValue) {
            onChangeValue(e.target.value);
          }
          if (onChange) onChange(e);
        }}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        data-gramm="false"
        data-gramm_editor="false"
        data-enable-grammarly="false"
        {...props}
      />
    );
  }
);

MarathiTextarea.displayName = "MarathiTextarea";
export default MarathiTextarea;