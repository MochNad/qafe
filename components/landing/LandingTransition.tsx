"use client";

import { motion, useReducedMotion } from "framer-motion";

export function LandingTransition() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Simplified gradient background */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 30% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      <div className="relative max-w-4xl mx-auto px-4">
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: prefersReducedMotion ? 0.5 : 1.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: prefersReducedMotion ? 0.3 : 0.8,
            delay: prefersReducedMotion ? 0 : 0.3,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          <div className="w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50" />
          {!prefersReducedMotion && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/30"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
