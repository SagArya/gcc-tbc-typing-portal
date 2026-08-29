// src/data/lessonsData.ts
import { MARATHI_BEGINNER_LESSONS } from "./marathiLessonsData";
import { MARATHI_INTERMEDIATE_LESSONS } from "./marathiIntermediateLessons";
import { MARATHI_ADVANCED_LESSONS } from "./marathiAdvancedLessons";
import { ENGLISH_LESSONS } from "./englishLessonsData";

export interface LessonStep {
  stepNumber: number;
  instruction: string;
  targetText: string;
}

export interface LessonItem {
  id: string;
  language: "marathi" | "english";
  tier: "beginner" | "intermediate" | "advanced";
  lessonNumber: number;
  title: string;
  marathiTitle: string;
  description: string;
  totalSteps: number;
  steps: LessonStep[];
}

// 🎯 संपूर्ण ६१ मराठी + २५ इंग्रजी = एकूण ८६ लेसन्स
export const LESSONS_DATA: LessonItem[] = [
  ...MARATHI_BEGINNER_LESSONS,     // मराठी धडे १ ते २१ (Beginner)
  ...MARATHI_INTERMEDIATE_LESSONS, // मराठी धडे २२ ते ४२ (Intermediate)
  ...MARATHI_ADVANCED_LESSONS,     // मराठी धडे ४३ ते ६१ (Advanced)
  ...ENGLISH_LESSONS,              // इंग्रजी धडे १ ते २५ (Beginner to Master)
];