import { Card, CardContent } from "@/components/ui/card"
import { Trophy, TrendingUp, Shield, Users } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "₦5 Billion Commercial Paper",
      description: "Assisted in structuring and securing a ₦5 billion commercial paper for company financing",
      color: "text-yellow-600",
    },
    {
      icon: TrendingUp,
      title: "25% Efficiency Improvement",
      description: "Improved payment processing efficiency by 25% through system optimization",
      color: "text-green-600",
    },
    {
      icon: Shield,
      title: "100% Audit Compliance",
      description: "Maintained 100% audit compliance across all managed financial operations",
      color: "text-blue-600",
    },
    {
      icon: Users,
      title: "Multi-Unit Operations",
      description:
        "Successfully managed financial operations across multiple business units with zero compliance issues",
      color: "text-purple-600",
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Key Achievements</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-muted ${achievement.color}`}>
                      <achievement.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-card-foreground mb-3">{achievement.title}</h3>
                      <p className="text-muted-foreground text-pretty">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Achievements */}
          <div className="mt-12 text-center">
            <Card className="bg-accent text-accent-foreground shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Professional Impact</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold mb-2">20%</div>
                    <div className="text-accent-foreground/80">Young Audience Growth</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">Zero</div>
                    <div className="text-accent-foreground/80">Compliance Issues</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">Multiple</div>
                    <div className="text-accent-foreground/80">Business Units Managed</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
