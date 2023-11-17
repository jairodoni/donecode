import Image from 'next/image'
import { TypedParagraph } from './TypedParagraph'
import { Title } from './Title'
import background from '../../assets/images/background.png'
import waves from '@/assets/images/waves.svg'

import styles from './styles.module.scss'

export function Start() {
  return (
    <section id="start" className={styles.front_cover}>
      <Image
        src={background}
        alt=""
        fill
        priority
        className={styles.backgroundImage}
      />
      <div className={styles.presentation}>
        <Title />
        <TypedParagraph />
      </div>

      <Image className={styles.waves} src={waves} priority alt="waves" />
    </section>
  )
}
