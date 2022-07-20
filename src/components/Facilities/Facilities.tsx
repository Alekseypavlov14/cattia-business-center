import { FC } from 'react'
import { Button } from '../Button/Button'
import { Container } from '../Container/Container'
import { Facility } from '../Facility/Facility'
import { Headline } from '../Headline/Headline'
import { PreTitle } from '../PreTitle/PreTitle'
import styles from './Facilities.module.css'

import facility1 from './../../assets/home/facilities/conference-hall.jpg'
import facility2 from './../../assets/home/facilities/exhibition-area.jpg'
import facility3 from './../../assets/home/facilities/co-working.jpg'

interface FacilitiesProps {}

export const Facilities: FC<FacilitiesProps> = () => {
  return (
    <div className={styles.Facilities}>
      <Container>
        <div className={styles.TitleBlock}>
          <div className={styles.PreTitle}>
            <PreTitle center>
              Business center, technology transfer and business incubator
            </PreTitle>
          </div>
          <Headline center>
            C&nbsp;A&nbsp;T&nbsp;T&nbsp;I&nbsp;A
          </Headline>
        </div>

      </Container>

      <div className={styles.FacilitiesContent}>
        <Facility>
          <img src={facility1} alt='' />
          <Button outlined>
            Conference
          </Button>
          <>
            The amphitheater-type conference room, 250 seats 
            and 3 workshop rooms
          </>
        </Facility>
        <Facility>
          <img src={facility2} alt='' />
          <Button outlined>
            Exhibition Area
          </Button>
          <>
            800 mp indoor exhibition space and 6000 mp outdoor
            exhibition space
          </>
        </Facility>
        <Facility>
          <img src={facility3} alt='' />
          <Button outlined>
            Co-Working
          </Button>
          <>
            Business Incubator, Technology Transfer Area, Coworking Area
          </>
        </Facility>
      </div>
    </div>
  )
}