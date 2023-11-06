'use client'
import { ReactNode } from 'react'
import { useProfile } from '@/hooks/useProfile'
import { Project } from '@/types/profileContextTypes'

import styles from './styles.module.scss'

interface AppContribution {
  children: ReactNode
  project: Project
}

export function CardLayout({ children, project }: AppContribution) {
  const { getProject } = useProfile()

  return (
    <div className={styles.card} onClick={() => getProject(project)}>
      {children}
    </div>
  )
}
