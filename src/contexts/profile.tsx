'use client'
import { createContext, ReactNode, useState } from 'react'
import { Project, Aplicativos } from '../types/profileContextTypes'

interface ProfileContextData {
  showProject: boolean
  showAppProject: boolean
  projectSelected: Project | null
  appSelected: Aplicativos | null
  getProject: (project: Project) => void
  getAppProject: (app: Aplicativos) => void
  handleOpenCloseModal: () => void
  handleOpenCloseModalApp: () => void
}

interface ProfileProviderProps {
  children: ReactNode
}

export const ProfileContext = createContext({} as ProfileContextData)

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [showProject, setShowProject] = useState(false)
  const [showAppProject, setShowAppProject] = useState(false)
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
    setShowAppProject(!showAppProject)
  }

  function getAppProject(app: Aplicativos) {
    setAppSelected(app)
    handleOpenCloseModalApp()
  }

  return (
    <ProfileContext.Provider
      value={{
        projectSelected,
        showProject,
        showAppProject,
        getProject,
        getAppProject,
        appSelected,
        handleOpenCloseModal,
        handleOpenCloseModalApp,
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}
