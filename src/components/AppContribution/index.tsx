'use client'
import { PiGearSixFill } from 'react-icons/pi'
import { useProfile } from '../../hooks/useProfile'
import { Contribution } from '../../types/profileContextTypes'
import {
  CinesystemSmallImage,
  KinoplexSmallImage,
  TargetSmallImage,
} from './imageImports'

import styles from './styles.module.scss'
import Image from 'next/image'

interface AppContributionProps {
  contributions: Contribution[]
}

export function AppContribution({ contributions }: AppContributionProps) {
  const { getContribution } = useProfile()

  return (
    <div className={styles.cardList}>
      {contributions?.map((project) => (
        <div
          key={project.id}
          className={styles.card}
          onClick={() => getContribution(project)}
        >
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
        </div>
      ))}
    </div>
  )
}
