'use client'
import Modal from 'react-modal'
import { HiOutlineExclamationCircle } from 'react-icons/hi'
import { MdOutlineComputer, MdOutlineDescription } from 'react-icons/md'
import { BiLink } from 'react-icons/bi'
import { FaRegImages } from 'react-icons/fa'
import { RiCloseLine } from 'react-icons/ri'
import { useProfile } from '../../hooks/useProfile'

import styles from './styles.module.scss'
import Image from 'next/image'
import { PiGearSixFill } from 'react-icons/pi'

interface ProjectModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function ProjectModal() {
  const { showProject, handleOpenCloseModal, projectSelected } = useProfile()
  const statusColor =
    projectSelected?.status === 'Concluído' ? '#00c237' : '#DBCA2F'

  return (
    <Modal
      isOpen={showProject}
      onRequestClose={handleOpenCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <div className={styles.container}>
        <Image
          src={projectSelected ? projectSelected.image_url : ''}
          alt={projectSelected ? projectSelected?.title : ''}
          quality={90}
          width={1920}
          height={1080}
        />
        <button
          type="button"
          onClick={handleOpenCloseModal}
          className="react-modal-close"
        >
          <RiCloseLine size={32} />
        </button>
        <div className={styles.content}>
          <div className={styles.title}>
            <h3>{projectSelected?.title}</h3>
            <div style={{ background: statusColor }}>
              <span>{projectSelected?.status}</span>
            </div>
          </div>
          <div className="dividerHorizontal" />
          <div className={styles.infomations}>
            {projectSelected?.preview_url && (
              <a
                href={projectSelected?.preview_url}
                className={styles.exportLink}
                target="_blank"
              >
                Ver Website
              </a>
            )}
            <a
              href={projectSelected?.repository_url}
              className={styles.exportLink}
              target="_blank"
            >
              Ver Código
            </a>
          </div>

          <label htmlFor="descrição">
            <MdOutlineDescription size={24} />
            Descrição:
          </label>
          <p>{projectSelected?.description}</p>

          {projectSelected?.technologies && (
            <div className={styles.techs}>
              <label htmlFor="Tecnologias">
                <MdOutlineComputer size={24} />
                Tecnologias:
              </label>
              <ul>
                {projectSelected?.technologies.map((tech) => (
                  <li key={tech.name}>
                    <a
                      key={tech.name}
                      href={tech?.link}
                      className={styles.stack}
                      target="_blank"
                    >
                      <PiGearSixFill size={18} />
                      <span>{tech.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className={styles.screenshots}>
            {!!projectSelected?.screenshots?.length &&
              projectSelected?.screenshots?.length > 0 && (
                <label htmlFor="screenshots">
                  <FaRegImages size={24} />
                  Screenshots:
                </label>
              )}
            <br />
            {projectSelected?.screenshots?.map((screenshot) => (
              <Image
                key={screenshot.image_url}
                src={screenshot.image_url}
                alt="screenshot"
                quality={90}
                width={1920}
                height={1080}
              />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  )
}
