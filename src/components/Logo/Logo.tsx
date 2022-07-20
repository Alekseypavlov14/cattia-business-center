import { FC } from 'react'
import styles from './Logo.module.css'
import logo from './../../assets/logo/logo-cattia.png'

interface LogoProps {}

export const Logo: FC<LogoProps> = () => {
  return (
    <img 
      className={styles.Logo}
      src={logo} 
      alt='logo'
    />
  )
}