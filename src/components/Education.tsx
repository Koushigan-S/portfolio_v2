"use client";

import React from "react";
import { motion } from "framer-motion";
import TextDistort from "./TextDistort";
import { education } from "@/data/portfolio";
import { GraduationCap, Award, Compass, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 bg-secondary-bg border-t border-border-color select-none">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-secondary-text">04 / Journey</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans">
            <TextDistort>Education</TextDistort>
          </h2>
        </motion.div>

        {/* Timeline container */}
        <div className="relative border-l border-border-color pl-6 ml-4 md:ml-8 space-y-12">
          
          {/* Timeline Node 1: Degree & Institution */}
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative space-y-3"
          >
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[31px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-black border border-white text-white">
              <GraduationCap size={12} />
            </div>

            <div>
              <span className="text-xs font-mono text-secondary-text">{education.period}</span>
              <h3 className="text-xl font-bold text-white tracking-tight mt-1">{education.degree}</h3>
              <p className="text-sm font-mono text-secondary-text mt-0.5">{education.institution}</p>
            </div>
          </motion.div>

          {/* Timeline Node 2: Coursework */}
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative space-y-3"
          >
            <div className="absolute -left-[31px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-black border border-border-color text-secondary-text">
              <BookOpen size={12} />
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-bold text-white tracking-tight">Core Coursework</h4>
              <div className="flex flex-wrap gap-2 pt-1">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 rounded-full border border-border-color text-xs text-secondary-text bg-black/40"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline Node 3: Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative space-y-3"
          >
            <div className="absolute -left-[31px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-black border border-border-color text-secondary-text">
              <Award size={12} />
            </div>

            <div className="space-y-3">
              <h4 className="text-base font-bold text-white tracking-tight">Key Achievements</h4>
              <ul className="space-y-2">
                {education.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm text-secondary-text flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Timeline Node 4: Future Goals */}
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative space-y-3"
          >
            <div className="absolute -left-[31px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-black border border-border-color text-secondary-text">
              <Compass size={12} />
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-bold text-white tracking-tight">Future Goals</h4>
              <p className="text-sm text-secondary-text leading-relaxed max-w-xl">
                {education.futureGoals}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
