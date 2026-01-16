"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROFILE } from "../lib/data";
import { Mail, Linkedin, Github, Code } from "lucide-react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Model3D = dynamic(() => import("./Model3D"), { ssr: false });

export default function Hero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={container} className="relative h-screen w-full overflow-hidden bg-[#050505]">
      {/* 3D Model Background - Positioned far right */}
      <div className="absolute inset-0 hidden lg:block z-0 opacity-70" style={{ right: '-60%' }}>
        <Suspense fallback={null}>
          <Model3D />
        </Suspense>
      </div>

      {/* Gradient Overlay - Shifted right for model visibility */}
      <div className="absolute inset-0 bg-linear-to-r from-[#050505] via-[#050505]/60 to-transparent z-5 pointer-events-none" />

      {/* Abstract Background Blur */}
      <div className="absolute top-[-20%] right-[-10%] w-150 h-150 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20">
        <div className="max-w-3xl">
          <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-blue-500 font-mono mb-6 tracking-widest uppercase text-sm"
          >
              {PROFILE.role}
          </motion.p>
          
          <motion.h1 
              style={{ y: yText }}
              className="text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter mb-8"
          >
              PRIYANSHU <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">SINHA</span>.
          </motion.h1>

          <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
          >
              <div>
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-4">
                    {PROFILE.about}
                </p>
                
                {/* Tech Stack Preview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-8 mt-8"
                >
                  <p className="text-blue-400 font-mono text-sm mb-3">$ Core Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "React", "TypeScript", "Node.js", "Python", "Django", "MongoDB", "PostgreSQL", "AI/LLM", "Tailwind CSS"].map((tech, idx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + idx * 0.05 }}
                        className="px-3 py-1 text-xs text-blue-300 bg-blue-500/10 border border-blue-500/30 rounded-md hover:border-blue-500/60 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              {/* Contact Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-6 flex-wrap pt-4 border-t border-neutral-800"
              >
                <a 
                  href={`mailto:${PROFILE.contact.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} className="group-hover:text-blue-500 transition-colors" />
                  <span className="text-sm hidden sm:inline">Email</span>
                </a>
                
                <a 
                  href={PROFILE.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="group-hover:text-blue-500 transition-colors" />
                  <span className="text-sm hidden sm:inline">LinkedIn</span>
                </a>
                
                <a 
                  href={PROFILE.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} className="group-hover:text-blue-500 transition-colors" />
                  <span className="text-sm hidden sm:inline">GitHub</span>
                </a>

                <a 
                  href={PROFILE.contact.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                  aria-label="LeetCode"
                >
                  <Code size={20} className="group-hover:text-blue-500 transition-colors" />
                  <span className="text-sm hidden sm:inline">LeetCode</span>
                </a>
              </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-6 text-neutral-600 text-xs font-mono uppercase tracking-widest z-10"
      >
        Scroll for Projects
      </motion.div>
    </div>
  );
}