"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Home, RefreshCw, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center relative overflow-hidden">
      {/* Simplified background */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <motion.div
          className="text-center px-4 sm:px-6 lg:px-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Icon Container - simplified */}
          <motion.div
            className="inline-flex items-center justify-center mb-8 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-primary via-primary to-primary/80 flex items-center justify-center shadow-2xl"
              whileHover={!prefersReducedMotion ? { scale: 1.1 } : undefined}
            >
              <AlertTriangle className="w-12 h-12 md:w-14 md:h-14 text-primary-foreground" />
            </motion.div>
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-primary">
            Oops! Terjadi Kesalahan
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Maaf, terjadi kesalahan yang tidak terduga. Silakan coba lagi.
          </p>

          {/* Buttons */}
          <div className="flex flex-row gap-3 sm:gap-4 justify-center items-center flex-wrap">
            <motion.div
              whileHover={!prefersReducedMotion ? { scale: 1.05 } : undefined}
              whileTap={{ scale: 0.95 }}
            >
              <Button onClick={reset} size="lg" className="gap-2 px-6 sm:px-8">
                <RefreshCw className="w-5 h-5" />
                Coba Lagi
              </Button>
            </motion.div>

            <motion.div
              whileHover={!prefersReducedMotion ? { scale: 1.05 } : undefined}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 px-6 sm:px-8"
                asChild
              >
                <Link href="/">
                  <Home className="w-5 h-5" />
                  Kembali ke Beranda
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Error Digest */}
          {error.digest && (
            <p className="mt-8 text-sm text-muted-foreground font-mono">
              Error ID: {error.digest}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
