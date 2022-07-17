import { FC } from 'react'
import { Container } from '../Container/Container'
import { Logo } from '../Logo/Logo'
import { MainContact } from '../MainContact/MainContact'
import { Nav } from '../Nav/Nav'
import styles from './Header.module.css'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <div className={styles.Header}>
      <Container>
        <div className={styles.MainContact}>
          <MainContact />
        </div>

        <div className={styles.HeaderContent}>
          <Logo />
          <Nav />
        </div>
      </Container>
    </div>
  )
}