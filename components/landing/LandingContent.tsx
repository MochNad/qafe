"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function MainContent({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.95,
      y: 20,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.main
        className="pt-14 relative overflow-hidden"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className="fixed inset-0 pointer-events-none -z-10"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, hsl(var(--primary) / 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, hsl(var(--primary) / 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.05) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="fixed w-80 h-80 rounded-full pointer-events-none -z-10"
            style={{
              background: `radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)`,
              left: `${20 * i}%`,
              top: `${15 + i * 12}%`,
              filter: "blur(70px)",
            }}
            animate={{
              x: [0, 120, -60, 0],
              y: [0, -100, 100, 0],
              scale: [1, 1.3, 0.9, 1],
              opacity: [0.4, 0.7, 0.5, 0.4],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}

        {/* Additional Floating Particles */}
        {[...Array(10)].map((_, i) => {
          const shapes = ["circle", "square", "triangle", "diamond"];
          const shape = shapes[i % shapes.length];
          const size = Math.random() * 7 + 5;

          return (
            <motion.div
              key={`particle-${i}`}
              className={`fixed bg-primary/25 pointer-events-none -z-10 ${
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
                    : undefined,
                filter: "blur(0.8px)",
              }}
              animate={{
                x: [
                  0,
                  Math.random() * 140 - 70,
                  Math.random() * 100 - 50,
                  Math.random() * 80 - 40,
                  0,
                ],
                y: [
                  0,
                  Math.random() * -180 - 120,
                  Math.random() * -240 - 180,
                  Math.random() * -160 - 100,
                  0,
                ],
                scale: [
                  1,
                  Math.random() * 2.2 + 1.3,
                  Math.random() * 1.8 + 1.2,
                  1.5,
                  1,
                ],
                opacity: [0.2, 0.6, 0.45, 0.3, 0.2],
                rotate:
                  shape !== "circle"
                    ? [0, Math.random() * 200, Math.random() * 360]
                    : undefined,
              }}
              transition={{
                duration: 18 + Math.random() * 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 8,
              }}
            />
          );
        })}

        <motion.div
          className="container-wrapper"
          style={{
            maxWidth: "none",
            marginLeft: undefined,
            marginRight: undefined,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </motion.main>
    </AnimatePresence>
  );
}
