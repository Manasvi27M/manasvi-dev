"use client"

import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import ParallaxWrapper from "@/components/parallax-wrapper"
import { ArrowDown } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section with Parallax */}
      <ParallaxWrapper>
        <Hero />
        <div className="flex justify-center pb-8">
          <button
            className="animate-bounce bg-white dark:bg-purple-900/30 dark:glow-effect p-2 rounded-full shadow-lg"
            onClick={() => {
              if (typeof document !== "undefined") {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            <ArrowDown className="h-6 w-6 text-purple-600 dark:text-purple-300" />
          </button>
        </div>
      </ParallaxWrapper>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-950 dark:grid-bg">
        <About />
      </section>

      {/* Skills Section */}
      <ParallaxWrapper>
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
          <Skills />
        </section>
      </ParallaxWrapper>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-950 dark:grid-bg">
        <Projects />
      </section>

      {/* Education Section */}
      <ParallaxWrapper>
        <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
          <Education />
        </section>
      </ParallaxWrapper>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-950 dark:grid-bg">
        <Contact />
      </section>
    </main>
  )
}
