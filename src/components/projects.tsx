"use client";

import Image from "next/image"
import Link from "next/link"
import * as React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Section } from "./section"
import { ArrowRight, Cpu, Zap, MemoryStick, CircuitBoard, BrainCircuit, Microscope } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const projects = [
  {
    title: "32-bit Pipelined CPU with New ALU Architecture",
    tags: ["Verilog", "Cadence Xcelium", "Synopsys DC", "Innovus", "Formality", "STA", "RTL", "PD/Flow"],
    highlights: [
      "Developed a 32-bit pipelined MIPS-like CPU featuring a novel ALU and a 32-bit comparator.",
      "Achieved post-P&R Fmax of ~57 MHz (CRA), 55 MHz (CLA/CSeA), and 54 MHz (CSA).",
      "Ensured 100% RTL-to-post-layout equivalence using Synopsys Formality.",
    ],
    modalDetails: "In-depth analysis of adder trade-offs (Carry-Ripple, Carry-Lookahead, Carry-Select, Carry-Save) and detailed notes on achieving timing closure for each architecture. The new ALU design demonstrates significant performance improvements under specific instruction loads.",
    image: "https://9du0c01mm4og13n7.public.blob.vercel-storage.com/32%20bit%20CPU.png",
    dataAiHint: "CPU core"
  },
  {
    title: "Analysis & Comparison of 6T and 8T SRAM Cells",
    tags: ["HSPICE", "Low-Power", "Security-Aware Memory", "SRAM/Memory"],
    highlights: [
      "8T cell shows ~12% (for '0') and ~11% (for '1') lower leakage power compared to the 6T cell.",
      "Maintained similar delay (~4.6–80 ps) and dynamic power while significantly improving stability and security.",
    ],
    modalDetails: "The project includes detailed HSPICE simulation waveforms, comparative tables for leakage and delay, and a full methodology write-up. The 8T cell's design inherently offers better resilience against soft errors and side-channel attacks.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "memory cell circuit"
  },
  {
    title: "Standard Cell Based ASIC Flow for 8-bit Accumulator",
    tags: ["Verilog", "Xcelium", "DC", "Innovus/Encounter", "Formality", "GDSII", "STA", "PD/Flow"],
    highlights: [
      "Executed a complete RTL-to-GDSII flow using the FreePDK45 library.",
      "Successfully achieved timing closure with positive slack and 100% logical equivalence.",
    ],
    modalDetails: "Includes screenshots from SimVision and the final layout, with a summary of the Power, Performance, and Area (PPA) results. This project demonstrates proficiency in the end-to-end ASIC design lifecycle.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "ASIC design flow"
  },
  {
    title: "Hierarchical Design & Formal Verification of AND Gate",
    tags: ["Cadence Virtuoso", "DRC/LVS", "ESP Formal", "Verilog", "PD/Flow"],
    highlights: [
      "Achieved a clean DRC/LVS report and 100% formal equivalence between schematic and layout.",
      "Validated that the AND gate's delay accurately reflects the composed delays of NAND and INV stages.",
    ],
    modalDetails: "Features an illustration of the design hierarchy and the formal verification setup. This foundational project underscores a meticulous approach to physical design and verification.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "logic gate diagram"
  },
  {
    title: "4-bit Carry Ripple Adder – Hierarchical Design",
    tags: ["Virtuoso", "PEX", "ESP Formal", "Verilog", "RTL"],
    highlights: [
      "DRC/LVS clean and formally verified RTL against the schematic.",
      "Extracted post-layout delays to establish a baseline for more complex adder designs.",
    ],
    modalDetails: "Includes a Parasitic Extraction (PEX) diagram and a detailed timing table, providing critical data for subsequent high-performance arithmetic circuit designs.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "adder circuit"
  },
  {
    title: "Carry Ripple Adder – Layout & Verification",
    tags: ["Virtuoso", "DRC/LVS", "PEX", "Xcelium", "PD/Flow"],
    highlights: [
      "Managed the end-to-end process from schematic entry to post-layout verification.",
      "Measured critical-path delays to validate theoretical performance.",
    ],
    modalDetails: "A micro-gallery of the layout and post-layout simulation results are available, showing the physical implementation and its performance characteristics.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "chip layout"
  },
  {
    title: "Low-Power ALU with Clock & Power Gating",
    tags: ["Verilog", "MTCMOS", "Xilinx Vivado", "Low-Power", "RTL"],
    highlights: [
      "Clock gating effectively reduced dynamic power, while power gating minimized leakage.",
      "The combined gating strategy yielded the highest total power savings while meeting timing constraints.",
    ],
    modalDetails: "A comparative analysis of the baseline ALU versus the clock-gated, power-gated, and combined-gating versions, with detailed power reports and timing summaries from Vivado.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "power savings graph"
  },
  {
    title: "MTCMOS-Based Power Gating for Low-Leakage Circuits",
    tags: ["Verilog", "MTCMOS", "Vivado", "Low-Power"],
    highlights: [
      "Achieved significant leakage reduction during standby mode.",
      "Preserved logic state and correctness across wake/sleep cycles.",
    ],
    modalDetails: "Provides insights into sleep transistor sizing and its impact on wake-up time and leakage savings. A key project for low-power mobile and IoT applications.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "transistor diagram"
  },
  {
    title: "FPGA-Accelerated VGG-Based CNN",
    tags: ["VHDL/Verilog", "Vivado", "Pipelining", "Quantization", "Parallelism", "FPGA/ML"],
    highlights: [
      "Achieved real-time image classification speed-up on an FPGA.",
      "Maintained high classification accuracy with a reduced resource footprint through quantization.",
    ],
    modalDetails: "Includes charts detailing resource utilization (LUTs, FFs, BRAMs, DSPs) and throughput analysis. A deep dive into the hardware/software co-design for machine learning.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "neural network"
  },
  {
    title: "Gate Delay & Power Analysis of CMOS Logic Gates",
    tags: ["Cadence Virtuoso", "Transient Sim", "Power/Delay", "PD/Flow"],
    highlights: ["Demonstrated that NAND/NOR gates are inherently slower than inverters.", "Analyzed how capacitive load increases both delay and power consumption."],
    modalDetails: "Features plots illustrating the speed-power trade-offs for fundamental CMOS logic gates, providing a solid foundation for performance estimation.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "simulation waveform"
  },
  {
    title: "CMOS Inverter – Schematic, Layout, & Analysis",
    tags: ["Virtuoso", "DRC/LVS", "Transient Sim", "PD/Flow"],
    highlights: [
      "DRC/LVS clean layout with symmetric rise and fall times achieved through precise transistor sizing.",
    ],
    modalDetails: "This project provides the baseline metrics for propagation delay, rise/fall times, and power consumption that inform all subsequent digital circuit designs.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "cmos inverter"
  },
];

