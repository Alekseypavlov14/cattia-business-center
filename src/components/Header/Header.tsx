import { FC } from 'react'
import { Container } from '../Container/Container'
import styles from './Header.module.css'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <div className={styles.Header}>
      <Container>
        Hello
      </Container>
    </div>
  )
}