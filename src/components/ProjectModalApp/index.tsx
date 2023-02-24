import Modal from 'react-modal';
import { HiOutlineExclamationCircle } from 'react-icons/hi'
import { MdOutlineComputer, MdOutlineDescription } from 'react-icons/md'
import { FiStar } from 'react-icons/fi'
import { FaGooglePlay, FaApple, FaStar } from 'react-icons/fa'
import { BiLink } from 'react-icons/bi'
import { FaRegImages } from 'react-icons/fa'
import { RiCloseLine } from 'react-icons/ri'
import { useProfile } from '../../hooks/useProfile';

import styles from './styles.module.scss';

interface ProjectModalAppProps {
  isOpen: boolean;
  onRequestClose: () => void
}

export function ProjectModalApp({ isOpen, onRequestClose }: ProjectModalAppProps) {
  const { contributionSelected } = useProfile()
  const playStore = contributionSelected?.data_play_store;
  const appleStore = contributionSelected?.data_apple_store;

  const statusColor = contributionSelected?.status === "Ativo" ? "#00c237" : "#DBCA2F"

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <div className={styles.container}>
        <div className={styles.headerModal}>
          <div className={styles.logo}>
            <div>
              <img 
                src={contributionSelected?.logo}
                alt={contributionSelected?.name}
              />
            </div>
          </div>
          <img 
            className={styles.logo_large}
            src={contributionSelected?.logo_large}
            alt={contributionSelected?.name} 
          />
        </div>
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <RiCloseLine size={32} />
        </button>
        <div className={styles.content}>

          <h3>{contributionSelected?.name}</h3>

          <div className={styles.infomations}>
            <div className={styles.info}>
              <label htmlFor="status">
                <HiOutlineExclamationCircle size={24} />
                Status:
              </label>
              <span style={{ background: statusColor }}>
                {contributionSelected?.status}
              </span>
            </div>
            <div className={styles.info}>
              <label htmlFor="repositorio">
                <BiLink size={24} />
                Play Store:
              </label>
              <a
                href={contributionSelected?.play_store}
                target="_blank"
              >
                {contributionSelected?.play_store}
              </a>
            </div>
            <div className={styles.info}>
              <label htmlFor="repositorio">
                <BiLink size={24} />
                Apple Store:
              </label>
              <a
                href={contributionSelected?.apple_store}
                target="_blank"
              >
                {contributionSelected?.apple_store}
              </a>
            </div>
            <div className={styles.store}>
              <div className={styles.info}>
                <label htmlFor="repositorio">
                  <FaGooglePlay size={20} />
                  Dados Play Store:
                </label>
                <div>
                  
                  <strong>
                    <FaStar size={11} color="#333"/>
                    {playStore?.rating}
                  </strong>
                  <strong>{playStore?.number_rating}</strong>
                  <strong>{playStore?.number_downloads}</strong>
                </div>
              </div>
              <div className={styles.info}>
                <label htmlFor="repositorio">
                  <FaApple size={24} />
                  Dados Apple Store:
                </label>
                <div>
                  
                  <strong>
                    <FaStar size={11} color="#333"/>
                    {appleStore?.rating}
                  </strong>
                  <strong>{appleStore?.number_rating}</strong>
                </div>
              </div>
            </div>
          </div>

          <label htmlFor="descrição">
            <MdOutlineDescription size={24} />
            Descrição:
          </label>
          <p>
            {contributionSelected?.description}
          </p>

          {contributionSelected?.technologies && (
            <div className={styles.techs}>
              <label htmlFor="Tecnologias">
                <MdOutlineComputer size={24} />
                Tecnologias:
              </label>
              <ul>
                {
                  contributionSelected?.technologies.map(tech => (
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
            {contributionSelected?.screenshots?.map(screenshot => (
                <img
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