"use client";

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "./section"
import { Code, GitMerge, FileCheck2, Zap, Microscope, BrainCircuit, MemoryStick, Terminal, ShieldCheck, FileText, Brain, Network, Layers, Timer, Power, CheckSquare, Bot, DraftingCompass, BookOpen, Cpu, Copy, Check } from "lucide-react"
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { SkillIcon } from '@/components/skill-icon';

const skillsData = {
  "HDL & RTL Design": {
    icon: Code,
    items: ["Verilog", "SystemVerilog", "VHDL", "RTL Microarchitecture", "Hierarchical Design", "Testbench Development"],
    tags: ["RTL", "Design Verification"],
  },
  "ASIC Design Flow": {
    icon: GitMerge,
    items: ["RTL Simulation", "Logic Synthesis", "Place & Route", "Formal Verification", "Static Timing Analysis", "PPA Trade-off Analysis"],
    tags: ["Physical Design", "Design Verification"],
  },
  "EDA Tools": {
    icon: Terminal,
    items: ["Cadence Virtuoso", "Cadence Innovus", "Cadence Xcelium", "Synopsys DC", "Synopsys Formality", "Xilinx Vivado"],
    tags: ["Physical Design", "RTL", "Design Verification"],
  },
  "Low-Power Techniques": {
    icon: Zap,
    items: ["Clock Gating", "Power Gating", "MTCMOS", "Leakage Power Reduction", "Dynamic Power Optimization"],
    tags: ["Physical Design", "Low-Power"],
  },
  "Digital Design & Verification": {
    icon: Microscope,
    items: ["CMOS Schematic/Layout", "DRC/LVS/PEX", "Propagation Delay", "Waveform Analysis", "FPGA Prototyping"],
    tags: ["Design Verification", "FPGA"],
  },
  "ML Hardware Acceleration": {
    icon: BrainCircuit,
    items: ["CNN/VGG Implementation", "Pipelining", "Parallel Processing", "Fixed-Point Quantization"],
    tags: ["RTL", "FPGA"],
  },
  "Memory Design": {
    icon: MemoryStick,
    items: ["6T/8T SRAM Design", "Stability Analysis", "Leakage Reduction", "Security-Aware Design"],
    tags: ["Memory", "Physical Design"],
  },
  "Programming & Scripting": {
    icon: Code,
    items: ["Python", "TCL", "Bash", "EDA Automation"],
    tags: ["Design Verification", "Physical Design", "RTL"],
  },
};

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

const dvSkillsData = [
    {
      title: "Core DV Skills",
      category: "Design Verification",
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
      category: "Design Verification",
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
      category: "Design Verification",
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
      category: "Design Verification",
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
      category: "Design Verification",
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

const pdSkillsData = [
  {
    title: "Core PD Flow",
    category: "Flow",
    icon: Layers,
    content: [
      { item: "Floorplanning", tooltip: "IO/macro placement, keepouts/blockages, hierarchy planning" },
      { item: "Power planning", tooltip: "Rings/straps/mesh, PG grid budgeting, decaps" },
      { item: "Placement", tooltip: "Utilization, clustering, legalization, congestion-driven optimization" },
      { item: "CTS", tooltip: "Skew/latency, useful skew, gating checks, shielding, uncertainty" },
      { item: "Routing", tooltip: "Global/detail, NDRs, shielding, DRC-aware" },
      { item: "ECO closure", tooltip: "Timing/functional, metal-only ECO" },
    ]
  },
  {
    title: "Timing & Noise (STA/SI)",
    category: "Timing/Noise",
    icon: Timer,
    content: [
      { item: "MMMC setup; SDC constraints", tooltip: "Multi-mode multi-corner analysis with proper timing constraints." },
      { item: "WNS/TNS/Hold analysis", tooltip: "Worst Negative Slack, Total Negative Slack, and Hold time analysis." },
      { item: "CRPR; derates OCV/AOCV/POCV", tooltip: "Common Path Pessimism Removal; On-Chip Variation handling with advanced derating." },
      { item: "SI/crosstalk analysis", tooltip: "Signal Integrity checks for transition/capacitance limits, fixed with shielding/spacing." },
      { item: "Tools & Scripting", tooltip: "PrimeTime/Tempus; automated report_timing; managing exceptions." },
    ]
  },
  {
    title: "Power & Low-Power Integration",
    category: "Power",
    icon: Power,
    content: [
      { item: "Dynamic/leakage analysis", tooltip: "Analyzing and optimizing for both switching and static power." },
      { item: "Multi-Vt/multi-VDD", tooltip: "Using multiple threshold voltages and voltage domains for power optimization." },
      { item: "UPF/CPF Integration", tooltip: "Using Unified/Common Power Format for specifying power intent." },
      { item: "Power state verification", tooltip: "Verifying isolation, level shifters, and retention cells." },
      { item: "IR/EM signoff", tooltip: "Voltus/RedHawk; grid optimization, via pillars, strap sizing." },
    ]
  },
  {
    title: "Physical Verification & DFM",
    category: "Signoff",
    icon: CheckSquare,
    content: [
      { item: "DRC/LVS signoff", tooltip: "Calibre/Pegasus; fixing Design Rule and Layout vs. Schematic violations." },
      { item: "Antenna, density, ERC checks", tooltip: "Specialized checks for manufacturability and reliability." },
      { item: "Extraction (PEX)", tooltip: "StarRC/QRC; corner setup; parasitic back-annotation." },
      { item: "Tapeout prep", tooltip: "GDS/OASIS generation, layer mapping, and final checks." },
    ]
  },
  {
    title: "Automation & Infrastructure",
    category: "Automation",
    icon: Bot,
    content: [
      { item: "Scripting", tooltip: "Tcl (Innovus/ICC2), Python; Make; Git version control." },
      { item: "Reproducible flows", tooltip: "Creating robust, automated design flows from RTL to GDS." },
      { item: "CI/CD", tooltip: "Jenkins/GitLab for continuous integration and regression management." },
      { item: "Data Management", tooltip: "Log scraping, creating dashboards, and batch STA/congestion/IR reports." },
    ]
  }
];


const filters = ["All", "RTL", "Physical Design", "Design Verification", "Low-Power", "FPGA", "Memory"];

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
  
  const filteredDvSkills = React.useMemo(() => {
    if (activeFilter === "All" || activeFilter === "Design Verification") {
        return dvSkillsData;
    }
    return [];
  }, [activeFilter]);

  const filteredPdSkills = React.useMemo(() => {
    if (activeFilter === "All" || activeFilter === "Physical Design") {
        return pdSkillsData;
    }
    return [];
  }, [activeFilter]);

  const filteredRtlSkills = React.useMemo(() => {
    if (activeFilter === "All" || activeFilter === "RTL") {
        return rtlSkillsData;
    }
    return [];
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
    <Section id="skills" className="relative overflow-hidden bg-background">
      <div className="relative z-10">
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
            {(activeFilter !== "Design Verification" && activeFilter !== "Physical Design" && activeFilter !== "RTL") && filteredSkills.map(([category, details], index) => (
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
                           <SkillIcon skill={item} />
                           <span className="transition-all duration-300 group-hover:pr-2">{item}</span>
                         </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            {filteredRtlSkills.map((skill, index) => (
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
            {filteredPdSkills.map((skill, index) => (
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
                            <DraftingCompass className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
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
             {filteredDvSkills.map((skill, index) => (
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
      </div>
    </Section>
  )
}
