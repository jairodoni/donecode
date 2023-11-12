import { PiGearSixFill } from 'react-icons/pi'
import { Aplicativos } from '../../types/profileContextTypes'

import Image from 'next/image'
import { CardLayout } from './CardLayout'

import styles from './styles.module.scss'

interface AppContributionProps {
  aplicativos: Aplicativos[]
}

export function AppContribution({ aplicativos }: AppContributionProps) {
  return (
    <div className={styles.cardList}>
      {aplicativos?.reverse()?.map((project) => (
        <CardLayout key={project.uid} project={project}>
          <div className={styles.imageCard}>
            <Image
              src={project.data.logo_small.url}
              alt=""
              quality={80}
              width={400}
              height={200}
            />
          </div>
          <div className={styles.info}>
            <div>
              <h4>{project.data.name}</h4>
              <p>{project.data.description}</p>
            </div>
            <div className={styles.stackList}>
              {project.data.technologies?.slice(0, 5).map((tech) => (
                <div key={tech.name} className={styles.stack}>
                  <PiGearSixFill size={16} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </CardLayout>
      ))}
    </div>
  )
}
