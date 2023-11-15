import { CardList } from '../CardList'
import { createClient } from '@/services/prismicio'

import styles from './styles.module.scss'

export async function Websites() {
  const prismic = createClient()

  const response = await prismic.getAllByType('websites')
  const projects: any = response
    .map((project) => {
      return {
        id: project.id,
        uid: project.uid,
        first_publication_date: project.first_publication_date,
        last_publication_date: project.last_publication_date,
        data: {
          name: project.data.name,
          order_value: project.data.order_value,
          status: project.data.status,
          image_url: project.data.image_url,
          repository_url: project.data.repository_url,
          description: project.data.description,
          preview_url: project.data.preview_url,
          technologies: project.data.technologies,
          screenshots: project.data.screenshots,
        },
      }
    })
    .sort((x, y) => Number(x.data.order_value) - Number(y.data.order_value))

  return (
    <>
      <div className={styles.borderBlack} />
      <section id="softwares" className={styles.container}>
        <h3>Websites</h3>
        <CardList projects={projects} />
      </section>
      <div className={styles.borderBlack} />
    </>
  )
}
