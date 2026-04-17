"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Hero() {
  const { language } = useLanguage()

  const content = {
    es: {
      heading: "Dirección visual para experiencias en vivo y contenidos animados",
      subheading: "Pantallas que conectan, contenido que impacta.",
    },
    en: {
      heading: "Visual direction for live experiences and animated content",
      subheading: "Screens that connect, content that impacts.",
    },
  }

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-800"
    >
      {" "}
      {/* Main hero container with full viewport height and gradient background */}
      <div className="hero-glow opacity-50" /> {/* Subtle background glow effect */}
      <div className="container relative z-10">
        {" "}
        {/* Content container with higher z-index */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {" "}
          {/* Animated container for hero content */}
          <div className="relative w-full max-w-4xl mx-auto mb-16">
            {" "}
            {/* Logo container */}
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copia%20de%20sin%20fondo%20L%20B_%20LOGO_NEGRO_PRISMA_VL-9m4tDcOIFqQF7n6qDf33RROuN8V3p0.png"
              alt="Prisma Visual Live"
              width={1200}
              height={450}
              className="logo-effect w-full h-auto"
              priority
            />{" "}
          </div>
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {" "}
            {/* Main heading with gradient text effect */}
            {content[language].heading}
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl font-semibold text-white max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {" "}
            {/* Subheading with gradient text effect */}
            {content[language].subheading}
          </motion.p>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        {" "}
        {/* Container for scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          {" "}
          {/* Animated scroll indicator */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            {/* Scroll down arrow icon */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
