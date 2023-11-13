import { LinkPrismic } from '@/types/profileContextTypes'
import styles from './styles.module.scss'
import { PiGearSixFill } from 'react-icons/pi'
import Image from 'next/image'

interface InfoComponentProps {
  imageUrl: string
  name: string
  description: string
  technologies: {
    name: string
    link?: LinkPrismic
  }[]
}

export function InfoComponent({
  imageUrl,
  name,
  description,
  technologies,
}: InfoComponentProps) {
  return (
    <>
      <div className={styles.imageCard}>
        <Image src={imageUrl} alt="" quality={80} width={400} height={200} />
      </div>
      <div className={styles.info}>
        <div>
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
        <div className={styles.stackList}>
          {technologies?.slice(0, 5).map((tech) => (
            <div key={tech.name} className={styles.stack}>
              <PiGearSixFill size={16} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
