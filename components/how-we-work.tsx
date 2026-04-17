"use client"

import { motion } from "framer-motion"
import { Search, Palette, Zap, Play } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

const content = {
  es: {
    title: "Cómo Trabajamos",
    subtitle:
      "Nuestro enfoque combina creatividad y precisión técnica en cada etapa del proceso:",
    steps: [
      {
        title: "Lectura del evento",
        description: "Analizamos el tipo de evento, su público y su identidad.",
        icon: Search,
      },
      {
        title: "Propuesta visual",
        description: "Definimos una estética visual alineada con el concepto.",
        icon: Palette,
      },
      {
        title: "Adaptación en tiempo real",
        description:
          "Durante el evento, ajustamos las visuales en función de la música y la dinámica del espacio.",
        icon: Zap,
      },
      {
        title: "Ejecución sincronizada",
        description:
          "Integramos visuales, ritmo y performance para generar una experiencia inmersiva.",
        icon: Play,
      },
    ],
  },
  en: {
    title: "How We Work",
    subtitle:
      "Our approach combines creativity and technical precision at every stage of the process:",
    steps: [
      {
        title: "Event Reading",
        description: "We analyze the type of event, its audience, and its identity.",
        icon: Search,
      },
      {
        title: "Visual Proposal",
        description: "We define a visual aesthetic aligned with the concept.",
        icon: Palette,
      },
      {
        title: "Real-time Adaptation",
        description:
          "During the event, we adjust the visuals based on the music and the dynamics of the space.",
        icon: Zap,
      },
      {
        title: "Synchronized Execution",
        description:
          "We integrate visuals, rhythm, and performance to create an immersive experience.",
        icon: Play,
      },
    ],
  },
}

export default function HowWeWork() {
  const { language } = useLanguage()

  return (
    <section id="how-we-work" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{content[language].title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{content[language].subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content[language].steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 h-full hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm text-primary font-medium mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
