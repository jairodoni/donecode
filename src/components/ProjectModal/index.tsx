'use client'
import Image from 'next/image'
import Modal from 'react-modal'
import { MdOutlineComputer, MdOutlineDescription } from 'react-icons/md'
import { FaRegImages } from 'react-icons/fa'
import { RiCloseLine } from 'react-icons/ri'
import { PiGearSixFill } from 'react-icons/pi'

import { useProfile } from '../../hooks/useProfile'
import { Tooltip } from '../Tooltip'

import styles from './styles.module.scss'

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
              <Tooltip
                content={
                  projectSelected?.preview_url
                    ? 'Abrir link'
                    : 'Website indisponivel'
                }
              >
                <button
                  disabled={!projectSelected?.preview_url}
                  className={styles.exportLink}
                >
                  <a href={projectSelected?.preview_url} target="_blank">
                    Ver Website
                  </a>
                </button>
              </Tooltip>
            )}
            <Tooltip
              content={
                projectSelected?.repository_url
                  ? 'Abrir link'
                  : 'Código Privado'
              }
            >
              <button
                disabled={!projectSelected?.repository_url}
                className={styles.exportLink}
              >
                <a href={projectSelected?.repository_url} target="_blank">
                  Ver Código
                </a>
              </button>
            </Tooltip>
          </div>

          <label>
            <MdOutlineDescription size={24} />
            Descrição:
          </label>
          <p>{projectSelected?.description}</p>

          {projectSelected?.technologies && (
            <div className={styles.techs}>
              <label>
                <MdOutlineComputer size={24} />
                Tecnologias:
              </label>
              <ul>
                {projectSelected?.technologies.map((tech) => (
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
            {!!projectSelected?.screenshots?.length &&
              projectSelected?.screenshots?.length > 0 && (
                <label>
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
