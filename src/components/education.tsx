
"use client";

import { useState, useMemo } from 'react';
import { Section } from "./section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const educationHistory = [
  {
    institution: "Illinois Institute of Technology",
    degree: "M.S. in Electrical & Computer Engineering (VLSI & Microelectronics)",
    period: "Aug 2023 – May 2025",
    logo: "https://9du0c01mm4og13n7.public.blob.vercel-storage.com/iit%20logo.webp",
    dataAiHint: "university logo",
  },
  {
    institution: "Jawaharlal Nehru Technological University Hyderabad",
    degree: "B.Tech in Electronics & Communication Engineering",
    period: "Jun 2019 – Aug 2023",
    grade: "Grade: A- First Class",
    logo: "https://9du0c01mm4og13n7.public.blob.vercel-storage.com/jntuh%20logo.jpg",
    dataAiHint: "university seal",
  },
]

const allCourses = [
    { university: "IIT", id: "ECE 425", name: "Analysis and Design of Integrated Circuits" },
    { university: "IIT", id: "ECE 429", name: "Introduction to VLSI Design" },
    { university: "IIT", id: "ECE 742", name: "Digital Systems-on-Chip Design" },
    { university: "IIT", id: "ECE 525", name: "RF Integrated Circuit Design" },
    { university: "IIT", id: "ECE 530", name: "High Performance VLSI/IC Systems" },
    { university: "IIT", id: "ECE 587", name: "Hardware/Software Co-Design" },
    { university: "IIT", id: "ECE 529", name: "Advanced VLSI Systems Design" },
    { university: "IIT", id: "ECE 588", name: "Hardware Acceleration for Machine Learning" },
    { university: "IIT", id: "ECE 590", name: "Object-Oriented Programming and Machine Learning" },
    { university: "IIT", id: "ECE 579", name: "Operation and Planning of Distributed Power Grid" },
    { university: "JNTUH", id: "Problem Solving", name: "Programming for Problem Solving" },
    { university: "JNTUH", id: "BEE", name: "Basic Electrical Engineering" },
    { university: "JNTUH", id: "EDC", name: "Electronic Devices and Circuits" },
    { university: "JNTUH", id: "Analog", name: "Analog Circuits" },
    { university: "JNTUH", id: "ECA", name: "Electronic Circuit Analysis" },
    { university: "JNTUH", id: "VLSI Design", name: "VLSI Design" },
    { university: "JNTUH", id: "Low Power VLSI", name: "Low Power VLSI" },
    { university: "JNTUH", id: "Linear IC", name: "Linear IC Applications" },
    { university: "JNTUH", id: "Digital Logic", name: "Digital Logic Design" },
    { university: "JNTUH", id: "Digital System", name: "Digital System Design" },
    { university: "JNTUH", id: "MP&uC", name: "Microprocessors & Microcontrollers" },
    { university: "JNTUH", id: "COA", name: "Computer Organization and Architecture" },
];


export default function Education() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = useMemo(() => {
    if (!searchTerm) return allCourses;
    const lowercasedFilter = searchTerm.toLowerCase();
    return allCourses.filter(course =>
      course.name.toLowerCase().includes(lowercasedFilter) ||
      course.id.toLowerCase().includes(lowercasedFilter)
    );
  }, [searchTerm]);

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
          <Card key={edu.institution} className="glassmorphic-card w-full flex flex-col">
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="relative w-16 h-16">
                 <Image
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    width={60}
                    height={60}
                    className={`rounded-full border object-contain p-1 transition-all duration-300 ${edu.institution === "Illinois Institute of Technology" ? 'filter grayscale brightness-150 contrast-200' : ''}`}
                    data-ai-hint={edu.dataAiHint}
                  />
              </div>
              <div className="flex-1">
                <CardTitle className={`${edu.institution === "Illinois Institute of Technology" ? 'bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700' : 'bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 to-white'}`}>{edu.institution}</CardTitle>
                <CardDescription className="text-primary">{edu.degree}</CardDescription>
                <p className="text-sm text-muted-foreground mt-1">{edu.period} {edu.grade && `• ${edu.grade}`}</p>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-end">
                <p className="text-xs text-muted-foreground">
                    {edu.institution === "Illinois Institute of Technology" ? "Graduate coursework in VLSI, SoC, and ML Acceleration." : "Undergraduate coursework in ECE fundamentals."}
                </p>
            </CardContent>
          </Card>
        ))}
      </div>

       <div className="mt-12 text-center">
            <Dialog>
                <DialogTrigger asChild>
                    <Button 
                        size="lg" 
                        className="font-bold rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 hover:scale-105"
                        role="button"
                    >
                        View All Coursework
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl w-full bg-background/80 backdrop-blur-lg glassmorphic-card">
                    <DialogHeader>
                        <DialogTitle className="text-2xl text-primary">Coursework</DialogTitle>
                    </DialogHeader>
                    <div className="relative my-4">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input 
                            placeholder="Filter courses..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                    <div className="max-h-[60vh] overflow-y-auto pr-4">
                        <ul className="space-y-3">
                            {filteredCourses.map(course => (
                                <li key={`${course.university}-${course.id}`} className="flex items-center justify-between text-sm">
                                    <div className="flex-grow">
                                      <span className="font-semibold text-foreground">{course.id}:</span>
                                      <span className="text-muted-foreground ml-2">{course.name}</span>
                                    </div>
                                    <Badge variant={course.university === 'IIT' ? 'default' : 'secondary'} className="ml-4 flex-shrink-0">
                                      {course.university}
                                    </Badge>
                                </li>
                            ))}
                        </ul>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    </Section>
  )
}

    