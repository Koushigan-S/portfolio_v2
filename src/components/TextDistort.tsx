"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface TextDistortProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "p" | "a" | "div";
}

export default function TextDistort({ children, className = "", as = "span" }: TextDistortProps) {
  const shouldReduceMotion = useReducedMotion();
  const Tag = as;
  
  // Refs for tracking each individual letter's layout bounding box
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  // Initialize refs array length
  const letters = children.split("");
  
  useEffect(() => {
    letterRefs.current = letterRefs.current.slice(0, letters.length);
  }, [letters.length]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  if (shouldReduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-flex flex-wrap relative ${className}`}
    >
      {letters.map((char, index) => {
        // Calculate interactive transform metrics based on distance to cursor
        let translateY = 0;
        let scaleY = 1;
        let scaleX = 1;

        if (mousePos && letterRefs.current[index]) {
          const rect = letterRefs.current[index]!.getBoundingClientRect();
          const charCenterX = rect.left + rect.width / 2;
          const charCenterY = rect.top + rect.height / 2;
          
          // Euclidean distance to cursor
          const distance = Math.sqrt(
            Math.pow(mousePos.x - charCenterX, 2) + 
            Math.pow(mousePos.y - charCenterY, 2)
          );

          const maxDistance = 140; // range of the distortion wave
          if (distance < maxDistance) {
            // Normalized factor from 0 (at edge) to 1 (directly under cursor)
            const factor = 1 - distance / maxDistance;
            // Smooth curve mapping (cosine transition)
            const smoothFactor = Math.sin(factor * Math.PI / 2);

            // Bends character upwards and stretches it vertically
            translateY = -24 * smoothFactor;
            scaleY = 1 + 0.45 * smoothFactor;
            scaleX = 1 - 0.18 * smoothFactor;
          }
        }

        // Handle space rendering to prevent collapsing
        if (char === " ") {
          return (
            <span
              key={index}
              ref={(el) => { letterRefs.current[index] = el; }}
              className="inline-block"
              style={{ width: "0.25em" }}
            >
              &nbsp;
            </span>
          );
        }

        return (
          <motion.span
            key={index}
            ref={(el) => { letterRefs.current[index] = el; }}
            animate={{
              y: translateY,
              scaleY: scaleY,
              scaleX: scaleX,
            }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 22,
              mass: 0.5
            }}
            className="inline-block origin-bottom select-none cursor-default text-current"
          >
            {char}
          </motion.span>
        );
      })}
    </Tag>
  );
}
