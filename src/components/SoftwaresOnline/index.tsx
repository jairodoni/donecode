'use client'
import { useProfile } from '../../hooks/useProfile'
import { CardList } from '../CardList'

import styles from './styles.module.scss'

export function SoftwaresOnline() {
  const { deploys } = useProfile()

  return (
    <section id="softwares" className={styles.container}>
      <h3>Websites Online</h3>
      <CardList projects={deploys} />
    </section>
  )
}
