"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

export default function AboutUs() {
  const { language } = useLanguage()

  const content = {
    es: {
      title: "¿Quiénes Somos?",
      paragraph1:
        "En Prisma Visual Live, somos un equipo dedicado a diseñar experiencias visuales para eventos de alta categoría. Nuestra especialidad radica en la operación técnica de video en tiempo real, el dominio de herramientas digitales avanzadas y una gestión eficiente, siempre acompañada de una atención meticulosa a las relaciones interpersonales.",
      paragraph2:
        "Trabajamos con un enfoque integral que prioriza la excelencia técnica y la coordinación con cada área involucrada en la producción, asegurando que cada evento alcance el más alto nivel de sofisticación y calidad.",
    },
    en: {
      title: "Who We Are?",
      paragraph1:
        "At Prisma Visual Live, we are a team dedicated to designing visual experiences for high-end events. Our specialty lies in real-time video technical operation, mastery of advanced digital tools, and efficient management, always accompanied by meticulous attention to interpersonal relationships.",
      paragraph2:
        "We work with a comprehensive approach that prioritizes technical excellence and coordination with each area involved in production, ensuring that each event reaches the highest level of sophistication and quality.",
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
