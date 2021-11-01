import { Navigation } from "./components/Navigation";

import developer from './assets/images/developer.svg'
import waves from './assets/images/waves.svg'
import { Resume } from "./components/Resume";

import styles from './styles/app.module.scss';
import { MyServices } from "./components/MyServices/intex";
import { SoftwaresOnline } from "./components/SoftwaresOnline";
import { Repositories } from "./components/Repositories";
import { LayoutPrototypes } from "./components/LayoutPrototypes";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <main className={styles.main_container}>
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
