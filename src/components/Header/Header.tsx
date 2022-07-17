import { FC } from 'react'
import { Container } from '../Container/Container'
import { Logo } from '../Logo/Logo'
import { MainContact } from '../MainContact/MainContact'
import styles from './Header.module.css'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <div className={styles.Header}>
      <Container>
        <div className={styles.MainContact}>
          <MainContact />
        </div>
        <Logo />
      </Container>
    </div>
  )
}