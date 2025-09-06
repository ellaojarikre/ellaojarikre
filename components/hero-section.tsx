import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, Phone, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-background via-card to-muted overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23374151' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="block text-balance">Emmanuella</span>
              <span className="block text-accent">Ejiro-Oghene</span>
              <span className="block">Ojarikre</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
              Strategic Finance Professional & Operations Leader
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              6+ years of progressive experience in financial management, operations oversight, and team leadership
              across diverse industries. Proven track record of implementing financial controls and driving cost
              optimization initiatives.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>08103159500</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>ellaojarikre@gmail.com</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="#experience" className="flex items-center gap-2">
                View My Experience
                <ArrowDown size={18} />
              </a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-muted-foreground" size={24} />
          </div>
        </div>
      </div>
    </section>
  )
}
