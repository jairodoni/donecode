'use client'
import { motion } from 'framer-motion'
import styles from './styles.module.scss'

export function Title() {
  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: {
      opacity: 0,
      x: 20,
    },
  }

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.2, ease: 'easeIn' }}
        variants={variants}
        className={styles.title}
      >
        <h1>Desenvolvedor</h1>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.2, ease: 'easeIn' }}
        variants={variants}
        className={styles.title}
      >
        <h1>Frontend.</h1>
      </motion.div>
    </>
  )
}
