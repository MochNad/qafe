"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function MainContent({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setIsLoaded(true);
    setIsMobile(window.innerWidth < 768);
  }, []);

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.95,
      y: prefersReducedMotion ? 0 : 20,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.8,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  // Kurangi jumlah orbs untuk mobile
  const orbCount = isMobile ? 2 : 4;
  const particleCount = isMobile ? 3 : 6;

  return (
    <AnimatePresence mode="wait">
      <motion.main
        className="pt-14 relative"
        initial="initial"
        animate="animate"
        variants={pageVariants}
      >
        {/* Simplified Background - hanya jika tidak reduced motion */}
        {!prefersReducedMotion && (
          <motion.div
            className="fixed inset-0 pointer-events-none -z-10"
            animate={{
              background: [
                "radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.03) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 70%, hsl(var(--primary) / 0.05) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.03) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}

        {/* Reduced Floating Orbs */}
        {!prefersReducedMotion &&
          [...Array(orbCount)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed w-60 h-60 rounded-full pointer-events-none -z-10"
              style={{
                background: `radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)`,
                left: `${25 * i}%`,
                top: `${20 + i * 20}%`,
                filter: "blur(50px)",
              }}
              animate={{
                x: [0, 80, -40, 0],
                y: [0, -60, 60, 0],
                scale: [1, 1.2, 0.9, 1],
                opacity: [0.3, 0.5, 0.4, 0.3],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2,
              }}
            />
          ))}

        {/* Reduced Particles */}
        {!prefersReducedMotion &&
          !isMobile &&
          [...Array(particleCount)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="fixed bg-primary/20 rounded-full pointer-events-none -z-10"
              style={{
                width: "6px",
                height: "6px",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: "blur(0.5px)",
              }}
              animate={{
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, -Math.random() * 150 - 100, 0],
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}

        <motion.div
          className="container-wrapper"
          style={{
            maxWidth: "none",
            marginLeft: undefined,
            marginRight: undefined,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </motion.main>
    </AnimatePresence>
  );
}
