"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Project, projects } from "@/data/portfolio";

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function FeaturedProjects({ onSelectProject }: FeaturedProjectsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const handleScroll = () => {
    if (scrollRef.current) {
      setShowLeftArrow(scrollRef.current.scrollLeft > 20);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      const targetScroll =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-black border-t border-border-color select-none">
      <div className="px-6 md:px-12 mb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-secondary-text">01 / Showcase</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-2">
          Featured Work
        </h2>
        <p className="text-secondary-text mt-2 text-sm md:text-base">
          Browse through some of my core software engineering and system architecture builds.
        </p>
      </div>

      {/* Horizontal scrolling viewport container */}
      <div className="relative group">
        {/* Left scroll control button */}
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-[40%] -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-20 bg-black/80 border-r border-y border-border-color hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-sm"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Horizontal lane */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-6 md:px-12 py-6 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="flex-shrink-0 w-[290px] md:w-[350px] aspect-[16/10] bg-card-bg border border-border-color rounded-xl overflow-hidden cursor-pointer relative group/card snap-start"
              whileHover={{
                scale: 1.05,
                y: -5,
                borderColor: "#ffffff",
                transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] }, // Netflix-like ease
              }}
              onClick={() => onSelectProject(project)}
            >
              {/* Internal card wrapper */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-black via-black/40 to-transparent">
                {/* Top sector: tags */}
                <div className="flex justify-between items-start opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-mono tracking-wider text-secondary-text uppercase px-2 py-0.5 border border-border-color bg-black/60 rounded">
                    Engine
                  </span>
                  <ArrowUpRight size={16} className="text-secondary-text group-hover/card:text-white transition-colors duration-300" />
                </div>

                {/* Bottom sector: details & text info */}
                <div className="space-y-2 mt-auto">
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  
                  {/* Expanded block on hover */}
                  <div className="max-h-0 opacity-0 overflow-hidden group-hover/card:max-h-40 group-hover/card:opacity-100 transition-all duration-500 ease-[0.25,1,0.5,1] space-y-3">
                    <p className="text-xs text-secondary-text line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Tech tag list */}
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-[9px] font-mono text-white/80 bg-white/10 px-2 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button className="text-[11px] font-mono tracking-widest text-white uppercase border-b border-white pb-0.5 hover:text-secondary-text hover:border-secondary-text transition-colors duration-300">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right scroll control button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-[40%] -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-20 bg-black/80 border-l border-y border-border-color hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-sm"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
