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
      pagination={{
        clickable: true
      }}
      navigation
      autoHeight
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      autoplay={{
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: true
      }}
      speed={2500}
    >
      <SwiperSlide className={styles.Slice}>
        <img src='home-1.jpg' alt='' />
      </SwiperSlide>
      <SwiperSlide className={styles.Slice}>
        <img src='home-2.jpg' alt='' />
      </SwiperSlide>
      <SwiperSlide className={styles.Slice}>
        <img src='home-3.jpg' alt='' />
      </SwiperSlide>

      <div className={styles.Decor}>
        <img src="home-decor.png" alt="" />
      </div>
    </Swiper>
  )
}