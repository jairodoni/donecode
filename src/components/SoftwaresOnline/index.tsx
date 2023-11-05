'use client'
import { useState } from 'react'
import { useProfile } from '../../hooks/useProfile'
import { CardList } from '../CardList'

import styles from './styles.module.scss'

export function SoftwaresOnline() {
  const { deploys } = useProfile()
  const [seeMore, setSeeMore] = useState(false)

  function handleSeeMore() {
    setSeeMore(!seeMore)
  }

  return (
    <>
      <div className={styles.borderBlack} />
      <section id="softwares" className={styles.container}>
        <h3>Websites</h3>
        <CardList
          projects={deploys}
          projectsLimited={deploys}
          seeMore={seeMore}
        />
        <div className={styles.buttonSeeMore}>
          {!seeMore ? (
            <button
              type="button"
              className={styles.buttonSeeMore}
              onClick={handleSeeMore}
            >
              Ver mais
            </button>
          ) : (
            <button
              type="button"
              className={styles.buttonSeeMore}
              onClick={handleSeeMore}
            >
              Ver menos
            </button>
          )}
        </div>
      </section>
      <div className={styles.borderBlack} />
    </>
  )
}
