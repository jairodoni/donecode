'use client'
import { ReactNode } from 'react'
import { useProfile } from '@/hooks/useProfile'
import { Aplicativos } from '@/types/profileContextTypes'

import styles from './styles.module.scss'

interface AppContribution {
  children: ReactNode
  project: Aplicativos
}

export function CardLayout({ children, project }: AppContribution) {
  const { getAppProject } = useProfile()

  return (
    <div className={styles.card} onClick={() => getAppProject(project)}>
      {children}
    </div>
  )
}
