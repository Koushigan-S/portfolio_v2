"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectShowcase from "@/components/ProjectShowcase";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import ResumeSection from "@/components/ResumeSection";
import Contact from "@/components/Contact";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import AmbientBackground from "@/components/AmbientBackground";
import { Project } from "@/data/portfolio";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* Immersive Preloader Shield */}
      <AnimatePresence mode="wait">
        {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}
      </AnimatePresence>

      {/* Desktop-only custom follower cursor */}
      <CustomCursor />

      {/* Thin reading progress indicator */}
      <ScrollProgress />

      {/* Soft drifting ambient backgrounds */}
      <AmbientBackground />

      {/* Main Page Layout Content (animates in when loaded) */}
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full flex flex-col relative z-10"
          >
            {/* Floating Apple-style Navbar */}
            <Navbar />

            <main className="flex-1 w-full flex flex-col">
              {/* Sections */}
              <Hero />
              
              {/* 3D project carousel row */}
              <FeaturedProjects onSelectProject={setSelectedProject} />
              
              {/* Apple-style details overlay */}
              <ProjectShowcase
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />

              <About />
              <Skills />
              <Education />
              <ResumeSection />
              <Contact />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
