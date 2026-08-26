// src/utils/keyboardFingerMap.ts

export type Hand = "left" | "right";
export type Finger = "pinky" | "ring" | "middle" | "index" | "thumb";

export interface KeyFingerGuide {
  char: string;
  keyLabel: string;
  code: string;
  hand: Hand;
  finger: Finger;
  requiresShift?: boolean;
}

// Remington GAIL कीज आणि बोटांचे अचूक मॅपिंग
export const KEY_FINGER_MAP: Record<string, KeyFingerGuide> = {
  // --- Home Row ---
  "ं": { char: "ं", keyLabel: "a", code: "KeyA", hand: "left", finger: "pinky" },
  "ँ": { char: "ँ", keyLabel: "A", code: "KeyA", hand: "left", finger: "pinky", requiresShift: true },
  "े": { char: "े", keyLabel: "s", code: "KeyS", hand: "left", finger: "ring" },
  "ै": { char: "ै", keyLabel: "S", code: "KeyS", hand: "left", finger: "ring", requiresShift: true },
  "क": { char: "क", keyLabel: "d", code: "KeyD", hand: "left", finger: "middle" },
  "क्": { char: "क्", keyLabel: "D", code: "KeyD", hand: "left", finger: "middle", requiresShift: true },
  "ि": { char: "ि", keyLabel: "f", code: "KeyF", hand: "left", finger: "index" },
  "थ्": { char: "थ्", keyLabel: "F", code: "KeyF", hand: "left", finger: "index", requiresShift: true },
  "ह": { char: "ह", keyLabel: "g", code: "KeyG", hand: "left", finger: "index" },
  "ळ": { char: "ळ", keyLabel: "G", code: "KeyG", hand: "left", finger: "index", requiresShift: true },

  "ी": { char: "ी", keyLabel: "h", code: "KeyH", hand: "right", finger: "index" },
  "भ": { char: "भ", keyLabel: "H", code: "KeyH", hand: "right", finger: "index", requiresShift: true },
  "र": { char: "र", keyLabel: "j", code: "KeyJ", hand: "right", finger: "index" },
  "श्र": { char: "श्र", keyLabel: "J", code: "KeyJ", hand: "right", finger: "index", requiresShift: true },
  "ा": { char: "ा", keyLabel: "k", code: "KeyK", hand: "right", finger: "middle" },
  "ज्ञ": { char: "ज्ञ", keyLabel: "K", code: "KeyK", hand: "right", finger: "middle", requiresShift: true },
  "स": { char: "स", keyLabel: "l", code: "KeyL", hand: "right", finger: "ring" },
  "स्": { char: "स्", keyLabel: "L", code: "KeyL", hand: "right", finger: "ring", requiresShift: true },
  "य": { char: "य", keyLabel: ";", code: "Semicolon", hand: "right", finger: "pinky" },
  "रू": { char: "रू", keyLabel: ":", code: "Semicolon", hand: "right", finger: "pinky", requiresShift: true },
  "श्": { char: "श्", keyLabel: "'", code: "Quote", hand: "right", finger: "pinky" },
  "ष": { char: "ष्", keyLabel: '"', code: "Quote", hand: "right", finger: "pinky", requiresShift: true },

  // --- Top Row ---
  "ु": { char: "ु", keyLabel: "q", code: "KeyQ", hand: "left", finger: "pinky" },
  "फ": { char: "फ", keyLabel: "Q", code: "KeyQ", hand: "left", finger: "pinky", requiresShift: true },
  "ू": { char: "ू", keyLabel: "w", code: "KeyW", hand: "left", finger: "ring" },
  "ॉ": { char: "ॉ", keyLabel: "W", code: "KeyW", hand: "left", finger: "ring", requiresShift: true },
  "म": { char: "म", keyLabel: "e", code: "KeyE", hand: "left", finger: "middle" },
  "म्": { char: "म्", keyLabel: "E", code: "KeyE", hand: "left", finger: "middle", requiresShift: true },
  "त": { char: "त", keyLabel: "r", code: "KeyR", hand: "left", finger: "index" },
  "त्": { char: "त्", keyLabel: "R", code: "KeyR", hand: "left", finger: "index", requiresShift: true },
  "ज": { char: "ज", keyLabel: "t", code: "KeyT", hand: "left", finger: "index" },
  "ज्": { char: "ज्", keyLabel: "T", code: "KeyT", hand: "left", finger: "index", requiresShift: true },

  "ल": { char: "ल", keyLabel: "y", code: "KeyY", hand: "right", finger: "index" },
  "ल्": { char: "ल्", keyLabel: "Y", code: "KeyY", hand: "right", finger: "index", requiresShift: true },
  "न": { char: "न", keyLabel: "u", code: "KeyU", hand: "right", finger: "index" },
  "न्": { char: "न्", keyLabel: "U", code: "KeyU", hand: "right", finger: "index", requiresShift: true },
  "प": { char: "प", keyLabel: "i", code: "KeyI", hand: "right", finger: "middle" },
  "प्": { char: "प्", keyLabel: "I", code: "KeyI", hand: "right", finger: "middle", requiresShift: true },
  "व": { char: "व", keyLabel: "o", code: "KeyO", hand: "right", finger: "ring" },
  "व्": { char: "व्", keyLabel: "O", code: "KeyO", hand: "right", finger: "ring", requiresShift: true },
  "च": { char: "च", keyLabel: "p", code: "KeyP", hand: "right", finger: "pinky" },
  "च्": { char: "च्", keyLabel: "P", code: "KeyP", hand: "right", finger: "pinky", requiresShift: true },
  "ख्": { char: "ख्", keyLabel: "[", code: "BracketLeft", hand: "right", finger: "pinky" },
  "क्ष": { char: "क्ष", keyLabel: "{", code: "BracketLeft", hand: "right", finger: "pinky", requiresShift: true },

  // --- Bottom Row ---
  "्र": { char: "्र", keyLabel: "z", code: "KeyZ", hand: "left", finger: "pinky" },
  "ग": { char: "ग", keyLabel: "x", code: "KeyX", hand: "left", finger: "ring" },
  "ग्": { char: "ग्", keyLabel: "X", code: "KeyX", hand: "left", finger: "ring", requiresShift: true },
  "ब": { char: "ब", keyLabel: "c", code: "KeyC", hand: "left", finger: "middle" },
  "ब्": { char: "ब्", keyLabel: "C", code: "KeyC", hand: "left", finger: "middle", requiresShift: true },
  "अ": { char: "अ", keyLabel: "v", code: "KeyV", hand: "left", finger: "index" },
  "ट": { char: "ट", keyLabel: "V", code: "KeyV", hand: "left", finger: "index", requiresShift: true },
  "इ": { char: "इ", keyLabel: "b", code: "KeyB", hand: "left", finger: "index" },
  "ठ": { char: "ठ", keyLabel: "B", code: "KeyB", hand: "left", finger: "index", requiresShift: true },

  "द": { char: "द", keyLabel: "n", code: "KeyN", hand: "right", finger: "index" },
  "छ": { char: "छ", keyLabel: "N", code: "KeyN", hand: "right", finger: "index", requiresShift: true },
  "उ": { char: "उ", keyLabel: "m", code: "KeyM", hand: "right", finger: "index" },
  "ड": { char: "ड", keyLabel: "M", code: "KeyM", hand: "right", finger: "index", requiresShift: true },
  "ए": { char: "ए", keyLabel: ",", code: "Comma", hand: "right", finger: "middle" },
  "ढ": { char: "ढ", keyLabel: "<", code: "Comma", hand: "right", finger: "middle", requiresShift: true },
  "ण्": { char: "ण्", keyLabel: ".", code: "Period", hand: "right", finger: "ring" },
  "झ": { char: "झ", keyLabel: ">", code: "Period", hand: "right", finger: "ring", requiresShift: true },
  "ध्": { char: "ध्", keyLabel: "/", code: "Slash", hand: "right", finger: "pinky" },
  "घ": { char: "घ", keyLabel: "?", code: "Slash", hand: "right", finger: "pinky", requiresShift: true },

  // --- Space & Halant ---
  " ": { char: " ", keyLabel: "Space", code: "Space", hand: "right", finger: "thumb" },
  "्": { char: "्", keyLabel: "+", code: "Equal", hand: "right", finger: "pinky", requiresShift: true },
};

export const FINGER_NAMES_MARATHI: Record<Finger, string> = {
  pinky: "करंगळी (Pinky)",
  ring: "अनामिका (Ring)",
  middle: "मधले बोट (Middle)",
  index: "तर्जनी (Index)",
  thumb: "अंगठा (Thumb)",
};

export const HAND_NAMES_MARATHI: Record<Hand, string> = {
  left: "डावा हात (Left Hand)",
  right: "उजवा हात (Right Hand)",
};