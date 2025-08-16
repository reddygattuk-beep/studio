"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Section } from "./section"
import { Send } from "lucide-react"

export default function Contact() {
  return (
    <Section id="contact" className="bg-card/30 rounded-t-3xl">
      <div className="mx-auto max-w-2xl text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
        <p className="text-muted-foreground md:text-xl/relaxed">
          Have a project in mind, a question, or just want to connect? Feel free to reach out.
        </p>
      </div>
      <div className="mx-auto max-w-xl">
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
      </div>
    </Section>
  )
}
