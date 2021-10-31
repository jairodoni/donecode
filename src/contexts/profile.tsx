import { createContext, ReactNode, useState } from 'react';
import { User, Deploy, Repository, Layout } from '../types/profileContextTypes'
import profile from '../services/data.json'

interface ProfileContextData {
  user: User;
  deploys: Deploy[];
  // repositories: Repository;
  // layouts: Layout;
}

interface ProfileProviderProps {
  children: ReactNode
}

export const ProfileContext = createContext({} as ProfileContextData)

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [user, setUser] = useState<User>(profile.user)
  const [deploys, setDeploys] = useState<Deploy[]>(profile.deploys)

  return (
    <ProfileContext.Provider value={{ user, deploys }}>
      {children}
    </ProfileContext.Provider>
  )
}