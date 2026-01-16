"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="h-[40vh] flex flex-col justify-center items-center text-center bg-[#050505] border-t border-neutral-900">
      <motion.h2 
        className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        Lets build something <br /> <span className="text-neutral-600">extraordinary.</span>
      </motion.h2>
      <motion.a 
        href="mailto:priyanshusinha636@gmail.com" 
        className="group relative px-8 py-4 bg-white text-black rounded-full font-bold overflow-hidden hover:scale-105 transition-transform"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <span className="relative z-10">Email Me</span>
        <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
      </motion.a>
    </footer>
  );
}
