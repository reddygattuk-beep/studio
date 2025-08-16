"use client";

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "./section";
import { Award, Code, Cloud, Trophy, Activity, Cpu } from "lucide-react";
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';

const certifications = [
  {
    title: "Cadence RTL-to-GDSII Flow",
    issuer: "Cadence",
    date: "Aug 2025",
    category: "EDA",
    details: "Hands-on: Xcelium, Genus, Modus, Conformal, Innovus, Tempus, SDF GLS, STA"
  },
  {
    title: "Digital IC Design Fundamentals",
    issuer: "Online Course",
    date: "Mar 2025",
    category: "VLSI",
    details: "Covered core concepts of digital integrated circuit design from logic gates to system level."
  },
  {
    title: "Cadence Student Ambassador",
    issuer: "Cadence",
    date: "Feb 2025",
    category: "Events",
    details: "Selected to represent Cadence and promote EDA tools and technologies on campus."
  },
  {
    title: "Semiconductor 101 v1.0",
    issuer: "Industry Consortium",
    date: "Jan 2025",
    category: "VLSI",
    details: "Comprehensive overview of the semiconductor industry, from fabrication to market trends."
  },
  {
    title: "AWSome Day",
    issuer: "AWS",
    date: "Jun 2022",
    category: "Cloud",
    details: "Attended a one-day training event covering core AWS services and cloud concepts."
  },
  {
    title: "Intro to R",
    issuer: "GLA",
    date: "Apr 2022",
    category: "Programming",
    details: "Learned the fundamentals of the R programming language for statistical computing."
  },
  {
    title: "Intro to Python",
    issuer: "Simplilearn",
    date: "Dec 2021",
    category: "Programming",
    details: "Completed an introductory course on Python programming for data analysis and scripting."
  },
  {
    title: "Hackathon Participation",
    issuer: "OHF Season 3 - IIT Indore",
    date: "Event",
    category: "Events",
    details: "Participated in a competitive hackathon, developing a hardware-related project."
  }
];

const filters = ["All", "EDA", "VLSI", "Cloud", "Programming", "Events"];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'EDA': return Cpu;
    case 'VLSI': return Cpu;
    case 'Cloud': return Cloud;
    case 'Programming': return Code;
    case 'Events': return Trophy;
    default: return Award;
  }
}

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCertifications = useMemo(() => {
    if (activeFilter === "All") {
      return certifications;
    }
    return certifications.filter((cert) => cert.category === activeFilter);
  }, [activeFilter]);

  return (
    <Section id="certifications">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Certifications</h2>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
          Recognition of my dedication and expertise in the field of VLSI and digital design.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "default" : "outline"}
            onClick={() => setActiveFilter(filter)}
            className={`transition-all duration-300 ${activeFilter === filter ? 'bg-primary text-primary-foreground' : 'glassmorphic-card hover:border-accent'}`}
          >
            {filter}
          </Button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
        {filteredCertifications.map((cert, index) => {
          const Icon = getCategoryIcon(cert.category);
          return (
            <motion.div
              key={cert.title}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              custom={index}
              layout
            >
              <Card className="glassmorphic-card transition-all duration-300 hover:scale-105 hover:shadow-primary/20 h-full">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-medium">{cert.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic h-16">"{cert.details}"</p>
                  <div className="text-right text-xs text-accent font-semibold mt-4">{cert.date}</div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
        </AnimatePresence>
      </div>
    </Section>
  )
}
