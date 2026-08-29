// src/data/mcqData.ts

// English Datasets
import { MS_WORD_ENGLISH_MCQ } from "./mcq/english/msWord";
import { MS_EXCEL_ENGLISH_MCQ } from "./mcq/english/msExcel";
import { MS_POWERPOINT_ENGLISH_MCQ } from "./mcq/english/msPowerPoint";
import { COMPUTER_FUNDAMENTALS_ENGLISH_MCQ } from "./mcq/english/fundamentals";
import { INTERNET_EMAIL_ENGLISH_MCQ } from "./mcq/english/internetEmail";

// Marathi Datasets
import { MS_WORD_MARATHI_MCQ } from "./mcq/marathi/msWord";
import { MS_EXCEL_MARATHI_MCQ } from "./mcq/marathi/msExcel";
import { MS_POWERPOINT_MARATHI_MCQ } from "./mcq/marathi/msPowerPoint";
import { COMPUTER_FUNDAMENTALS_MARATHI_MCQ } from "./mcq/marathi/fundamentals";
import { INTERNET_EMAIL_MARATHI_MCQ } from "./mcq/marathi/internetEmail";

export interface MCQQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
}

export const ALL_ENGLISH_MCQ: MCQQuestion[] = [
  ...MS_WORD_ENGLISH_MCQ,
  ...MS_EXCEL_ENGLISH_MCQ,
  ...MS_POWERPOINT_ENGLISH_MCQ,
  ...COMPUTER_FUNDAMENTALS_ENGLISH_MCQ,
  ...INTERNET_EMAIL_ENGLISH_MCQ,
];

export const ALL_MARATHI_MCQ: MCQQuestion[] = [
  ...MS_WORD_MARATHI_MCQ,
  ...MS_EXCEL_MARATHI_MCQ,
  ...MS_POWERPOINT_MARATHI_MCQ,
  ...COMPUTER_FUNDAMENTALS_MARATHI_MCQ,
  ...INTERNET_EMAIL_MARATHI_MCQ,
];