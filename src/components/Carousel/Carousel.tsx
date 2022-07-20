import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import styles from './Carousel.module.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Carousel.css'

import image1 from './../../assets/home/home-1.jpg'
import image2 from './../../assets/home/home-2.jpg'
import image3 from './../../assets/home/home-3.jpg'
import decor from './../../assets/home/home-decor.png'

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
        <img src={image1} alt='' />
      </SwiperSlide>
      <SwiperSlide className={styles.Slice}>
        <img src={image2} alt='' />
      </SwiperSlide>
      <SwiperSlide className={styles.Slice}>
        <img src={image3} alt='' />
      </SwiperSlide>

      <div className={styles.Decor}>
        <img src={decor} alt="" />
      </div>
    </Swiper>
  )
}