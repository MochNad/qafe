"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center relative overflow-hidden">
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
      <div className="absolute left-0 top-0 bottom-0 w-1/4 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => {
          const shapes = ["circle", "square", "triangle", "diamond"];
          const shape = shapes[i % shapes.length];
          const size = Math.random() * 8 + 6;

          return (
            <motion.div
              key={`left-${i}`}
              className={`absolute bg-primary/30 ${
                shape === "circle" ? "rounded-full" : "rounded-lg"
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 100}%`,
                clipPath:
                  shape === "triangle"
                    ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                    : shape === "diamond"
                    ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                    : undefined,
                filter: "blur(0.5px)",
              }}
              animate={{
                x: [0, Math.random() * 40 - 20, Math.random() * 30, 0],
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
      <div className="absolute right-0 top-0 bottom-0 w-1/4 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => {
          const shapes = ["circle", "square", "triangle", "diamond"];
          const shape = shapes[i % shapes.length];
          const size = Math.random() * 8 + 6;

          return (
            <motion.div
              key={`right-${i}`}
              className={`absolute bg-primary/30 ${
                shape === "circle" ? "rounded-full" : "rounded-lg"
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${20 + Math.random() * 80}%`,
                top: `${Math.random() * 100}%`,
                clipPath:
                  shape === "triangle"
                    ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                    : shape === "diamond"
                    ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                    : undefined,
                filter: "blur(0.5px)",
              }}
              animate={{
                x: [0, Math.random() * -40 + 20, Math.random() * -30, 0],
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

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Icon Container */}
          <motion.div
            className="inline-flex items-center justify-center mb-8 relative"
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
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
              <AlertCircle className="w-12 h-12 md:w-14 md:h-14 text-primary-foreground" />
            </motion.div>
          </motion.div>

          {/* 404 Number */}
          <motion.h1
            className="text-8xl sm:text-9xl md:text-[12rem] font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            404
          </motion.h1>

          {/* Title */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Halaman Tidak Ditemukan
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Maaf, halaman yang Anda cari tidak dapat ditemukan.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Home className="w-5 h-5" />
              Kembali ke Beranda
            </Link>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            className="mt-12 mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full relative"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
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
    </div>
  );
}
