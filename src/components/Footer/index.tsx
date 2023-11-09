'use client'
import { FormEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import emailjs from '@emailjs/browser'
import { ImLinkedin } from 'react-icons/im'
import { SiGithub, SiGmail } from 'react-icons/si'
import Modal from 'react-modal'

import { useProfile } from '../../hooks/useProfile'
import { Tooltip } from '../Tooltip'

import styles from './styles.module.scss'

Modal.setAppElement('#body')

const SERVICE_ID = `${process.env.VITE_APP_SERVICE_ID}`
const TEMPLATE_ID = `${process.env.VITE_APP_TEMPLATE_ID}`
const USER_ID = `${process.env.VITE_APP_USER_ID}`

export function Footer() {
  const { user } = useProfile()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const filterContactGithub = user.contacts.github.split('https://www.')
  const filterContactLinkedin = user.contacts.linkedin.split('https://www.')

  function sendEmail(event: FormEvent) {
    event.preventDefault()

    if (!name || !email || !message) {
      toast.error('É preciso preencher todos os campos.')
    } else {
      const target = event.target as HTMLFormElement

      try {
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, target, USER_ID)
        toast.success('Mensagem enviada!!! 👏')
      } catch {
        toast.error('Não foi possivel enviar sua mensagem.')
      }

      target.reset()
      clearForm()
    }
  }

  function clearForm() {
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <footer id="contacts" className={styles.footer}>
      <Toaster position="top-center" reverseOrder={true} />
      <div className={styles.container}>
        <div className={styles.contacts}>
          <h3>Contatos:</h3>
          <Tooltip
            content={
              user.contacts.linkedin ? 'Abrir link' : 'Link indisponivel'
            }
          >
            <a
              href={user.contacts.linkedin}
              target="_blank"
              style={{ background: '#0A66C2' }}
            >
              <ImLinkedin size={28} />
              {filterContactLinkedin}
            </a>
          </Tooltip>
          <Tooltip
            content={user.contacts.github ? 'Abrir link' : 'Link indisponivel'}
          >
            <a
              href={user.contacts.github}
              target="_blank"
              style={{ background: '#616161' }}
            >
              <SiGithub size={30} />
              {filterContactGithub}
            </a>
          </Tooltip>
          <Tooltip
            content={
              user.contacts.email ? 'Escrever e-mail' : 'Email indisponivel'
            }
          >
            <a
              href={`mailto:${user.contacts.email}`}
              target="_blank"
              style={{ background: '#C14438' }}
            >
              <SiGmail size={28} />
              {user.contacts.email}
            </a>
          </Tooltip>
        </div>
        <form className={styles.sendMessageForm} onSubmit={sendEmail}>
          <h3>Entre em contato:</h3>
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label>Mensagem:</label>
          <textarea
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <Tooltip content="Enviar mensagem">
            <button type="submit">Enviar</button>
          </Tooltip>
        </form>
      </div>
    </footer>
  )
}
