import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import styles from './Carousel.module.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Carousel.css'

interface CarouselProps {}

export const Carousel: FC<CarouselProps> = () => {
  return (
    <Swiper
      className={styles.Swiper}
      modules={[Autoplay, Navigation, Pagination]}
      navigation
      autoHeight
      slidesPerView={1}
      spaceBetween={0}
      loop
      speed={2500}
      pagination={{
        clickable: true
      }}
      autoplay={{
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: true
      }}
    >
      <SwiperSlide className={styles.Slice}>
        <img src='home/home-1.jpg' alt='' />
      </SwiperSlide>
      <SwiperSlide className={styles.Slice}>
        <img src='home/home-2.jpg' alt='' />
      </SwiperSlide>
      <SwiperSlide className={styles.Slice}>
        <img src='home/home-3.jpg' alt='' />
      </SwiperSlide>

      <div className={styles.Decor}>
        <img src="home/home-decor.png" alt="" />
      </div>
    </Swiper>
  )
}