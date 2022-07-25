import { FC } from 'react'
import { NavLink as ReactNavLink } from 'react-router-dom'
import styles from './NavLink.module.css'

interface NavLinkProps {
  to: string
  children: string
}

export const NavLink: FC<NavLinkProps> = ({ to, children }) => {
  return (
    <ReactNavLink 
      to={to}
      children={children}
      className={({ isActive }) => 
        isActive ? styles.ActiveNavLink : styles.NavLink
      }
    />
  )
}