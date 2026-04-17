"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      className="flex items-center gap-2 px-3 py-2"
      aria-label={language === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      <Globe className="h-5 w-5" />
      <span className="text-sm font-medium">{language === "es" ? "EN" : "ES"}</span>
    </Button>
  )
}
