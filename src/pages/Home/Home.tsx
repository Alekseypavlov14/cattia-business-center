import { FC } from 'react'
import { Carousel } from '../../components/Carousel/Carousel'
import { Facilities } from '../../components/Facilities/Facilities'
import styles from './Home.module.css'
import image from './../../assets/home/home-page-cattia-wide-1.jpg'

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  return (
    <div className={styles.Home}>
      <Carousel />
      <Facilities />

      <div className={styles.ImageContainer}>
        <img src={image} alt="" />
      </div>
    </div>
  )
}