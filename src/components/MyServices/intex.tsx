import work01 from '../../assets/images/skill01.png'
import work02 from '../../assets/images/skill02.png'
import work03 from '../../assets/images/skill03.png'

import styles from './styles.module.scss';

export function MyServices() {
  return (
    <section className={styles.container}>
      <div id="servicos" className={styles.diamont}>

        <h3>Meus Serviços</h3>

        <div className={styles.work}>
          <img src={work01} alt="Web Designer" />
          <img src={work02} alt="Desenvolvedor Frontend" />
          <img src={work03} alt="Prototipagem de Design" />
        </div>
      </div>
    </section>
  );
}