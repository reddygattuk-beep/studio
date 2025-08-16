import { Section } from "./section"

const experienceHistory = [
    {
    role: "Hardware and System Engineer Intern",
    company: "InnoMountain",
    location: "Remote, MA, USA",
    period: "Jul 2025 – Present",
    description: "Led wireless hardware/software prototyping and developed DSP algorithms for 5G/LTE/Wi-Fi on FPGAs and DSPs. Conducted system-level simulations, managed HW/SW integration, and evaluated performance through detection, estimation, and optimization.",
    current: true,
  },
  {
    role: "Semiconductor Device Fabrication Engineer Intern",
    company: "UIUC",
    location: "On-site, IL, USA",
    period: "May 2025 – Jul 2025",
    description: "Engaged in photolithography, deposition, and etching processes. Performed detailed device characterization and ensured verification of specifications.",
  },
  {
    role: "RTL Design Engineer Intern",
    company: "NIELIT",
    location: "Remote",
    period: "May 2024 – Aug 2024",
    description: "Focused on RTL design and verification using Verilog and SystemVerilog. Delivered synthesis-ready designs and developed comprehensive testbenches.",
  },
  {
    role: "Graduate Trainee",
    company: "TCS",
    location: "Hyderabad",
    period: "Nov 2022 – Aug 2023",
    description: "Provided development support using C++ and Python, while also managing project documentation and client deliverables.",
  },
  {
    role: "Academic Tutor",
    company: "Self-Employed",
    location: "India",
    period: "Aug 2020 – Aug 2023",
    description: "Tutored over 30 students in Math, Science, and C programming. Provided exam coaching for EAMCET/JEE and taught specialized subjects like DSP and Controls.",
  },
  {
    role: "Defence Hacker Intern",
    company: "Excelerate",
    location: "Remote",
    period: "May 2023 – Jun 2023",
    description: "Conducted cybersecurity research, including system analysis and penetration testing to identify and mitigate vulnerabilities.",
  },
  {
    role: "Artificial Intelligence Intern",
    company: "Cognizant",
    location: "Remote",
    period: "Jan 2022 – Jun 2022",
    description: "Supported AI/ML model development through dataset preparation, preprocessing, and performance evaluation.",
  },
  {
    role: "Electrical Engineering Technician",
    company: "Precision Engineering Works",
    location: "On-site",
    period: "May 2018 – Aug 2019",
    description: "Responsible for installing, troubleshooting, and maintaining electrical systems. Performed soldering, wiring, and assembly tasks.",
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
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/50 hidden md:block" />
        {experienceHistory.map((exp, index) => (
          <div key={index} className="relative mb-12 md:mb-16">
            <div className={`hidden md:block absolute top-1/2 left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 -translate-y-1/2 ring-4 ring-background ${exp.current ? 'bg-accent shadow-[0_0_12px_4px_hsl(var(--accent))]' : 'bg-primary'}`}></div>
            <div className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-5/12"></div>
              <div className="md:w-1/12"></div>
              <div className="w-full md:w-6/12">
                <div className="glassmorphic-card p-6 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-8 duration-500 hover:shadow-primary/20 transition-shadow">
                  <p className="text-sm text-muted-foreground mb-1">{exp.period}</p>
                  <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                  <h4 className="font-semibold text-lg mb-2">{exp.company} <span className="text-sm text-muted-foreground font-normal">- {exp.location}</span></h4>
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
