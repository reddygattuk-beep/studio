"use client";

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "./section";
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { BookOpen, Cpu, Power, ShieldCheck, FileCheck2, Terminal, Network, Bot, FileText, Copy, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const rtlSkillsData = [
  {
    title: "RTL Fundamentals",
    category: "Fundamentals",
    icon: BookOpen,
    content: [
      { item: "Verilog/SystemVerilog for synthesizable RTL", tooltip: "Focus on synthesizable constructs and best practices." },
      { item: "FSM design (Mealy/Moore), pipelines", tooltip: "Designing state machines and pipelined architectures for performance." },
      { item: "valid/ready handshakes", tooltip: "Standard protocol for flow control between modules." },
      { item: "Parameterization (params, generate)", tooltip: "Creating flexible and reusable RTL modules." },
      { item: "Clocking/reset strategies (sync/async)", tooltip: "Designing robust clocking and reset schemes." },
    ]
  },
  {
    title: "Microarchitecture",
    category: "Microarchitecture",
    icon: Cpu,
    content: [
      { item: "Spec → block diagram → RTL plan", tooltip: "Translating specifications into a detailed microarchitecture plan." },
      { item: "Datapaths, control-path separation", tooltip: "Designing clean and efficient data and control paths." },
      { item: "FIFOs, arbiters, counters", tooltip: "Implementing common building blocks for complex systems." },
      { item: "Latency/throughput trade-offs", tooltip: "Analyzing and optimizing for performance bottlenecks." },
      { item: "X-safe coding; blocking vs nonblocking", tooltip: "Writing robust RTL that is resilient to unknown states." },
    ]
  },
  {
    title: "Low-Power RTL",
    category: "Low-Power",
    icon: Power,
    content: [
      { item: "Clock gating enables; operand isolation", tooltip: "Techniques to reduce dynamic power consumption." },
      { item: "Hooks for power domains (UPF/CPF)", tooltip: "Adding necessary logic for power management." },
      { item: "Multi-Vt/multi-VDD hooks", tooltip: "Designing for multiple voltage and threshold domains." },
      { item: "Glitch avoidance and bus parking", tooltip: "Minimizing unnecessary switching activity." },
    ]
  },
  {
    title: "Quality & Static Checks",
    category: "Quality",
    icon: ShieldCheck,
    content: [
      { item: "Lint (SpyGlass/AscentLint) zero-error", tooltip: "Ensuring code quality with static analysis tools." },
      { item: "CDC/RDC setup & disciplined waivers", tooltip: "Managing clock and reset domain crossings." },
      { item: "Synthesis sanity (DC/Genus)", tooltip: "Checking for issues like inferred latches and multi-drivers." },
      { item: "X-propagation awareness", tooltip: "Understanding and mitigating the impact of unknown states." },
    ]
  },
  {
    title: "Verification-Readiness",
    category: "Interfaces",
    icon: FileCheck2,
    content: [
      { item: "UVM-friendly interfaces; SVA hooks", tooltip: "Designing RTL with verification in mind." },
      { item: "Reference models alignment", tooltip: "Ensuring RTL behavior matches the golden reference model." },
      { item: "Functional coverage hooks", tooltip: "Adding assertions and coverpoints for verification." },
      { item: "Register maps (CSR/RAL)", tooltip: "Defining and managing control and status registers." },
    ]
  },
    {
    title: "Tools & Environments",
    category: "Automation",
    icon: Terminal,
    content: [
        { item: "Simulators: Xcelium, VCS, Questa", tooltip: "Running regressions and debugging issues." },
        { item: "Synthesis: Synopsys DC, Cadence Genus", tooltip: "Synthesizing RTL to gate-level netlists." },
        { item: "Debug: Verdi, SimVision", tooltip: "Analyzing waveforms and debugging designs." },
        { item: "PnR awareness & SDC handoff", tooltip: "Understanding physical design constraints." },
    ]
  },
  {
    title: "Protocols & Interfaces",
    category: "Interfaces",
    icon: Network,
    content: [
      { item: "AMBA AXI4/AXI4-Lite/AHB/APB", tooltip: "Standard on-chip bus protocols." },
      { item: "Async FIFOs, CDC bridges", tooltip: "Handling data transfer between different clock domains." },
      { item: "I2C/SPI/UART", tooltip: "Common serial communication protocols." },
      { item: "PCIe, DDR, Ethernet/USB basics", tooltip: "Familiarity with high-speed interfaces." },
    ]
  },
    {
    title: "Automation & Productivity",
    category: "Automation",
    icon: Bot,
    content: [
        { item: "Python/Tcl/Bash for automation", tooltip: "Scripting for builds, simulations, and report extraction." },
        { item: "Make/CMake; regression orchestration", tooltip: "Managing complex build and regression flows." },
        { item: "Template generators", tooltip: "Automating the creation of boilerplate code." },
        { item: "Pre-commit hooks; lint in CI", tooltip: "Enforcing code quality standards automatically." },
    ]
  },
  {
    title: "Deliverables & Metrics",
    category: "Deliverables",
    icon: FileText,
    content: [
      { item: "RTL spec, microarchitecture doc", tooltip: "Clear and comprehensive design documentation." },
      { item: "Clean lint/CDC reports", tooltip: "Ensuring high-quality, robust RTL." },
      { item: "Synthesis QoR (area/timing/power)", tooltip: "Meeting performance, power, and area targets." },
      { item: "Code/functional/assertion coverage", tooltip: "Ensuring thorough verification." },
    ]
  }
];

const filters = ["All", "Fundamentals", "Microarchitecture", "Low-Power", "Quality", "Interfaces", "Automation", "Deliverables"];

const atsBlock = "RTL Design: Verilog/SystemVerilog (synthesizable), FSMs/pipelines, valid-ready handshakes, parameterized/generate code, interfaces/packages; low-power hooks (clock/data gating, isolation/retention), CDC-aware resets; lint/CDC/RDC clean, X-safe coding; simulators (Xcelium/VCS/Questa), synthesis (DC/Genus), debug (Verdi/SimVision); UVM-ready interfaces, SVA/coverage hooks, CSR/RAL; AXI/AHB/APB, I2C/SPI/UART; automation with Python/Tcl/Make, CI regressions; clean QoR + documented handoff.";

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

export default function RtlDesign() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const filteredSkills = useMemo(() => {
    if (activeFilter === "All") {
      return rtlSkillsData;
    }
    return rtlSkillsData.filter((skill) => skill.category === activeFilter);
  }, [activeFilter]);

  const handleCopy = () => {
    navigator.clipboard.writeText(atsBlock).then(() => {
        setCopied(true);
        toast({ title: "Copied to clipboard!", description: "ATS-friendly block is ready to paste." });
        setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        toast({ variant: "destructive", title: "Copy Failed", description: "Could not copy text to clipboard." });
    });
  };

  return (
    <Section id="rtl">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">RTL Design</h2>
        <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed">
          From microarchitecture to synthesizable logic, a showcase of my RTL design capabilities.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
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
      
       <div className="flex justify-center mb-12">
        <Button onClick={handleCopy} variant="outline" className="glassmorphic-card group">
          {copied ? <Check className="mr-2 text-green-500" /> : <Copy className="mr-2 group-hover:text-accent" />}
          {copied ? "Copied!" : "Copy ATS Block"}
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
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                    <TooltipProvider>
                    {skill.content.map(item => (
                        <li key={item.item} className="flex items-start gap-2">
                        <Cpu className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
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
  )
}
