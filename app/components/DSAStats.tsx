"use client";
import { DSA_STATS } from "../lib/data";
import { motion } from "framer-motion";

export default function DSAStats() {
  return (
    <section className="py-24 px-6 md:px-20 border-t border-neutral-900 bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-end">
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
            <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-2 block">Competency</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Problem Solving <br /> at Scale.
            </h2>
            <p className="text-neutral-400 max-w-md text-lg">
                Algorithm optimization isnt just for contests. Its how I ensure your application scales efficiently.
            </p>
        </motion.div>
        
        <motion.div 
          className="flex-1 w-full bg-[#0a0a0a] p-8 rounded-3xl border border-neutral-800"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex items-baseline gap-2 mb-4">
            <motion.span 
              className="text-6xl font-bold text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {DSA_STATS.solved}
            </motion.span>
            <span className="text-neutral-500">problems on {DSA_STATS.platform}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {DSA_STATS.badges.map((badge, index) => (
                <motion.span 
                  key={badge} 
                  className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                    {badge}
                </motion.span>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-neutral-900">
            <p className="text-white font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/> 
                {DSA_STATS.hackathon}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}