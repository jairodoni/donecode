import styles from './styles.module.scss';
import letmeask from '../../assets/images/softwares/letmeask.png'
import maisumquiz from '../../assets/images/softwares/maisumquiz.png'
import spacetraveling from '../../assets/images/softwares/spacetraveling.png'
import techflix from '../../assets/images/softwares/techflix.png'
import todo from '../../assets/images/softwares/todo.png'
import clock from '../../assets/images/softwares/clock.png'
import { useProfile } from '../../hooks/useProfile';

export function LayoutPrototypes() {
  const { layouts } = useProfile();

  return (
    <div className={styles.container}>
      <h3>Prototipos de Figma e Adobe XD </h3>
      <div className={styles.cardList}>

        {layouts.map(layout => (
          <div key={layout.id} className={styles.card} >
            <img src={layout.image_url} alt={layout.name} />
            <button>{layout.tool}</button>
          </div>
        ))}

        {/* <div className={styles.card} >
          <img src={letmeask} alt="letmeask" />
          <button type="button">Figma</button>
        </div>

        <div className={styles.card} >
          <img src={maisumquiz} alt="mais um quiz" />
          <button type="button">Figma</button>
        </div>

        <div className={styles.card} >
          <img src={spacetraveling} alt="space traveling" />
          <button type="button">Figma</button>
        </div>

        <div className={styles.card} >
          <img src={techflix} alt="techflix" />
          <button type="button">Figma</button>
        </div>

        <div className={styles.card} >
          <img src={todo} alt="todo" />
          <button type="button">Figma</button>
        </div>

        <div className={styles.card} >
          <img src={clock} alt="clock" />
          <button type="button">Figma</button>
        </div> */}
      </div>
    </div>
  );
}