import { FormEvent, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import emailjs from 'emailjs-com';
import { ImLinkedin } from "react-icons/im"
import { SiGithub, SiGmail } from "react-icons/si"
import { useProfile } from "../../hooks/useProfile";

import styles from './styles.module.scss';

const SERVICE_ID = `${import.meta.env.VITE_APP_SERVICE_ID}`;
const TEMPLATE_ID = `${import.meta.env.VITE_APP_TEMPLATE_ID}`;
const USER_ID = `${import.meta.env.VITE_APP_USER_ID}`;

export function Footer() {
  const { user } = useProfile()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const filterContactGithub = user.contacts.github.split('https://www.');
  const filterContactLinkedin = user.contacts.linkedin.split('https://www.');

  function sendEmail(event: FormEvent) {
    event.preventDefault();

    if (!name || !email || !message) {
      toast.error('É preciso preencher todos os campos.');
    } else {
      const target = event.target as HTMLFormElement;

      try {
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, target, USER_ID);
        toast.success('Mensagem enviada!!! 👏');
      } catch {
        toast.error('Não foi possivel enviar sua mensagem.');
      }

      target.reset();
      clearForm();
    }
    return;
  }

  function clearForm() {
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <footer id="contacts" className={styles.footer}>
      <Toaster position="top-center" reverseOrder={true} />
      <div className={styles.container}>
        <div className={styles.contacts}>
          <h3>Contatos:</h3>

          <a
            href={user.contacts.linkedin}
            target="_blank"
            style={{ background: "#0A66C2" }}
          >
            <ImLinkedin size={28} />
            {filterContactLinkedin}
          </a>
          <a
            href={user.contacts.github}
            target="_blank"
            style={{ background: "#616161" }}>
            <SiGithub size={30} />
            {filterContactGithub}
          </a>
          <a
            href={`mailto:${user.contacts.email}`}
            target="_blank"
            style={{ background: "#C14438" }}
          >
            <SiGmail size={28} />
            {user.contacts.email}
          </a>
        </div>
        <form className={styles.sendMessageForm} onSubmit={sendEmail}>
          <h3>Entre em contato:</h3>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            name="message"
            value={message}
            onChange={event => setMessage(event.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </footer>
  );
}