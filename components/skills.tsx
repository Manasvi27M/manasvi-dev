"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Globe, Server, GitBranch, Terminal, Cpu, Layers } from "lucide-react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Java", "C++", "C", "Python", "JavaScript"],
    },
    {
      title: "Front End Development",
      icon: <Globe className="h-6 w-6" />,
      skills: ["React", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"],
    },
    {
      title: "Back End Development",
      icon: <Server className="h-6 w-6" />,
      skills: ["MySQL", "MongoDB", "Node.js", "Express", "Microsoft Azure"],
    },
    {
      title: "Version Control & Tools",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["Git", "Github", "Postman", "RESTful APIs", "Streamlit"],
    },
  ]

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
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:gradient-text"
        >
          My <span className="text-purple-600 dark:text-purple-400">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900/80 dark:border dark:border-purple-900/30 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow dark:card-hover"
            >
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 dark:bg-purple-900/70 p-3 rounded-lg text-purple-600 dark:text-purple-400 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mr-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>      
      </motion.div>
    </div>
  )
}
