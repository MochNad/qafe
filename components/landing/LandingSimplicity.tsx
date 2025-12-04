"use client";

import { Zap } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";

export function LandingSimplicity() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.9, 1, 1, 0.9]
  );

  // Kurangi jumlah partikel drastis
  const particleCount = isMobile ? 0 : 3;

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden"
    >
      {/* Simplified background */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Minimal particles hanya untuk desktop */}
      {!prefersReducedMotion &&
        [...Array(particleCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary/25 rounded-full"
            style={{
              width: "6px",
              height: "6px",
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
              filter: "blur(0.5px)",
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}

      <div className="max-w-6xl mx-auto px-4">
        <motion.div className="text-center relative" style={{ opacity, scale }}>
          {/* Icon Container - simplified */}
          <motion.div
            className="inline-flex items-center justify-center mb-8 relative"
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: prefersReducedMotion ? 0.3 : 0.8,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            {/* Single ring only */}
            {!prefersReducedMotion && (
              <motion.div
                className="absolute rounded-full border-2 border-primary/20"
                style={{
                  width: "140px",
                  height: "140px",
                }}
                animate={{
                  rotate: [0, 360],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
              />
            )}

            <motion.div
              className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-primary via-primary to-primary/80 flex items-center justify-center shadow-2xl"
              whileHover={!prefersReducedMotion ? { scale: 1.1 } : undefined}
            >
              <Zap className="w-12 h-12 md:w-14 md:h-14 text-primary-foreground fill-primary-foreground" />
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: prefersReducedMotion ? 0.3 : 0.8,
              delay: prefersReducedMotion ? 0 : 0.2,
            }}
          >
            Sesederhana Itu
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: prefersReducedMotion ? 0.3 : 0.8,
              delay: prefersReducedMotion ? 0 : 0.3,
            }}
          >
            Tanpa ribet, tanpa antri
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className="mt-12 mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: prefersReducedMotion ? 0.3 : 1,
              delay: prefersReducedMotion ? 0 : 0.5,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
