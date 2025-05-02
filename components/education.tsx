"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

  const education = [
    {
      institution: "RNS Institute of Technology",
      degree: "Bachelor of Information Science and Engineering",
      period: "2022 - Present",
      score: "CGPA: 9.22",
      location: "Bengaluru, Karnataka",
    },
    {
      institution: "Deeksha Center for Learning",
      degree: "Pre-University",
      period: "2020 - 2022",
      score: "Score: 96%",
      location: "Bengaluru, Karnataka",
    },
  ]

  const certifications = [
    {
      title: "Microsoft Certified — Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "2023",
    },
  ]

  const achievements = [
    {
      title: "GirlScript Summer of Code",
      description: "Contributed to 3+ organizations collaborating with global developers",
    },
    {
      title: "LogicLeap",
      description:
        "Organized a series of department-level competitive coding contest for 4th and 6th semester students",
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:gradient-text"
        >
          Education & <span className="text-purple-600 dark:text-purple-400">Achievements</span>
        </motion.h2>

        <div className="space-y-16">
          {/* Education Timeline */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-8">
              <div className="bg-purple-100 dark:bg-purple-900/70 p-3 rounded-lg text-purple-600 dark:text-purple-400 mr-4">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white dark:purple-glow">Education</h3>
            </div>

            <div className="relative border-l-2 border-purple-200 dark:border-purple-800 pl-8 ml-4 space-y-10">
              {education.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[41px] top-0 w-6 h-6 bg-purple-600 dark:bg-purple-500 rounded-full border-4 border-white dark:border-gray-900 dark:glow-effect"></div>
                  <div className="bg-white dark:bg-gray-900/80 dark:border dark:border-purple-900/30 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow dark:card-hover">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.institution}</h4>
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">{item.degree}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {item.location}
                      </div>
                    </div>
                    <div className="mt-3 inline-block bg-purple-50 dark:bg-purple-900/50 dark:border dark:border-purple-700/50 px-3 py-1 rounded-full">
                      <p className="text-purple-600 dark:text-purple-300 font-medium text-sm">{item.score}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Achievements */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Certifications */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 dark:bg-purple-900/70 p-3 rounded-lg text-purple-600 dark:text-purple-400 mr-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-900/80 dark:border dark:border-purple-900/30 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow dark:card-hover"
                  >
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{cert.title}</h4>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">{cert.issuer}</span>
                      <span className="text-purple-600 dark:text-purple-400">{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 dark:bg-purple-900/70 p-3 rounded-lg text-purple-600 dark:text-purple-400 mr-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Achievements</h3>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-900/80 dark:border dark:border-purple-900/30 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow dark:card-hover"
                  >
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{achievement.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
