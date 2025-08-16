import { Section } from "./section"

const experienceHistory = [
  {
    role: "Senior Digital Design Engineer",
    company: "CoreLogic Inc.",
    period: "2020 - Present",
    description: "Led the design and verification of a next-generation System-on-Chip (SoC) for AI acceleration. Implemented complex RTL modules in SystemVerilog and developed a comprehensive UVM-based verification environment.",
  },
  {
    role: "VLSI Design Intern",
    company: "ChipWorks",
    period: "Summer 2019",
    description: "Contributed to the physical design flow, focusing on static timing analysis (STA) and power grid analysis for a 7nm ASIC project. Gained hands-on experience with Cadence and Synopsys EDA tools.",
  },
]

export default function Experience() {
  return (
    <Section id="experience" className="bg-card/30">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
          A timeline of my professional roles and contributions in the VLSI industry.
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/50 hidden md:block"></div>
        {experienceHistory.map((exp, index) => (
          <div key={index} className="relative mb-12 md:mb-16">
            <div className="hidden md:block absolute top-1/2 left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 ring-4 ring-background"></div>
            <div className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-5/12"></div>
              <div className="md:w-1/12"></div>
              <div className="w-full md:w-6/12">
                <div className="glassmorphic-card p-6 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-8 duration-500">
                  <p className="text-sm text-muted-foreground mb-1">{exp.period}</p>
                  <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                  <h4 className="font-semibold text-lg mb-2">{exp.company}</h4>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
