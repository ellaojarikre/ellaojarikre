import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Finance Officer",
      company: "Finceptive Limited",
      location: "Lekki, Lagos",
      period: "April 2024 – Present",
      description: "Leading comprehensive financial operations and strategic initiatives",
      achievements: [
        "Oversee comprehensive financial operations including general ledger management",
        "Lead preparation of monthly, quarterly, and annual financial reports",
        "Streamlined payment processing systems, improving efficiency by 25%",
        "Manage banking relationships and coordinate with financial partners",
      ],
      current: true,
    },
    {
      title: "Account Assistant",
      company: "DX Technology Limited - OPPO Nigeria",
      location: "Ikeja, Lagos",
      period: "February 2023 – April 2024",
      description: "Managed financial operations across multiple service centers nationwide",
      achievements: [
        "Managed financial operations across multiple service centers nationwide",
        "Developed comprehensive financial reporting systems for after-sales operations",
        "Conducted variance analysis of income and expenditure across all business units",
        "Implemented improved tracking systems for cash and bank transactions",
      ],
    },
    {
      title: "Administration/Finance Manager",
      company: "Lydia Nursing Home & Maternity",
      location: "Ogba, Lagos",
      period: "July 2019 – January 2023",
      description: "Led financial and administrative operations to achieve organizational strategic goals",
      achievements: [
        "Led financial and administrative operations to achieve strategic goals",
        "Achieved significant cost reduction in overall expenditure through strategic analysis",
        "Managed comprehensive employee relations including payroll and benefits",
        "Provided executive-level financial reporting directly to CEO",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Professional Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-card-foreground flex items-center gap-3">
                        {exp.title}
                        {exp.current && (
                          <Badge variant="secondary" className="bg-accent text-accent-foreground">
                            Current
                          </Badge>
                        )}
                      </CardTitle>
                      <p className="text-lg font-semibold text-accent mt-1">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground mb-4 text-pretty">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-card-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-pretty">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
