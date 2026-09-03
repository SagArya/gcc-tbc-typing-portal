// src/app/speed-test/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Speed Test & Exam Simulation - Marathi & English",
  description:
    "Take real 7-minute GCC-TBC typing speed tests for Marathi 30/40 WPM and English 30/40/50/60 WPM. Instant mistake review and marks calculation.",
};

export default function SpeedTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}