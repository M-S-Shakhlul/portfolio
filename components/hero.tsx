"use client"

import { Github, Linkedin, Mail, MapPin, Phone, ArrowDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Image from "next/image"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
            {/* Profile Photo */}
            <div className="relative group">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-border shadow-2xl">
                  <Image
                    src="/images/maria-profile.jpg"
                    alt="Maria Samuel Shakhloul"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full p-3 shadow-lg animate-pulse-glow">
                  <Sparkles className="h-6 w-6" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance bg-clip-text text-transparent bg-gradient-to-r from-foreground via-accent to-primary bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
                  Maria Samuel Shakhloul
                </h1>

                <p className="text-xl sm:text-2xl md:text-3xl text-accent font-medium animate-glow">
                  Full Stack Open Source Developer
                </p>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed">
                Junior Full Stack Web Developer with a strong foundation in open source technologies and hands-on
                experience in building responsive web applications.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground pt-4">
                <a
                  href="tel:+201140391547"
                  className="flex items-center gap-2 hover:text-accent transition-all duration-300 hover:scale-110"
                >
                  <Phone className="h-4 w-4" />
                  <span className="hidden sm:inline">+201140391547</span>
                </a>
                <a
                  href="mailto:m.s.shakhlul@gmail.com"
                  className="flex items-center gap-2 hover:text-accent transition-all duration-300 hover:scale-110"
                >
                  <Mail className="h-4 w-4" />
                  <span className="hidden sm:inline">m.s.shakhlul@gmail.com</span>
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Cairo, Egypt
                </span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 pt-6">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-accent/50 bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent"
                >
                  <a href="https://github.com/M-S-Shakhlul" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    GitHub
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="gap-2 bg-transparent hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50 hover:bg-primary/10"
                >
                  <a href="https://linkedin.com/in/maria-samuel-shakhlul" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
