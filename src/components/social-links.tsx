import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Section } from "./section"
import { Button } from "@/components/ui/button"

export default function SocialLinks() {
  return (
    <Section id="socials" className="py-0">
      <div className="flex justify-center gap-6">
        <Link href="https://github.com/keshuH" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <Button variant="outline" size="icon" className="glassmorphic-card rounded-full h-14 w-14 transition-all duration-300 hover:scale-110 hover:shadow-primary/20">
            <Github className="h-7 w-7" />
          </Button>
        </Link>
        <Link href="mailto:kreddygattu@gmail.com" aria-label="Email Keshava">
           <Button variant="outline" size="icon" className="glassmorphic-card rounded-full h-14 w-14 transition-all duration-300 hover:scale-110 hover:shadow-primary/20">
            <Mail className="h-7 w-7" />
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/kesh7044/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
           <Button variant="outline" size="icon" className="glassmorphic-card rounded-full h-14 w-14 transition-all duration-300 hover:scale-110 hover:shadow-primary/20">
            <Linkedin className="h-7 w-7" />
          </Button>
        </Link>
      </div>
    </Section>
  )
}
