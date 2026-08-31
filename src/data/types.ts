// src/data/types.ts

export interface PassageItem {
  id: string;
  batch?: number | string;
  title: string;
  speed: number;
  language: "marathi" | "english" | string;
  session?: string;
  text: string;
}