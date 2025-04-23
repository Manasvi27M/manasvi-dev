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
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Parallax */}
      <ParallaxWrapper>
        <Hero />
        <div className="flex justify-center pb-8">
          <button
            className="animate-bounce bg-white p-2 rounded-full shadow-lg"
            onClick={() => {
              // Client-side navigation will be handled in the browser
            }}
          >
            <ArrowDown className="h-6 w-6 text-purple-600" />
          </button>
        </div>
      </ParallaxWrapper>

      {/* About Section */}
      <section id="about" className="py-20">
        <About />
      </section>

      {/* Skills Section */}
      <ParallaxWrapper>
        <section id="skills" className="py-20 bg-gray-50">
          <Skills />
        </section>
      </ParallaxWrapper>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <Projects />
      </section>

      {/* Education Section */}
      <ParallaxWrapper>
        <section id="education" className="py-20 bg-gray-50">
          <Education />
        </section>
      </ParallaxWrapper>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <Contact />
      </section>
    </main>
  )
}
