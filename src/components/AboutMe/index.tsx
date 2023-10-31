'use client'
import { ImLinkedin } from 'react-icons/im'
import { useProfile } from '../../hooks/useProfile'

import styles from './styles.module.scss'
import Image from 'next/image'
import { SiGithub, SiGmail } from 'react-icons/si'
import { Timeline } from './Timeline'

const mock = [
  {
    title: '2016',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: '2017',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: '2020',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: '2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

export function AboutMe() {
  const { user } = useProfile()

  return (
    <section id="about_me" className={styles.container}>
      <div className={styles.perfil}>
        <div className={styles.userImage}>
          <Image src={user.avatar} alt={user.name} width={386} height={486} />
        </div>
        <div className={styles.info}>
          <span>Quem sou</span>
          <h1>{user.name}</h1>
          <h2>{user.office}</h2>
          <p>{user.description}</p>

          <div className={styles.redesSociais}>
            <a
              className={styles.linkedin}
              href={user.contacts.linkedin}
              target="_blank"
            >
              <ImLinkedin size={28} />
            </a>
            <a
              className={styles.github}
              href={user.contacts.github}
              target="_blank"
            >
              <SiGithub size={30} />
            </a>
            <a
              className={styles.gmail}
              href={`mailto:${user.contacts.email}`}
              target="_blank"
            >
              <SiGmail size={28} />
            </a>
          </div>
          <a className={styles.button} href={user.resume} target="_blank">
            Ver Curriculo Completo
          </a>
        </div>
      </div>

      <div className={styles.timeline}>
        {mock.map((point, index) => (
          <Timeline
            key={point.title}
            title={point.title}
            description={point.description}
            position={index + 1}
            last={index === mock.length - 1}
          />
        ))}
      </div>
    </section>
  )
}
