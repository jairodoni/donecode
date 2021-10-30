import styles from './styles.module.scss';
import letmeask from '../../assets/images/softwares/letmeask.png'
import maisumquiz from '../../assets/images/softwares/maisumquiz.png'
import spacetraveling from '../../assets/images/softwares/spacetraveling.png'
import techflix from '../../assets/images/softwares/techflix.png'
import todo from '../../assets/images/softwares/todo.png'
import clock from '../../assets/images/softwares/clock.jpg'

export function SoftwaresOnline() {
  return (
    <div className={styles.container}>
      <h3>Softwares Online</h3>
      <div className={styles.cardList}>
        <div className={styles.card} >
          <div className={styles.image}>
            <img src={letmeask} alt="letmeask" />
          </div>
          <button type="button">Ver detalhes</button>
        </div>
        <div className={styles.card} >
          <img src={maisumquiz} alt="mais um quiz" />
          <button type="button">Ver detalhes</button>
        </div>
        <div className={styles.card} >
          <img src={spacetraveling} alt="space traveling" />
          <button type="button">Ver detalhes</button>
        </div>
        <div className={styles.card} >
          <img src={techflix} alt="techflix" />
          <button type="button">Ver detalhes</button>
        </div>
        <div className={styles.card} >
          <img src={todo} alt="todo" />
          <button type="button">Ver detalhes</button>
        </div>
        <div className={styles.card} >
          <img src={clock} alt="clock" />
          <button type="button">Ver detalhes</button>
        </div>
      </div>
    </div>
  );
}