'use client'
import { ReactNode } from 'react'
import styles from './styles.module.scss'
import { useProfile } from '@/hooks/useProfile'
import { Contribution } from '@/types/profileContextTypes'

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
