"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { QrCode, Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.footer
      className="bg-background relative py-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Simplified background */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 0% 50%, hsl(var(--primary) / 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 50%, hsl(var(--primary) / 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 50%, hsl(var(--primary) / 0.05) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex h-14 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={!prefersReducedMotion ? { scale: 1.1 } : undefined}
              transition={{ duration: 0.3 }}
            >
              <QrCode className="h-5 w-5 text-primary" />
            </motion.div>
            <span className="font-bold text-lg">Qafe</span>
          </Link>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground hidden sm:block">
            © {currentYear} Qafe. All rights reserved.
          </p>

          {/* GitHub */}
          <motion.a
            href="#"
            aria-label="GitHub"
            className="w-8 h-8 rounded-full border flex items-center justify-center"
            whileHover={!prefersReducedMotion ? { scale: 1.15 } : undefined}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Github className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
