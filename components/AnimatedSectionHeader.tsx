'use client'

import { motion } from 'framer-motion'

interface AnimatedSectionHeaderProps {
  title: string
  description?: string
  className?: string
}

const AnimatedSectionHeader: React.FC<AnimatedSectionHeaderProps> = ({ title, description, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={className}
    >
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      {description && <p className="text-muted-foreground">{description}</p>}
    </motion.div>
  )
}

export default AnimatedSectionHeader

