"use client";

import {
  Scan,
  ShoppingCart,
  CreditCard,
  Coffee,
  MapPin,
  ArrowDown,
  Sparkles,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    id: 1,
    icon: MapPin,
    title: "Pilih Meja",
    description: "Duduk di meja dengan QR code",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    icon: Scan,
    title: "Scan QR",
    description: "Buka kamera dan scan QR code",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    icon: ShoppingCart,
    title: "Pilih Menu",
    description: "Pilih menu yang Anda inginkan",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    icon: CreditCard,
    title: "Bayar",
    description: "Tunjukkan QR ke kasir untuk bayar",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    icon: Coffee,
    title: "Nikmati",
    description: "Pesanan diantar ke meja Anda",
    color: "from-amber-500 to-yellow-500",
  },
];

export function LandingFlow() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: containerProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-20 lg:py-24 relative overflow-hidden"
    >
      {/* Animated Background Grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Left Side Particles */}
      <div className="absolute left-0 top-0 bottom-0 w-1/6 pointer-events-none">
        {[...Array(12)].map((_, i) => {
          const shapes = ["circle", "square", "triangle", "diamond", "hexagon"];
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
                    : shape === "hexagon"
                    ? "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)"
                    : undefined,
                filter: "blur(0.5px)",
              }}
              animate={{
                x: [
                  0,
                  Math.random() * 80 - 40,
                  Math.random() * 100,
                  Math.random() * 50,
                  0,
                ],
                y: [
                  0,
                  -Math.random() * 100 - 50,
                  -Math.random() * 150 - 80,
                  -Math.random() * 120,
                  0,
                ],
                scale: [
                  1,
                  Math.random() * 2 + 1.2,
                  Math.random() * 1.8 + 1,
                  1.3,
                  1,
                ],
                opacity: [0.25, 0.6, 0.45, 0.35, 0.25],
                rotate:
                  shape !== "circle"
                    ? [
                        0,
                        Math.random() * 120,
                        Math.random() * 300,
                        Math.random() * 240,
                        360,
                      ]
                    : undefined,
              }}
              transition={{
                duration: 12 + Math.random() * 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 6,
              }}
            />
          );
        })}
      </div>

      {/* Right Side Particles */}
      <div className="absolute right-0 top-0 bottom-0 w-1/6 pointer-events-none">
        {[...Array(12)].map((_, i) => {
          const shapes = ["circle", "square", "triangle", "diamond", "hexagon"];
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
                    : shape === "hexagon"
                    ? "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)"
                    : undefined,
                filter: "blur(0.5px)",
              }}
              animate={{
                x: [
                  0,
                  Math.random() * -80 + 40,
                  Math.random() * -100,
                  Math.random() * -50,
                  0,
                ],
                y: [
                  0,
                  -Math.random() * 100 - 50,
                  -Math.random() * 150 - 80,
                  -Math.random() * 120,
                  0,
                ],
                scale: [
                  1,
                  Math.random() * 2 + 1.2,
                  Math.random() * 1.8 + 1,
                  1.3,
                  1,
                ],
                opacity: [0.25, 0.6, 0.45, 0.35, 0.25],
                rotate:
                  shape !== "circle"
                    ? [
                        0,
                        -Math.random() * 120,
                        -Math.random() * 300,
                        -Math.random() * 240,
                        -360,
                      ]
                    : undefined,
              }}
              transition={{
                duration: 12 + Math.random() * 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 6,
              }}
            />
          );
        })}
      </div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => {
        const shapes = ["circle", "square", "triangle", "diamond"];
        const shape = shapes[i % shapes.length];
        const size = Math.random() * 7 + 5;

        return (
          <motion.div
            key={i}
            className={`absolute bg-primary/25 ${
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
              y: [0, -Math.random() * 180 - 120, -Math.random() * 240 - 180],
              x: [0, Math.random() * 70 - 35, Math.random() * 90 - 45],
              scale: [1, 2.2, 1],
              opacity: [0.3, 0.6, 0],
              rotate: shape !== "circle" ? [0, Math.random() * 360] : undefined,
            }}
            transition={{
              duration: 14 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeOut",
              delay: Math.random() * 4,
            }}
          />
        );
      })}

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header with Enhanced Design */}
        <motion.div
          className="text-center mb-24 md:mb-32 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {/* Sparkle Effects */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${30 + Math.random() * 40}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
          ))}

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Cara Kerja
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Mudah dalam 5 langkah
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className="mt-8 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full relative"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 1,
              delay: 0.4,
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

        {/* Steps with Enhanced Cards */}
        <div className="space-y-20 md:space-y-32">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            const stepRef = useRef<HTMLDivElement>(null);
            const { scrollYProgress: stepProgress } = useScroll({
              target: stepRef,
              offset: ["start end", "center center", "end start"],
            });

            const stepOpacity = useTransform(
              stepProgress,
              [0, 0.2, 0.5, 0.8, 1],
              [0, 1, 1, 1, 0]
            );
            const stepScale = useTransform(
              stepProgress,
              [0, 0.2, 0.5, 0.8, 1],
              [0.8, 1, 1, 1, 0.8]
            );
            const stepY = useTransform(
              stepProgress,
              [0, 0.2, 0.5, 0.8, 1],
              [50, 0, 0, 0, -50]
            );
            const stepRotate = useTransform(
              stepProgress,
              [0, 0.2, 0.5, 0.8, 1],
              [-5, 0, 0, 0, 5]
            );

            return (
              <div key={step.id} ref={stepRef}>
                <motion.div
                  className="relative flex flex-col items-center text-center gap-6 md:gap-8 max-w-4xl mx-auto"
                  style={{
                    opacity: stepOpacity,
                    scale: stepScale,
                    y: stepY,
                    rotateX: stepRotate,
                  }}
                >
                  {/* Step Number with 3D Effect */}
                  <motion.div
                    className="text-primary/20 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none relative"
                    style={{
                      animation: "float 3s ease-in-out infinite",
                      animationDelay: `${index * 0.2}s`,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotateY: 360,
                      transition: { duration: 0.8 },
                    }}
                  >
                    <motion.span
                      className="inline-block"
                      animate={{
                        textShadow: [
                          "0 0 20px hsl(var(--primary) / 0.3)",
                          "0 0 40px hsl(var(--primary) / 0.5)",
                          "0 0 20px hsl(var(--primary) / 0.3)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      0{step.id}
                    </motion.span>
                  </motion.div>

                  {/* Icon Container with Enhanced Effects */}
                  <motion.div className="relative">
                    {/* Multiple Rotating Rings */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 rounded-full border-2 border-primary/20"
                        style={{
                          width: `calc(100% + ${(i + 1) * 2}rem)`,
                          height: `calc(100% + ${(i + 1) * 2}rem)`,
                          left: `-${i + 1}rem`,
                          top: `-${i + 1}rem`,
                        }}
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.1, 0.3],
                        }}
                        transition={{
                          rotate: {
                            duration: 15 + i * 5,
                            repeat: Infinity,
                            ease: "linear",
                          },
                          scale: {
                            duration: 2 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                      />
                    ))}

                    {/* Glow Effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} blur-2xl`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Icon Circle with 3D Transform */}
                    <motion.div
                      className={`relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl`}
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, -10, 10, -10, 0],
                        rotateY: 360,
                        transition: {
                          duration: 0.8,
                          ease: [0.34, 1.56, 0.64, 1],
                        },
                      }}
                      whileTap={{ scale: 0.9 }}
                      animate={{
                        boxShadow: [
                          `0 20px 60px hsl(var(--primary) / 0.3)`,
                          `0 20px 80px hsl(var(--primary) / 0.5)`,
                          `0 20px 60px hsl(var(--primary) / 0.3)`,
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
                      {/* Orbiting Particles */}
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-white rounded-full"
                          style={{
                            left: "50%",
                            top: "50%",
                          }}
                          animate={{
                            x: [
                              Math.cos((i * 120 * Math.PI) / 180) * 50,
                              Math.cos(((i * 120 + 360) * Math.PI) / 180) * 50,
                            ],
                            y: [
                              Math.sin((i * 120 * Math.PI) / 180) * 50,
                              Math.sin(((i * 120 + 360) * Math.PI) / 180) * 50,
                            ],
                            scale: [1, 0.5, 1],
                            opacity: [1, 0.3, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 1,
                          }}
                        />
                      ))}
                      <step.icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white relative z-10" />
                    </motion.div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    whileHover={{
                      scale: 1.05,
                      letterSpacing: "0.05em",
                      transition: { duration: 0.3 },
                    }}
                  >
                    {step.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.1,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>

                {/* Arrow Separator with Enhanced Animation */}
                {!isLast && (
                  <motion.div
                    className="flex justify-center mt-16 md:mt-24 relative"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <motion.div
                      className="relative"
                      animate={{
                        y: [0, 15, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {/* Multiple Blur Layers */}
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute inset-0 blur-xl bg-primary/20 rounded-full"
                          animate={{
                            scale: [1, 1.5 + i * 0.3, 1],
                            opacity: [0.2, 0.5, 0.2],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                      <ArrowDown className="w-8 h-8 md:w-10 md:h-10 text-primary relative z-10" />
                    </motion.div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotateZ(0deg);
          }
          50% {
            transform: translateY(-10px) rotateZ(2deg);
          }
        }
      `}</style>
    </section>
  );
}
