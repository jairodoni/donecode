'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface TextSectionProps {
  title: string
  description: string
  position: number
}

export function TextSection({
  title,
  description,
  position,
}: TextSectionProps) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: {
      opacity: 0,
      y: 64,
    },
  }

  return (
    <motion.div
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: position / 1.8, ease: 'circOut' }}
      ref={ref}
    >
      <h1>{title}</h1>
      <p>{description}</p>
    </motion.div>
  )
}
