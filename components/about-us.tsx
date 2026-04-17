"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

export default function AboutUs() {
  const { language } = useLanguage()

  const content = {
    es: {
      title: "¿Que es PRISMA?",
      paragraph1:
        "Prisma Visual Live es un estudio creativo enfocado en el diseño y la operación de visuales en vivo para eventos.",
      paragraph2:
        "Dirigido por Belén Dayub, el proyecto combina sensibilidad artística, dominio técnico y lectura escénica para transformar cada evento en una experiencia visual única.",
      paragraph3:
        "Trabajamos en tiempo real, integrando visuales, música y performance para construir escenas que impactan y conectan con el público.",
    },
    en: {
      title: "What is PRISMA?",
      paragraph1:
        "Prisma Visual Live is a creative studio focused on the design and operation of live visuals for events.",
      paragraph2:
        "Led by Belén Dayub, the project combines artistic sensitivity, technical expertise, and stage awareness to transform each event into a unique visual experience.",
      paragraph3:
        "We work in real time, integrating visuals, music, and performance to build scenes that captivate and connect with the audience.",
    },
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{content[language].title}</h2>
            <p className="text-muted-foreground mb-6">{content[language].paragraph1}</p>
            <p className="text-muted-foreground">{content[language].paragraph2}</p>
            <p className="text-muted-foreground">{content[language].paragraph3}</p>
          </div>
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%201.jpg-Aw0eUn0Q5WQXu4RYrnUDeu5Ov4haD6.jpeg"
              alt="Equipo de Prisma Visual Live en acción"
              fill
              className="rounded-lg shadow-2xl object-cover"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg" /> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
