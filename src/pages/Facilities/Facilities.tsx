import { FC } from 'react'
import { Button } from '../../components/Button/Button'
import { Container } from '../../components/Container/Container'
import { Facility } from '../../components/Facility/Facility'
import styles from './Facilities.module.css'

interface FacilitiesProps {}

export const Facilities: FC<FacilitiesProps> = () => {
  return (
    <div className={styles.Facilities}>
      <Container>
        <Facility>
          <img src="facilities/facility-1.jpg" alt="" />
          <Button>Lobby</Button>
        </Facility>
      </Container>
    </div>
  )
}