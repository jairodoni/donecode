import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { AboutMe } from '@/components/AboutMe'
import { MyServices } from '@/components/MyServices'
import { SoftwaresOnline } from '@/components/SoftwaresOnline'
import { Footer } from '@/components/Footer'
import { ProjectModal } from '@/components/ProjectModal'
import { Contributions } from '@/components/Contributions'
import { ProjectModalApp } from '@/components/ProjectModalApp'
import { createClient } from '@/services/prismicio'

import styles from '@/styles/Home.module.scss'
import { Start } from '@/components/Start'
import { Knowledge } from '@/components/Knowledge'

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
        <Contributions />
        <SoftwaresOnline />
        <Knowledge />
        <Footer contacts={contacts} />
        <ProjectModal />
        <ProjectModalApp />
      </main>
    </>
  )
}
