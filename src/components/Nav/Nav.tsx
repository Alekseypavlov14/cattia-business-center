import { FC } from 'react'
import { openedSelector, toggle } from '../../features/burger/burgerSlice'
import { useAppSelector } from '../../hooks/useAppSelector'
import { NavLink } from '../NavLink/NavLink'
import { useDispatch } from 'react-redux'
import styles from './Nav.module.css'
import cn from 'classnames'

interface NavProps {}

export const Nav: FC<NavProps> = () => {
  const opened = useAppSelector(openedSelector)
  const dispatch = useDispatch()

  const closeMenuHandler = () => dispatch(toggle())

  return (
    <div className={cn(styles.Nav, opened && styles.Opened)}>
      <div 
        className={styles.Link}
        onClick={closeMenuHandler}
      >
        <NavLink to='/'>Home</NavLink>
      </div>

      <div 
        className={styles.Link}
        onClick={closeMenuHandler}
      >
        <NavLink to='/presentation'>Presentation</NavLink>
      </div>

      <div 
        className={styles.Link}
        onClick={closeMenuHandler}
      >
        <NavLink to='/facilities'>Facilities</NavLink>
      </div>
      
      <div 
        className={styles.Link}
        onClick={closeMenuHandler}
      >
        <NavLink to='/contact'>Contact</NavLink>
      </div>
    </div>
  )
}