import { createContext, ReactNode, useState } from 'react';
import { User, Project, Layout } from '../types/profileContextTypes'
import profile from '../services/data.json'

interface ProfileContextData {
  user: User;
  deploys: Project[];
  repositories: Project[];
  layouts: Layout[];
  showProject: boolean;
  projectSelected: Project | null;
  getProject: (project: Project) => void;
  handleOpenCloseModal: () => void;
}

interface ProfileProviderProps {
  children: ReactNode
}

export const ProfileContext = createContext({} as ProfileContextData)

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [user, setUser] = useState<User>(profile.user)
  const [deploys, setDeploys] = useState<Project[]>(profile.deploys)
  const [repositories, setRepositories] = useState<Project[]>(profile.repositories)
  const [layouts, setLayouts] = useState<Layout[]>(profile.layouts)
  const [showProject, setShowProject] = useState(false);
  const [projectSelected, setProjectSelected] = useState<Project | null>(null);

  function handleOpenCloseModal() {
    setShowProject(!showProject)
  }

  function getProject(project: Project) {
    setProjectSelected(project);
    handleOpenCloseModal();
  }


  return (
    <ProfileContext.Provider
      value={{
        user,
        deploys,
        repositories,
        layouts,
        showProject,
        handleOpenCloseModal,
        projectSelected,
        getProject
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}