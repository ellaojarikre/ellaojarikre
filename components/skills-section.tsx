import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Financial Leadership & Strategy",
      skills: [
        { name: "Financial Planning & Analysis", level: 95 },
        { name: "Budget Management & Cost Control", level: 90 },
        { name: "Risk Assessment & Internal Controls", level: 88 },
        { name: "Strategic Financial Decision-Making", level: 85 },
      ],
    },
    {
      title: "Operations & Management",
      skills: [
        { name: "Team Leadership & Development", level: 92 },
        { name: "Cross-functional Collaboration", level: 90 },
        { name: "Process Improvement & Optimization", level: 88 },
        { name: "Stakeholder Management", level: 85 },
      ],
    },
    {
      title: "Technical Expertise",
      skills: [
        { name: "Financial Reporting & Compliance", level: 95 },
        { name: "Audit Coordination & Management", level: 90 },
        { name: "Account Reconciliation & Analysis", level: 92 },
        { name: "Data Analysis (Excel, PowerBI)", level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Core Competencies</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-card border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-card-foreground text-center">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-card-foreground">{skill.name}</span>
                        <span className="text-sm text-accent font-semibold">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
