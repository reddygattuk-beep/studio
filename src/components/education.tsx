import { Section } from "./section"

const educationHistory = [
  {
    degree: "Master of Science in Electrical & Computer Engineering",
    institution: "University of Techland",
    period: "2018 - 2020",
    description: "Specialized in VLSI Design and Computer Architecture. Thesis on low-power asynchronous circuit design.",
  },
  {
    degree: "Bachelor of Science in Electronics Engineering",
    institution: "State Engineering College",
    period: "2014 - 2018",
    description: "Graduated with honors. Final year project involved designing and implementing an FPGA-based traffic light controller.",
  },
]

export default function Education() {
  return (
    <Section id="education">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
          My academic journey and foundation in engineering.
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/50 hidden md:block"></div>
        {educationHistory.map((edu, index) => (
          <div key={index} className="relative mb-12 md:mb-16">
            <div className="hidden md:block absolute top-1/2 left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 ring-4 ring-background"></div>
            <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-5/12"></div>
              <div className="md:w-1/12"></div>
              <div className="w-full md:w-6/12">
                <div className="glassmorphic-card p-6 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-8 duration-500">
                  <p className="text-sm text-muted-foreground mb-1">{edu.period}</p>
                  <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                  <h4 className="font-semibold text-lg mb-2">{edu.institution}</h4>
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
