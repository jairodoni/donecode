'use client'
import Link from 'next/link'
import Image from 'next/image'
import image404 from '@/assets/images/404.png'

import styles from '@/styles/not-found.module.scss'

export default function NotFound() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <div className={styles.main}>
        <div className={styles.mars} />
        <Image src={image404} className={styles.logo404} alt="" />
        <Image
          src="https://assets.codepen.io/1538474/meteor.svg"
          className={styles.meteor}
          alt=""
          width={100}
          height={100}
        />
        <p className={styles.title}>ERRO!!</p>
        <p className={styles.subtitle}>
          Você está digitando a URL incorretamente <br /> ou solicitando uma
          página que não é mais aqui.
        </p>
        <div className={styles.componentButton}>
          <Link href="/" className={styles.btnBack}>
            Voltar para a pagina inicial
          </Link>
        </div>
        <Image
          src="https://assets.codepen.io/1538474/astronaut.svg"
          className={styles.astronaut}
          alt=""
          width={200}
          height={200}
        />
        <Image
          src="https://assets.codepen.io/1538474/spaceship.svg"
          className={styles.spaceship}
          alt=""
          width={140}
          height={140}
        />
      </div>
    </div>
  )
}
