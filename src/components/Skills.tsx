"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";

// Helper component returning custom colorful SVG icons for all engineering skills
function getSkillIcon(skill: string) {
  const s = skill.toLowerCase();
  
  if (s.includes("typescript") || s === "ts") {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" className="shrink-0">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <text x="12" y="17" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">TS</text>
      </svg>
    );
  }
  if (s.includes("javascript") || s === "js") {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" className="shrink-0">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <text x="12" y="17" fill="black" fontSize="10" fontWeight="bold" fontFamily="sans-serif">JS</text>
      </svg>
    );
  }
  if (s.includes("rust")) {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#CE412B" strokeWidth="2" className="shrink-0">
        <circle cx="12" cy="12" r="7" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5l1.5 1.5" strokeLinecap="round" />
        <text x="9.5" y="15" fill="#CE412B" fontSize="9" fontWeight="bold" fontFamily="sans-serif">R</text>
      </svg>
    );
  }
  if (s.includes("go")) {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" className="shrink-0">
        <ellipse cx="12" cy="12" rx="9" ry="6" fill="#00ADD8" />
        <circle cx="9" cy="11" r="1.5" fill="white" />
        <circle cx="9" cy="11" r="0.5" fill="black" />
      </svg>
    );
  }
  if (s.includes("python")) {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" className="shrink-0">
        <path fill="#3776AB" d="M12 2c-4 0-4 1.5-4 3v1.5h4v1H8c-2 0-2 3.5-2 3.5s2.5.2 2.5-1.5V9.5c0-1.5 1.5-2.5 3-2.5h3V5c0-2-1.5-3-3-3H12z"/>
        <path fill="#FFD343" d="M12 22c4 0 4-1.5 4-3v-1.5h-4v-1h4c2 0 2-3.5 2-3.5s-2.5-.2-2.5 1.5v1c0 1.5-1.5 2.5-3 2.5H8v2c0 2 1.5 3 3 3h1z"/>
      </svg>
    );
  }
  if (s.includes("c++")) {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" className="shrink-0">
        <rect width="24" height="24" rx="4" fill="#00599C" />
        <text x="3" y="15" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">C++</text>
      </svg>
    );
  }
  if (s.includes("react")) {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#61DAFB" strokeWidth="1.5" className="shrink-0">
        <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
      </svg>
    );
  }
  if (s.includes("next.js") || s.includes("next")) {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" className="shrink-0">
        <circle cx="12" cy="12" r="11" fill="black" stroke="white" strokeWidth="1" />
        <path d="M7 16V8h2l6 6.5V8h1.8v8h-2L8.8 9.5V16H7z" fill="white" />
      </svg>
    );
  }
  if (s.includes("tailwind")) {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#06B6D4" strokeWidth="1.8" className="shrink-0">
        <path d="M12 6c-3 0-4.5 1.5-4.5 4.5 1.5-1.5 3-1.5 4.5 0 1.5 1.5 1.5 3 0 4.5 3 0 4.5-1.5 4.5-4.5-1.5 1.5-3 1.5-4.5 0z" />
      </svg>
    );
  }
  if (s.includes("motion")) {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" className="shrink-0">
        <path d="M4 4h8l8 8-8 8H4z" fill="#FF00C8" />
        <path d="M12 12l8 8H12z" fill="#9F007C" />
      </svg>
    );
  }
  if (s.includes("webgl")) {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#990000" className="shrink-0">
        <circle cx="12" cy="12" r="10" />
        <text x="6" y="15" fill="white" fontSize="9" fontWeight="bold">3D</text>
      </svg>
    );
  }
  if (s.includes("node.js") || s.includes("node")) {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#339933" className="shrink-0">
        <path d="M12 2L4.5 6.3v8.7L12 19.3l7.5-4.3V6.3L12 2z M12 4.3l5.5 3.2v6l-5.5 3.2L6.5 13.5v-6L12 4.3z" />
      </svg>
    );
  }
  if (s.includes("grpc")) {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" className="shrink-0">
        <rect width="24" height="24" rx="4" fill="#8800FF" />
        <text x="3" y="15" fill="white" fontSize="8" fontWeight="bold">gRPC</text>
      </svg>
    );
  }
  if (s.includes("graphql")) {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#E10098" strokeWidth="1.5" className="shrink-0">
        <polygon points="12,2 20,7 20,17 12,22 4,17 4,7" />
        <circle cx="12" cy="12" r="2" fill="#E10098" />
      </svg>
    );
  }
  if (s.includes("websocket")) {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#00D8A5" strokeWidth="2" className="shrink-0">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#00D8A5" />
      </svg>
    );
  }
  if (s.includes("aws")) {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#FF9900" strokeWidth="2" className="shrink-0">
        <path d="M4 14c3 3 10 3 16 0" strokeLinecap="round" />
        <path d="M17 11l3 3-4 1" fill="#FF9900" />
      </svg>
    );
  }
  if (s.includes("docker")) {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#2496ED" className="shrink-0">
        <path d="M2 13h20v2H2z" />
        <rect x="5" y="8" width="3" height="3" rx="0.5" />
        <rect x="9" y="8" width="3" height="3" rx="0.5" />
        <rect x="13" y="8" width="3" height="3" rx="0.5" />
      </svg>
    );
  }
  if (s.includes("kubernetes")) {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#326CE5" className="shrink-0">
        <path d="M12 2L4 6v10l8 4 8-4V6l-8-4z" />
        <circle cx="12" cy="11" r="2.5" fill="white" />
      </svg>
    );
  }
  if (s.includes("postgres") || s === "sql") {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#336791" className="shrink-0">
        <path d="M12 2a9 9 0 0 0-9 9c0 4.2 3 7.8 7 8.8V17c0-2-1.5-3-3-3" />
        <circle cx="12" cy="11" r="5" fill="none" stroke="white" strokeWidth="1.5" />
      </svg>
    );
  }
  if (s.includes("mongo")) {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#47A248" className="shrink-0">
        <path d="M12 2c0 0-6 4-6 10s3 8 6 10c0 0 6-4 6-10S12 2 12 2z" />
      </svg>
    );
  }
  if (s.includes("git") && !s.includes("hub")) {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#F05032" strokeWidth="2" className="shrink-0">
        <circle cx="12" cy="7" r="2" fill="#F05032" />
        <circle cx="8" cy="15" r="2" fill="#F05032" />
        <circle cx="16" cy="15" r="2" fill="#F05032" />
        <path d="M12 9v3M8 15h8" />
      </svg>
    );
  }
  if (s.includes("github") || s.includes("actions")) {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#2088FF" className="shrink-0">
        <rect width="24" height="24" rx="4" />
        <circle cx="12" cy="12" r="4" fill="white" />
      </svg>
    );
  }
  if (s.includes("linux") || s.includes("unix")) {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" className="shrink-0">
        <path d="M12 2C8.5 2 7 4.5 7 7c0 1.5.5 3 1.5 4-1.5.5-3 2.5-3 5v2h13v-2c0-2.5-1.5-4.5-3-5 1-1 1.5-2.5 1.5-4 0-2.5-1.5-5-5-5z" fill="#555" />
        <circle cx="10" cy="7" r="1.2" fill="yellow" />
        <circle cx="14" cy="7" r="1.2" fill="yellow" />
      </svg>
    );
  }
  if (s.includes("html") || s.includes("css")) {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#E34F26" className="shrink-0">
        <path d="M2 2h20l-2 18-8 2-8-2L2 2z M12 4v7h5.5l-0.5 4.5-5 1.5v-13z" />
      </svg>
    );
  }
  
  // Default placeholder icon (Engine block gear in white)
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2" className="shrink-0">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" />
    </svg>
  );
}

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-black border-t border-border-color select-none">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-secondary-text">03 / Capabilities</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Technical Skills
          </h2>
          <p className="text-secondary-text text-sm md:text-base max-w-xl">
            Hover over the icons to inspect specific tools and technologies.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -4,
                borderColor: "#ffffff",
                transition: { duration: 0.3 }
              }}
              className="p-6 bg-card-bg border border-border-color rounded-xl flex flex-col justify-between"
            >
              <h3 className="text-lg font-bold text-white tracking-tight border-b border-border-color pb-3 mb-4">
                {category.title}
              </h3>
              
              {/* Grid of Interactive SVG Icons */}
              <div className="flex flex-wrap gap-4 pt-2">
                {category.skills.map((skill) => {
                  const isHovered = hoveredSkill === skill;
                  
                  return (
                    <div
                      key={skill}
                      className="relative"
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {/* Interactive Skill Icon wrapper */}
                      <motion.div
                        whileHover={shouldReduceMotion ? {} : { scale: 1.12 }}
                        className="w-10 h-10 rounded-xl bg-black border border-border-color flex items-center justify-center cursor-pointer shadow-md transition-colors hover:border-white/50"
                      >
                        {getSkillIcon(skill)}
                      </motion.div>

                      {/* Tooltip Card Pop-up */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.95 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5 z-30 flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-xl p-2.5 shadow-2xl min-w-[130px] pointer-events-none"
                          >
                            {/* SVG Icon on left */}
                            <div className="shrink-0 scale-90">
                              {getSkillIcon(skill)}
                            </div>
                            
                            {/* Text on right */}
                            <span className="text-xs font-mono font-medium text-white tracking-tight whitespace-nowrap">
                              {skill}
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
