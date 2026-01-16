"use client";
import { PROJECTS } from "../lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  links: {
    demo: string;
    repo: string;
  };
  architecture: string;
  challenge: string;
  solution: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative bg-[#0a0a0a] border border-neutral-900 rounded-3xl p-8 h-105 flex flex-col justify-between overflow-hidden hover:border-neutral-700 hover:bg-[#0f0f0f] transition-all duration-500"
    >
      {/* Top: Header */}
      <div className="z-10 relative">
        <div className="flex justify-between items-start mb-6">
          <div className="w-10 h-10 bg-neutral-900 rounded-full border border-neutral-800 flex items-center justify-center">
             <span className="text-neutral-500 font-mono text-xs">0{index + 1}</span>
          </div>
          <Link href={`/projects/${project.id}`}>
            <button 
              className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform"
              aria-label={`View details for ${project.title}`}
            >
               <ArrowUpRight size={20} />
            </button>
          </Link>
        </div>
        
        <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">{project.title}</h3>
        <p className="text-neutral-500 text-sm font-medium tracking-wide uppercase">{project.tagline}</p>
      </div>

      {/* Middle: Description & Tags */}
      <div className="relative z-10 mt-auto">
        <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3 mb-6 group-hover:text-neutral-300 transition-colors">
            {project.description}
        </p>

        {/* Hover Actions: These slide up */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-24 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex gap-3 bg-[#0f0f0f] pt-2">
             {project.links.demo !== "#" && (
               <a 
                 href={project.links.demo} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-neutral-100 text-black text-sm font-bold hover:bg-white transition-colors"
                 aria-label={`View live demo for ${project.title}`}
               >
                  <Globe size={16} /> Live
               </a>
             )}
             <a 
               href={project.links.repo} 
               target="_blank" 
               rel="noopener noreferrer"
               className={`flex items-center justify-center gap-2 py-3 rounded-xl bg-neutral-800 text-white text-sm font-bold hover:bg-neutral-700 transition-colors ${
                 project.links.demo === "#" ? "flex-1" : "flex-1"
               }`}
               aria-label={`View source code for ${project.title}`}
             >
                <Github size={16} /> Code
             </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function BentoGrid() {
  return (
    <section className="py-32 px-4 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
            SELECTED <br /> <span className="text-neutral-800">WORKS</span>
          </h2>
          <div className="h-px w-full bg-neutral-900" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} index={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}