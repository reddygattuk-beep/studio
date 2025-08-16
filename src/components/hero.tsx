"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import ParticleCanvas from "./cursor-glow";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {

  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.5 } },
  };

  return (
    <section id="hero" className="relative w-full h-screen min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      <ParticleCanvas />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="z-10 flex flex-col items-center space-y-8 px-4"
      >
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-gray-200 via-gray-300 to-white">
            Keshava Reddygattu
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
            I build reliable systems on silicon with clear RTL and rigorous verification. Complex problems become timing-safe, tapeout-ready designs.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button asChild size="lg">
            <Link href="#projects">
              View Projects <ArrowRight className="ml-2" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="glassmorphic-card">
            <Link href="/resume.pdf" target="_blank">
              Download Resume <Download className="ml-2" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
