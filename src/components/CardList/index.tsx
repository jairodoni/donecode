import { Project } from '../../types/profileContextTypes'
import { CardListLayout } from './CardListLayout'
import { CardActiveModalClient } from './CardActiveModalClient'

import styles from './styles.module.scss'
import { InfoComponent } from './InfoComponent'

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
            <InfoComponent
              imageUrl={project.data.image_url.url}
              name={project.data.name}
              description={project.data.description}
              technologies={project.data.technologies}
            />
          </CardActiveModalClient>
        ))}
      </div>
    </CardListLayout>
  )
}
