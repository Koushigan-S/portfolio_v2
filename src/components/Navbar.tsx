"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import TextDistort from "./TextDistort";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  const lastScrollY = useRef(0);
  const shouldReduceMotion = useReducedMotion();

  const navItems = [
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Resume", href: "#resume", id: "resume" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  // Scroll listener for hide/show and translucency
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Make translucent if scrolled past 50px
      setIsScrolled(currentScrollY > 50);

      if (shouldReduceMotion) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldReduceMotion]);

  // Intersection Observer for tracking active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // triggers when section is in the center focal area
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-300 ${
            isScrolled
              ? "backdrop-blur-md bg-black/75 border-b border-border-color py-3"
              : "bg-transparent py-5"
          }`}
        >
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold tracking-tight text-white select-none">
              <TextDistort as="span">NOVA</TextDistort>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`text-xs uppercase tracking-widest font-mono relative py-1.5 transition-colors duration-300 ${
                    isActive ? "text-white font-medium" : "text-secondary-text hover:text-white"
                  }`}
                >
                  <TextDistort as="span">{item.label}</TextDistort>
                  
                  {/* Underline indicators */}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {!isActive && hoveredItem === item.id && (
                    <motion.div
                      layoutId="hoverUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/40"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center md:hidden">
            <a
              href="#contact"
              className="text-xs uppercase tracking-wider font-mono px-4 py-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Let's Build
            </a>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
