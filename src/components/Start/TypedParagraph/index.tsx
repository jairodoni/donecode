'use client'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import styles from './styles.module.scss'

export function TypedParagraph() {
  const typedElement = useRef(null)
  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        'Ajudando empresas e pessoas a criar aplicações digitais de forma moderna e de alta qualidade.',
      ],
      typeSpeed: 30,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className={styles.typed}>
      <span ref={typedElement} />
    </div>
  )
}
