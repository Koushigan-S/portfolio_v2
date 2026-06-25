"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/portfolio";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

interface ProjectShowcaseProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectShowcase({ project, onClose }: ProjectShowcaseProps) {
  // Disable body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-lg no-scrollbar"
      >
        {/* Navigation bar inside showcase */}
        <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-black/80 backdrop-blur-md border-b border-border-color">
          <span className="text-xs font-mono tracking-widest text-secondary-text uppercase">
            Product Launch / {project.title}
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-full border border-border-color bg-secondary-bg hover:bg-white hover:text-black transition-colors duration-300"
            aria-label="Close details"
          >
            <X size={18} />
          </button>
        </div>

        {/* Apple-style Product Page Layout */}
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 space-y-32">
          
          {/* Section 1: Hero announcement */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white">
              {project.title}
            </h1>
            <p className="text-xl md:text-3xl text-secondary-text max-w-3xl mx-auto font-light leading-relaxed">
              {project.tagline}
            </p>
            <div className="pt-8">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors duration-300"
              >
                <GithubIcon />
                View Source on GitHub
              </a>
            </div>
          </motion.div>

          {/* Section 2: Split specs comparison grid */}
          <div className="grid md:grid-cols-2 gap-12 border-t border-border-color pt-16">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-secondary-text">01 / The Challenge</span>
              <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">The Problem</h2>
              <p className="text-secondary-text leading-relaxed text-base md:text-lg">
                {project.problem}
              </p>
            </div>
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-secondary-text">02 / The Solution</span>
              <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">Our Approach</h2>
              <p className="text-secondary-text leading-relaxed text-base md:text-lg">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Section 3: Architecture breakdown */}
          <div className="space-y-8 bg-secondary-bg border border-border-color rounded-2xl p-8 md:p-12">
            <span className="text-xs font-mono uppercase tracking-widest text-secondary-text">03 / Architecture Design</span>
            <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">System Infrastructure</h2>
            <p className="text-secondary-text leading-relaxed text-base max-w-3xl">
              {project.architecture}
            </p>
            
            {/* Elegant text diagram layout */}
            <div className="border border-border-color/60 rounded-xl p-6 font-mono text-xs md:text-sm text-secondary-text bg-black/50 space-y-4 overflow-x-auto">
              <div className="text-white border-b border-border-color/40 pb-2 flex items-center justify-between">
                <span>SYSTEM BLOCK DIAGRAM</span>
                <span className="text-xxs px-2 py-0.5 rounded border border-white/20">Active Node</span>
              </div>
              <div className="min-w-[400px] py-4 flex flex-col items-center space-y-4">
                <div className="px-4 py-2 border border-white/30 rounded text-white bg-black">
                  User Interface / Client Operations
                </div>
                <div className="text-white">↓ gRPC / WebRTC</div>
                <div className="flex justify-center space-x-12 w-full">
                  <div className="px-4 py-2 border border-white/20 rounded bg-black flex-1 text-center max-w-[200px]">
                    Ingress / Consensus (Raft)
                  </div>
                  <div className="px-4 py-2 border border-white/20 rounded bg-black flex-1 text-center max-w-[200px]">
                    Memory Manager / Cache
                  </div>
                </div>
                <div className="text-white">↓ Data Plane</div>
                <div className="px-4 py-2 border border-white/40 rounded text-white bg-secondary-bg text-center">
                  Engine Core / Storage Operations
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Specifications & Technologies */}
          <div className="grid md:grid-cols-3 gap-12 pt-8">
            <div className="md:col-span-1 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-secondary-text">04 / Technology Stack</span>
              <h2 className="text-2xl font-bold text-white tracking-tight">Engineered With</h2>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-full border border-border-color text-xs font-mono text-white bg-secondary-bg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-secondary-text">05 / Key Capabilities</span>
              <h2 className="text-2xl font-bold text-white tracking-tight">Key Features</h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-white shrink-0 mt-1" size={16} />
                    <span className="text-secondary-text text-sm md:text-base leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 5: Dynamic Close Call to Action */}
          <div className="flex flex-col items-center justify-center pt-16 border-t border-border-color/40 gap-6">
            <h3 className="text-xl text-white font-medium">Want to see more of my work?</h3>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium"
            >
              Back to Overview
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
