import styles from './styles.module.scss';
import { useProfile } from '../../hooks/useProfile';
import { CardList } from '../CardList';
import { AppContribution } from '../AppContribution';
import triangleImg from "../../assets/images/triangle-default.png"

export function Contributions() {
  const { contributions } = useProfile();

  return (
    <div id="apps" className={styles.container}>
      <div className={styles.triangle}>
        <h3>Contribuições</h3>
        <AppContribution contributions={contributions} />
      </div>
    </div>
  );
}