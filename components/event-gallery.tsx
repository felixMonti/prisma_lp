"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { images } from "@/constants/images"
import { useLanguage } from "@/contexts/LanguageContext"

const content = {
  es: {
    title: "NUESTRA GALERIA",
    description: "Explora nuestros proyectos más recientes y déjate inspirar por nuestras creaciones visuales.",
  },
  en: {
    title: "OUR GALLERY",
    description: "Explore our most recent projects and be inspired by our visual creations.",
  },
}

export function EventGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { language } = useLanguage()

  useEffect(() => {
    const timer = setInterval(() => {
      showNext()
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.gallery.length - 1 ? 0 : prevIndex + 1))
  }

  const showPrevious = () => {
    setCurrentIndex((current) => (current === 0 ? images.gallery.length - 1 : current - 1))
  }

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{content[language].title}</h2>
          <p className="text-muted-foreground">{content[language].description}</p>
        </motion.div>
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="aspect-[16/9] overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src={images.gallery[currentIndex].src || "/placeholder.svg"}
                  alt={images.gallery[currentIndex].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70"
            onClick={showPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70"
            onClick={showNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.gallery.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
