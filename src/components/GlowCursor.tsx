// src/components/GlowCursor.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function GlowCursor() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useSpring(0, { stiffness: 220, damping: 25 });
  const mouseY = useSpring(0, { stiffness: 220, damping: 25 });

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-20 dark:opacity-40 mix-blend-multiply dark:mix-blend-screen"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, rgba(6, 182, 212, 0.15) 45%, transparent 75%)",
        }}
      />
    </div>
  );
}