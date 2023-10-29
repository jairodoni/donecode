import { useState } from 'react'
import { useProfile } from '../../hooks/useProfile'
import { CardList } from '../CardList'

import styles from './styles.module.scss'

export function Repositories() {
  const { deploys } = useProfile()

  return (
    <section id="softwares" className={styles.container}>
      <h3>Softwares Online</h3>
      <CardList projects={deploys} />
    </section>
  )
}
