"use client"

import { Card } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const education = [
  {
    degree: "Bachelor's in Computer Science",
    institution: "Minia University",
    year: "2024",
    grade: "Very Good",
    gpa: "3.23",
  },
]

const certifications = ["CCNA", "Frontend Web Development Program – MCIT DEPI"]

const courses = [
  { name: "WordPress", platform: "Coursera" },
  { name: "React.js", platform: "Mahara-Tech" },
  { name: "PHP & MySQL", platform: "Mahara-Tech" },
  { name: "Introduction to MongoDB", platform: "Mahara-Tech" },
]

export function Education() {
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
    <section id="education" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div
        className={`container mx-auto max-w-6xl relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-foreground to-accent">
          Education & Certifications
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-accent" />
              Education
            </h3>
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50"
              >
                <h4 className="text-xl font-semibold mb-2 hover:text-accent transition-colors duration-300">
                  {edu.degree}
                </h4>
                <p className="text-accent font-medium mb-2">{edu.institution}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="px-2 py-1 bg-secondary/20 rounded">{edu.year}</span>
                  <span>•</span>
                  <span className="px-2 py-1 bg-secondary/20 rounded">{edu.grade}</span>
                  <span>•</span>
                  <span className="px-2 py-1 bg-accent/20 text-accent rounded font-medium">GPA: {edu.gpa}</span>
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-accent" />
              Certifications
            </h3>
            <Card className="p-6 hover:shadow-xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50">
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 hover:translate-x-2 transition-transform duration-300"
                  >
                    <span className="text-accent mt-1 text-xl">•</span>
                    <span className="hover:text-accent transition-colors duration-300">{cert}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-accent" />
            Courses & Training
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="p-4 hover:shadow-xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50 group"
              >
                <p className="font-medium mb-1 group-hover:text-accent transition-colors duration-300">{course.name}</p>
                <p className="text-sm text-muted-foreground">{course.platform}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
