"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-10" />
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-indigo-900/10" />
        {/* Particle effect */}
        <div id="particles" className="absolute inset-0">
          {[...Array(50)].map((_, i) => {
            const style = {
              '--d': `${Math.random() * 40 + 10}s`,
              '--x': `${Math.random() * 100}vw`,
              '--y': `${Math.random() * 100}vh`,
              '--s': `${Math.random() * 1.5 + 0.5}px`,
            } as React.CSSProperties;
            return <div key={i} className="particle" style={style}></div>
          })}
        </div>
        <style jsx>{`
          @keyframes move {
            100% { transform: translate3d(var(--x), var(--y), 0); }
          }
          .particle {
            position: absolute;
            left: 50%;
            top: 50%;
            width: var(--s);
            height: var(--s);
            background: hsl(180, 100%, 70%);
            border-radius: 50%;
            animation: move var(--d) linear infinite;
            opacity: 0;
            animation-delay: calc(var(--d) * -1);
            animation-name: move, fade;
            animation-duration: var(--d), 500ms;
            animation-fill-mode: forwards;
          }

          @keyframes fade {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }

          @media (prefers-reduced-motion) {
            .particle {
              animation: none;
            }
          }
        `}</style>
      </div>

      <div className="container relative z-20 px-4 md:px-6 text-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-12 duration-500">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-br from-white via-neutral-300 to-primary">
            VLSI & Digital Design Engineer
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Crafting the future of silicon. Specialized in high-performance digital circuits, from architecture to tape-out.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="group">
              <Link href="#projects">
                View Projects <MoveRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
