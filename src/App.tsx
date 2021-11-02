import { Navigation } from "./components/Navigation";
import Modal from 'react-modal';
import { Resume } from "./components/Resume";
import { MyServices } from "./components/MyServices/intex";
import { SoftwaresOnline } from "./components/SoftwaresOnline";
import { Repositories } from "./components/Repositories";
import { LayoutPrototypes } from "./components/LayoutPrototypes";
import { Footer } from "./components/Footer";

import developer from './assets/images/developer.svg'
import waves from './assets/images/waves.svg'
import styles from './styles/app.module.scss';
import { ProjectModal } from "./components/ProjectModal";
import { useState } from "react";
import { useProfile } from "./hooks/useProfile";

Modal.setAppElement('#root')

export default function App() {
  const { showProject, handleOpenCloseModal } = useProfile()
  return (
    <>
      <main className={styles.main_container}>
        <ProjectModal
          isOpen={showProject}
          onRequestClose={handleOpenCloseModal}

        />
        <Navigation />
        <section className={styles.front_cover}>

          <img className={styles.developer} src={developer} alt="developer" />

          <img className={styles.waves} src={waves} alt="waves" />
        </section>
        <Resume />
        <MyServices />
        <SoftwaresOnline />
        <Repositories />
        <LayoutPrototypes />
        <Footer />

      </main>
    </>
  );
}
