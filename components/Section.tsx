import { motion } from "framer-motion"
import Image from "next/image"

interface SectionProps {
  title: string
  content: string
  imageSrc: string
  imageAlt: string
  reverse?: boolean
}

export function Section({ title, content, imageSrc, imageAlt, reverse = false }: SectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      <div className={reverse ? "order-2 md:order-1" : ""}>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-muted-foreground">{content}</p>
      </div>
      <div className={`relative ${reverse ? "order-1 md:order-2" : ""}`}>
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          width={600}
          height={400}
          className="rounded-lg shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg" />
      </div>
    </motion.div>
  )
}
