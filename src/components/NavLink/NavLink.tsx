import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './NavLink.module.css'

interface NavLinkProps {
  to: string
  children: string
}

export const NavLink: FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link 
      to={to}
      children={children}
      className={styles.NavLink}
    />
  )
}