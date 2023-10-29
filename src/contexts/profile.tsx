'use client'
import { createContext, ReactNode, useState } from 'react'
import {
  User,
  Project,
  Layout,
  Contribution,
} from '../types/profileContextTypes'
import profile from '../services/data.json'

interface ProfileContextData {
  user: User
  deploys: Project[]
  contributions: Contribution[]
  repositories: Project[]
  layouts: Layout[]
  showProject: boolean
  showContribution: boolean
  projectSelected: Project | null
  contributionSelected: Contribution | null
  getProject: (project: Project) => void
  getContribution: (app: Contribution) => void
  handleOpenCloseModal: () => void
  handleOpenCloseModalApp: () => void
}

interface ProfileProviderProps {
  children: ReactNode
}

export const ProfileContext = createContext({} as ProfileContextData)

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [user, setUser] = useState<User>(profile.user)
  const [contributions, setContributions] = useState<Contribution[]>(
    profile.contributions,
  )
  const [deploys, setDeploys] = useState<Project[]>(profile.deploys)
  const [repositories, setRepositories] = useState<Project[]>(
    profile.repositories,
  )
  const [layouts, setLayouts] = useState<Layout[]>(profile.layouts)
  const [showProject, setShowProject] = useState(false)
  const [showContribution, setShowContribution] = useState(false)
  const [projectSelected, setProjectSelected] = useState<Project | null>(null)
  const [contributionSelected, setContributionSelected] =
    useState<Contribution | null>(null)

  function handleOpenCloseModal() {
    setShowProject(!showProject)
  }

  function getProject(project: Project) {
    setProjectSelected(project)
    handleOpenCloseModal()
  }

  function handleOpenCloseModalApp() {
    setShowContribution(!showContribution)
  }

  function getContribution(contribution: Contribution) {
    setContributionSelected(contribution)
    handleOpenCloseModalApp()
  }

  return (
    <ProfileContext.Provider
      value={{
        user,
        contributions,
        deploys,
        repositories,
        layouts,
        projectSelected,
        showProject,
        showContribution,
        getProject,
        getContribution,
        contributionSelected,
        handleOpenCloseModal,
        handleOpenCloseModalApp,
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}
