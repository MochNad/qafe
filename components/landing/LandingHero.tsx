"use client";

import {
  ArrowRight,
  Image as ImageIcon,
  Sparkles,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export function LandingHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Kurangi partikel drastis
  const particleCount = isMobile ? 0 : 4;

  const scrollToFlow = () => {
    const flowSection = document.getElementById("cara-kerja");
    if (flowSection) {
      flowSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center py-8 md:py-12 lg:py-16 relative overflow-hidden"
    >
      {/* Simplified Grid Background */}
      {!prefersReducedMotion && (
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 2px, transparent 2px),
              linear-gradient(90deg, hsl(var(--primary)) 2px, transparent 2px)`,
            backgroundSize: "100px 100px",
          }}
        />
      )}

      {/* Minimal particles untuk desktop saja */}
      {!prefersReducedMotion &&
        [...Array(particleCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 15}%`,
            }}
            animate={{
              y: [0, -120, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          >
            <Sparkles
              className="text-primary"
              style={{ width: "6px", height: "6px" }}
            />
          </motion.div>
        ))}

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left - Heading */}
          <div className="space-y-8 text-center lg:text-left px-4 sm:px-6 lg:px-0">
            <div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="inline-block">Pesan</span>{" "}
                <span className="inline-block">Praktis</span>
                <span className="block text-primary mt-2">dengan QR Code</span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed">
              Duduk, pindai, pesan, bayar. Sesederhana itu.
            </p>

            {/* Button Group */}
            <div className="flex flex-row gap-3 sm:gap-4 justify-center lg:justify-start flex-wrap">
              <motion.div
                whileHover={!prefersReducedMotion ? { scale: 1.05 } : undefined}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
              >
                <Button
                  size="lg"
                  className="group text-base px-6 sm:px-8 relative overflow-hidden"
                  asChild
                >
                  <Link href="/menu">
                    <span className="relative z-10">Mulai</span>
                    <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={!prefersReducedMotion ? { scale: 1.05 } : undefined}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToFlow}
                  className="text-base px-6 sm:px-8 group"
                >
                  <Lightbulb className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Panduan
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Right - Hero Gallery - simplified */}
          <motion.div
            className="hidden lg:grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="col-span-2 relative aspect-video rounded-2xl overflow-hidden bg-muted border"
              whileHover={!prefersReducedMotion ? { scale: 1.02 } : undefined}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon className="h-24 w-24 text-muted-foreground/30" />
              </div>
            </motion.div>

            <motion.div
              className="relative aspect-square rounded-2xl overflow-hidden bg-muted border"
              whileHover={!prefersReducedMotion ? { scale: 1.05 } : undefined}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon className="h-16 w-16 text-muted-foreground/30" />
              </div>
            </motion.div>

            <motion.div
              className="relative aspect-square rounded-2xl overflow-hidden bg-muted border"
              whileHover={!prefersReducedMotion ? { scale: 1.05 } : undefined}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon className="h-16 w-16 text-muted-foreground/30" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
