import styles from './styles.module.scss';
import { useProfile } from '../../hooks/useProfile';

export function PrototypesUI() {
  const { layouts } = useProfile();

  return (
    <section id="layouts" className={styles.container}>
      <h3>Prototipos UI</h3>
      <div className={styles.cardList}>

        {layouts.map(layout => (
          <div key={layout.id} className={styles.card} >
            <a href={layout.layout_url} target="_blank">
              <img src={layout.image_url} alt={layout.name} />
              <button>{layout.tool}</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}