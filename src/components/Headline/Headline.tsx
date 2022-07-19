import { FC } from 'react'
import styles from './Headline.module.css'
import cn from 'classnames'

interface HeadlineProps {
  children: string,
  center?: boolean
}

export const Headline: FC<HeadlineProps> = ({ children, center }) => {
  return (
    <div className={cn(styles.Headline, center && styles.Center)}>
      {children}
    </div>
  )
}