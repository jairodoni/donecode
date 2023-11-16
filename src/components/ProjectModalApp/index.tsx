'use client'
import Image from 'next/image'
import Modal from 'react-modal'
import { RiCloseLine } from 'react-icons/ri'
import { PiGearSixFill } from 'react-icons/pi'
import { MdOutlineComputer, MdOutlineDescription } from 'react-icons/md'
import { FaGooglePlay, FaApple, FaStar, FaRegImages } from 'react-icons/fa'

import { useProfile } from '../../hooks/useProfile'
import { Tooltip } from '../Tooltip'

import styles from './styles.module.scss'

export function ProjectModalApp() {
  const { showContribution, handleOpenCloseModalApp } = useProfile()

  const { appSelected } = useProfile()
  const playStore = appSelected?.data.data_play_store[0]
  const appleStore = appSelected?.data.data_apple_store[0]
  const logoLarge = appSelected?.data.logo_large
  const logoSmall = appSelected?.data.logo_small

  const statusColor =
    appSelected?.data?.status === 'Ativo' ? '#00c237' : '#C14438'

  return (
    <Modal
      isOpen={showContribution}
      onRequestClose={handleOpenCloseModalApp}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <div className={styles.container}>
        <div className={styles.headerModal}>
          <div className={styles.logo}>
            <div>
              <Image
                src={String(logoSmall?.url)}
                alt=""
                quality={80}
                width={logoSmall?.dimensions?.width}
                height={logoSmall?.dimensions?.height}
                priority={true}
              />
            </div>
          </div>

          <Image
            className={styles.logo_large}
            src={String(logoLarge?.url)}
            alt=""
            quality={80}
            width={logoLarge?.dimensions.width}
            height={logoLarge?.dimensions.height}
          />
        </div>
        <button
          type="button"
          onClick={handleOpenCloseModalApp}
          className="react-modal-close"
        >
          <RiCloseLine size={32} />
        </button>
        <div className={styles.content}>
          <div className={styles.title}>
            <h3>{appSelected?.data.name}</h3>
            <div style={{ background: statusColor }}>
              <span>{appSelected?.data.status}</span>
            </div>
          </div>
          <div className="dividerHorizontal" />
          <div className={styles.infomations}>
            <Tooltip
              content={
                appSelected?.data.play_store
                  ? 'Abrir link'
                  : 'Link indisponivel'
              }
            >
              <a
                href={appSelected?.data.play_store.url}
                className={styles.exportLink}
                target={appSelected?.data.play_store.target}
              >
                Play Store App
              </a>
            </Tooltip>
            <Tooltip
              content={
                appSelected?.data.apple_store
                  ? 'Abrir link'
                  : 'Link indisponivel'
              }
            >
              <a
                href={appSelected?.data.apple_store.url}
                className={styles.exportLink}
                target={appSelected?.data.apple_store.target}
              >
                Apple Store App
              </a>
            </Tooltip>
          </div>

          <div className={styles.store}>
            <div className={styles.info}>
              <label>
                <FaGooglePlay size={20} />
                Dados Play Store:
              </label>
              <div>
                <strong>
                  <FaStar size={11} color="#f5f5f5" />
                  {playStore?.rating}
                </strong>
                <strong>{playStore?.number_rating}</strong>
                <strong>{playStore?.number_downloads}</strong>
              </div>
            </div>
            <div className={styles.info}>
              <label>
                <FaApple size={24} />
                Dados Apple Store:
              </label>
              <div>
                <strong>
                  <FaStar size={11} color="#f5f5f5" />
                  {appleStore?.rating}
                </strong>
                <strong>{appleStore?.number_rating}</strong>
              </div>
            </div>
          </div>

          <label>
            <MdOutlineDescription size={24} />
            Descrição:
          </label>
          <p>{appSelected?.data.description}</p>

          {appSelected?.data.technologies && (
            <div className={styles.techs}>
              <label>
                <MdOutlineComputer size={24} />
                Tecnologias:
              </label>
              <ul>
                {appSelected?.data.technologies.map((tech) => (
                  <li key={tech.name}>
                    <Tooltip
                      content={tech?.link ? 'Abrir link' : 'Link indisponivel'}
                    >
                      <a
                        key={String(tech?.name)}
                        href={String(tech?.link)}
                        className={styles.stack}
                        target="_blank"
                      >
                        <PiGearSixFill size={18} />
                        <span>{tech.name}</span>
                      </a>
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className={styles.screenshots}>
            <label>
              <FaRegImages size={24} />
              Screenshots:
            </label>
            <br />
            {appSelected?.data?.screenshots?.map((screenshot) => (
              <Image
                className={styles.screenshotImg}
                key={screenshot.image_url}
                src={String(screenshot.image_url)}
                alt="screenshot"
                quality={80}
                height={858}
                width={484}
              />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  )
}
