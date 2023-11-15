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
    projectSelected?.data?.status === 'Concluído' ? '#00c237' : '#DBB52E'

  return (
    <Modal
      isOpen={showProject}
      onRequestClose={handleOpenCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <div className={styles.container}>
        <Image
          src={String(projectSelected?.data?.image_url?.url)}
          alt=""
          quality={90}
          width={projectSelected?.data.image_url.dimensions.width}
          height={projectSelected?.data.image_url.dimensions.height}
          priority={true}
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
            <h3>{projectSelected?.data?.name}</h3>
            <div style={{ background: statusColor }}>
              <span>{projectSelected?.data.status}</span>
            </div>
          </div>
          <div className="dividerHorizontal" />
          <div className={styles.infomations}>
            <Tooltip
              content={
                projectSelected?.data?.preview_url?.url
                  ? 'Abrir link'
                  : 'Website indisponivel'
              }
            >
              <button
                disabled={!projectSelected?.data?.preview_url?.url}
                className={styles.exportLink}
              >
                <a
                  href={projectSelected?.data?.preview_url?.url}
                  target="_blank"
                >
                  Ver Website
                </a>
              </button>
            </Tooltip>
            <Tooltip
              content={
                projectSelected?.data?.repository_url
                  ? 'Abrir link'
                  : 'Código Privado'
              }
            >
              <button
                disabled={!projectSelected?.data?.repository_url}
                className={styles.exportLink}
              >
                <a href={projectSelected?.data?.repository_url} target="_blank">
                  Ver Código
                </a>
              </button>
            </Tooltip>
          </div>

          <label>
            <MdOutlineDescription size={24} />
            Descrição:
          </label>
          <p>{projectSelected?.data?.description}</p>

          {projectSelected?.data?.technologies && (
            <div className={styles.techs}>
              <label>
                <MdOutlineComputer size={24} />
                Tecnologias:
              </label>
              <ul>
                {projectSelected?.data?.technologies.map((tech) => {
                  return (
                    <li key={tech.name}>
                      <Tooltip
                        content={
                          tech?.link ? 'Abrir link' : 'Link indisponivel'
                        }
                      >
                        <a
                          href={String(tech?.link)}
                          className={styles.stack}
                          target="_blank"
                        >
                          <PiGearSixFill size={18} />
                          <span>{tech.name}</span>
                        </a>
                      </Tooltip>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
          <div className={styles.screenshots}>
            {!!projectSelected?.data?.screenshots?.length &&
              projectSelected?.data?.screenshots?.length > 0 && (
                <label>
                  <FaRegImages size={24} />
                  Screenshots:
                </label>
              )}
            <br />
            {!!projectSelected?.data.screenshots.length &&
              projectSelected.data.screenshots.length > 0 &&
              projectSelected.data.screenshots.map((screenshot) => (
                <Image
                  key={screenshot?.image_url?.url}
                  src={String(screenshot?.image_url?.url)}
                  alt=""
                  quality={90}
                  width={screenshot?.image_url?.dimensions.width}
                  height={360}
                />
              ))}
          </div>
        </div>
      </div>
    </Modal>
  )
}
