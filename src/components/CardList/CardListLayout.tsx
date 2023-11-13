'use client'
import { ReactNode, useState } from 'react'
import { Project } from '@/types/profileContextTypes'
import { SeeMoreButton } from './SeeMoreButton'
import { CardActiveModalClient } from './CardActiveModalClient'

import styles from './styles.module.scss'
import { InfoComponent } from './InfoComponent'

interface CardListLayoutProps {
  children: ReactNode
  listProjects: Project[]
}

export function CardListLayout({
  children,
  listProjects,
}: CardListLayoutProps) {
  const [seeMore, setSeeMore] = useState<boolean>(false)

  function handleSeeMore() {
    setSeeMore((state) => {
      return !state
    })
  }

  const animationSeeMore = seeMore ? styles.seeMore : styles.seeLess

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {children}
      <div
        // eslint-disable-next-line @typescript-eslint/no-empty-function, prettier/prettier
        className={`${animationSeeMore} ${styles.cardList}`}
      >
        {seeMore &&
          listProjects.slice(6, listProjects.length)?.map((project) => (
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
      <SeeMoreButton seeMore={seeMore} handleSeeMore={handleSeeMore} />
    </div>
  )
}
