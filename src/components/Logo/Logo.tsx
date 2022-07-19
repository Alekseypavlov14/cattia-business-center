import { FC } from 'react'
import styles from './Logo.module.css'

interface LogoProps {}

export const Logo: FC<LogoProps> = () => {
  return (
    <img 
      className={styles.Logo}
      src='logo/logo-cattia.png' 
      alt='logo'
    />
  )
}