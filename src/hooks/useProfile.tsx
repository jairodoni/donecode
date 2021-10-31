import { useContext } from 'react';
import { ProfileContext } from '../contexts/profile';

export const useProfile = () => {
  return useContext(ProfileContext);
}