import { TextSection } from './TextSection'
import styles from './styles.module.scss'

interface TimelineProps {
  description: string
  title: string
  last: boolean
  position: number
}

export function Timeline({
  title,
  description,
  last,
  position,
}: TimelineProps) {
  return (
    <div className={styles.timelineItem}>
      <div>
        <div className={styles.point} />
        <div className={styles.line} />
        {last && <div className={styles.lastPoint} />}
      </div>
      <TextSection
        description={description}
        title={title}
        position={position}
      />
    </div>
  )
}
