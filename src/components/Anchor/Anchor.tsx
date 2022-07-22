import { FC, ReactNode } from 'react'
import styles from './Anchor.module.css'
import cn from 'classnames'

interface AnchorProps {
  href: string
  children: ReactNode
  className: string
}

export const Anchor: FC<AnchorProps> = ({ href, children, className }) => {
  return (
    <a 
      className={cn(styles.Anchor, className)}
      href={href}
      rel='noreferrer'
      target='_blank'
    >
      {children}
    </a>
  )
}