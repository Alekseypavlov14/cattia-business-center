import { FC } from 'react'
import { Container } from '../../components/Container/Container'
import styles from './Home.module.css'

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  return (
    <div className={styles.Home}>
      <Container>Home Page</Container>
    </div>
  )
}