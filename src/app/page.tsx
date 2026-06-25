"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectShowcase from "@/components/ProjectShowcase";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import ResumeSection from "@/components/ResumeSection";
import Contact from "@/components/Contact";
import { Project } from "@/data/portfolio";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      {/* Floating navigation header */}
      <Navbar />

      <main className="flex-1 w-full flex flex-col">
        {/* Viewport sections */}
        <Hero />
        
        {/* Netflix carousel work row */}
        <FeaturedProjects onSelectProject={setSelectedProject} />
        
        {/* Apple-style immersive details overlay */}
        <ProjectShowcase
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* Minimal personal and skills categories */}
        <About />
        <Skills />

        {/* Credentials, Education milestone, and Resume */}
        <Education />
        <ResumeSection />

        {/* Recruiter contact footer */}
        <Contact />
      </main>
    </>
  );
}
