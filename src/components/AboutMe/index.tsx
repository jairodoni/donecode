import { ImLinkedin } from 'react-icons/im'
import Image from 'next/image'
import { SiGithub, SiGmail } from 'react-icons/si'
import { Timeline } from './Timeline'
import { Tooltip } from '../Tooltip'

import styles from './styles.module.scss'
import { User } from '@/types/profileContextTypes'

interface AboutMeProps {
  user: User
}

export async function AboutMe({ user }: AboutMeProps) {
  const avatar = user.avatar.url ? user.avatar.url : ''
  const alt = user.avatar.alt ? user.avatar.alt : ''
  const contacts: any = user?.contacts[0]

  return (
    <section id="about_me" className={styles.container}>
      <div className={styles.perfil}>
        <div className={styles.userImage}>
          <Image src={avatar} alt={alt} priority width={386} height={486} />
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
                  contacts?.linkedin?.url ? 'Abrir link' : 'Link indisponivel'
                }
              >
                <a
                  className={styles.linkedin}
                  href={String(contacts?.linkedin?.url)}
                  target="_blank"
                >
                  <ImLinkedin size={28} />
                </a>
              </Tooltip>
              <Tooltip
                content={contacts.github ? 'Abrir link' : 'Link indisponivel'}
              >
                <a
                  className={styles.github}
                  href={String(contacts?.github?.url)}
                  target="_blank"
                >
                  <SiGithub size={30} />
                </a>
              </Tooltip>
              <Tooltip
                content={
                  contacts?.email ? 'Escrever e-mail' : 'Email indisponivel'
                }
              >
                <a
                  className={styles.gmail}
                  href={`mailto:${contacts?.email}`}
                  target="_blank"
                >
                  <SiGmail size={28} />
                </a>
              </Tooltip>
            </div>
          </div>
          <Tooltip content={user.resume ? 'Abrir link' : 'Link indisponivel'}>
            <a className={styles.button} href={user.resume.url} target="_blank">
              Ver Curriculo Completo
            </a>
          </Tooltip>
        </div>
      </div>

      <div className={styles.timeline}>
        {user.timeline.map((point, index) => (
          <Timeline
            key={point.title}
            title={String(point.title)}
            description={String(point.description)}
            position={index + 1}
            last={index === user.timeline.length - 1}
          />
        ))}
      </div>
    </section>
  )
}
