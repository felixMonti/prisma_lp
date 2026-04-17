"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import type React from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LanguageToggle } from "@/components/LanguageToggle"
import { useLanguage } from "@/contexts/LanguageContext"

const navItems = {
  es: [
    { name: "Inicio", href: "#hero" },
    { name: "¿Qué es Prisma?", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Cómo Trabajamos", href: "#how-we-work" },
    { name: "¿Por qué PRISMA?", href: "#why-us" },
    { name: "Galería", href: "#gallery" },
    { name: "Clientes", href: "#clients" },
    { name: "Contacto", href: "#contact" },
  ],
  en: [
    { name: "Home", href: "#hero" },
    { name: "What is Prisma?", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "How We Work", href: "#how-we-work" },
    { name: "Why PRISMA?", href: "#why-us" },
    { name: "Gallery", href: "#gallery" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ],
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems[language].map((item) => item.href.slice(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [language])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.slice(1)
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
      setActiveSection(targetId)
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden mr-auto">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              {navItems[language].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`text-lg font-medium transition-colors ${
                    activeSection === item.href.slice(1) ? "text-primary" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <ul className="hidden md:flex justify-center space-x-6 flex-grow">
          {navItems[language].map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.href.slice(1) ? "text-primary" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <LanguageToggle />
      </nav>
    </motion.header>
  )
}
