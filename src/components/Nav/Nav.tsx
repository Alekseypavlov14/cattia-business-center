import { FC } from 'react'
import { NavLink } from '../NavLink/NavLink'
import styles from './Nav.module.css'

interface NavProps {}

export const Nav: FC<NavProps> = () => {
  return (
    <div id='Nav' className={styles.Nav}>
      <div className={styles.Link}>
        <NavLink to='/'>Home</NavLink>
      </div>
      <div className={styles.Link}>
        <NavLink to='/presentation'>Presentation</NavLink>
      </div>
      <div className={styles.Link}>
        <NavLink to='/facilities'>Facilities</NavLink>
      </div>
      <div className={styles.Link}>
        <NavLink to='/rates'>Rates</NavLink>
      </div>  
      <div className={styles.Link}>
        <NavLink to='/gallery'>Gallery</NavLink>
      </div>
      <div className={styles.Link}>
        <NavLink to='/contact'>Contact</NavLink>
      </div>
    </div>
  )
}