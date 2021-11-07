import Modal from 'react-modal';
import { Routes } from './routes';
import { ProfileProvider } from './contexts/profile';

Modal.setAppElement('#root');

export default function App() {
  return (
    <ProfileProvider>
      <Routes />
    </ProfileProvider>
  );
}
