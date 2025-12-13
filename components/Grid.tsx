import { motion } from "framer-motion"
import type React from "react"

interface GridProps {
  items: React.ReactNode[]
  columns: number
}

export function Grid({ items, columns }: GridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-8`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  )
}
