'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import service01 from '@/assets/images/service01.png'
import service02 from '@/assets/images/service02.png'
import service03 from '@/assets/images/service03.png'

import styles from './styles.module.scss'
import Image from 'next/image'

export function MyServices() {
  const [scaleImage, setScaleImage] = useState(0)

  const width = typeof window !== 'undefined' ? window.innerWidth : 0

  useEffect(() => {
    if (width <= 900) {
      if (width <= 720) {
        setScaleImage(1)
      } else {
        setScaleImage(0.65)
      }
    } else {
      setScaleImage(1)
    }
  }, [width])

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })
  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: width <= 720 ? 1 : 0,
      scale: scaleImage,
      y: width <= 1080 ? 30 : 65,
    },
  }

  return (
    <section className={styles.container}>
      <div id="services" className={styles.diamont}>
        <div className={styles.blur}>
          <h3 className={styles.title}>Meus Serviços</h3>
          <div className={`${styles.work}`}>
            <motion.div
              animate={inView ? 'visible' : 'hidden'}
              variants={variants}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              ref={ref}
            >
              <Image
                src={service01}
                alt="Web Design"
                width={200}
                height={200}
              />
            </motion.div>
            <motion.div
              animate={inView ? 'visible' : 'hidden'}
              variants={variants}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              ref={ref}
            >
              <Image
                src={service02}
                alt="Desenvolvedor Frontend"
                width={200}
                height={200}
              />
            </motion.div>
            <motion.div
              animate={inView ? 'visible' : 'hidden'}
              variants={variants}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              ref={ref}
            >
              <Image src={service03} alt="UI Desig" width={200} height={200} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
