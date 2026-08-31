// src/data/passagesData.ts
import { MARATHI_30_PASSAGES } from "./marathi30Passages";
import { MARATHI_40_PASSAGES } from "./marathi40Passages";
import { ENGLISH_40_PASSAGES } from "./english40Passages";
import { ENGLISH_50_PASSAGES } from "./english50Passages";
import { ENGLISH_60_PASSAGES } from "./english60Passages";

export const ALL_PASSAGES = [
  ...MARATHI_30_PASSAGES,
  ...MARATHI_40_PASSAGES,
  ...ENGLISH_40_PASSAGES,
  ...ENGLISH_50_PASSAGES,
  ...ENGLISH_60_PASSAGES,
];