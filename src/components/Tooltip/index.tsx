import * as TooltipRadix from '@radix-ui/react-tooltip'
import styles from './styles.module.scss'
import { ReactNode } from 'react'

export interface TooltipProps {
  content: string
  children: ReactNode
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root {...props}>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipRadix.Content className={styles.tooltipComponent}>
            <span>{content}</span>
            <TooltipRadix.Arrow className={styles.arrowIcon} />
          </TooltipRadix.Content>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}
