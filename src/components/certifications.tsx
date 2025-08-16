import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "./section"
import { Award } from "lucide-react"

const certifications = [
  {
    title: "Certified UVM Professional",
    issuer: "Synopsys",
    year: "2023",
  },
  {
    title: "Xilinx Certified FPGA Designer",
    issuer: "Xilinx",
    year: "2022",
  },
  {
    title: "Cadence Digital Design Flow",
    issuer: "Cadence",
    year: "2021",
  },
]

export default function Certifications() {
  return (
    <Section id="certifications">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Certifications & Awards</h2>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
          Recognition of my dedication and expertise in the field of VLSI and digital design.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <Card key={index} className="glassmorphic-card transition-all duration-300 hover:scale-105 hover:shadow-primary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">{cert.title}</CardTitle>
              <Award className="h-6 w-6 text-accent" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              <Badge variant="outline" className="mt-4">{cert.year}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
