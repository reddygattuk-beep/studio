"use client";

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "./section"
import { Code, Cpu, Layers, GitMerge, FileCheck2, Search, Zap, Microscope, BrainCircuit, MemoryStick, Terminal } from "lucide-react"
import { Badge } from '@/components/ui/badge';
import { AnimatePresence, motion } from 'framer-motion';

const VhdlSvg = () => <svg viewBox="0 0 100 100" className="h-6 w-6 text-accent"><text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="30" fontWeight="bold" fill="currentColor">VHDL</text></svg>
const VerilogSvg = () => <svg viewBox="0 0 100 100" className="h-6 w-6 text-accent"><text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="24" fontWeight="bold" fill="currentColor">SV</text></svg>
const TclSvg = () => <svg viewBox="0 0 100 100" className="h-6 w-6 text-accent"><text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="35" fontWeight="bold" fill="currentColor">Tcl</text></svg>

const skillsData = {
  "HDL & RTL Design": {
    icon: Code,
    items: ["Verilog", "SystemVerilog", "VHDL", "RTL Microarchitecture", "Hierarchical Design", "Testbench Development"],
    tags: ["RTL", "DV"],
  },
  "ASIC Design Flow": {
    icon: GitMerge,
    items: ["RTL Simulation", "Logic Synthesis", "Place & Route", "Formal Verification", "Static Timing Analysis", "PPA Trade-off Analysis"],
    tags: ["PD", "DV"],
  },
  "EDA Tools": {
    icon: Terminal,
    items: ["Cadence Virtuoso", "Cadence Innovus", "Cadence Xcelium", "Synopsys DC", "Synopsys Formality", "Xilinx Vivado"],
    tags: ["PD", "RTL", "DV"],
  },
  "Low-Power Techniques": {
    icon: Zap,
    items: ["Clock Gating", "Power Gating", "MTCMOS", "Leakage Power Reduction", "Dynamic Power Optimization"],
    tags: ["PD", "Low-Power"],
  },
  "Digital Design & Verification": {
    icon: Microscope,
    items: ["CMOS Schematic/Layout", "DRC/LVS/PEX", "Propagation Delay", "Waveform Analysis", "FPGA Prototyping"],
    tags: ["DV", "FPGA"],
  },
  "ML Hardware Acceleration": {
    icon: BrainCircuit,
    items: ["CNN/VGG Implementation", "Pipelining", "Parallel Processing", "Fixed-Point Quantization"],
    tags: ["RTL", "FPGA"],
  },
  "Memory Design": {
    icon: MemoryStick,
    items: ["6T/8T SRAM Design", "Stability Analysis", "Leakage Reduction", "Security-Aware Design"],
    tags: ["Memory", "PD"],
  },
  "Programming & Scripting": {
    icon: Code,
    items: ["Python", "TCL", "Bash", "EDA Automation"],
    tags: ["DV", "PD"],
  },
};

const filters = ["All", "RTL", "PD", "DV", "Low-Power", "FPGA", "Memory"];

export default function Skills() {
  const [activeFilter, setActiveFilter] = React.useState("All");

  const filteredSkills = React.useMemo(() => {
    if (activeFilter === "All") {
      return Object.entries(skillsData);
    }
    return Object.entries(skillsData).filter(([, skill]) =>
      skill.tags.includes(activeFilter)
    );
  }, [activeFilter]);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <Section id="skills">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
        <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed">
          A toolbox of languages, methodologies, and tools I use to build robust digital systems. Filter by domain to see my specialized expertise.
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
          {filteredSkills.map(([category, details], index) => (
            <motion.div
              key={category}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              custom={index}
              layout
            >
              <Card className="glassmorphic-card h-full transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <details.icon className="w-8 h-8 text-primary" />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {details.items.map((item) => (
                       <Badge key={item} variant="secondary" className="group relative cursor-pointer overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-md">
                         <span className="transition-all duration-300 group-hover:pr-2">{item}</span>
                       </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  )
}
