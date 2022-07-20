import { FC } from 'react'
import { Button } from '../../components/Button/Button'
import { Container } from '../../components/Container/Container'
import { Facility } from '../../components/Facility/Facility'
import styles from './Facilities.module.css'

import facility1 from './../../assets/facilities/facility-1.jpg'
import facility2 from './../../assets/facilities/facility-2.jpg'
import facility3 from './../../assets/facilities/facility-3.jpg'
import facility4 from './../../assets/facilities/facility-4.jpg'
import facility5 from './../../assets/facilities/facility-5.jpg'
import facility6 from './../../assets/facilities/facility-6.jpg'

import bgImage from './../../assets/facilities/bg.jpg'

interface FacilitiesProps {}

export const Facilities: FC<FacilitiesProps> = () => {
  return (
    <div className={styles.Facilities}>
      <Container>
        <div className={styles.FacilitiesContent}>
          <Facility>
            <img src={facility1} alt="" />
            <Button>Lobby</Button>
          </Facility>
          <Facility>
            <img src={facility2} alt="" />
            <Button>Conferences - Workshops</Button>
          </Facility>
          <Facility>
            <img src={facility3} alt="" />
            <Button>Exhibition spaces</Button>
          </Facility>
          <Facility>
            <img src={facility4} alt="" />
            <Button>Common Workspaces</Button>
          </Facility>
          <Facility>
            <img src={facility5} alt="" />
            <Button>Restaurant</Button>
          </Facility>
          <Facility>
            <img src={facility6} alt="" />
            <Button>Parking</Button>
          </Facility>
        </div>
      </Container>

      <img className={styles.BgImage} src={bgImage} alt='' />
    </div>
  )
}