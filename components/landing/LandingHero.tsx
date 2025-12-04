"use client";

import { ArrowRight, Image as ImageIcon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export function LandingHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5, 0.8], [0, 0, -50]);

  // Parallax layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 300]);

  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 15 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    mouseX.set((e.clientX - rect.left - centerX) / 20);
    mouseY.set((e.clientY - rect.top - centerY) / 20);
  };

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center py-8 md:py-12 lg:py-16 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Grid Background */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 2px, transparent 2px),
            linear-gradient(90deg, hsl(var(--primary)) 2px, transparent 2px)
          `,
          backgroundSize: "100px 100px",
          y: y3,
        }}
      />

      {/* Left Side Particles */}
      <div className="absolute left-0 top-0 bottom-0 w-1/4 pointer-events-none">
        {[...Array(10)].map((_, i) => {
          const shapes = ["circle", "square", "triangle", "diamond"];
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
                    : undefined,
                filter: "blur(0.5px)",
              }}
              animate={{
                x: [0, Math.random() * 90 - 45, Math.random() * 70 - 35, 0],
                y: [0, -Math.random() * 120 - 60, -Math.random() * 180 - 90, 0],
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
                duration: 12 + Math.random() * 10,
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
        {[...Array(10)].map((_, i) => {
          const shapes = ["circle", "square", "triangle", "diamond"];
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
                    : undefined,
                filter: "blur(0.5px)",
              }}
              animate={{
                x: [0, Math.random() * -90 + 45, Math.random() * -70 + 35, 0],
                y: [0, -Math.random() * 120 - 60, -Math.random() * 180 - 90, 0],
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
                duration: 12 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          );
        })}
      </div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => {
        const size = Math.random() * 6 + 4;

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -Math.random() * 180 - 120, -Math.random() * 240 - 180],
              x: [0, Math.random() * 80 - 40, Math.random() * 100 - 50],
              scale: [1, 1.6, 0.6],
              opacity: [0.4, 0.7, 0],
            }}
            transition={{
              duration: 12 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeOut",
              delay: Math.random() * 5,
            }}
          >
            <Sparkles
              className="text-primary"
              style={{ width: `${size}px`, height: `${size}px` }}
            />
          </motion.div>
        );
      })}

      <motion.div
        className="max-w-7xl mx-auto px-4 w-full relative z-10"
        style={{ opacity, scale, y }}
      >
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {/* Left - Heading */}
          <motion.div
            className="space-y-8 text-center lg:text-left relative"
            style={{
              x: mouseXSpring,
              y: mouseYSpring,
            }}
          >
            {/* Glowing Orb */}
            <motion.div
              className="absolute -top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <motion.h1
                className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <motion.span
                  className="inline-block"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Pesan
                </motion.span>{" "}
                <motion.span
                  className="inline-block"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.25,
                  }}
                >
                  Praktis
                </motion.span>
                <span className="block text-primary mt-2 relative">
                  <motion.span
                    className="inline-block"
                    animate={{
                      backgroundImage: [
                        "linear-gradient(45deg, hsl(var(--primary)), hsl(var(--primary) / 0.8))",
                        "linear-gradient(90deg, hsl(var(--primary) / 0.8), hsl(var(--primary)))",
                        "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.8))",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    dengan QR Code
                  </motion.span>
                </span>
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              Duduk, pindai, pesan, bayar. Sesederhana itu.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
              >
                <Button
                  size="lg"
                  className="group text-base px-8 relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-primary-foreground/20"
                    initial={{ x: "-100%" }}
                    animate={{ x: isHovering ? "100%" : "-100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">Mulai</span>
                  <motion.div
                    animate={{
                      x: isHovering ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Hero Gallery */}
          <motion.div
            className="hidden lg:grid grid-cols-2 gap-4 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{
              x: useTransform(mouseXSpring, (value) => value * -0.5),
              y: useTransform(mouseYSpring, (value) => value * -0.5),
            }}
          >
            {/* Glow Effect */}
            <motion.div
              className="absolute -inset-10 bg-gradient-to-br from-primary/20 to-transparent blur-3xl pointer-events-none"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="col-span-2 relative aspect-video rounded-2xl overflow-hidden bg-muted border group"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              style={{ y: y1 }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ImageIcon className="h-24 w-24 text-muted-foreground/30" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="relative aspect-square rounded-2xl overflow-hidden bg-muted border group"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{ scale: 1.05, rotateZ: -5 }}
              style={{ y: y2 }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ImageIcon className="h-16 w-16 text-muted-foreground/30" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="relative aspect-square rounded-2xl overflow-hidden bg-muted border group"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{ scale: 1.05, rotateZ: 5 }}
              style={{ y: y3 }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <ImageIcon className="h-16 w-16 text-muted-foreground/30" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
