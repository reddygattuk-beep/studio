import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "./section"
import { Code, Cpu, Layers, GitMerge, FileCheck2, Search } from "lucide-react"

const VhdlSvg = () => <svg viewBox="0 0 100 100" className="h-8 w-8 text-accent"><text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="30" fontWeight="bold" fill="currentColor">VHDL</text></svg>
const VerilogSvg = () => <svg viewBox="0 0 100 100" className="h-8 w-8 text-accent"><text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="24" fontWeight="bold" fill="currentColor">Verilog</text></svg>
const UvmSvg = () => <svg viewBox="0 0 100 100" className="h-8 w-8 text-accent"><text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="35" fontWeight="bold" fill="currentColor">UVM</text></svg>

const skills = [
  {
    category: "Hardware Description Languages",
    icon: Code,
    items: [
      { name: "SystemVerilog", icon: VerilogSvg },
      { name: "Verilog", icon: VerilogSvg },
      { name: "VHDL", icon: VhdlSvg },
    ],
  },
  {
    category: "Verification Methodologies",
    icon: FileCheck2,
    items: [
      { name: "UVM", icon: UvmSvg },
      { name: "OVM", icon: UvmSvg },
      { name: "Formal Verification", icon: Search },
    ],
  },
  {
    category: "Design & Architecture",
    icon: Cpu,
    items: [
      { name: "ASIC/SoC Design", icon: Cpu },
      { name: "FPGA Prototyping", icon: Layers },
      { name: "RTL Design", icon: GitMerge },
    ],
  },
  {
    category: "EDA Tools & Scripting",
    icon: Code,
    items: [
      { name: "Cadence/Synopsys", icon: Cpu },
      { name: "Python/Tcl", icon: Code },
      { name: "Shell Scripting", icon: Code },
    ],
  },
]

export default function Skills() {
  return (
    <Section id="skills">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
          A toolbox of languages, methodologies, and tools I use to build robust digital systems.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {skills.map((skillCategory) => (
          <Card key={skillCategory.category} className="glassmorphic-card transition-all duration-300 hover:shadow-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <skillCategory.icon className="w-7 h-7 text-primary" />
                {skillCategory.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                {skillCategory.items.map((item) => (
                  <div key={item.name} className="flex items-center gap-2 p-3 rounded-lg bg-background/50 transition-all duration-300 hover:scale-105 hover:bg-primary/10">
                    <item.icon />
                    <span className="font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
