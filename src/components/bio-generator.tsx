"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Loader2, Sparkles } from "lucide-react"

import { generateBio } from "@/ai/flows/generate-bio"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Section } from "@/components/section"

const bioSchema = z.object({
  portfolioSummary: z.string().min(50, "Please provide a summary of at least 50 characters."),
})

export default function BioGenerator() {
  const [bio, setBio] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof bioSchema>>({
    resolver: zodResolver(bioSchema),
    defaultValues: {
      portfolioSummary: "",
    },
  })

  async function onSubmit(values: z.infer<typeof bioSchema>) {
    setIsLoading(true)
    setBio("")
    try {
      const result = await generateBio(values)
      setBio(result.bio)
    } catch (error) {
      console.error(error)
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate bio. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Section id="ai-bio" className="bg-background">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-violet-400 to-accent">
            AI Bio Generator
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Need a professional introduction? Provide a summary of your skills and projects, and let our AI craft a compelling bio for you. A great starting point for your LinkedIn or resume summary.
          </p>
        </div>
        <Card className="glassmorphic-card">
          <CardHeader>
            <CardTitle>Generate Your Bio</CardTitle>
            <CardDescription>Enter a summary of your portfolio below.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="portfolioSummary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Portfolio Summary</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., Experienced in RTL design with Verilog, proficient in UVM for verification, with projects including a RISC-V processor and a custom memory controller..."
                          className="min-h-[120px] bg-background/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="mr-2 h-4 w-4" />
                  )}
                  Generate Bio
                </Button>
              </form>
            </Form>
            {(isLoading || bio) && (
              <div className="mt-6 rounded-lg border bg-background/50 p-4">
                <h3 className="font-semibold mb-2">Generated Bio:</h3>
                {isLoading && !bio && (
                    <div className="space-y-2">
                        <div className="h-4 bg-muted/50 rounded animate-pulse w-full"></div>
                        <div className="h-4 bg-muted/50 rounded animate-pulse w-5/6"></div>
                        <div className="h-4 bg-muted/50 rounded animate-pulse w-3/4"></div>
                    </div>
                )}
                {bio && <p className="text-sm text-muted-foreground whitespace-pre-wrap">{bio}</p>}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}
