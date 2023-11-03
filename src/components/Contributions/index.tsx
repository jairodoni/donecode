'use client'
import styles from './styles.module.scss'
import { useProfile } from '../../hooks/useProfile'
import { AppContribution } from '../AppContribution'

export function Contributions() {
  const { contributions } = useProfile()

  return (
    <div id="apps" className={styles.container}>
      <div className={styles.triangle}>
        <h3>Aplicativos</h3>
        <AppContribution contributions={contributions} />
      </div>
    </div>
  )
}
