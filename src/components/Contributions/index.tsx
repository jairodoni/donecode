import { AppContribution } from '../AppContribution'
import { createClient } from '@/services/prismicio'

import styles from './styles.module.scss'

export async function Contributions() {
  const prismic = createClient()

  const response = await prismic.getAllByType('aplicativos')
  const aplicativos: any = response

  return (
    <div id="apps" className={styles.container}>
      <div className={styles.triangle}>
        <h3>Aplicativos</h3>
        <AppContribution aplicativos={aplicativos} />
      </div>
    </div>
  )
}
