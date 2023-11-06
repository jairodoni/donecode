import { PiGearSixFill } from 'react-icons/pi'
import { Contribution } from '../../types/profileContextTypes'
import {
  CinesystemSmallImage,
  KinoplexSmallImage,
  TargetSmallImage,
} from './imageImports'

import Image from 'next/image'
import { CardLayout } from './CardLayout'

import styles from './styles.module.scss'

interface AppContributionProps {
  contributions: Contribution[]
}

export function AppContribution({ contributions }: AppContributionProps) {
  return (
    <div className={styles.cardList}>
      {contributions?.map((project) => (
        <CardLayout key={project.id} project={project}>
          <div className={styles.imageCard}>
            {project.logo === 'cinesystem' && (
              <Image
                src={CinesystemSmallImage}
                alt={project.name}
                quality={80}
                width={400}
                height={200}
              />
            )}
            {project.logo === 'kinoplex' && (
              <Image
                src={KinoplexSmallImage}
                alt={project.name}
                quality={80}
                width={400}
                height={200}
              />
            )}
            {project.logo === 'target' && (
              <Image
                src={TargetSmallImage}
                alt={project.name}
                quality={80}
                width={400}
                height={200}
              />
            )}
          </div>
          <div className={styles.info}>
            <div>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
            </div>
            <div className={styles.stackList}>
              {project.technologies?.slice(0, 5).map((tech) => (
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
