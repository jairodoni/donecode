'use client'
import { motion } from 'framer-motion'
import styles from './styles.module.scss'
import { useInView } from 'react-intersection-observer'

interface TimelineProps {
  description: string
  title: string
  last: boolean
  position: number
}

export function Timeline({
  description,
  title,
  last,
  position,
}: TimelineProps) {
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
    <div className={styles.timelineItem}>
      <div>
        <div className={styles.point} />
        <div className={styles.line} />
        {last && <div className={styles.lastPoint} />}
      </div>
      <motion.div
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: position / 1.8, ease: 'circOut' }}
        ref={ref}
      >
        <h1>{title}</h1>
        <p>{description}</p>
      </motion.div>
    </div>
  )
}
