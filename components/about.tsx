"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:gradient-text"
        >
          About <span className="text-purple-600 dark:text-purple-400">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -inset-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg -z-10 transform -rotate-3"></div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/about-image.webp"
                alt="Manasvi M"
                width={600}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white dark:purple-glow">
              Aspiring Full Stack Developer
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate developer with a strong foundation in both
              front-end and back-end technologies. I love solving complex
              problems and building impactful web applications that deliver
              exceptional user experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Currently pursuing my Bachelor's in Information Science and
              Engineering at RNS Institute of Technology, I'm constantly
              learning and growing in this dynamic field.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-purple-50 dark:bg-purple-900/50 dark:border dark:border-purple-700/50 px-4 py-2 rounded-full dark:glow-effect">
                <p className="text-purple-600 dark:text-purple-300 font-medium">
                  <span className="font-bold">9.29</span> CGPA
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/50 dark:border dark:border-purple-700/50 px-4 py-2 rounded-full dark:glow-effect">
                <p className="text-purple-600 dark:text-purple-300 font-medium">
                  <span className="font-bold">4+</span> Projects
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/50 dark:border dark:border-purple-700/50 px-4 py-2 rounded-full dark:glow-effect">
                <p className="text-purple-600 dark:text-purple-300 font-medium">
                  <span className="font-bold">3+</span> Open Source
                  Contributions
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
