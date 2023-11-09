'use client'
import { ReactNode } from 'react'
import { useProfile } from '@/hooks/useProfile'
import { Contribution } from '@/types/profileContextTypes'

import styles from './styles.module.scss'

interface AppContribution {
  children: ReactNode
  project: Contribution
}

export function CardLayout({ children, project }: AppContribution) {
  const { getContribution } = useProfile()

  return (
    <div className={styles.card} onClick={() => getContribution(project)}>
      {children}
    </div>
  )
}
