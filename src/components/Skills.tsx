"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-black border-t border-border-color select-none">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-secondary-text">03 / Capabilities</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Technical Skills
          </h2>
          <p className="text-secondary-text text-sm md:text-base max-w-xl">
            A structured index of technologies, languages, and methodologies I work with.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -4,
                borderColor: "#ffffff",
                transition: { duration: 0.3 }
              }}
              className="p-6 bg-card-bg border border-border-color rounded-xl flex flex-col justify-between"
            >
              <h3 className="text-lg font-bold text-white tracking-tight border-b border-border-color pb-3 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full border border-border-color/60 text-xs text-secondary-text bg-black"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