const filters = ["All", "RTL", "PD/Flow", "Low-Power", "SRAM/Memory", "FPGA/ML"];

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

export default function Projects() {
    const [activeFilter, setActiveFilter] = React.useState("All");

    const filteredProjects = React.useMemo(() => {
        if (activeFilter === "All") {
          return projects;
        }
        return projects.filter((project) =>
          project.tags.includes(activeFilter)
        );
      }, [activeFilter]);


  return (
    <Section id="projects" className="bg-card/30">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
          A selection of projects that demonstrate my skills in digital design and verification.
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
                key={project.title}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                custom={index}
                layout
            >
            <Dialog>
              <DialogTrigger asChild>
                <Card className="glassmorphic-card h-full flex flex-col group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2">
                  <CardHeader>
                    <div className="overflow-hidden rounded-lg mb-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint={project.dataAiHint}
                      />
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 mb-4 h-28">
                        {project.highlights.map((highlight, i) => <li key={i}>{highlight}</li>)}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.slice(0,4).map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl bg-background/80 backdrop-blur-lg glassmorphic-card">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-primary">{project.title}</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
                    <div className="space-y-4">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="object-cover w-full rounded-lg"
                            data-ai-hint={project.dataAiHint}
                        />
                         <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <Badge key={tag} variant="outline">{tag}</Badge>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Highlights</h3>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            {project.highlights.map((highlight, i) => <li key={i}>{highlight}</li>)}
                        </ul>
                        <h3 className="font-bold text-lg pt-4">Details</h3>
                        <p className="text-muted-foreground">{project.modalDetails}</p>
                    </div>
                </div>
              </DialogContent>
            </Dialog>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  )
}
