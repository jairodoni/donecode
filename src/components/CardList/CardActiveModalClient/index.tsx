'use client'
import { ReactNode } from 'react'
import { useProfile } from '@/hooks/useProfile'
import { Project } from '@/types/profileContextTypes'

import styles from '../styles.module.scss'

interface CardActiveModalClientProps {
  children: ReactNode
  project: Project
}

export function CardActiveModalClient({
  children,
  project,
}: CardActiveModalClientProps) {
  const { getProject } = useProfile()

  return (
    <div className={styles.card} onClick={() => getProject(project)}>
      {children}
    </div>
  )
}
