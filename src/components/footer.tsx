"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="w-full bg-card/30 py-6">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 md:px-6">
        <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
          © {new Date().getFullYear()} Keshava Reddygattu
        </p>
        <div className="flex items-center gap-6">
          <Link href="https://www.linkedin.com/in/kesh7044/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></Link>
          <Link href="https://github.com/kesh7044" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-5 h-5" /></Link>
          <Link href="mailto:kreddygattu@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="w-5 h-5" /></Link>
        </div>
        <div className="hidden sm:block">
            <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="rounded-full hover:bg-primary/20"
                aria-label="Back to top"
            >
                <ChevronUp className="w-5 h-5" />
            </Button>
        </div>
      </div>
    </footer>
  )
}
