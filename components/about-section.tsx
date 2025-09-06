import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Executive Summary</h2>

          <Card className="bg-card border-border shadow-lg">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg leading-relaxed text-card-foreground text-pretty">
                Strategic finance professional with{" "}
                <strong className="text-accent">6+ years of progressive experience</strong> in financial management,
                operations oversight, and team leadership across diverse industries. Proven track record of implementing
                financial controls, driving cost optimization initiatives, and managing comprehensive financial
                operations.
              </p>

              <p className="text-lg leading-relaxed text-card-foreground mt-6 text-pretty">
                Demonstrated expertise in financial reporting, audit management, and stakeholder relations with a strong
                foundation in both operational finance and strategic planning. Successfully managed financial operations
                across multiple business units while maintaining
                <strong className="text-accent"> 100% audit compliance</strong> and achieving significant cost
                reductions.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">6+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">₦5B</div>
                  <div className="text-muted-foreground">Commercial Paper Structured</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">25%</div>
                  <div className="text-muted-foreground">Process Efficiency Improvement</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
