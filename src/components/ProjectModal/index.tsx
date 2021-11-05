import Modal from 'react-modal';
import { HiOutlineExclamationCircle } from 'react-icons/hi'
import { MdOutlineComputer, MdOutlineDescription } from 'react-icons/md'
import { BiLink } from 'react-icons/bi'
import { FaRegImages } from 'react-icons/fa'
import { RiCloseLine } from 'react-icons/ri'
import { useProfile } from '../../hooks/useProfile';

import styles from './styles.module.scss';

interface ProjectModalProps {
  isOpen: boolean;
  onRequestClose: () => void
}

export function ProjectModal({ isOpen, onRequestClose }: ProjectModalProps) {
  const { projectSelected } = useProfile()

  const statusColor = projectSelected?.status === "Concluido" ? "#00c237" : "#DBCA2F"

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <div className={styles.container}>
        <img src={projectSelected?.image_url} alt={projectSelected?.title} />
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <RiCloseLine size={32} />
        </button>
        <div className={styles.content}>

          <h3>{projectSelected?.title}</h3>

          <div className={styles.infomations}>
            <div className={styles.info}>
              <label htmlFor="status">
                <HiOutlineExclamationCircle size={24} />
                Status:
              </label>
              <span style={{ background: statusColor }}>
                {projectSelected?.status}
              </span>
            </div>
            <div className={styles.info}>
              <label htmlFor="repositorio">
                <BiLink size={24} />
                Repositorio:
              </label>
              <a
                href={projectSelected?.repository_url}
                target="_blank"
              >
                {projectSelected?.repository_url}
              </a>
            </div>
            {projectSelected?.preview_url && (
              <div className={styles.info}>
                <label htmlFor="preview">
                  <BiLink size={24} />
                  Preview:
                </label>
                <a
                  href={projectSelected.preview_url}
                  target="_blank"
                >
                  {projectSelected.preview_url}
                </a>
              </div>
            )}

          </div>

          <label htmlFor="descrição">
            <MdOutlineDescription size={24} />
            Descrição:
          </label>
          <p>
            {projectSelected?.description}
          </p>

          {projectSelected?.technologies && (
            <div className={styles.techs}>
              <label htmlFor="Tecnologias">
                <MdOutlineComputer size={24} />
                Tecnologias:
              </label>
              <ul>
                {
                  projectSelected?.technologies.map(tech => (
                    <li key={tech.name}>
                      <a
                        href={tech?.link}
                        target="_blank"
                      >
                        {tech.name}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
          )}

          <div className={styles.screenshots}>
            <label htmlFor="screenshots">
              <FaRegImages size={24} />
              Screenshots:
            </label>
            <br />
            {projectSelected?.screenshots?.map(screenshot => (
              <img
                key={screenshot.image_url}
                src={screenshot.image_url}
                alt="screenshot"
              />
            ))}
          </div>
        </div>
      </div>
    </Modal >
  );
}