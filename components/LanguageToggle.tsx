"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      className="p-2 text-2xl"
      aria-label={language === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      {language === "es" ? "🇦🇷" : "🇬🇧"}
    </Button>
  )
}
