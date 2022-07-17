import { FC } from 'react'
import { NavLink } from '../NavLink/NavLink'
import styles from './Nav.module.css'

interface NavProps {}

export const Nav: FC<NavProps> = () => {
  return (
    <div className={styles.Nav}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/presentation'>Presentation</NavLink>
      <NavLink to='/facilities'>Facilities</NavLink>
      <NavLink to='/rates'>Rates</NavLink>
      <NavLink to='/gallery'>Gallery</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </div>
  )
}