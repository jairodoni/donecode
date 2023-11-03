'use client'
import Image from 'next/image'
import { useProfile } from '../../hooks/useProfile'
import { Project } from '../../types/profileContextTypes'
import { PiGearSixFill } from 'react-icons/pi'
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
              {project.technologies?.slice(0, 5).map((tech) => (
                <div key={tech.name} className={styles.stack}>
                  <PiGearSixFill size={16} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      {seeMore &&
        projects.map((project) => (
          <div
            key={project.id}
            onClick={() => getProject(project)}
            className={styles.card}
          >
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
          </div>
        ))}
    </div>
  )
}
