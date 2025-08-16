"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MoveRight, ArrowDownToLine } from "lucide-react"
import CursorGlow from "./cursor-glow"

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <CursorGlow />
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="gradient-bg">
          <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
          <div className="gradients-container">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            <div className="g5"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-background/80 z-10" />

      <div className="container relative z-20 px-4 md:px-6 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-12 duration-500">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary via-accent to-violet-600 rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition duration-500 animate-float"></div>
              <div className="relative w-72 h-96 md:w-80 md:h-[420px] rounded-2xl overflow-hidden glassmorphic-card p-2 animate-float-delay">
                <Image 
                  src="https://placehold.co/400x550.png"
                  alt="Keshava"
                  width={400}
                  height={550}
                  className="object-cover w-full h-full rounded-lg"
                  data-ai-hint="portrait man"
                  priority
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="text-center md:text-left space-y-6">
            <div className="space-y-4">
               <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                <span className="inline-block animate-wave origin-[70%_70%]">👋</span> Hey, I'm <br />
                <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  Keshava
                </span>
              </h1>
              <p className="text-accent text-xl sm:text-2xl font-medium">
                VLSI Engineer
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-accent text-primary-foreground border-none">
                <Link href="#projects">
                  View Projects <MoveRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="glassmorphic-card hover:border-accent">
                <Link href="/resume.pdf" target="_blank" download>
                  Download Resume <ArrowDownToLine className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
              <Link href="https://www.linkedin.com/in/kesh7044/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-6 h-6" /></Link>
              <Link href="https://github.com/kesh7044" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-6 h-6" /></Link>
              <Link href="mailto:kreddygattu@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="w-6 h-6" /></Link>
            </div>
          </div>
        </div>
      </div>
       <style jsx>{`
          .gradient-bg {
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
            background: #1E2364; /* Dark indigo */
            filter: url(#goo);
          }
          .gradients-container {
            width: 100%;
            height: 100%;
            filter: blur(40px);
            position: absolute;
          }
          .g1, .g2, .g3, .g4, .g5 {
            width: 40vw;
            height: 40vw;
            position: absolute;
            border-radius: 100%;
            mix-blend-mode: screen;
            animation-iteration-count: infinite;
            animation-timing-function: cubic-bezier(.1, .1, .9, .9);
          }
          .g1 { background: #9400D3; animation: move1 15s -2s alternate; } /* Violet */
          .g2 { background: #00FFFF; animation: move2 13s 0s alternate; } /* Cyan */
          .g3 { background: #4B0082; animation: move3 17s -5s alternate; } /* Indigo */
          .g4 { background: #8A2BE2; animation: move4 14s -3s alternate; } /* BlueViolet */
          .g5 { background: #00CED1; animation: move5 16s -1s alternate; } /* DarkTurquoise */

          @keyframes move1 { from { transform: translate(10vw, -10vh) rotate(0deg); } to { transform: translate(80vw, 20vh) rotate(360deg); } }
          @keyframes move2 { from { transform: translate(-20vw, 50vh) rotate(60deg); } to { transform: translate(50vw, -10vh) rotate(0deg); } }
          @keyframes move3 { from { transform: translate(50vw, 90vh) rotate(120deg); } to { transform: translate(10vw, 10vh) rotate(240deg); } }
          @keyframes move4 { from { transform: translate(80vw, 70vh) rotate(180deg); } to { transform: translate(30vw, 20vh) rotate(300deg); } }
          @keyframes move5 { from { transform: translate(10vw, 80vh) rotate(240deg); } to { transform: translate(70vw, 30vh) rotate(120deg); } }

          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-4px); }
            100% { transform: translateY(0px); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-float-delay { animation: float 6s ease-in-out infinite; animation-delay: 0.5s; }

          @keyframes wave {
            0% { transform: rotate(0.0deg); }
            10% { transform: rotate(14.0deg); }
            20% { transform: rotate(-8.0deg); }
            30% { transform: rotate(14.0deg); }
            40% { transform: rotate(-4.0deg); }
            50% { transform: rotate(10.0deg); }
            60% { transform: rotate(0.0deg); }
            100% { transform: rotate(0.0deg); }
          }
          .animate-wave { animation: wave 2.5s ease-in-out infinite; }

          @media (prefers-reduced-motion) {
            .g1, .g2, .g3, .g4, .g5, .animate-float, .animate-float-delay, .animate-wave { animation: none; }
          }
       `}</style>
    </section>
  )
}

    