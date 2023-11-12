import { CardList } from '../CardList'
import { createClient } from '@/services/prismicio'

import styles from './styles.module.scss'

export async function SoftwaresOnline() {
  const prismic = createClient()

  const response = await prismic.getAllByType('websites')
  const projects: any = response.sort((x, y) => Number(x.uid) - Number(y.uid))

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
