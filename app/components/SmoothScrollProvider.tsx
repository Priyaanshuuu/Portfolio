"use client";
import { ReactNode } from "react";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 via-blue-400 to-transparent origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      {children}
    </>
  );
}
