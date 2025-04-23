"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxWrapperProps {
  children: React.ReactNode
  speed?: number
}

export default function ParallaxWrapper({ children, speed = 0.5 }: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  const { scrollY } = useScroll()

  // Handle mounting state to avoid window access during SSR
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Store the element position
  useEffect(() => {
    if (!ref.current || !isMounted) return

    const setValues = () => {
      setElementTop(ref.current?.offsetTop || 0)
      setClientHeight(window.innerHeight)
    }

    setValues()
    window.addEventListener("resize", setValues)

    return () => window.removeEventListener("resize", setValues)
  }, [ref, isMounted])

  const y = useTransform(scrollY, [elementTop - clientHeight, elementTop + clientHeight], ["0%", `${speed * 100}%`])

  return (
    <div ref={ref} className="relative overflow-hidden">
      {isMounted ? (
        <motion.div style={{ y }} className="relative">
          {children}
        </motion.div>
      ) : (
        <div className="relative">{children}</div>
      )}
    </div>
  )
}
