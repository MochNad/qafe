import Image from "next/image";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingTransition } from "@/components/landing/LandingTransition";
import { LandingFlow } from "@/components/landing/LandingFlow";
import { LandingSimplicity } from "@/components/landing/LandingSimplicity";
import { Footer } from "@/components/landing/LandingFooter";

export default function Home() {
  return (
    <div>
      <LandingHero />
      <LandingTransition />
      <LandingFlow />
      <LandingTransition />
      <LandingSimplicity />
      <Footer />
    </div>
  );
}
