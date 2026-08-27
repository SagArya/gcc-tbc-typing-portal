// src/components/ShinyText.tsx
import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export default function ShinyText({
  text,
  disabled = false,
  speed = 5,
  className = "",
}: ShinyTextProps) {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block bg-clip-text text-transparent bg-gradient-to-r from-slate-400 via-amber-200 to-slate-400 bg-[length:200%_auto] ${
        !disabled ? "animate-shine" : ""
      } ${className}`}
      style={{
        animationDuration,
        backgroundImage:
          "linear-gradient(120deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0.2) 100%)",
      }}
    >
      {text}
    </span>
  );
}