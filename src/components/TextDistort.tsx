"use client";

import React, { useState } from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

interface TextDistortProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "p" | "a" | "div";
}

export default function TextDistort({ children, className = "", as = "span" }: TextDistortProps) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const Tag = as;

  if (shouldReduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  // Refraction offsets
  const leftLayer: Variants = {
    hover: {
      x: [-2, 1, 0],
      y: [1, -1, 0],
      opacity: [0.7, 0.4, 0],
      transition: { duration: 0.2, ease: "easeOut" }
    },
    initial: { x: 0, y: 0, opacity: 0 }
  };

  const rightLayer: Variants = {
    hover: {
      x: [2, -1, 0],
      y: [-1, 1, 0],
      opacity: [0.7, 0.4, 0],
      transition: { duration: 0.2, ease: "easeOut" }
    },
    initial: { x: 0, y: 0, opacity: 0 }
  };

  return (
    <Tag
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-block ${className}`}
    >
      {/* Red offset layer (mix-blend-screen blends it with cyan and base white) */}
      <motion.span
        variants={leftLayer}
        animate={isHovered ? "hover" : "initial"}
        className="absolute inset-0 text-[#ff0055] select-none pointer-events-none mix-blend-screen"
        aria-hidden="true"
      >
        {children}
      </motion.span>

      {/* Cyan offset layer */}
      <motion.span
        variants={rightLayer}
        animate={isHovered ? "hover" : "initial"}
        className="absolute inset-0 text-[#00ffff] select-none pointer-events-none mix-blend-screen"
        aria-hidden="true"
      >
        {children}
      </motion.span>

      {/* Base text */}
      <span className="relative z-10">{children}</span>
    </Tag>
  );
}
