"use client";

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "./section"
import { Copy, Layers, Timer, Zap, ShieldCheck, Cpu, DraftingCompass, CheckSquare, Power, Bot } from "lucide-react"
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

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

const filters = ["All", "Flow", "Timing/Noise", "Power", "Signoff", "Automation"];

const atsBlockText = "Physical Design: floorplan, PG planning (rings/straps/mesh), placement, CTS (skew/latency/useful skew/clock gating), routing (global/detail, NDR), congestion & ECO closure; STA (MMMC, SDC, CRPR, OCV/AOCV/POCV), SI/crosstalk; low-power UPF (isolation/level shifters/retention), multi-Vt/multi-VDD, clock/power gating; signoff—Calibre/Pegasus DRC/LVS, StarRC/QRC PEX, PrimeTime/Tempus, Voltus/RedHawk; ECO (timing/functional/metal-only); tools: Cadence Innovus/Encounter, Synopsys ICC2/Fusion Compiler; scripting: Tcl/Python; CI dashboards.";

export default function PhysicalDesign() {
  const [activeFilter, setActiveFilter] = React.useState("All");
  const { toast } = useToast();

  const filteredSkills = React.useMemo(() => {
    if (activeFilter === "All") {
      return pdSkillsData;
    }
    return pdSkillsData.filter((skill) => skill.category === activeFilter);
  }, [activeFilter]);

  const handleCopy = () => {
    navigator.clipboard.writeText(atsBlockText);
    toast({
      title: "Copied to Clipboard",
      description: "ATS-friendly text block is ready to paste.",
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <Section id="pd" className="pd-background">
      <div className="relative z-10">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Physical Design</h2>
          <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed">
            From netlist to GDSII, I specialize in turning synthesized logic into performant, power-efficient, and robust silicon layouts.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
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
           <Button variant="ghost" size="sm" onClick={handleCopy} className="ml-4">
              <Copy className="mr-2 h-4 w-4" /> Copy ATS Block
            </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
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
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
