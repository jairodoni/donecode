import { CardList } from '../CardList'
import profile from '@/services/data.json'

import styles from './styles.module.scss'

export function SoftwaresOnline() {
  const { deploys } = profile

  return (
    <>
      <div className={styles.borderBlack} />
      <section id="softwares" className={styles.container}>
        <h3>Websites</h3>
        <CardList projects={deploys} />
      </section>
      <div className={styles.borderBlack} />
    </>
  )
}
