import { AppContribution } from '../AppContribution'
import profile from '@/services/data.json'

import styles from './styles.module.scss'

export function Contributions() {
  const { contributions } = profile

  return (
    <div id="apps" className={styles.container}>
      <div className={styles.triangle}>
        <h3>Aplicativos</h3>
        <AppContribution contributions={contributions} />
      </div>
    </div>
  )
}
