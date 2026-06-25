"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function ResumeSection() {
  const handleDownload = () => {
    // Generate a simple text resume dynamically for download as a placeholder
    const resumeText = `NOVA - COMPUTER SCIENCE ENGINEERING STUDENT
Focus: Software Engineering, Cloud Computing, System Design

EDUCATION:
B.Tech Computer Science Engineering (2023 - 2027 Expected)

PROJECTS:
1. OS 777 - Custom operating system kernel written in Rust
2. Draft - Collaborative rich-text editor with offline peer synchronization
3. Streak7 - Consensus-driven distributed cron scheduler in Go
4. Tiles360 - GPU-accelerated spatial mapping WebGL engine

SKILLS:
- Languages: TypeScript, Rust, Go, Python, C++, SQL
- Backend: Node.js, gRPC, Redis, Docker, Kubernetes, Raft
- Frontend: React, Next.js, Tailwind CSS, Framer Motion, WebGL

CONTACT:
- Email: nova@example.com
- GitHub: https://github.com
`;

    const blob = new Blob([resumeText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "nova_resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="resume" className="py-24 px-6 md:px-12 bg-black border-t border-border-color select-none">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-12">
        <div className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-secondary-text">05 / Credentials</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Resume / CV
          </h2>
          <p className="text-secondary-text text-sm md:text-base max-w-md mx-auto">
            View or download my technical profile outlining detailed experience and achievements.
          </p>
        </div>

        {/* Minimalist interactive Resume Card Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-sm aspect-[1/1.4] bg-secondary-bg border border-border-color rounded-2xl p-8 text-left flex flex-col justify-between shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle overlay shine */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="space-y-6 relative z-10">
            <div className="flex items-center justify-between border-b border-border-color/60 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">Nova</h3>
                <p className="text-xxs font-mono text-secondary-text">Computer Science Engineer</p>
              </div>
              <FileText className="text-secondary-text" size={24} />
            </div>

            {/* Simulated text lines */}
            <div className="space-y-3">
              <div className="h-2 w-1/3 bg-white/20 rounded" />
              <div className="space-y-1.5">
                <div className="h-1.5 w-full bg-white/10 rounded" />
                <div className="h-1.5 w-5/6 bg-white/10 rounded" />
                <div className="h-1.5 w-4/5 bg-white/10 rounded" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="h-2 w-1/4 bg-white/20 rounded" />
              <div className="space-y-1.5">
                <div className="h-1.5 w-full bg-white/10 rounded" />
                <div className="h-1.5 w-11/12 bg-white/10 rounded" />
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="h-2 w-1/2 bg-white/20 rounded" />
              <div className="flex flex-wrap gap-1.5">
                <div className="h-4 w-12 bg-white/5 rounded border border-border-color/40" />
                <div className="h-4 w-8 bg-white/5 rounded border border-border-color/40" />
                <div className="h-4 w-16 bg-white/5 rounded border border-border-color/40" />
                <div className="h-4 w-10 bg-white/5 rounded border border-border-color/40" />
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-border-color/60 flex items-center justify-between">
            <span className="text-xxs font-mono text-secondary-text">PDF Format • 24 KB</span>
            <button
              onClick={handleDownload}
              className="p-2 rounded-full bg-white text-black hover:bg-white/80 active:scale-95 transition-all duration-300"
              aria-label="Download resume"
            >
              <Download size={14} />
            </button>
          </div>
        </motion.div>

        {/* Big CTA Button */}
        <div>
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium"
          >
            <Download size={16} />
            Download Complete Resume
          </button>
        </div>
      </div>
    </section>
  );
}
