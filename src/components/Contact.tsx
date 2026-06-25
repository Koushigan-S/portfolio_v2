"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";
import { contactInfo } from "@/data/portfolio";

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

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="py-24 px-6 md:px-12 bg-secondary-bg border-t border-border-color select-none">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-between min-h-[400px]">
        
        {/* Top spacer */}
        <div />

        {/* Big centered text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Let's build something
            <br />
            meaningful.
          </h2>
          <p className="text-secondary-text text-sm md:text-lg max-w-md mx-auto font-light">
            I am currently open to internship opportunities, research collaborations, and software engineering roles.
          </p>
        </motion.div>

        {/* Links and footer meta */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between border-t border-border-color/60 pt-12 mt-16 gap-6 text-secondary-text">
          <div className="flex items-center space-x-6">
            <a
              href={contactInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm font-medium"
              aria-label="GitHub link"
            >
              <GithubIcon />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href={contactInfo.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm font-medium"
              aria-label="LinkedIn link"
            >
              <LinkedinIcon />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href={`mailto:${contactInfo.emailAddress}`}
              className="hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm font-medium"
              aria-label="Email link"
            >
              <Mail size={18} />
              <span className="hidden sm:inline">Email</span>
            </a>
          </div>

          <div className="text-xs font-mono text-center md:text-right space-y-2">
            <p>© {new Date().getFullYear()} Koushigan S. Built with Next.js & Tailwind.</p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors duration-300 hover:underline text-[10px] uppercase tracking-wider"
            >
              Back to top
              <ArrowUp size={10} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
