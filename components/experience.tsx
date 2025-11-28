"use client"

import { Card } from "@/components/ui/card"
import { Briefcase, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    title: "9-Month Professional Training Program",
    organization: "Information Technology Institute (ITI)",
    location: "Minia Branch",
    period: "2025",
    type: "training",
    description: "Open Source Track - Intensive full-stack development training",
  },
  {
    title: "Technical Team Member",
    organization: "GDG Minia",
    location: "Minia, Egypt",
    period: "Volunteer",
    type: "volunteer",
    description: "Helped organize technical events and community meetups",
  },
]

export function Experience() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          experiences.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index])
            }, index * 200)
          })
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
    <section id="experience" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-foreground to-accent">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`p-6 hover:shadow-xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-1 border-2 hover:border-accent/50 ${
                visibleItems.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {exp.type === "training" ? (
                    <Briefcase className="h-6 w-6 text-accent" />
                  ) : (
                    <Users className="h-6 w-6 text-accent" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-semibold hover:text-accent transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-muted-foreground px-3 py-1 bg-secondary/20 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-accent font-medium mb-2">
                    {exp.organization} • {exp.location}
                  </p>
                  <p className="text-muted-foreground text-pretty leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
