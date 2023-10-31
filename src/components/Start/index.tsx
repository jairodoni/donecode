'use client'
import Image from 'next/image'
import styles from './styles.module.scss'
import waves from '@/assets/images/waves.svg'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export function Start() {
  const typedElement = useRef(null)
  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        'Ajudando empresas e pessoas a criar aplicações digitais de forma moderna e de alta qualidade.',
      ],
      typeSpeed: 30,
    })

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy()
    }
  }, [])

  return (
    <section id="start" className={styles.front_cover}>
      <div className={styles.presentation}>
        <div className={styles.title}>
          <h1>Desenvolvedor</h1>
        </div>
        <div className={styles.title}>
          <h1>Frontend.</h1>
        </div>
        <div className={styles.typed}>
          <span ref={typedElement} />
        </div>
      </div>

      <Image className={styles.waves} src={waves} alt="waves" />
    </section>
  )
}
