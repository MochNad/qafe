"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { QrCode, Github } from "lucide-react";
import { useRef } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <motion.footer
      ref={footerRef}
      className="bg-background relative overflow-hidden"
      style={{ opacity, y }}
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/20 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: "50%",
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          className="flex h-14 items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded blur-lg"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <QrCode className="h-5 w-5 text-primary relative z-10" />
              </motion.div>
              <motion.span
                className="font-bold text-lg"
                whileHover={{ letterSpacing: "0.05em" }}
                transition={{ duration: 0.3 }}
              >
                Qafe
              </motion.span>
            </Link>
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-sm text-muted-foreground hidden sm:block"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              color: "hsl(var(--primary))",
            }}
            transition={{ duration: 0.3 }}
          >
            © {currentYear} Qafe. All rights reserved.
          </motion.p>

          {/* GitHub */}
          <motion.div variants={itemVariants}>
            <motion.a
              href="#"
              aria-label="GitHub"
              className="w-8 h-8 rounded-full border flex items-center justify-center relative overflow-hidden group"
              whileHover={{ scale: 1.15, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
              }}
            >
              {/* Ripple Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-primary rounded-full"
                animate={{
                  scale: [1, 1.5, 2],
                  opacity: [0.5, 0.2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />

              <Github className="h-4 w-4 relative z-10 transition-colors duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
