"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Project, projects } from "@/data/portfolio";

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function FeaturedProjects({ onSelectProject }: FeaturedProjectsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const wheelTimeout = useRef<NodeJS.Timeout | null>(null);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Mouse wheel scroll navigation
  const handleWheel = (e: React.WheelEvent) => {
    if (shouldReduceMotion) return;
    
    if (Math.abs(e.deltaY) > 25 || Math.abs(e.deltaX) > 25) {
      e.preventDefault();
      
      if (wheelTimeout.current) return;
      
      if (e.deltaY > 0 || e.deltaX > 0) {
        nextProject();
      } else {
        prevProject();
      }

      wheelTimeout.current = setTimeout(() => {
        wheelTimeout.current = null;
      }, 400);
    }
  };

  useEffect(() => {
    return () => {
      if (wheelTimeout.current) clearTimeout(wheelTimeout.current);
    };
  }, []);

  return (
    <section id="projects" className="py-24 bg-black border-t border-border-color select-none overflow-hidden relative">
      <div className="px-6 md:px-12 mb-12 max-w-6xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-secondary-text">01 / Products</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-2">
          Featured Work
        </h2>
        <p className="text-secondary-text mt-2 text-sm md:text-base max-w-md">
          Hover on side projects to rotate the deck. Click the active card to launch the product showcase.
        </p>
      </div>

      {/* 3D Carousel Stage */}
      <div
        onWheel={handleWheel}
        className="w-full flex flex-col items-center justify-center py-8 relative"
      >
        {/* Navigation Arrows */}
        <div className="absolute inset-x-6 md:inset-x-12 top-1/2 -translate-y-1/2 flex justify-between z-20 pointer-events-none">
          <button
            onClick={prevProject}
            className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full border border-border-color bg-black/60 hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm shadow-xl active:scale-90"
            aria-label="Previous Project"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextProject}
            className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full border border-border-color bg-black/60 hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm shadow-xl active:scale-90"
            aria-label="Next Project"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dynamic Swipe/Hover Area */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x > 80) prevProject();
            else if (info.offset.x < -80) nextProject();
          }}
          className="relative w-full max-w-[320px] md:max-w-[450px] aspect-[16/10] flex items-center justify-center cursor-grab active:cursor-grabbing"
          style={{
            perspective: 1200,
            transformStyle: "preserve-3d",
          }}
        >
          {projects.map((project, index) => {
            const offset = index - activeIndex;
            const isCenter = offset === 0;
            
            // Calculate 3D transformation metrics based on index offsets
            const rotateYValue = shouldReduceMotion ? 0 : offset * -22;
            const zValue = shouldReduceMotion ? 0 : Math.abs(offset) * -160;
            const scaleValue = 1 - Math.min(Math.abs(offset) * 0.15, 0.3);
            const opacityValue = 1 - Math.min(Math.abs(offset) * 0.5, 0.75);
            
            // horizontal spacing factor
            const xOffset = shouldReduceMotion
              ? offset * 320
              : offset * (typeof window !== "undefined" && window.innerWidth < 768 ? 90 : 150);

            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => {
                  setActiveIndex(index);
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  x: xOffset,
                  scale: scaleValue,
                  rotateY: rotateYValue,
                  z: zValue,
                  opacity: opacityValue,
                  zIndex: 10 - Math.abs(offset),
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 26,
                  mass: 0.6,
                }}
                className={`absolute w-full h-full bg-card-bg border rounded-2xl overflow-hidden p-6 flex flex-col justify-between select-none ${
                  isCenter ? "border-white shadow-[0_10px_30px_rgba(255,255,255,0.05)]" : "border-border-color"
                }`}
                onClick={() => {
                  if (isCenter) {
                    onSelectProject(project);
                  } else {
                    setActiveIndex(index);
                  }
                }}
              >
                {/* Header info */}
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono tracking-widest text-secondary-text uppercase px-2 py-0.5 border border-border-color bg-black/60 rounded">
                    Engine {index + 1}
                  </span>
                  
                  {isCenter && hoveredIndex === index && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="flex items-center gap-1.5 text-xs text-white bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/10"
                    >
                      <span>Explore</span>
                      <ArrowUpRight size={12} />
                    </motion.div>
                  )}
                </div>

                {/* Title and details wrapper */}
                <div className="space-y-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  
                  <AnimatePresence>
                    {hoveredIndex === index && isCenter && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden space-y-3 pt-2"
                      >
                        <p className="text-xs text-secondary-text leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="text-[9px] font-mono text-white/70 bg-white/5 border border-white/5 px-2 py-0.5 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-2 mt-8 z-20 relative">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              activeIndex === index ? "w-8 bg-white" : "w-2 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
