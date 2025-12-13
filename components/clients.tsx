"use client"

import { motion } from "framer-motion"
import { images } from "@/constants/images"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

const clients = [
  {
    name: "Vin Music",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vinmusic_logo.jpg-CbpjihfIpSaZb3k8X0eO0SSfGefEKj.jpeg",
  },
  {
    name: "Plot",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plot_logo.jpg-3Y5hiZvM9gFDaRee8yx3gJaiAfJQ2M.jpeg",
  },
  {
    name: "Essence",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/essence_logo.jpg-YaWQtUAAPA8OQWXXwM5DJ5HJAnYqOk.jpeg",
  },
  {
    name: "Vanguard",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vanguardlogo.jpg-2zz0kKXjlq183jmW6Fw5SK7bQM0DgM.jpeg",
  },
  {
    name: "Deejay Mobile",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/deejaymobile_logo.jpg-bP4hLM8SH7b6E0fRJsuF5lalKwHevl.jpeg",
  },
]

const content = {
  es: {
    title: "Confían en nosotros",
  },
  en: {
    title: "They trust us",
  },
}

export function Clients() {
  const { language } = useLanguage()

  return (
    <section id="clients" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">{content[language].title}</h2>
          <div className="flex flex-wrap justify-center gap-12 items-center mb-12">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-24 h-24 relative overflow-hidden rounded-full bg-white/5 backdrop-blur-sm">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    fill
                    className="object-cover p-0"
                  />
                </div>
                <span className="text-xl font-semibold text-muted-foreground hover:text-primary transition-colors">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.gallery.slice(0, 6).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative aspect-video rounded-lg overflow-hidden"
            >
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
