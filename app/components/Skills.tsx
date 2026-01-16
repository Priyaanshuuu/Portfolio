"use client";
import { motion } from "framer-motion";
import { SKILLS } from "../lib/data";

interface SkillCategory {
  title: string;
  skills: string[];
}

const SkillBadge = ({ skill, index }: { skill: string; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      className="px-4 py-2 bg-linear-to-r from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-full text-sm text-neutral-300 hover:border-blue-500/60 hover:bg-blue-500/15 transition-all duration-300 hover:scale-105"
    >
      {skill}
    </motion.div>
  );
};

const SkillSection = ({ category, skills, index }: { category: string; skills: string[]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="space-y-4"
    >
      <h3 className="text-lg font-semibold text-white flex items-center gap-2">
        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
        {category}
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, idx) => (
          <SkillBadge key={skill} skill={skill} index={idx} />
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    { title: "Languages", skills: SKILLS.languages },
    { title: "Frontend Development", skills: SKILLS.frontend },
    { title: "Backend Development", skills: SKILLS.backend },
    { title: "Generative AI & LLMs", skills: SKILLS.ai_llms },
    { title: "Databases", skills: SKILLS.databases },
    { title: "Tools & Platforms", skills: SKILLS.tools },
  ];

  return (
    <section className="py-32 px-4 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
            TECHNICAL <br /> <span className="text-neutral-800">SKILLS</span>
          </h2>
          <div className="h-px w-full bg-neutral-900" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {skillCategories.map((category, index) => (
            <SkillSection
              key={category.title}
              category={category.title}
              skills={category.skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
