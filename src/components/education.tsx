import { Section } from "./section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"

const educationHistory = [
  {
    institution: "Illinois Institute of Technology",
    degree: "M.S. in Electrical & Computer Engineering (VLSI & Microelectronics)",
    period: "Aug 2023 – May 2025",
    logo: "https://9du0c01mm4og13n7.public.blob.vercel-storage.com/iit%20logo.webp",
    dataAiHint: "university logo",
    courses: [
      { id: "ECE 425", name: "Physical and Logical Design of Computers" },
      { id: "ECE 429", name: "Introduction to VLSI Design" },
      { id: "ECE 742", name: "High-Performance Computer Architecture" },
      { id: "ECE 525", name: "Low Power VLSI" },
      { id: "ECE 530", name: "Advanced VLSI Design" },
      { id: "ECE 587", name: "ASIC/FPGA Design" },
      { id: "ECE 529", name: "Digital Signal Processor Architecture" },
      { id: "ECE 588", name: "Digital System Design with FPGAs" },
      { id: "ECE 590", name: "Advanced Digital Systems" },
      { id: "ECE 579", name: "VLSI System Testing" },
    ],
  },
  {
    institution: "Jawaharlal Nehru Technological University Hyderabad",
    degree: "B.Tech in Electronics & Communication Engineering",
    period: "Jun 2019 – Aug 2023",
    grade: "Grade: A- First Class",
    logo: "https://9du0c01mm4og13n7.public.blob.vercel-storage.com/jntuh%20logo.jpg",
    dataAiHint: "university seal",
    courses: [
      { id: "Problem Solving", name: "Programming for Problem Solving" },
      { id: "BEE", name: "Basic Electrical Engineering" },
      { id: "EDC", name: "Electronic Devices and Circuits" },
      { id: "Analog", name: "Analog Circuits" },
      { id: "ECA", name: "Electronic Circuit Analysis" },
      { id: "VLSI Design", name: "VLSI Design" },
      { id: "Low Power VLSI", name: "Low Power VLSI" },
      { id: "Linear IC", name: "Linear IC Applications" },
      { id: "Digital Logic", name: "Digital Logic Design" },
      { id: "Digital System", name: "Digital System Design" },
      { id: "MP&uC", name: "Microprocessors & Microcontrollers" },
      { id: "COA", name: "Computer Organization and Architecture" },
    ],
  },
]

export default function Education() {
  return (
    <Section id="education">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
          My academic journey and foundation in engineering.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto">
        {educationHistory.map((edu) => (
          <Card key={edu.institution} className="glassmorphic-card w-full">
            <CardHeader className="flex flex-row items-start gap-4">
              <Image
                src={edu.logo}
                alt={`${edu.institution} logo`}
                width={60}
                height={60}
                className={`rounded-full border p-1 object-contain transition-all duration-300 ${edu.institution === "Illinois Institute of Technology" ? "grayscale-0" : "grayscale hover:grayscale-0"}`}
                style={edu.institution === "Illinois Institute of Technology" ? { filter: 'sepia(100%) hue-rotate(-50deg) saturate(1000%)' } : {}}
                data-ai-hint={edu.dataAiHint}
              />
              <div className="flex-1">
                <CardTitle className={`text-2xl ${edu.institution === "Illinois Institute of Technology" ? 'bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700' : 'bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 to-white'}`}>{edu.institution}</CardTitle>
                <CardDescription className="text-primary">{edu.degree}</CardDescription>
                <p className="text-sm text-muted-foreground mt-1">{edu.period} {edu.grade && `• ${edu.grade}`}</p>
              </div>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-3 text-muted-foreground">Relevant Coursework:</h4>
              <TooltipProvider>
                <ScrollArea className="w-full whitespace-nowrap">
                  <div className="flex space-x-2 pb-4">
                    {edu.courses.map((course) => (
                      <Tooltip key={course.id}>
                        <TooltipTrigger asChild>
                          <Badge variant="secondary" className="cursor-default">{course.id}</Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{course.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </TooltipProvider>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
