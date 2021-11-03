import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

export function Navigation() {
  const [activeMenu, setActiveMenu] = useState(false);

  function handleActiveMenu() {
    setActiveMenu(!activeMenu)
  }
  const active = activeMenu === false ? "" : styles.active;

  return (
    <header className={styles.navigation}>
      <nav >
        <h1>MyProfile</h1>
        <div className={`${styles.mobileMenu} ` + `${active}`} onClick={handleActiveMenu}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
        <ul className={`${styles.navList} ${active}`} >
          <li onClick={handleActiveMenu}>
            <a href="#resume">
              Curriculo
            </a>
          </li>
          <li onClick={handleActiveMenu}>
            <a href="#softwares">
              Softwares
            </a>
          </li>
          <li onClick={handleActiveMenu}>
            <a href="#repositories">
              Repositorios
            </a>
          </li>
          <li onClick={handleActiveMenu}>
            <a href="#layouts">
              Prototipos
            </a>
          </li>
          <li onClick={handleActiveMenu}>
            <a href="#contacts">
              Contatos
            </a>
          </li>
        </ul>
      </nav>
    </header >
  )
}