import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import styles from './styles.module.scss';

export function Navigation() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [title, setTitle] = useState("")

  const location = useLocation();

  useEffect(() => {
    const linkIn = location?.hash;
    if (linkIn === "") {
      setTitle("Home")
    }
    if (linkIn === "#start") {
      setTitle("Home")
    }
    if (linkIn === "#about_me") {
      setTitle("Sobre mim")
    }
    if (linkIn === "#servicos") {
      setTitle("Serviços")
    }
    if (linkIn === "#softwares") {
      setTitle("Softwares")
    }
    if (linkIn === "#repositories") {
      setTitle("Repositorios")
    }
    if (linkIn === "#layouts") {
      setTitle("Prototipos UI")
    }
    if (linkIn === "#contacts") {
      setTitle("Contatos")
    }
  }, [location])


  function handleActiveMenu() {
    setActiveMenu(!activeMenu)
  }

  var windowWidth = window.innerWidth;
  const mobileMenu = windowWidth <= 900 ? handleActiveMenu : () => { };
  const active = activeMenu === false ? "" : styles.active;


  return (
    <>
      <head>
        <title>Donicode  |  {title}</title>
      </head>

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
                Curriculo
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
    </>
  )
}