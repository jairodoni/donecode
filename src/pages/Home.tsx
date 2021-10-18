import { Navigation } from "../components/Navigation";

import developer from '../assets/images/developer.svg'
import waves from '../assets/images/waves.svg'
import styles from '../styles/home.module.scss';
import { Curriculum } from "../components/Curriculum";

export default function Home() {
  return (
    <>
      <main className={styles.main_container}>
        <Navigation />
        <section className={styles.front_cover}>

          <img className={styles.developer} src={developer} alt="developer" />

          <img className={styles.waves} src={waves} alt="waves" />
        </section>
        <Curriculum />
      </main>
    </>
  );
}
