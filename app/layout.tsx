import { Jost } from "next/font/google"
import "./globals.css"
import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/contexts/LanguageContext"

const jost = Jost({ subsets: ["latin"] })

export const metadata = {
  title: "Prisma Visual Live",
  description: "Experiencias visuales para eventos de alta categoría",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${jost.className} bg-gradient-to-b from-black to-gray-900`}>
        <LanguageProvider>
          <div className="text-foreground min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
