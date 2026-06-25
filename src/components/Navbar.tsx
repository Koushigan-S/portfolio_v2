"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-black/60 border-b border-border-color"
    >
      <div className="flex items-center">
        <a href="#" className="text-xl font-bold tracking-tight text-white select-none">
          NOVA
        </a>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm font-medium text-secondary-text hover:text-white transition-colors duration-300 relative py-1"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center md:hidden">
        <a
          href="#contact"
          className="text-sm font-medium px-4 py-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          Let's Build
        </a>
      </div>
    </motion.header>
  );
}
