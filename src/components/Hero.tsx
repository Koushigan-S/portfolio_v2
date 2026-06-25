"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Apple cubic bezier
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
          variants={itemVariants}
          className="text-sm font-semibold tracking-widest text-secondary-text uppercase"
        >
          Nova — Portfolio
        </motion.p>
        
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
        >
          Building systems,
          <br />
          products, and ideas
          <br />
          for the future.
        </motion.h1>

        <motion.div variants={itemVariants} className="max-w-2xl space-y-4">
          <p className="text-lg md:text-2xl text-secondary-text leading-relaxed">
            Computer Science Engineering Student.
            <br />
            Focused on software, cloud, systems, and innovation.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 active:scale-95 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#resume"
            className="px-6 py-3 rounded-full border border-border-color bg-black text-white font-medium hover:bg-white hover:text-black hover:border-white active:scale-95 transition-all duration-300"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
