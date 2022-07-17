import { FC } from 'react'
import styles from './BurgerButton.module.css'

interface BurgerButtonProps {}

const BurgerButton: FC<BurgerButtonProps> = () => {
  const toggleMenu = () => {
    document.getElementById('Nav')?.classList.toggle('--opened')
    document.getElementById('burger-button')?.classList.toggle(styles.Clicked)
  }

  return (
    <div className={styles.BurgerBackground}>
      <div 
        id='burger-button'
        className={styles.BurgerButton}
        onClick={toggleMenu}
      >
        <span />
      </div>
    </div>
  )
}

export { BurgerButton }