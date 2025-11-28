"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "m.s.shakhlul@gmail.com",
    href: "mailto:m.s.shakhlul@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+201140391547",
    href: "tel:+201140391547",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nasr City, Cairo, Egypt",
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/M-S-Shakhlul",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/maria-samuel-shakhlul",
  },
]

const languages = ["Arabic", "English"]

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div
        className={`container mx-auto max-w-4xl relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-foreground to-accent">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Contact Information */}
          <Card className="p-6 hover:shadow-xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300"
                >
                  <item.icon className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Social Links & Languages */}
          <div className="space-y-8">
            <Card className="p-6 hover:shadow-xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50">
              <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    asChild
                    variant="outline"
                    size="icon"
                    className="hover:scale-110 hover:border-accent hover:text-accent transition-all duration-300 bg-transparent"
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50">
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="flex gap-2">
                {languages.map((lang, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-secondary/20 text-secondary-foreground rounded-full border border-secondary/30 hover:bg-accent/20 hover:border-accent hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <Card className="p-8 text-center bg-card hover:shadow-2xl hover:shadow-accent/30 transition-all duration-500 border-2 hover:border-accent/50 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
            <Button
              asChild
              size="lg"
              className="gap-2 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-accent/50"
            >
              <a href="mailto:m.s.shakhlul@gmail.com">
                <Mail className="h-5 w-5" />
                Send Me an Email
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
