"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

const navItems = [
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      const sections = navItems.map(item => document.getElementById(item.href.substring(1))).filter(item => item && item.id !== 'resume.pdf');
      let currentSection = "";
      
      sections.forEach(section => {
        if (section && window.scrollY >= section.offsetTop - 150) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2 font-bold text-xl group">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Keshava Reddygattu
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              target={item.target}
              className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              activeSection === item.href.substring(1) ? "text-primary" : "text-muted-foreground"
            )}>
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background">
              <div className="flex flex-col p-6">
                <div className="mb-8 flex justify-between items-center">
                   <Link href="#" className="flex items-center gap-2 font-bold text-lg group">
                     <span>Keshava Reddygattu</span>
                   </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <SheetClose key={item.name} asChild>
                      <Link 
                        href={item.href} 
                        target={item.target}
                        className="text-lg font-medium text-foreground hover:text-primary">
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
