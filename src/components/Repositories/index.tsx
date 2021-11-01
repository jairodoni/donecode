import styles from './styles.module.scss';
import { useProfile } from '../../hooks/useProfile';
import { useState } from 'react';

export function Repositories() {
  const { repositories } = useProfile()
  const [seeMore, setSeeMore] = useState(false);
  const repositoriesLimited = repositories.slice(0, 6);

  function handleSeeMore() {
    setSeeMore(!seeMore)
  }

  return (
    <div className={styles.container}>
      <h3>Repositorios Github</h3>
      <div className={styles.cardList}>
        {seeMore === true ? repositories.map(project => (
          <div key={project.id} className={styles.card} >
            <img src={project.image_url} alt={project.title} />
            <button type="button">Ver detalhes</button>
          </div>
        )) :
          repositoriesLimited.map(project => (
            <div key={project.id} className={styles.card} >
              <img src={project.image_url} alt={project.title} />
              <button type="button" >Ver detalhes</button>
            </div>
          ))
        }
      </div>

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
