"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const projects = [
  {
    title: "DevMatch",
    description:
      "Full-stack developer matching platform connecting top developers with clients. Features real-time matching, project management, and secure communication.",
    technologies: ["Express.js", "React", "MongoDB", "Socket.io"],
    role: "Back-End & Front-End",
    images: ["/images/projects/devmatch-1.jpg", "/images/projects/devmatch-2.jpg", "/images/projects/devmatch-3.jpg"],
    links: {
      github: [
        { label: "Frontend", url: "https://github.com/M-S-Shakhlul/DevMatch-Front.git" },
        { label: "Backend", url: "https://github.com/M-S-Shakhlul/DevMatch-back.git" },
      ],
    },
  },
  {
    title: "Job Board",
    description:
      "Complete job listing and application platform with admin dashboard, candidate tracking, and advanced filtering. Supports full-time and remote positions.",
    technologies: ["Laravel", "Vue.js", "MySQL", "Tailwind CSS"],
    role: "Full Stack",
    images: [
      "/images/projects/job-board-1.jpg",
      "/images/projects/job-board-2.jpg",
      "/images/projects/job-board-3.jpg",
    ],
    links: {
      github: "https://github.com/M-S-Shakhlul/vue-laravel-project.git",
    },
  },
  {
    title: "Skin Cancer Detection App",
    description:
      "Mobile app for detecting skin cancer using ML. Allows users to capture skin images, get AI-powered analysis, and book appointments with doctors.",
    technologies: ["Flutter", "Machine Learning", "Firebase", "TensorFlow"],
    role: "Graduation Project",
    grade: "Excellent",
    images: [],
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with product management, shopping cart, secure checkout, and admin dashboard. Features real-time inventory tracking and order management.",
    technologies: ["Angular", "Node.js", "Express.js", "MongoDB"],
    role: "Full Stack (Frontend & Backend)",
    images: [
      "/images/projects/ecommerce-1.jpg",
      "/images/projects/ecommerce-2.jpg",
      "/images/projects/ecommerce-3.jpg",
    ],
    links: {
      github: [
        { label: "Angular App", url: "https://github.com/M-S-Shakhlul/Angular-Ecommerce.git" },
        { label: "Node API", url: "https://github.com/M-S-Shakhlul/Ecommerce-NodeJs.git" },
      ],
    },
  },
  {
    title: "Amazon Clone",
    description:
      "Pixel-perfect responsive clone of Amazon's interface with product listings, search functionality, and shopping cart. Fully responsive design.",
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    role: "Frontend",
    images: ["/images/projects/amazon-1.png", "/images/projects/amazon-2.png"],
    links: {
      github: "https://github.com/M-S-Shakhlul/amazonclone.git",
    },
  },
  {
    title: "Cafeteria System",
    description:
      "Order management system for cafeteria operations with user authentication, product catalog, cart management, and order tracking.",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    role: "Full Stack",
    images: [
      "/images/projects/cafeteria-1.jpg",
      "/images/projects/cafeteria-2.jpg",
      "/images/projects/cafeteria-3.jpg",
    ],
    links: {
      github: "https://github.com/M-S-Shakhlul/Php-Cafeteria.git",
    },
  },
]

export function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({})
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          projects.forEach((_, index) => {
            setTimeout(() => {
              setVisibleProjects((prev) => [...prev, index])
            }, index * 100)
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

  const nextImage = (projectIndex: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % totalImages,
    }))
  }

  const prevImage = (projectIndex: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + totalImages) % totalImages,
    }))
  }

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-foreground via-accent to-primary animate-gradient">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50 group bg-card/50 backdrop-blur-sm ${
                visibleProjects.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {project.images.length > 0 && (
                <div className="relative w-full h-48 bg-muted/50 overflow-hidden">
                  <Image
                    src={project.images[currentImageIndex[index] || 0]}
                    alt={`${project.title} screenshot ${(currentImageIndex[index] || 0) + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {project.images.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={() => prevImage(index, project.images.length)}
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={() => nextImage(index, project.images.length)}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                        {project.images.map((_, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              (currentImageIndex[index] || 0) === imgIndex ? "bg-accent w-6" : "bg-background/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  {project.grade && (
                    <span className="inline-block px-3 py-1 text-xs bg-accent/20 text-accent rounded-full mb-3 font-medium border border-accent/30">
                      {project.grade}
                    </span>
                  )}
                  <p className="text-sm text-muted-foreground mb-4 text-pretty leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-secondary/30 text-secondary-foreground rounded-full border border-secondary/40 hover:bg-accent/20 hover:border-accent hover:text-accent transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Role:</span> {project.role}
                  </p>
                </div>
                {project.links && (
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {/* Render GitHub links */}
                    {project.links.github && (
                      Array.isArray(project.links.github) ? (
                        project.links.github.map((link, i) => (
                          <Button
                            key={i}
                            asChild
                            variant="outline"
                            size="sm"
                            className="gap-2 bg-transparent hover:bg-accent/10 hover:border-accent hover:scale-105 transition-all duration-300"
                          >
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                              {link.label}
                            </a>
                          </Button>
                        ))
                      ) : (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="gap-2 bg-transparent hover:bg-accent/10 hover:border-accent hover:scale-105 transition-all duration-300"
                        >
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      )
                    )}
                    
                    {/* Render Demo link if it exists */}
                    {project.links.demo && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="gap-2 bg-transparent hover:bg-accent/10 hover:border-accent hover:scale-105 transition-all duration-300"
                      >
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
