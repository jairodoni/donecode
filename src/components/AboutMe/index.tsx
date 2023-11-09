import { ImLinkedin } from 'react-icons/im'
import Image from 'next/image'
import { SiGithub, SiGmail } from 'react-icons/si'
import { Timeline } from './Timeline'
import { Tooltip } from '../Tooltip'
import profile from '@/services/data.json'

import styles from './styles.module.scss'

export function AboutMe() {
  const { user } = profile

  return (
    <section id="about_me" className={styles.container}>
      <div className={styles.perfil}>
        <div className={styles.userImage}>
          <Image
            src={user.avatar}
            alt={user.name}
            priority
            width={386}
            height={486}
          />
        </div>
        <div className={styles.info}>
          <div>
            <span>Quem sou</span>
            <h1>{user.name}</h1>
            <h2>{user.office}</h2>
            <p>{user.description}</p>
            <div className={styles.redesSociais}>
              <Tooltip
                content={
                  user.contacts.linkedin ? 'Abrir link' : 'Link indisponivel'
                }
              >
                <a
                  className={styles.linkedin}
                  href={user.contacts.linkedin}
                  target="_blank"
                >
                  <ImLinkedin size={28} />
                </a>
              </Tooltip>
              <Tooltip
                content={
                  user.contacts.github ? 'Abrir link' : 'Link indisponivel'
                }
              >
                <a
                  className={styles.github}
                  href={user.contacts.github}
                  target="_blank"
                >
                  <SiGithub size={30} />
                </a>
              </Tooltip>
              <Tooltip
                content={
                  user.contacts.email ? 'Escrever e-mail' : 'Email indisponivel'
                }
              >
                <a
                  className={styles.gmail}
                  href={`mailto:${user.contacts.email}`}
                  target="_blank"
                >
                  <SiGmail size={28} />
                </a>
              </Tooltip>
            </div>
          </div>
          <Tooltip content={user.resume ? 'Abrir link' : 'Link indisponivel'}>
            <a className={styles.button} href={user.resume} target="_blank">
              Ver Curriculo Completo
            </a>
          </Tooltip>
        </div>
      </div>

      <div className={styles.timeline}>
        {user.timeline.map((point, index) => (
          <Timeline
            key={point.title}
            title={point.title}
            description={point.description}
            position={index + 1}
            last={index === user.timeline.length - 1}
          />
        ))}
      </div>
    </section>
  )
}
