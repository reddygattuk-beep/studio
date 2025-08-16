"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Section } from "./section"
import { Send, Linkedin, Github, Mail, Download } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <Section id="contact" className="bg-card/30 rounded-t-3xl">
      <div className="mx-auto max-w-2xl text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let’s build efficient silicon.</h2>
        <p className="text-muted-foreground md:text-xl/relaxed">
          Open to RTL, DV, PD, and low-power roles.
        </p>
      </div>
      <div className="mx-auto max-w-xl">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button asChild size="lg">
                <Link href="mailto:kreddygattu@gmail.com">
                    <Mail className="mr-2" /> Email
                </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="glassmorphic-card">
                <Link href="https://www.linkedin.com/in/kesh7044/" target="_blank">
                    <Linkedin className="mr-2" /> LinkedIn
                </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="glassmorphic-card">
                <Link href="https://github.com/keshuH" target="_blank">
                    <Github className="mr-2" /> GitHub
                </Link>
            </Button>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your message..." className="min-h-[150px]" />
          </div>
          <Button type="submit" className="w-full group" size="lg">
            Send Message
            <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>
         <p className="text-xs text-center text-muted-foreground mt-6">
            Your privacy is important. Your information will only be used to respond to your inquiry.
        </p>
      </div>
    </Section>
  )
}
