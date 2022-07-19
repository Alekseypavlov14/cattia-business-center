import { FC } from 'react'
import styles from './PreTitle.module.css'
import cn from 'classnames'

interface PreTitleProps {
  children: string
  center?: boolean
}

export const PreTitle: FC<PreTitleProps> = ({ children, center }) => {
  return (
    <div className={cn(styles.PreTitle, center && styles.Center)}>
      {children}
    </div>
  )
}