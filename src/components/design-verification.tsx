"use client";

import { useState, useMemo } from 'react';
import { Section } from "./section";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Clipboard, Cpu, Code, GitMerge, FileText, Brain, ShieldCheck, FileCheck2, Search, Zap, Microscope, BrainCircuit, MemoryStick, Terminal, Layers3, Network, BookCopy, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const dvSkillsData = [
    {
      title: "Core DV Skills",
      category: "Core",
      icon: Code,
      content: [
        { item: "SystemVerilog", tooltip: "Used for RTL design, testbenches, and assertions (SVA)." },
        { item: "UVM", tooltip: "Universal Verification Methodology for robust, reusable testbenches." },
        { item: "Constrained-Random", tooltip: "Efficiently explores the state space by generating legal random stimulus." },
        { item: "Coverage-Driven", tooltip: "Uses functional coverage metrics to guide verification efforts and measure completeness." },
        { item: "Assertion-Based Verification", tooltip: "Using properties (like SVA) to check for specific hardware behaviors." },
        { item: "Reference Models & Scoreboards", tooltip: "Predicting and checking the DUT's output against a golden model." },
        { item: "C/C++ & DPI-C", tooltip: "Integrating high-level models or functions with SystemVerilog." },
        { item: "Python/TCL for Automation", tooltip: "Scripting for regressions, reports, and tool flows." },
      ]
    },
    {
      title: "Tools & Flows",
      category: "Tools",
      icon: Terminal,
      content: [
        { item: "Simulators", tooltip: "Cadence Xcelium, Synopsys VCS, Siemens Questa" },
        { item: "Debug & Waveform", tooltip: "Verdi, SimVision, DVE for deep signal analysis." },
        { item: "Formal Verification", tooltip: "JasperGold, VC Formal for exhaustive property checking." },
        { item: "Lint & CDC/RDC", tooltip: "SpyGlass, Ascent for static code quality and clock/reset domain crossing checks." },
        { item: "Coverage & Regressions", tooltip: "vManager, IMC, urg for managing large-scale verification." },
        { item: "Hardware Acceleration", tooltip: "Palladium, ZeBu (Emulation) & FPGA Prototyping for speed." },
        { item: "Infrastructure", tooltip: "Git, CI/CD (Jenkins), Make/CMake, Docker for robust dev environments." },
      ]
    },
    {
      title: "Design / Protocol Know-How",
      category: "Protocols",
      icon: Network,
      content: [
        { item: "AMBA", tooltip: "AXI, AHB, APB - standard on-chip interconnects." },
        { item: "Serial Protocols", tooltip: "I2C, SPI, UART for peripheral communication." },
        { item: "SoC Architecture", tooltip: "Caches, coherence (ACE/CHI), MMU, interrupts." },
        { item: "Low-Power Verification", tooltip: "UPF/CPF for power-intent simulation and sequence checking." },
        { item: "Clock & Reset Verification", tooltip: "CDC patterns, reset sequencing, metastability analysis." },
        { item: "Advanced Busses", tooltip: "Basic knowledge of PCIe, DDR, USB, Ethernet." },
      ]
    },
    {
      title: "Verification Deliverables",
      category: "Deliverables",
      icon: FileText,
      content: [
        { item: "Verification Plans", tooltip: "Comprehensive documents linking features to verification strategy." },
        { item: "Reusable UVM Environments", tooltip: "Modular agents, RAL models, and scoreboards for portability." },
        { item: "Coverage Closure Reports", tooltip: "Detailed analysis of code, functional, and assertion coverage." },
        { item: "Bug Reports & Triage", tooltip: "Clear, minimal, reproducible test cases for efficient debug." },
        { item: "Sign-off Checklists", tooltip: "Ensuring all quality metrics are met before tape-out." },
      ]
    },
    {
      title: "Mindset & Collaboration",
      category: "Mindset",
      icon: Brain,
      content: [
        { item: "Adversarial Thinking", tooltip: "A proactive 'break-it' attitude to find corner-case bugs." },
        { item: "Hypothesis-Driven Debug", tooltip: "Systematic approach to isolating and proving root causes." },
        { item: "Clear Communication", tooltip: "Effective collaboration with designers and architects." },
        { item: "Data-Driven Decisions", tooltip: "Using coverage and bug-rate metrics to guide effort." },
        { item: "Automation & Efficiency", tooltip: "Always looking for ways to script and accelerate tasks." },
      ]
    }
  ];

const filters = ["All", "Core", "Tools", "Protocols", "Deliverables", "Mindset"];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" }
  })
};

const atsBlockText = "Design Verification: SystemVerilog, UVM, SVA, constrained-random & coverage-driven verification; scoreboards/reference models; RAL; CDC/RDC; lint; Xcelium/VCS/Questa; Verdi/SimVision; JasperGold/VC Formal; UPF; Python/TCL; Git/Jenkins; AXI/AHB/APB, PCIe/DDR (basic).";

export default function DesignVerification() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const filteredSkills = useMemo(() => {
    if (activeFilter === "All") return dvSkillsData;
    return dvSkillsData.filter(skill => skill.category === activeFilter);
  }, [activeFilter]);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(atsBlockText).then(() => {
      setIsCopied(true);
      toast({
        title: "Copied to clipboard!",
        description: "ATS-friendly text block is ready to paste.",
      });
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <Section id="dv" className="dv-background">
       <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Design Verification</h2>
        <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed">
          My expertise in ensuring digital designs are robust, reliable, and functionally correct.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
        {filters.map(filter => (
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
      
       <div className="mb-12 flex justify-center">
        <Button onClick={handleCopy} variant="outline" className="glassmorphic-card group">
            {isCopied ? <Check className="text-green-500" /> : <Clipboard />}
            <span className="ml-2">Copy ATS Block for Resumes</span>
        </Button>
       </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              custom={index}
              layout
            >
              <Card className="glassmorphic-card h-full transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <skill.icon className="w-7 h-7 text-primary" />
                    {skill.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <TooltipProvider>
                      {skill.content.map(item => (
                        <li key={item.item} className="flex items-start gap-2">
                           <ShieldCheck className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="cursor-default border-b border-dashed border-muted-foreground/30">{item.item}</span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">{item.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </li>
                      ))}
                    </TooltipProvider>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
