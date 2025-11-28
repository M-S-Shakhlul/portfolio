"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
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
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />

      <div
        className={`container mx-auto max-w-4xl relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-foreground to-accent">
          About Me
        </h2>
        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
          <p className="text-pretty text-lg hover:text-foreground transition-colors duration-300">
            I'm a Junior Full Stack Web Developer with a strong foundation in open source technologies and hands-on
            experience in building responsive web applications. Skilled in using modern frameworks like Laravel, Vue.js,
            Node.js, and Angular to develop both frontend and backend solutions.
          </p>
          <p className="text-pretty text-lg hover:text-foreground transition-colors duration-300">
            I graduated from the Faculty of Computers and Information at Minia University and completed a 9-month
            intensive Open Source training program at the Information Technology Institute (ITI). I'm passionate about
            writing clean, maintainable code, collaborating in team environments, and continuously learning new
            technologies.
          </p>
        </div>
      </div>
    </section>
  )
}
