import styles from './styles.module.scss';

interface User {
  name: string;
  office: string;
  avatar: string;
}

export function Perfil({ name, office, avatar }: User) {
  return (
    <div className={styles.perfil}>
      <div className={styles.userImage}>
        <img src={avatar} alt={name} />
      </div>
      <div>
        <h1>{name}</h1>
        <h2>{office}</h2>
      </div>
    </div>
  );
}