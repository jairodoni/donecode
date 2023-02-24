import styles from './styles.module.scss';
import { useProfile } from '../../hooks/useProfile';
import { CardList } from '../CardList';
import { useState } from 'react';

export function SoftwaresOnline() {
  const { repositories } = useProfile()
  const [seeMore, setSeeMore] = useState(false);
  const repositoriesLimited = repositories.slice(0, 6);

  function handleSeeMore() {
    setSeeMore(!seeMore);
  };

  return (
    <div id="repositories" className={styles.container}>
      <h3>Repositorios Github</h3>
      <CardList
        projects={repositories}
        projectsLimited={repositoriesLimited}
        seeMore={seeMore}
      />
      <div className={styles.buttonSeeMore}>
        {!seeMore ?
          <button
            type="button"
            className={styles.buttonSeeMore}
            onClick={handleSeeMore}
          >
            Ver mais
          </button>
          :
          <button
            type="button"
            className={styles.buttonSeeMore}
            onClick={handleSeeMore}
          >
            Ver menos
          </button>
        }
      </div>
    </div>
  );
}