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

// देवनागरी लिगेचर, रफार, अर्धी अक्षरे व वेलांटी जोडणी लॉजिक
function combineLigatures(text: string, char: string): string {
  if (!text) return char;

  const lastChar = text.slice(-1);
  const lastTwoChars = text.slice(-2); // उदा. 'ख्', 'ध्', 'ण्', 'ष्'

  // ========================================================
  // १. रफार लॉजिक (उदा. माग + र् => मार्ग, सव + र् => सर्व)
  // ========================================================
  const RAFAAR = "\u0930\u094D"; // 'र्'
  if (char === RAFAAR || char === "र्") {
    const match = text.match(/([\u0915-\u0939][\u093E-\u094C\u0901-\u0903]?)$/);
    if (match) {
      const targetCluster = match[0];
      const prefix = text.slice(0, -targetCluster.length);
      return prefix + RAFAAR + targetCluster;
    }
  }

  // ========================================================
  // २. अर्ध्या व्यंजनाला काना (ा \u093E) लागल्यास ते पूर्ण अक्षर बनवणे
  // ========================================================
  if (char === "\u093E" || char === "ा") {
    // ध : ध् + ा => ध (उदा. अधिकारी, धर्म)
    if (lastTwoChars === "ध्") return text.slice(0, -2) + "ध";
    // ख : ख् + ा => ख
    if (lastTwoChars === "ख्") return text.slice(0, -2) + "ख";
    // ण : ण् + ा => ण
    if (lastTwoChars === "ण्") return text.slice(0, -2) + "ण";
    // थ : थ् + ा => थ
    if (lastTwoChars === "थ्") return text.slice(0, -2) + "थ";
    // भ : भ् + ा => भ
    if (lastTwoChars === "भ्") return text.slice(0, -2) + "भ";
    // श : श् + ा => श
    if (lastTwoChars === "श्") return text.slice(0, -2) + "श";
    // ष : ष् + ा => ष
    if (lastTwoChars === "ष्") return text.slice(0, -2) + "ष";
    // क : क् + ा => क
    if (lastTwoChars === "क्") return text.slice(0, -2) + "क";
    // ग : ग् + ा => ग
    if (lastTwoChars === "ग्") return text.slice(0, -2) + "ग";
    // च : च् + ा => च
    if (lastTwoChars === "च्") return text.slice(0, -2) + "च";
    // ज : ज् + ा => ज
    if (lastTwoChars === "ज्") return text.slice(0, -2) + "ज";
    // त : त् + ा => त
    if (lastTwoChars === "त्") return text.slice(0, -2) + "त";
    // न : न् + ा => न
    if (lastTwoChars === "न्") return text.slice(0, -2) + "न";
    // प : प् + ा => प
    if (lastTwoChars === "प्") return text.slice(0, -2) + "प";
    // म : म् + ा => म
    if (lastTwoChars === "म्") return text.slice(0, -2) + "म";
    // ल : ल् + ा => ल
    if (lastTwoChars === "ल्") return text.slice(0, -2) + "ल";
    // व : व् + ा => व
    if (lastTwoChars === "व्") return text.slice(0, -2) + "व";
    // स : स् + ा => स
    if (lastTwoChars === "स्") return text.slice(0, -2) + "स";

    // स्वर : अ + ा => आ
    if (lastChar === "अ") return text.slice(0, -1) + "आ";
  }

  // ========================================================
  // ३. स्वरांची जोडणी (अ, आ, ए, इ, उ)
  // ========================================================
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
    // वेलांटी बफर स्टेट
    const [pendingVelanti, setPendingVelanti] = useState(false);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      // Tab Key Handle
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

      // १. जर 'f' (पहिली वेलांटी) दाबली असेल
      if (!e.shiftKey && e.key === "f") {
        e.preventDefault();
        setPendingVelanti(true);
        return;
      }

      // २. कीबोर्ड मॅपिंग
      let mappedChar = e.shiftKey ? shiftKeyMap[e.key] : normalKeyMap[e.key];

      if (mappedChar) {
        e.preventDefault();

        // जर वेलांटी पेंडिंग असेल
        if (pendingVelanti) {
          // अ) जर युझरने काना दाबायचे ठरवले (अर्धे अक्षर पूर्ण करण्यासाठी, उदा. ध् + k => धि)
          if ((e.key === "k" || mappedChar === "\u093E" || mappedChar === "ा") && value.endsWith("्")) {
            setPendingVelanti(false);
            const baseWithoutHalant = combineLigatures(value, mappedChar);
            const nextVal = baseWithoutHalant + "ि";
            if (onChangeValue) onChangeValue(nextVal);
            return;
          }

          // ब) जर पूर्ण व्यंजन दाबले (उदा. d => कि, u => नि) आणि ते अर्धे नसेल
          if (!mappedChar.endsWith("्")) {
            setPendingVelanti(false);
            mappedChar = mappedChar + "ि";
          }
        } else {
          // जर वेलांटी पेंडिंग नव्हती पण मागील अक्षर अर्धे होते आणि काना आला
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