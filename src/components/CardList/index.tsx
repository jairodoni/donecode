import Image from 'next/image'
import { Project } from '../../types/profileContextTypes'
import { PiGearSixFill } from 'react-icons/pi'
import { CardLayout } from './CardLayout'

import styles from './styles.module.scss'

interface CardListProps {
  projects: Project[]
  projectsLimited?: Project[]
  seeMore?: boolean
}

export function CardList({
  seeMore = false,
  projects,
  projectsLimited,
}: CardListProps) {
  const animationSeeMore = seeMore ? styles.seeMore : styles.seeLess

  return (
    <>
      <div className={styles.cardList}>
        {projectsLimited?.map((project) => (
          <CardLayout key={project.id} project={project}>
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
          </CardLayout>
        ))}
      </div>
      <div
        // eslint-disable-next-line @typescript-eslint/no-empty-function, prettier/prettier
        className={`${animationSeeMore} ${styles.cardList}`}
      >
        {seeMore &&
          projects.map((project) => (
            <CardLayout key={project.id} project={project}>
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
            </CardLayout>
          ))}
      </div>
    </>
  )
}
