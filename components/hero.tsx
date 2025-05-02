"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const calculateTranslate = (axis: "x" | "y", factor: number) => {
    if (!isMounted) return 0

    const windowDimension = axis === "x" ? window.innerWidth : window.innerHeight
    const mousePos = axis === "x" ? mousePosition.x : mousePosition.y

    return (mousePos / windowDimension - 0.5) * factor
  }

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden dark:grid-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500/10 dark:bg-purple-500/30"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
            animate={
              isMounted
                ? {
                    x: calculateTranslate("x", -((i % 3) + 1) * 15),
                    y: calculateTranslate("y", -((i % 3) + 1) * 15),
                  }
                : {}
            }
            transition={{ type: "spring", damping: 50, stiffness: 100 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-xl md:text-2xl font-medium text-purple-600 dark:text-purple-400 dark:purple-glow mb-2">
              Hello, I'm
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:gradient-text mb-4">
              Manasvi M
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl md:text-2xl text-gray-700 dark:text-purple-200 mb-8">
              Aspiring Full Stack Developer
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-600/80 dark:hover:bg-purple-500 dark:glow-effect"
              onClick={() => {
                if (typeof document !== "undefined") {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-300 dark:hover:bg-purple-950/50"
            >
              Download Resume <Download className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
