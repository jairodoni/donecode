import { Metadata } from 'next'
import Image from 'next/image'
import { useProfile } from '@/hooks/useProfile'
import { Navigation } from '@/components/Navigation'
import { AboutMe } from '@/components/AboutMe'
import { MyServices } from '@/components/MyServices'
import { SoftwaresOnline } from '@/components/SoftwaresOnline'
import { Repositories } from '@/components/Repositories'
import { Footer } from '@/components/Footer'
import { ProjectModal } from '@/components/ProjectModal'
import { Contributions } from '@/components/Contributions'
import { ProjectModalApp } from '@/components/ProjectModalApp'

import styles from '@/styles/Home.module.scss'
import { ReactNode } from 'react'
import { Start } from '@/components/Start'
import { Knowledge } from '@/components/Knowledge'

export const metadata: Metadata = {
  title: 'Donecode',
  description:
    ' - Ajudando empresas e pessoas a criar aplicações digitais de forma moderna e de alta qualidade.',
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main className={styles.main_container}>
        <Start />
        <AboutMe />
        <MyServices />
        <Contributions />
        <SoftwaresOnline />
        <Knowledge />
        {/* <Repositories /> */}
        <Footer />
        <ProjectModal />
        <ProjectModalApp />
      </main>
    </>
  )
}
