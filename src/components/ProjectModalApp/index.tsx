'use client'
import Image from 'next/image'
import Modal from 'react-modal'
import { RiCloseLine } from 'react-icons/ri'
import { PiGearSixFill } from 'react-icons/pi'
import { MdOutlineComputer, MdOutlineDescription } from 'react-icons/md'
import { FaGooglePlay, FaApple, FaStar, FaRegImages } from 'react-icons/fa'
import {
  CinesystemSmallImage,
  KinoplexSmallImage,
  TargetSmallImage,
  CinesystemLargeImage,
  KinoplexLargeImage,
  TargetLargeImage,
} from './imageImports'

import { useProfile } from '../../hooks/useProfile'
import { Tooltip } from '../Tooltip'

import styles from './styles.module.scss'

export function ProjectModalApp() {
  const { showContribution, handleOpenCloseModalApp } = useProfile()

  const { contributionSelected } = useProfile()
  const playStore = contributionSelected?.data_play_store
  const appleStore = contributionSelected?.data_apple_store

  const statusColor =
    contributionSelected?.status === 'Ativo' ? '#00c237' : '#DBCA2F'

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
              {contributionSelected?.logo === 'cinesystem' && (
                <Image
                  src={CinesystemSmallImage}
                  alt={contributionSelected?.name}
                  quality={90}
                />
              )}
              {contributionSelected?.logo === 'kinoplex' && (
                <Image
                  src={KinoplexSmallImage}
                  alt={contributionSelected?.name}
                  quality={90}
                />
              )}
              {contributionSelected?.logo === 'target' && (
                <Image
                  src={TargetSmallImage}
                  alt={contributionSelected?.name}
                  quality={90}
                />
              )}
            </div>
          </div>
          {contributionSelected?.logo === 'cinesystem' && (
            <Image
              className={styles.logo_large}
              src={CinesystemLargeImage}
              alt={contributionSelected?.name}
              quality={90}
            />
          )}
          {contributionSelected?.logo === 'kinoplex' && (
            <Image
              className={styles.logo_large}
              src={KinoplexLargeImage}
              alt={contributionSelected?.name}
              quality={90}
            />
          )}
          {contributionSelected?.logo === 'target' && (
            <Image
              className={styles.logo_large}
              src={TargetLargeImage}
              alt={contributionSelected?.name}
              quality={90}
            />
          )}
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
            <h3>{contributionSelected?.name}</h3>
            <div style={{ background: statusColor }}>
              <span>{contributionSelected?.status}</span>
            </div>
          </div>
          <div className="dividerHorizontal" />
          <div className={styles.infomations}>
            <Tooltip
              content={
                contributionSelected?.play_store
                  ? 'Abrir link'
                  : 'Link indisponivel'
              }
            >
              <a
                href={contributionSelected?.play_store}
                className={styles.exportLink}
                target="_blank"
              >
                Play Store App
              </a>
            </Tooltip>
            <Tooltip
              content={
                contributionSelected?.apple_store
                  ? 'Abrir link'
                  : 'Link indisponivel'
              }
            >
              <a
                href={contributionSelected?.apple_store}
                className={styles.exportLink}
                target="_blank"
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
          <p>{contributionSelected?.description}</p>

          {contributionSelected?.technologies && (
            <div className={styles.techs}>
              <label>
                <MdOutlineComputer size={24} />
                Tecnologias:
              </label>
              <ul>
                {contributionSelected?.technologies.map((tech) => (
                  <li key={tech.name}>
                    <Tooltip
                      content={tech?.link ? 'Abrir link' : 'Link indisponivel'}
                    >
                      <a
                        key={tech.name}
                        href={tech?.link}
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
            {contributionSelected?.screenshots?.map((screenshot) => (
              <Image
                className={styles.screenshotImg}
                key={screenshot.image_url}
                src={screenshot.image_url}
                alt="screenshot"
                quality={90}
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
