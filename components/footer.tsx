"use client"

import { motion } from "framer-motion"
import { Instagram, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { images } from "@/constants/images"
import { useLanguage } from "@/contexts/LanguageContext"

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.917 1.042 5.587 2.77 7.673L.937 23.297c-.147.42.097.88.542.97.065.012.13.018.195.018.345 0 .655-.206.784-.527l1.89-3.785C6.23 21.25 8.986 22.5 12 22.5c6.627 0 12-5.373 12-12S18.627 0 12 0zM12 20.5c-4.694 0-8.5-3.806-8.5-8.5S7.306 3.5 12 3.5s8.5 3.806 8.5 8.5-3.806 8.5-8.5 8.5z" />
  </svg>
)

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/prismavisual.live/",
    icon: Instagram,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/5491162025141",
    icon: WhatsAppIcon,
  },
]

const contactInfo = {
  es: [
    {
      icon: Mail,
      text: "prismavisual.live@gmail.com",
      href: "mailto:prismavisual.live@gmail.com",
    },
    {
      icon: Phone,
      text: "+54 9 3434 62-1056",
      href: "https://wa.me/5493434621056",
    },
    {
      icon: MapPin,
      text: "CABA, Buenos Aires",
      href: "https://maps.google.com",
    },
  ],
  en: [
    {
      icon: Mail,
      text: "prismavisual.live@gmail.com",
      href: "mailto:prismavisual.live@gmail.com",
    },
    {
      icon: Phone,
      text: "+54 9 11 6202-5141",
      href: "https://wa.me/5491162025141",
    },
    {
      icon: MapPin,
      text: "CABA, Buenos Aires",
      href: "https://maps.google.com",
    },
  ],
}

const content = {
  es: {
    description: "Experiencias visuales únicas para eventos de alta categoría",
    contact: "Contacto",
    followUs: "Síguenos",
    copyright: "Todos los derechos reservados.",
  },
  en: {
    description: "Unique visual experiences for high-end events",
    contact: "Contact",
    followUs: "Follow Us",
    copyright: "All rights reserved.",
  },
}

export function Footer() {
  const { language } = useLanguage()

  return (
    <footer className="bg-card mt-20">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <Image
              src={"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copia%20de%20sin%20fondo%20L%20B_%20LOGO_NEGRO_PRISMA_VL-9m4tDcOIFqQF7n6qDf33RROuN8V3p0.png" || "/placeholder.svg"}
              alt="Prisma Visual Live"
              width={200}
              height={80}
              className="logo-effect"
            />
            <p className="text-muted-foreground">{content[language].description}</p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">{content[language].contact}</h3>
            <ul className="space-y-3">
              {contactInfo[language].map((item) => (
                <li key={item.text}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 text-center"
          >
            <h3 className="text-lg font-semibold">{content[language].followUs}</h3>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground"
        >
          <p>
            © {new Date().getFullYear()} Prisma Visual Live. {content[language].copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
