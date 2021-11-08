import { useProfile } from "../hooks/useProfile";
import { Navigation } from "../components/Navigation";
import { AboutMe } from "../components/AboutMe";
import { MyServices } from "../components/MyServices/intex";
import { SoftwaresOnline } from "../components/SoftwaresOnline";
import { Repositories } from "../components/Repositories";
import { PrototypesUI } from "../components/PrototypesUI";
import { Footer } from "../components/Footer";
import { ProjectModal } from "../components/ProjectModal";

import developer from '../assets/images/developer.svg'
import waves from '../assets/images/waves.svg'

import styles from '../styles/Home.module.scss';


export default function Home() {
  const { showProject, handleOpenCloseModal } = useProfile();

  return (
    <>
      <Navigation />
      <main className={styles.main_container} >

        <section id="start" className={styles.front_cover}>
          <img className={styles.developer} src={developer} alt="developer" />
          <img className={styles.waves} src={waves} alt="waves" />
        </section>

        <AboutMe />
        <MyServices />
        <SoftwaresOnline />
        <Repositories />
        <PrototypesUI />
        <Footer />

        <ProjectModal
          isOpen={showProject}
          onRequestClose={handleOpenCloseModal}
        />
      </main>
    </>
  );
}
