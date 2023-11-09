import styles from './styles.module.scss'

interface SeeMoreButtonProps {
  seeMore: boolean
  handleSeeMore: () => void
}

export function SeeMoreButton({ seeMore, handleSeeMore }: SeeMoreButtonProps) {
  return (
    <div className={styles.buttonSeeMore}>
      {!seeMore ? (
        <button
          type="button"
          className={styles.buttonSeeMore}
          onClick={handleSeeMore}
        >
          Ver mais
        </button>
      ) : (
        <button
          type="button"
          className={styles.buttonSeeMore}
          onClick={handleSeeMore}
        >
          Ver menos
        </button>
      )}
    </div>
  )
}
