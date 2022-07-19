import { FC, MouseEvent } from 'react'
import styles from './Button.module.css'
import cn from 'classnames'

interface ButtonProps {
  children: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  outlined?: boolean
}

export const Button: FC<ButtonProps> = ({ children, onClick, outlined }) => {
  return (
    <button 
      onClick={onClick} 
      className={cn(styles.Button, outlined && styles.Outlined)}
    >
      {children}
    </button>
  )
}