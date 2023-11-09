import Image from 'next/image'
import { Project } from '../../types/profileContextTypes'
import { PiGearSixFill } from 'react-icons/pi'
import { CardListLayout } from './CardListLayout'
import { CardActiveModalClient } from './CardActiveModalClient'

import styles from './styles.module.scss'

interface CardListProps {
  projects: Project[]
  seeMore?: boolean
}

export function CardList({ projects }: CardListProps) {
  return (
    <CardListLayout listProjects={projects}>
      <div className={styles.cardList}>
        {projects?.slice(0, 6)?.map((project) => (
          <CardActiveModalClient key={project.id} project={project}>
            <div className={styles.imageCard}>
              <Image
                src={project.image_url}
                alt={project.title}
                quality={80}
                width={400}
                height={200}
              />
            </div>
            <div className={styles.info}>
              <div>
                <h4>{project.title}</h4>
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
          </CardActiveModalClient>
        ))}
      </div>
    </CardListLayout>
  )
}
