import { FC } from 'react'
import { Container } from '../Container/Container'
import { Headline } from '../Headline/Headline'
import { PreTitle } from '../PreTitle/PreTitle'
import styles from './Facilities.module.css'

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
    </div>
  )
}