"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import ParticleCanvas from "./cursor-glow";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {

  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.5 } },
  };

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleCanvas className="absolute inset-0 w-full h-full -z-10" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.5, delay: 0.2 } },
            }}
            className="relative group order-last lg:order-first"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Image
              src="https://9du0c01mm4og13n7.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-16%20at%2013.41.42_ed2b7a57.jpg"
              alt="Keshava Reddygattu Portrait"
              width={500}
              height={600}
              className="relative aspect-[3/4] object-cover rounded-2xl w-full max-w-sm mx-auto lg:max-w-none"
              priority
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="z-10 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-gray-200 via-gray-300 to-white">
                Keshava Reddygattu
              </h1>
              <p className="max-w-xl mx-auto lg:mx-0 text-lg sm:text-xl text-muted-foreground">
                I build reliable systems on silicon with clear RTL and rigorous verification. Complex problems become timing-safe, tapeout-ready designs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button asChild size="lg">
                <Link href="#projects">
                  View Projects <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="glassmorphic-card">
                <Link href="/resume.pdf" target="_blank">
                  Download Resume <Download />
                </Link>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
