// src/hooks/useWeakKeysTracker.ts
"use client";

import { useState, useEffect } from "react";

export interface KeyMistakeStat {
  char: string;
  mistakesCount: number;
}

const STORAGE_KEY = "typing_weak_keys_stats";

export function useWeakKeysTracker() {
  const [mistakesMap, setMistakesMap] = useState<Record<string, number>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setMistakesMap(JSON.parse(saved));
      }
    } catch {
      // Ignore local storage error
    }
  }, []);

  const recordMistake = (char: string) => {
    if (!char || char === " ") return;
    setMistakesMap((prev) => {
      const updated = { ...prev, [char]: (prev[char] || 0) + 1 };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const getTopWeakKeys = (limit = 6): KeyMistakeStat[] => {
    return Object.entries(mistakesMap)
      .map(([char, count]) => ({ char, mistakesCount: count }))
      .sort((a, b) => b.mistakesCount - a.mistakesCount)
      .slice(0, limit);
  };

  const clearStats = () => {
    setMistakesMap({});
    localStorage.removeItem(STORAGE_KEY);
  };

  return { recordMistake, getTopWeakKeys, clearStats };
}