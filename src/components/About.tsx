"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-16 lg:px-24 bg-secondary-bg border-t border-border-color flex flex-col justify-center select-none">
      <div className="max-w-4xl space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-secondary-text">02 / About</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            I'm Koushigan S.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <p className="text-2xl md:text-4xl text-white font-light leading-[1.3] tracking-tight">
            I enjoy building software systems,
            <br />
            exploring cloud technologies,
            <br />
            and transforming ideas into products.
          </p>
          
          <p className="text-lg md:text-xl text-secondary-text max-w-2xl leading-relaxed">
            I aim to create technology that solves real-world problems. By focusing on minimal overhead, robust system design, and clean architecture, I construct solutions that scale efficiently.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
