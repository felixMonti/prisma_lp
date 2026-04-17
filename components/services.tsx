"use client"
import { Monitor, Palette } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"

const content = {
  es: {
    title: "Qué Hacemos",
  },
  en: {
    title: "What We Do",
  },
}

const services = [
  {
    title: {
      es: "Experiencias en Vivo",
      en: "Live Experiences",
    },
    description: {
      es: "Creamos y operamos visuales en tiempo real para eventos sociales, corporativos, shows y producciones escénicas. Trabajamos con pantallas LED, contenido dinámico y sincronización audiovisual para potenciar el impacto del evento.",
      en: "We create and operate real-time visuals for social events, corporate events, shows, and stage productions. We work with LED screens, dynamic content, and audiovisual synchronization to enhance the event's impact.",
    },
    icon: Monitor,
  },
  {
    title: {
      es: "Diseño Visual",
      en: "Visual Design",
    },
    description: {
      es: "Desarrollamos la identidad visual del proyecto: flyers, contenido digital, animaciones y piezas gráficas que construyen su universo estético. Diseño y ejecución se integran para lograr coherencia visual de principio a fin.",
      en: "We develop the visual identity of the project: flyers, digital content, animations, and graphic pieces that build its aesthetic universe. Design and execution are integrated to achieve visual coherence from start to finish.",
    },
    icon: Palette,
  },
]

export default function Services() {
  const { language } = useLanguage()

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{content[language].title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title[language]}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-8 rounded-lg bg-white/5 border border-white/10"
            >
              <service.icon className="w-12 h-12 mb-6 text-primary" />
              <h3 className="text-2xl font-semibold mb-4">{service.title[language]}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description[language]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
