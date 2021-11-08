import service01 from '../../assets/images/service01.png';
import service02 from '../../assets/images/service02.png';
import service03 from '../../assets/images/service03.png';

import styles from './styles.module.scss';

export function MyServices() {
  return (
    <section className={styles.container}>
      <div id="servicos" className={styles.diamont}>
        <div className={styles.blur}>
          <h3>Meus Serviços</h3>

          <div className={styles.work}>
            <img src={service01} alt="Web Design" />
            <img src={service02} alt="Desenvolvedor Frontend" />
            <img src={service03} alt="UI Desig" />
          </div>
        </div>
      </div>
    </section>
  );
}