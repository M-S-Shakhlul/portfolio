"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Frameworks",
    skills: ["Vue.js", "Angular", "React", "Next.js"],
  },
  {
    title: "Backend",
    skills: ["PHP", "Node.js", "Express.js", "Laravel", "Django", "Odoo"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
]

export function Skills() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          skillCategories.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index])
            }, index * 150)
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
    <section id="skills" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_var(--accent)_1px,_transparent_1px)] bg-[length:50px_50px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-foreground to-accent">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className={`p-6 hover:shadow-xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50 ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4 text-accent">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-secondary/20 text-secondary-foreground rounded-full border border-secondary/30 hover:bg-accent/20 hover:border-accent hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
