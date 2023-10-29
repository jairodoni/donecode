import Image from 'next/image'
import styles from './styles.module.scss'

interface User {
  name: string
  office: string
  avatar: string
}

export function Perfil({ name, office, avatar }: User) {
  return (
    <div className={styles.perfil}>
      <div className={styles.userImage}>
        <Image src={avatar} alt={name} width={94} height={94} />
      </div>
      <div>
        <h1>{name}</h1>
        <h2>{office}</h2>
      </div>
    </div>
  )
}
