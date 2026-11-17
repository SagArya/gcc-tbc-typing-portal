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

  // 🎯 फिक्स १: 'इ' + रफार = 'ई'
  const RAFAAR = "\u0930\u094D";
  const isRafaar = char === RAFAAR || char === "र्" || char === "\u094D\u0930";
  if (isRafaar && lastChar === "इ") {
    return text.slice(0, -1) + "ई";
  }

  // 🎯 फिक्स २: वेलांटीनंतर पदेन (्र) किंवा नुक्ता (़) आल्यास
  const PADAN = "\u094D\u0930";
  const isPadan = char === "्र" || char === PADAN || char === "़";

  if (isPadan && lastChar === "ि" && text.length >= 2) {
    const textWithoutVelanti = text.slice(0, -1);
    const padanChar = char === "़" ? "़" : "्र";
    return textWithoutVelanti + padanChar + "ि";
  }

  // 🎯 फिक्स ३: व्यंजनावर रफार (र्) जोडणे (ऋकार 'ृ' सह अचूक काम करेल)
  if (char === RAFAAR || char === "र्") {
    const match = text.match(/([\u0915-\u0939][\u093E-\u094C\u0901-\u0903]?)$/);
    if (match) {
      const targetCluster = match[0];
      const prefix = text.slice(0, -targetCluster.length);
      return prefix + RAFAAR + targetCluster;
    }
  }

  // 🎯 फिक्स ४: अर्ध्या अक्षराला काना (ा) जोडून पूर्ण अक्षर बनवणे
  if (char === "\u093E" || char === "ा") {
    const halfToFullMap: Record<string, string> = {
      "ध्": "ध", "ण्": "ण", "श्": "श", "ख्": "ख", "थ्": "थ",
      "भ्": "भ", "ष्": "ष", "क्": "क", "ग्": "ग", "च्": "च",
      "ज्": "ज", "त्": "त", "न्": "न", "प्": "प", "म्": "म",
      "ल्": "ल", "व्": "व", "स्": "स", "घ्": "घ", "ब्": "ब",
      "य्": "य", "द्": "द", "ट्": "ट", "ठ्": "ठ", "ड्": "ड",
      "ढ्": "ढ", "झ्": "झ", "फ्": "फ", "क्ष्": "क्ष", "त्र्": "त्र", "ज्ञ्": "ज्ञ"
    };

    if (halfToFullMap[lastTwoChars]) {
      return text.slice(0, -2) + halfToFullMap[lastTwoChars];
    }
    if (lastChar === "अ") return text.slice(0, -1) + "आ";
  }

  // स्वर संधी
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
  ({ value, onChangeValue, onChange, isMarathi = true, className, style, ...props }, ref) => {
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

      if (e.key === " " || e.code === "Space") {
        e.preventDefault();
        setPendingVelanti(false);
        const nextVal = value + " ";
        if (onChangeValue) onChangeValue(nextVal);
        return;
      }

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

      if (e.key === "Enter") {
        e.preventDefault();
        setPendingVelanti(false);
        const nextVal = value + "\n";
        if (onChangeValue) onChangeValue(nextVal);
        return;
      }

      // पहिली वेलांटी (f)
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

        let nextVal = combineLigatures(value, mappedChar);

        // 🎯 सुरक्षा तपासणी १: 'इर्' -> 'ई'
        if (nextVal.includes("इर्") || /\u0907[\u094D\u0930\u200C\u200D]+/.test(nextVal)) {
          nextVal = nextVal
            .replace(/इर्/g, "ई")
            .replace(/\u0907\u094D\u0930/g, "ई")
            .replace(/\u0907\u0930\u094D/g, "ई")
            .replace(/\u0907[\u094D\u0930\u200C\u200D]+/g, "ई");
        }

        // 🎯 सुरक्षा तपासणी २: जर चुकून 'त्' + 'य' ऐवजी 'त्र्य' तयार होत असेल, तर ते दुरुस्त करा
        // (मृत्यू सारख्या शब्दांसाठी फक्त त्र्यंबक वगळता सामान्य संयोग रक्षण)
        nextVal = nextVal.replace(/मृत्र्यू/g, "मृत्यू");

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
        style={{
          fontFamily: "var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          ...style,
        }}
        className={className}
        {...props}
      />
    );
  }
);

MarathiTextarea.displayName = "MarathiTextarea";
export default MarathiTextarea;