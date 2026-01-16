// app/projects/[slug]/page.tsx
import { PROJECTS } from "../../lib/data";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);

  if (!project) return <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">Project not found</div>;

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      <div className="max-w-5xl mx-auto px-6 py-20">
        
        {/* Navigation */}
        <Link href="/" className="inline-flex items-center text-neutral-500 hover:text-white transition-colors mb-16 group">
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        {/* Header */}
        <header className="mb-20">
            <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">{project.title}</h1>
            <div className="flex flex-col md:flex-row gap-8 md:items-center justify-between border-b border-neutral-800 pb-8">
                <p className="text-2xl text-neutral-400 max-w-2xl">{project.tagline}</p>
                <div className="flex gap-4">
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-colors">
                        Live Demo
                    </a>
                    <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="p-3 border border-neutral-700 rounded-full hover:bg-neutral-900 transition-colors text-white">
                        <Github size={24} />
                    </a>
                </div>
            </div>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            
            {/* Sidebar Stats */}
            <div className="md:col-span-1 space-y-8">
                <div>
                    <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Deep Dive */}
            <div className="md:col-span-2 space-y-16">
                
                <section>
                    <h3 className="text-sm font-mono text-blue-500 mb-4">01 — OVERVIEW</h3>
                    <p className="text-lg text-neutral-300 leading-relaxed">{project.description}</p>
                </section>

                <section>
                    <h3 className="text-sm font-mono text-blue-500 mb-4">02 — ARCHITECTURE</h3>
                    <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-neutral-900">
                        <p className="text-lg text-neutral-300 leading-relaxed">{project.architecture}</p>
                    </div>
                </section>

                <section>
                    <h3 className="text-sm font-mono text-blue-500 mb-4">03 — CHALLENGE & RESOLUTION</h3>
                    <div className="grid gap-6">
                        <div className="p-6 rounded-2xl bg-red-900/10 border border-red-900/20">
                            <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
                                The Bug
                            </h4>
                            <p className="text-neutral-400 text-sm">{project.challenge}</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-green-900/10 border border-green-900/20">
                            <h4 className="text-green-400 font-bold mb-2 flex items-center gap-2">
                                The Fix
                            </h4>
                            <p className="text-neutral-400 text-sm">{project.solution}</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
      </div>
    </main>
  );
}