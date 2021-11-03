import { ImLinkedin } from "react-icons/im"
import { SiGithub, SiGmail } from "react-icons/si"
import { useProfile } from "../../hooks/useProfile";
import styles from './styles.module.scss';

export function Footer() {
  const { user } = useProfile()

  const filterContactGithub = user.contacts.github.split('https://www.')
  const filterContactLinkedin = user.contacts.linkedin.split('https://www.')


  return (
    <footer id="contacts" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contacts}>
          <h3>Contatos:</h3>

          <a style={{ background: "#0A66C2" }}>
            <ImLinkedin size={28} />
            {filterContactLinkedin}
          </a>
          <a style={{ background: "#616161" }}>
            <SiGithub size={30} />
            {filterContactGithub}
          </a>
          <a style={{ background: "#C14438" }}>
            <SiGmail size={28} />
            {user.contacts.email}
          </a>
        </div>
        <form className={styles.sendMessageForm}>
          <h3>Entre em contato:</h3>
          <label htmlFor="name">Nome:</label>
          <input type="text" />
          <label htmlFor="email">Email:</label>
          <input type="text" />
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </footer>
  );
}