import { useEffect } from 'react';
import Modal from 'react-modal';
import { Routes } from './routes';
import { ProfileProvider } from './contexts/profile';
import ReactGA from 'react-ga';

Modal.setAppElement('#root');

export default function App() {
  async function initializeGAnalytics() {
    await ReactGA.initialize(`${import.meta.env.VITE_ANALYTICS_ID}`);
    await ReactGA.pageview("/");
  }

  useEffect(() => {
    initializeGAnalytics();
  }, []);

  return (

    <ProfileProvider>
      <Routes />
    </ProfileProvider>
  );
}
