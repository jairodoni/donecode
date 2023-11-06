import Image from 'next/image'
import styles from './styles.module.scss'
import waves from '@/assets/images/waves.svg'
import { TypedParagraph } from './TypedParagraph'

export function Start() {
  return (
    <section id="start" className={styles.front_cover}>
      <div className={styles.presentation}>
        <div className={styles.title}>
          <h1>Desenvolvedor</h1>
        </div>
        <div className={styles.title}>
          <h1>Frontend.</h1>
        </div>
        <TypedParagraph />
      </div>

      <Image className={styles.waves} src={waves} alt="waves" />
    </section>
  )
}
