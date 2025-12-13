"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2 } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { submitContactForm } from "@/app/actions/submit-form"

const content = {
  es: {
    title: "Contacto",
    description: "¿Listo para crear una experiencia visual inolvidable? Contáctanos y hagamos realidad tu visión.",
    name: "Nombre",
    email: "Correo electrónico",
    message: "Mensaje",
    gdprConsent: "Acepto la política de privacidad y el procesamiento de mis datos personales.",
    sendMessage: "Enviar mensaje",
    sending: "Enviando...",
    successTitle: "Mensaje enviado",
    successDescription: "Gracias por contactarnos. Te responderemos pronto.",
    errorTitle: "Error",
    errorDescription: "Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.",
    formError: "Por favor, completa todos los campos y acepta la política de privacidad.",
  },
  en: {
    title: "Contact Us",
    description: "Ready to create an unforgettable visual experience? Contact us and let's make your vision a reality.",
    name: "Name",
    email: "Email",
    message: "Message",
    gdprConsent: "I accept the privacy policy and the processing of my personal data.",
    sendMessage: "Send message",
    sending: "Sending...",
    successTitle: "Message sent",
    successDescription: "Thank you for contacting us. We will respond soon.",
    errorTitle: "Error",
    errorDescription: "There was a problem sending your message. Please try again.",
    formError: "Please complete all fields and accept the privacy policy.",
  },
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [gdprConsent, setGdprConsent] = useState(false)
  const { toast } = useToast()
  const { language } = useLanguage()

  const isFormValid = name.trim() !== "" && email.trim() !== "" && message.trim() !== "" && gdprConsent

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isFormValid) {
      toast({
        title: content[language].errorTitle,
        description: content[language].formError,
        variant: "destructive",
      })
      return
    }
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        toast({
          title: content[language].successTitle,
          description: content[language].successDescription,
          variant: "default",
        })
        setName("")
        setEmail("")
        setMessage("")
        setGdprConsent(false)
      } else {
        throw new Error(result.error || "Something went wrong")
      }
    } catch (error) {
      toast({
        title: content[language].errorTitle,
        description: content[language].errorDescription,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">{content[language].title}</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center">{content[language].description}</p>
          <form onSubmit={onSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {content[language].name}
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={content[language].name}
                  className="w-full"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {content[language].email}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={content[language].email}
                  className="w-full"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {content[language].message}
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder={content[language].message}
                className="w-full min-h-[150px]"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <p className="text-sm text-muted-foreground mt-2">{message.length}/1000 characters</p>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="gdpr"
                checked={gdprConsent}
                onCheckedChange={(checked) => setGdprConsent(checked as boolean)}
              />
              <label
                htmlFor="gdpr"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {content[language].gdprConsent}
              </label>
            </div>
            <Button type="submit" className="w-full py-6 text-lg" disabled={isSubmitting || !isFormValid}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {content[language].sending}
                </>
              ) : (
                content[language].sendMessage
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
