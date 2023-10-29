'use client'
import Image from 'next/image'
import { useProfile } from '../../hooks/useProfile'
import { Project } from '../../types/profileContextTypes'
import styles from './styles.module.scss'

interface CardListProps {
  projects: Project[]
  projectsLimited?: Project[]
  seeMore?: boolean
}

export function CardList({
  seeMore = true,
  projects,
  projectsLimited,
}: CardListProps) {
  const { getProject } = useProfile()

  return (
    <div className={styles.cardList}>
      {!seeMore &&
        projectsLimited?.map((project) => (
          <div
            key={project.id}
            onClick={() => getProject(project)}
            className={styles.card}
          >
            <Image
              src={project.image_url}
              alt={project.title}
              quality={80}
              width={400}
              height={200}
            />
            <button type="button">Ver detalhes</button>
          </div>
        ))}
      {seeMore &&
        projects.map((project) => (
          <div
            key={project.id}
            onClick={() => getProject(project)}
            className={styles.card}
          >
            <Image
              src={project.image_url}
              alt={project.title}
              quality={80}
              width={400}
              height={200}
            />
            <button type="button">Ver detalhes</button>
          </div>
        ))}
    </div>
  )
}
