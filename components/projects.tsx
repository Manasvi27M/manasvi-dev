"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, Calendar, Cpu, Database, Globe, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeTab, setActiveTab] = useState("all")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const projects = [
    {
      title: "SmartResume",
      description: "AI-Driven Resume & Job Matching Platform",
      date: "March 2025 - Present",
      image: "/placeholder.svg?height=600&width=800",
      category: "fullstack",
      details: [
        "Architecting a full-stack web app using Next.js, Tailwind CSS, and Node.js, allowing users to create ATS-optimized resumes with AI-powered suggestions and multiple design templates.",
        "Integrated job recommendation and resume tailoring engine using REST APIs, MongoDB, and dynamic resume scoring logic, improving job application efficiency by personalizing resumes for each listing.",
      ],
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "REST APIs"],
      icon: <Layers className="h-5 w-5" />,
    },
    {
      title: "Crop Connect",
      description: "Agriculture Equipment and Produce Marketplace",
      date: "Oct 2024 - Dec 2024",
      image: "/placeholder.svg?height=600&width=800",
      category: "frontend",
      details: [
        "Built a responsive marketplace platform using HTML, CSS, JavaScript, and MySQL, enabling farmers to rent equipment and sell produce.",
        "Enhanced user experience with streamlined workflows and mobile-first UI, increasing average session duration by 40%.",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
      icon: <Globe className="h-5 w-5" />,
    },
    {
      title: "WanderWise",
      description: "Smart Travel Booking System",
      date: "Jun 2024 - Jul 2024",
      image: "/placeholder.svg?height=600&width=800",
      category: "backend",
      details: [
        "Created a travel management system using Flask and MySQL with secure user login, booking, and cancellation modules, supporting real-time seat and room tracking.",
        "Improved data access efficiency by 60% using optimized SQL joins, foreign keys, and database normalization to support scalable, relational data handling.",
      ],
      technologies: ["Flask", "MySQL", "Python", "SQL"],
      icon: <Database className="h-5 w-5" />,
    },
    {
      title: "Graph Coloring Visualizer",
      description: "Greedy Algorithm Visualization Tool",
      date: "Jun 2024 - Jul 2024",
      image: "/placeholder.svg?height=600&width=800",
      category: "algorithm",
      details: [
        "Designed an interactive Streamlit app to visualize the Greedy Graph Coloring algorithm with user-defined or auto-generated graphs, enhancing algorithmic learning.",
        "Supported visualization for 50+ graph configurations, enabling students and educators to explore optimization techniques in graph theory interactively.",
      ],
      technologies: ["Python", "Streamlit", "Algorithms", "Graph Theory"],
      icon: <Cpu className="h-5 w-5" />,
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <div className="container mx-auto px-4">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:gradient-text"
        >
          My <span className="text-purple-600 dark:text-purple-400">Projects</span>
        </motion.h2>

        <motion.div variants={itemVariants} className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {["all", "fullstack", "frontend", "backend", "algorithm"].map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "outline"}
                className={
                  activeTab === tab
                    ? "bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 dark:glow-effect"
                    : "border-purple-200 text-gray-700 hover:border-purple-600 hover:text-purple-600 dark:border-purple-700 dark:text-purple-300 dark:hover:border-purple-500 dark:hover:text-purple-400"
                }
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow dark:border-purple-900/50 dark:bg-gray-900/80 dark:card-hover">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:text-white">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="bg-purple-100 dark:bg-purple-900/70 p-2 rounded-lg text-purple-600 dark:text-purple-400">
                      {project.icon}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl mt-2 dark:text-white">{project.title}</CardTitle>
                  <CardDescription className="dark:text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.details.map((detail, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="text-gray-700 dark:text-gray-300 dark:border-gray-700">
                    <Github className="h-4 w-4 mr-2" /> Code
                  </Button>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 dark:glow-effect">
                    <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
