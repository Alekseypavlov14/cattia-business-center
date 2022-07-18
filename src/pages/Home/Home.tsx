import { FC } from 'react'
import { Carousel } from '../../components/Carousel/Carousel'
import styles from './Home.module.css'

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  return (
    <div className={styles.Home}>
      <Carousel />
    </div>
  )
}