"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import TextDistort from "./TextDistort";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1], // Apple ease
      },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 lg:px-24 bg-black overflow-hidden select-none">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl space-y-8"
      >
        <motion.p
          variants={fadeUpVariants}
          className="text-xs font-semibold tracking-widest text-secondary-text uppercase font-mono"
        >
          Nova — Systems Architecture
        </motion.p>
        
        {/* Typographic Mask Reveal */}
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] flex flex-col">
          <span className="block overflow-hidden py-1">
            <motion.span variants={lineVariants} className="block">
              <TextDistort>Building systems,</TextDistort>
            </motion.span>
          </span>
          <span className="block overflow-hidden py-1">
            <motion.span variants={lineVariants} className="block">
              <TextDistort>products, and ideas</TextDistort>
            </motion.span>
          </span>
          <span className="block overflow-hidden py-1 text-secondary-text">
            <motion.span variants={lineVariants} className="block text-secondary-text">
              <TextDistort className="text-secondary-text">for the future.</TextDistort>
            </motion.span>
          </span>
        </h1>

        <motion.div variants={fadeUpVariants} className="max-w-xl space-y-4">
          <p className="text-base md:text-xl text-secondary-text leading-relaxed font-light">
            Computer Science Engineering Student.
            <br />
            Focused on software, cloud, systems, and product innovation.
          </p>
        </motion.div>

        {/* Tactile Button Actions */}
        <motion.div variants={fadeUpVariants} className="flex flex-wrap gap-4 pt-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04, backgroundColor: "#f4f4f5" }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="px-6 py-3 rounded-full bg-white text-black font-medium tracking-tight hover:shadow-xl hover:shadow-white/5 active:scale-95 transition-all"
          >
            View Projects
          </motion.a>
          
          <motion.a
            href="#resume"
            whileHover={{ scale: 1.04, borderColor: "#ffffff", color: "#ffffff" }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="px-6 py-3 rounded-full border border-border-color bg-black text-secondary-text font-medium tracking-tight active:scale-95 transition-all"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
