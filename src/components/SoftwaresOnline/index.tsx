import styles from './styles.module.scss';
import { useProfile } from '../../hooks/useProfile';
import { CardList } from '../CardList';

export function SoftwaresOnline() {
  const { deploys } = useProfile();

  return (
    <div id="softwares" className={styles.container}>
      <h3>Softwares Online</h3>
      <CardList projects={deploys} />
    </div>
  );
}