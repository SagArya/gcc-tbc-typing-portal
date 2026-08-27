// src/components/MarathiTextarea.tsx
"use client";

import React, { forwardRef } from "react";
import { normalKeyMap, shiftKeyMap } from "@/utils/remingtonMap";

interface MarathiTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  onChangeValue?: (val: string) => void;
  isMarathi?: boolean;
}

function combineLigatures(text: string, char: string): string {
  const lastChar = text.slice(-1);

  if (lastChar === "अ" && char === "\u093E") return text.slice(0, -1) + "आ";
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
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      // १. Tab Key Handled (फोकस बाहेर जाणार नाही, टॅब स्पेस ॲड होईल)
      if (e.key === "Tab") {
        e.preventDefault();
        const nextVal = value + "\t";
        if (onChangeValue) onChangeValue(nextVal);
        return;
      }

      if (!isMarathi) return;

      // शॉर्टकट आणि नेव्हिगेशन कीज चालू ठेवणे
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
        const nextVal = value + " ";
        if (onChangeValue) onChangeValue(nextVal);
        return;
      }

      // Backspace
      if (e.key === "Backspace") {
        e.preventDefault();
        const nextVal = value.slice(0, -1);
        if (onChangeValue) onChangeValue(nextVal);
        return;
      }

      // Enter
      if (e.key === "Enter") {
        e.preventDefault();
        const nextVal = value + "\n";
        if (onChangeValue) onChangeValue(nextVal);
        return;
      }

      // Remington Key Mapping
      const mappedChar = e.shiftKey ? shiftKeyMap[e.key] : normalKeyMap[e.key];
      if (mappedChar) {
        e.preventDefault();
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
        {...props}
      />
    );
  }
);

MarathiTextarea.displayName = "MarathiTextarea";
export default MarathiTextarea;