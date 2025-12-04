"use client";

import Link from "next/link";
import { QrCode } from "lucide-react";
import { ModeToggle } from "@/components/toggles/mode";
import { FullscreenToggle } from "@/components/toggles/fullscreen";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <QrCode className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold">Qafe</span>
          </Link>

          {/* Toggle Buttons */}
          <div className="flex items-center gap-1">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
