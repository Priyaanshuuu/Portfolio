"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Download, Mail } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      if (current > lastScrollY.current && current > 100) {
        // Scrolling Down
        setHidden(true);
      } else {
        // Scrolling Up or near top
        setHidden(false);
      }
    }
    lastScrollY.current = current;
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-40 bg-[#050505]/80 backdrop-blur-md border-b border-neutral-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-4 flex items-center justify-between">
        {/* Logo/Name */}
        <Link href="/" className="text-white font-bold text-xl tracking-tighter hover:text-blue-500 transition-colors">
          PS
        </Link>

        {/* Nav Items */}
        <div className="flex items-center gap-6 md:gap-8">
          {/* Resume Link */}
          <a 
            href="https://drive.google.com/file/d/1U46oN1mWPsws8CGzkI7k5DEa8rbLqpgR/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
          >
            <span className="text-sm font-medium">Resume</span>
            <span className="text-xs bg-neutral-900 group-hover:bg-blue-500/20 px-2 py-1 rounded text-neutral-300 group-hover:text-blue-400 transition-colors">View</span>
          </a>

          {/* Download Resume Button */}
          <motion.a 
            href="https://drive.google.com/file/d/1U46oN1mWPsws8CGzkI7k5DEa8rbLqpgR/view?usp=sharing" 
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg transition-colors"
          >
            <Download size={16} />
            <span className="text-sm font-medium hidden md:inline">Download</span>
          </motion.a>

          {/* Email Button */}
          <motion.a 
            href="mailto:priyanshusinha636@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            <Mail size={16} />
            <span className="text-sm font-medium hidden md:inline">Email</span>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
