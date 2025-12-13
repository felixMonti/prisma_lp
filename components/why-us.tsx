"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

const content = {
  es: {
    title: "¿Por qué PRISMA?",
    mission: {
      title: "MISIÓN",
      description:
        "En Prisma Visual Live nos dedicamos a transformar ideas en experiencias visuales únicas, combinando exploración, profesionalismo y colaboración. Nos comprometemos a brindar soluciones creativas e impactantes que superen las expectativas de nuestros clientes, fortaleciendo las relaciones humanas y laborales en cada proyecto que emprendemos.",
    },
    vision: {
      title: "VISIÓN",
      description:
        "Ser reconocidos como líderes en innovación visual en eventos, explorando constantemente nuevas fronteras creativas y estableciendo relaciones duraderas con nuestros clientes, basadas en la confianza y la excelencia. Buscamos convertir cada proyecto en una oportunidad para crecer y dejar una huella inolvidable.",
    },
  },
  en: {
    title: "Why PRISMA?",
    mission: {
      title: "MISSION",
      description:
        "At Prisma Visual Live, we are dedicated to transforming ideas into unique visual experiences, combining exploration, professionalism, and collaboration. We are committed to providing creative and impactful solutions that exceed our clients' expectations, strengthening human and work relationships in every project we undertake.",
    },
    vision: {
      title: "VISION",
      description:
        "To be recognized as leaders in visual innovation for events, constantly exploring new creative frontiers and establishing lasting relationships with our clients, based on trust and excellence. We seek to turn each project into an opportunity to grow and leave an unforgettable mark.",
    },
  },
}

export default function WhyUs() {
  const { language } = useLanguage()

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1 relative h-[500px] w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%203.jpg-XA1FWk3Jf6aJQuhZ8Mm8CUpsQT0oLz.jpeg"
              alt="Prisma Visual showcase"
              fill
              className="rounded-lg shadow-2xl object-contain"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{content[language].title}</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">{content[language].mission.title}</h3>
                <p className="text-muted-foreground">{content[language].mission.description}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{content[language].vision.title}</h3>
                <p className="text-muted-foreground">{content[language].vision.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
