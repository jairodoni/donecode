import { AppList } from '../AppList'
import { createClient } from '@/services/prismicio'

import styles from './styles.module.scss'

export async function Aplicativos() {
  const prismic = createClient()

  const response = await prismic.getAllByType('aplicativos')
  const aplicativos: any = response
    .map((project) => {
      return {
        id: project.id,
        uid: project.uid,
        first_publication_date: project.first_publication_date,
        last_publication_date: project.last_publication_date,
        data: {
          name: project.data.name,
          logo_small: project.data.logo_small,
          logo_large: project.data.logo_large,
          description: project.data.description,
          status: project.data.status,
          play_store: project.data.play_store,
          apple_store: project.data.apple_store,
          data_apple_store: project.data.data_apple_store,
          data_play_store: project.data.data_play_store,
          technologies: project.data.technologies,
          screenshots: project.data.screenshots,
        },
      }
    })
    .sort((x, y) => Number(x.uid) - Number(y.uid))

  return (
    <div id="apps" className={styles.container}>
      <div className={styles.triangle}>
        <h3>Aplicativos</h3>
        <AppList aplicativos={aplicativos} />
      </div>
    </div>
  )
}
