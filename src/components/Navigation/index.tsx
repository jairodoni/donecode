'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import styles from './styles.module.scss'
import { Lexend } from 'next/font/google'

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export function Navigation() {
  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0

  const [activeMenu, setActiveMenu] = useState(!(windowWidth <= 980))

  const container = {
    hidden: { opacity: 1, scale: 1 },
    open: {
      opacity: 1,
      x: 0,

      transition: {
        delayChildren: windowWidth <= 980 ? 0.3 : 0.2,
        staggerChildren: windowWidth <= 980 ? 0.2 : 0.1,
      },
    },
    closed: { opacity: 0, x: '100%' },
  }

  const item = {
    hidden: { x: 16, opacity: 0 },
    open: {
      x: 0,
      opacity: 1,
    },
  }

  function handleActiveMenu() {
    setActiveMenu(!activeMenu)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (windowWidth > 980) {
        setActiveMenu(true)
      }
    }, 2000)

    return () => clearInterval(timer)
  }, [])
  // eslint-disable-next-line @typescript-eslint/no-empty-function, prettier/prettier
  const mobileMenu = windowWidth <= 900 ? handleActiveMenu : () => { }
  const active = activeMenu === false ? '' : styles.active

  return (
    <header className={`${styles.navigation} ${lexend.className}`}>
      <nav>
        <motion.h1
          variants={container}
          initial="hidden"
          animate="open"
          // eslint-disable-next-line @typescript-eslint/no-empty-function, prettier/prettier
          onClick={activeMenu ? mobileMenu : () => { }}
        >
          <motion.a href="#start" className="item" variants={item}>
            donecode
            <span style={{ color: '#7064fb' }}>.</span>
          </motion.a>
        </motion.h1>
        <div
          className={`${styles.mobileMenu} ${active}`}
          onClick={handleActiveMenu}
        >
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
        <motion.ul
          className={`${styles.navList} ${active}`}
          variants={container}
          initial="hidden"
          animate={activeMenu ? 'open' : 'closed'}
        >
          <li onClick={mobileMenu}>
            <motion.a href="#start" className="item" variants={item}>
              Início
            </motion.a>
          </li>
          <li onClick={mobileMenu}>
            <motion.a href="#about_me" className="item" variants={item}>
              Sobre
            </motion.a>
          </li>
          <li onClick={mobileMenu}>
            <motion.a href="#services" className="item" variants={item}>
              Serviços
            </motion.a>
          </li>
          <li onClick={mobileMenu}>
            <motion.a href="#apps" className="item" variants={item}>
              Contribuições
            </motion.a>
          </li>
          <li onClick={mobileMenu}>
            <motion.a href="#softwares" className="item" variants={item}>
              Softwares
            </motion.a>
          </li>
          <li onClick={mobileMenu}>
            <motion.a href="#stacks" className="item" variants={item}>
              Conhecimentos
            </motion.a>
          </li>
          {/* <li onClick={mobileMenu}>
            <motion.a href="#repositories" className="item" variants={item}>
              Repositorios
            </motion.a>
          </li> */}
          {/* <li onClick={mobileMenu}>
            <motion.a
              href="#layouts"
              className="item"
              variants={item}
            >
              Prototipos UI
            </motion.a>
          </li> */}
          <li onClick={mobileMenu}>
            <motion.a href="#contacts" className="item" variants={item}>
              Contatos
            </motion.a>
          </li>
        </motion.ul>
      </nav>
    </header>
  )
}
