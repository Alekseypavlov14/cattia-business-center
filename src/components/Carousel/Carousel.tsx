import { FC, useState } from 'react'
import styles from './Carousel.module.css'

interface CarouselProps {}

export const Carousel: FC<CarouselProps> = () => {
  const [currentImage, setCurrentImage] = useState(0)

  const leftValue = -100 * currentImage + '%'

  const moveLeft = () => setCurrentImage(index => {
    let newIndex = index - 1

    if (newIndex < 0) newIndex = 2
    if (newIndex > 2) newIndex = 0

    return newIndex
  })
  const moveRight = () => setCurrentImage(index => {
    let newIndex = index + 1

    if (newIndex < 0) newIndex = 2
    if (newIndex > 2) newIndex = 0

    return newIndex
  })

  return (
    <div className={styles.Carousel}>
      <div className={styles.CarouselWrapper} style={{marginLeft: leftValue}}>
        <div className={styles.CarouselImageContainer}>
          <img 
            className={styles.CarouselImage}
            src='home-1.jpg' 
            alt='' 
          />
        </div>
        <div className={styles.CarouselImageContainer}>
          <img 
            className={styles.CarouselImage}
            src='home-2.jpg' 
            alt='' 
          />
        </div>
        <div className={styles.CarouselImageContainer}>
          <img 
            className={styles.CarouselImage}
            src='home-3.jpg' 
            alt='' 
          />
        </div>
      </div>

      <div className={styles.Decorator}>
        <img src='home-decor.png' alt='' />
      </div>

      <div className={styles.Controllers}>
        <button 
          className={styles.ControllerButton}
          onClick={moveLeft}
        >
          	&#8249;
        </button>
        <button 
          className={styles.ControllerButton}
          onClick={moveRight}
        >
          	&#8250;
        </button>
      </div>
    </div>
  )
}