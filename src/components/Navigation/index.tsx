import styles from './styles.module.scss';

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <h1>JairoDoni.com</h1>
      <ul>
        <li>Curriculo</li>
        <li>Softwares</li>
        <li>Repositorios</li>
        <li>Prototipos</li>
        <li>Contatos</li>
      </ul>
    </nav>
  )
}