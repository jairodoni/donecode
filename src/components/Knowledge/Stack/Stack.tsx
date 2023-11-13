import { ReactNode } from 'react'

import styles from './styles.module.scss'

interface StackProps {
  children: ReactNode
  onCurrentStack: (stack: string) => void
  stack: string
}

export function Stack({ children, onCurrentStack, stack }: StackProps) {
  return (
    <div className={styles.stack} onMouseOver={() => onCurrentStack(stack)}>
      {children}
    </div>
  )
}
