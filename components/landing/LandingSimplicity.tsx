"use client";

import { Zap, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function LandingSimplicity() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.8]
  );

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden"
    >
      {/* Animated Radial Gradient Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 60%, hsl(var(--primary) / 0.2) 0%, transparent 60%)",
            "radial-gradient(circle at 60% 40%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Left Side Particles */}
      <div className="absolute left-0 top-0 bottom-0 w-1/4 pointer-events-none">
        {[...Array(8)].map((_, i) => {
          const shapes = ["circle", "square", "triangle", "diamond", "star"];
          const shape = shapes[i % shapes.length];
          const size = Math.random() * 8 + 6;

          return (
            <motion.div
              key={`left-${i}`}
              className={`absolute bg-primary/30 ${
                shape === "circle"
                  ? "rounded-full"
                  : shape === "square"
                  ? "rounded-lg"
                  : "rounded-md"
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                clipPath:
                  shape === "triangle"
                    ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                    : shape === "diamond"
                    ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                    : shape === "star"
                    ? "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
                    : undefined,
                filter: "blur(0.5px)",
              }}
              animate={{
                x: [0, Math.random() * 80 - 40, Math.random() * 60, 0],
                y: [
                  0,
                  -Math.random() * 120 - 60,
                  -Math.random() * 180 - 100,
                  0,
                ],
                scale: [
                  1,
                  Math.random() * 1.8 + 1.2,
                  Math.random() * 1.5 + 1,
                  1,
                ],
                opacity: [0.3, 0.7, 0.5, 0.3],
                rotate:
                  shape !== "circle"
                    ? [0, Math.random() * 180, Math.random() * 360]
                    : undefined,
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          );
        })}
      </div>

      {/* Right Side Particles */}
      <div className="absolute right-0 top-0 bottom-0 w-1/4 pointer-events-none">
        {[...Array(8)].map((_, i) => {
          const shapes = ["circle", "square", "triangle", "diamond", "star"];
          const shape = shapes[i % shapes.length];
          const size = Math.random() * 8 + 6;

          return (
            <motion.div
              key={`right-${i}`}
              className={`absolute bg-primary/30 ${
                shape === "circle"
                  ? "rounded-full"
                  : shape === "square"
                  ? "rounded-lg"
                  : "rounded-md"
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                clipPath:
                  shape === "triangle"
                    ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                    : shape === "diamond"
                    ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                    : shape === "star"
                    ? "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
                    : undefined,
                filter: "blur(0.5px)",
              }}
              animate={{
                x: [0, Math.random() * -80 + 40, Math.random() * -60, 0],
                y: [
                  0,
                  -Math.random() * 120 - 60,
                  -Math.random() * 180 - 100,
                  0,
                ],
                scale: [
                  1,
                  Math.random() * 1.8 + 1.2,
                  Math.random() * 1.5 + 1,
                  1,
                ],
                opacity: [0.3, 0.7, 0.5, 0.3],
                rotate:
                  shape !== "circle"
                    ? [0, -Math.random() * 180, -Math.random() * 360]
                    : undefined,
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          );
        })}
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <motion.div className="text-center relative" style={{ opacity, scale }}>
          {/* Icon Container */}
          <motion.div
            className="inline-flex items-center justify-center mb-8 relative"
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            {/* Outer Glow Rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border-2 border-primary/20"
                style={{
                  width: `${120 + i * 40}px`,
                  height: `${120 + i * 40}px`,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  rotate: {
                    duration: 15 + i * 5,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  scale: {
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />
            ))}

            {/* Pulse Effect */}
            <motion.div
              className="absolute w-32 h-32 rounded-full bg-primary/20 blur-3xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Main Icon Circle */}
            <motion.div
              className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-primary via-primary to-primary/80 flex items-center justify-center shadow-2xl"
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
                transition: {
                  duration: 0.6,
                  ease: [0.34, 1.56, 0.64, 1],
                },
              }}
              animate={{
                boxShadow: [
                  "0 25px 50px -12px hsl(var(--primary) / 0.4)",
                  "0 25px 60px -12px hsl(var(--primary) / 0.6)",
                  "0 25px 50px -12px hsl(var(--primary) / 0.4)",
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              {/* Rotating Border */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent, hsl(var(--primary-foreground) / 0.3), transparent)",
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Icon */}
              <motion.div
                className="relative z-10"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Zap className="w-12 h-12 md:w-14 md:h-14 text-primary-foreground fill-primary-foreground" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-primary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Sesederhana Itu
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Tanpa ribet, tanpa antri
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className="mt-12 mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full relative"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <motion.div
              className="absolute inset-0 bg-primary blur-xl"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
