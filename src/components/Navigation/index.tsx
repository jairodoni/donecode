'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Lexend } from 'next/font/google'

import styles from './styles.module.scss'

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export function Navigation() {
  const [activeMenu, setActiveMenuDesktop] = useState(false)
  const [screenWidth, setScreenWidth] = useState(0)

  function handleWindowResize() {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  function handleActiveMenu() {
    if (screenWidth <= 980) {
      setActiveMenuDesktop((status) => !status)
    }
  }

  useEffect(() => {
    if (screenWidth > 980 && activeMenu) {
      console.log('BBBB')
      handleActiveMenu()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenWidth])

  useEffect(() => {
    const timer = setInterval(() => {
      if (screenWidth > 980) {
        setActiveMenuDesktop(true)
      }
    }, 2000)

    return () => clearInterval(timer)
  }, [screenWidth])

  const container = {
    hidden: { opacity: 1, scale: 1 },
    open: {
      opacity: 1,
      x: 0,

      transition: {
        delayChildren: screenWidth <= 980 ? 0.3 : 0.2,
        staggerChildren: screenWidth <= 980 ? 0.2 : 0.1,
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

  const active = !activeMenu ? '' : styles.active

  return (
    <header className={`${styles.navigation} ${lexend.className}`}>
      <nav>
        <motion.h1
          variants={container}
          initial="hidden"
          animate="open"
          // eslint-disable-next-line @typescript-eslint/no-empty-function, prettier/prettier
          onClick={handleActiveMenu}
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
          <li onClick={handleActiveMenu}>
            <motion.a
              href="#start"
              className="item"
              variants={item}
              target="_parent"
            >
              Início
            </motion.a>
          </li>
          <li onClick={handleActiveMenu}>
            <motion.a href="#about_me" className="item" variants={item}>
              Sobre
            </motion.a>
          </li>
          <li onClick={handleActiveMenu}>
            <motion.a
              href="#services"
              className="item"
              variants={item}
              target="_parent"
            >
              Serviços
            </motion.a>
          </li>
          <li onClick={handleActiveMenu}>
            <motion.a href="#apps" className="item" variants={item}>
              Contribuições
            </motion.a>
          </li>
          <li onClick={handleActiveMenu}>
            <motion.a href="#softwares" className="item" variants={item}>
              Softwares
            </motion.a>
          </li>
          <li onClick={handleActiveMenu}>
            <motion.a href="#stacks" className="item" variants={item}>
              Conhecimentos
            </motion.a>
          </li>
          <li onClick={handleActiveMenu}>
            <motion.a href="#contacts" className="item" variants={item}>
              Contatos
            </motion.a>
          </li>
        </motion.ul>
      </nav>
    </header>
  )
}
