import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { Start } from '@/components/Start'
import { AboutMe } from '@/components/AboutMe'
import { MyServices } from '@/components/MyServices'
import { Footer } from '@/components/Footer'
import { Aplicativos } from '@/components/Aplicativos'
import { Websites } from '@/components/Websites'
import { Knowledge } from '@/components/Knowledge'
import { ProjectModal } from '@/components/ProjectModal'
import { ProjectModalApp } from '@/components/ProjectModalApp'
import { createClient } from '@/services/prismicio'

import styles from '@/styles/Home.module.scss'

export const metadata: Metadata = {
  title: 'Donecode | Portfolio',
  description:
    'Ajudando empresas e pessoas a criar aplicações digitais de forma moderna e de alta qualidade.',
}

export default async function Home() {
  const prismic = createClient()

  const response = await prismic.getAllByType('aboutme')
  const user: any = response[0].data
  const contacts: any = Object(response[0].data.contacts[0])

  // const teste = await new Promise((resolve) => setTimeout(resolve, 5000))

  return (
    <>
      <Navigation />
      <main className={styles.main_container}>
        <Start />
        <AboutMe user={user} />
        <MyServices />
        <Aplicativos />
        <Websites />
        <Knowledge />
        <Footer contacts={contacts} />
        <ProjectModal />
        <ProjectModalApp />
      </main>
    </>
  )
}
