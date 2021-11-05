import { useState } from 'react';
import Modal from 'react-modal';
import { BiSearchAlt } from 'react-icons/bi'
import { useProfile } from '../../hooks/useProfile';

import styles from './styles.module.scss';
import { CardList } from '../CardList';

Modal.setAppElement('#root')

export function Repositories() {
  const { repositories, getProject, } = useProfile()
  const [seeMore, setSeeMore] = useState(false);
  const repositoriesLimited = repositories.slice(0, 6);

  function handleSeeMore() {
    setSeeMore(!seeMore);
  };

  return (
    <section id="repositories" className={styles.container}>
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
    </section>
  );
}
