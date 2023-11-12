'use client'
import { createContext, ReactNode, useState } from 'react'
import { Project, Aplicativos } from '../types/profileContextTypes'

interface ProfileContextData {
  showProject: boolean
  showContribution: boolean
  projectSelected: Project | null
  appSelected: Aplicativos | null
  getProject: (project: Project) => void
  getContribution: (app: Aplicativos) => void
  handleOpenCloseModal: () => void
  handleOpenCloseModalApp: () => void
}

interface ProfileProviderProps {
  children: ReactNode
}

export const ProfileContext = createContext({} as ProfileContextData)

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [showProject, setShowProject] = useState(false)
  const [showContribution, setShowContribution] = useState(false)
  const [projectSelected, setProjectSelected] = useState<Project | null>(null)
  const [appSelected, setAppSelected] = useState<Aplicativos | null>(null)

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

  function getContribution(app: Aplicativos) {
    setAppSelected(app)
    handleOpenCloseModalApp()
  }

  return (
    <ProfileContext.Provider
      value={{
        projectSelected,
        showProject,
        showContribution,
        getProject,
        getContribution,
        appSelected,
        handleOpenCloseModal,
        handleOpenCloseModalApp,
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}
