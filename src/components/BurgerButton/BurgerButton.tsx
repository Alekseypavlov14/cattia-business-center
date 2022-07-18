import { FC } from 'react'
import { openedSelector, toggle } from '../../features/burger/burgerSlice'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useDispatch } from 'react-redux'
import styles from './BurgerButton.module.css'
import cn from 'classnames'

interface BurgerButtonProps {}

const BurgerButton: FC<BurgerButtonProps> = () => {
  const opened = useAppSelector(openedSelector)
  const dispatch = useDispatch()

  const toggleMenu = () => dispatch(toggle())

  return (
    <div className={styles.BurgerBackground}>
      <div
        id='burger-button'
        className={cn(styles.BurgerButton, opened && styles.Clicked)}
        onClick={toggleMenu}
      >
        <span />
      </div>
    </div>
  )
}

export { BurgerButton }
