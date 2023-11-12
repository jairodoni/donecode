import Image from 'next/image'
import waves from '@/assets/images/waves.svg'
import { TypedParagraph } from './TypedParagraph'

import styles from './styles.module.scss'
import { Title } from './Title'

export function Start() {
  return (
    <section id="start" className={styles.front_cover}>
      <div className={styles.presentation}>
        <Title />
        <TypedParagraph />
      </div>

      <Image className={styles.waves} src={waves} priority alt="waves" />
    </section>
  )
}
