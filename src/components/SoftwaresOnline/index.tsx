import styles from './styles.module.scss';
import { useProfile } from '../../hooks/useProfile';

export function SoftwaresOnline() {
  const { deploys } = useProfile()

  return (
    <div className={styles.container}>
      <h3>Softwares Online</h3>
      <div className={styles.cardList}>
        {deploys.map(deploy => (
          <div key={deploy.id} className={styles.card} >
            <img src={deploy.image_url} alt={deploy.title} />
            <button type="button">Ver detalhes</button>
          </div>
        ))}
      </div>
    </div>
  );
}