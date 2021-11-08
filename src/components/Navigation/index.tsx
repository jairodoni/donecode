import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import styles from './styles.module.scss';

export function Navigation() {
  const [activeMenu, setActiveMenu] = useState(false);

  function handleActiveMenu() {
    setActiveMenu(!activeMenu)
  }

  var windowWidth = window.innerWidth;
  const mobileMenu = windowWidth <= 900 ? handleActiveMenu : () => { };
  const active = activeMenu === false ? "" : styles.active;


  return (
    <header className={styles.navigation} >
      <nav >
        <h1 onClick={activeMenu === true ? mobileMenu : () => { }}>
          <a href="#start">
            donicode
            <span style={{ color: "#7064fb" }}>.</span>
          </a>
        </h1>
        <div className={`${styles.mobileMenu} ` + `${active}`} onClick={handleActiveMenu}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
        <ul className={`${styles.navList} ${active}`} >
          <li onClick={mobileMenu}>
            <a href="#about_me">
              Sobre mim
            </a>
          </li>
          <li onClick={mobileMenu}>
            <a href="#servicos">
              Serviços
            </a>
          </li>
          <li onClick={mobileMenu}>
            <a href="#softwares">
              Softwares
            </a>
          </li>
          <li onClick={mobileMenu}>
            <a href="#repositories">
              Repositorios
            </a>
          </li>
          <li onClick={mobileMenu}>
            <a href="#layouts">
              Prototipos UI
            </a>
          </li>
          <li onClick={mobileMenu}>
            <a href="#contacts">
              Contatos
            </a>
          </li>
        </ul>
      </nav>
    </header >
  )
}