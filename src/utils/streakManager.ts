// src/utils/streakManager.ts

export interface StreakData {
  currentStreak: number;
  lastTestDate: string; // YYYY-MM-DD
  bestStreak: number;
  totalTestsCompleted: number;
}

const STREAK_KEY = "gcc_tbc_user_streak";

export function getStreakData(): StreakData {
  if (typeof window === "undefined") {
    return { currentStreak: 0, lastTestDate: "", bestStreak: 0, totalTestsCompleted: 0 };
  }

  const data = localStorage.getItem(STREAK_KEY);
  if (!data) {
    return { currentStreak: 0, lastTestDate: "", bestStreak: 0, totalTestsCompleted: 0 };
  }

  try {
    return JSON.parse(data);
  } catch {
    return { currentStreak: 0, lastTestDate: "", bestStreak: 0, totalTestsCompleted: 0 };
  }
}

export function updateDailyStreak(): StreakData {
  const prev = getStreakData();
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  if (prev.lastTestDate === today) {
    // आज आधीच टेस्ट दिली असेल तर फक्त काउंट वाढेल, streak तशीच राहील
    const updated = {
      ...prev,
      totalTestsCompleted: prev.totalTestsCompleted + 1,
    };
    localStorage.setItem(STREAK_KEY, JSON.stringify(updated));
    return updated;
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split("T")[0];

  let newStreak = 1;
  if (prev.lastTestDate === yesterdayStr) {
    // जर काल सराव केला असेल तर Streak + 1
    newStreak = prev.currentStreak + 1;
  }

  const updated: StreakData = {
    currentStreak: newStreak,
    lastTestDate: today,
    bestStreak: Math.max(newStreak, prev.bestStreak),
    totalTestsCompleted: prev.totalTestsCompleted + 1,
  };

  localStorage.setItem(STREAK_KEY, JSON.stringify(updated));
  return updated;
}