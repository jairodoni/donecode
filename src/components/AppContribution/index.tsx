import { useProfile } from '../../hooks/useProfile';
import { Contribution } from '../../types/profileContextTypes';


import styles from './styles.module.scss';

interface AppContributionProps {
  contributions: Contribution[]
}

export function AppContribution({ contributions }: AppContributionProps) {
  const { getContribution } = useProfile();

  return (
    <div className={styles.cardList}>
      {
        contributions.map(contribution => (
          <div key={contribution.id} className={styles.containerApp}>
            <div
              onClick={() => getContribution(contribution)}
              className={styles.card}
            >
              <img src={contribution.logo} alt={contribution.name} />
            </div>
            <h3>{contribution.name}</h3>
          </div>
        ))
      }
    </div>
  );
}