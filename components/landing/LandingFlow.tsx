"use client";

import {
  Scan,
  ShoppingCart,
  CreditCard,
  Coffee,
  MapPin,
  ArrowDown,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

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
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Tidak ada partikel untuk mobile
  const showParticles = !isMobile && !prefersReducedMotion;

  return (
    <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Minimal background grid */}
      {!prefersReducedMotion && (
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      )}

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20 md:mb-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Cara Kerja
          </motion.h2>
          <motion.p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Mudah dalam 5 langkah
          </motion.p>
        </motion.div>

        {/* Steps - simplified */}
        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;

            return (
              <div key={step.id}>
                <motion.div
                  className="relative flex flex-col items-center text-center gap-6 md:gap-8 max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Step Number */}
                  <div className="text-primary/20 text-6xl sm:text-7xl md:text-8xl font-bold">
                    0{step.id}
                  </div>

                  {/* Icon Container - simplified */}
                  <motion.div className="relative">
                    {!prefersReducedMotion && (
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} blur-2xl opacity-30`}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}

                    <motion.div
                      className={`relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl`}
                      whileHover={
                        !prefersReducedMotion ? { scale: 1.1 } : undefined
                      }
                    >
                      <step.icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white" />
                    </motion.div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl">
                    {step.description}
                  </p>
                </motion.div>

                {/* Arrow Separator */}
                {!isLast && (
                  <motion.div
                    className="flex justify-center mt-12 md:mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      animate={
                        !prefersReducedMotion
                          ? {
                              y: [0, 10, 0],
                            }
                          : undefined
                      }
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowDown className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                    </motion.div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
