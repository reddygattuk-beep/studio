import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Section } from "./section"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "RISC-V CPU Core",
    description: "A 5-stage pipelined RISC-V processor supporting the RV32I instruction set. Designed in Verilog and verified on a Xilinx Artix-7 FPGA.",
    image: "https://placehold.co/600x400/1E2364/9400D3?text=RISC-V",
    tags: ["Verilog", "FPGA", "RISC-V", "CPU Design"],
    link: "#",
    dataAiHint: "processor chip"
  },
  {
    title: "Low-Power Memory Controller",
    description: "An asynchronous DDR4 memory controller optimized for low-power applications in IoT devices. Implemented advanced power-gating techniques.",
    image: "https://placehold.co/600x400/1E2364/9400D3?text=RAM",
    tags: ["SystemVerilog", "UVM", "Low Power", "ASIC"],
    link: "#",
    dataAiHint: "memory ram"
  },
  {
    title: "CNN Accelerator SoC",
    description: "A complete System-on-Chip designed to accelerate Convolutional Neural Networks for edge AI. Features a custom dataflow architecture.",
    image: "https://placehold.co/600x400/1E2364/9400D3?text=AI",
    tags: ["ASIC", "SoC", "AI/ML", "Chisel"],
    link: "#",
    dataAiHint: "circuit board"
  },
  {
    title: "UVM Verification Environment",
    description: "A comprehensive, reusable UVM testbench for a complex SPI master/slave IP core. Achieved 100% functional and code coverage.",
    image: "https://placehold.co/600x400/1E2364/9400D3?text=UVM",
    tags: ["UVM", "SystemVerilog", "Verification", "IP Core"],
    link: "#",
    dataAiHint: "data graph"
  },
]

export default function Projects() {
  return (
    <Section id="projects" className="bg-card/30">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
          A selection of projects that demonstrate my skills in digital design and verification.
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="glassmorphic-card h-full flex flex-col group overflow-hidden">
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
                    <CardDescription className="h-20">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                    <Link href={project.link} className="text-sm font-semibold text-primary inline-flex items-center group/link">
                      Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </Section>
  )
}
