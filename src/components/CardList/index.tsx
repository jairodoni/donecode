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
        {projects.slice(0, 6).map((project) => (
          <CardActiveModalClient key={project.id} project={project}>
            <div className={styles.imageCard}>
              <Image
                src={project.data.image_url.url}
                alt=""
                quality={80}
                width={project.data.image_url.dimensions.width}
                height={project.data.image_url.dimensions.height}
              />
            </div>
            <div className={styles.info}>
              <div>
                <h4>{project.data.name}</h4>
                <p>{project.data.description}</p>
              </div>
              <div className={styles.stackList}>
                {project.data.technologies.slice(0, 5).map((tech) => (
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
