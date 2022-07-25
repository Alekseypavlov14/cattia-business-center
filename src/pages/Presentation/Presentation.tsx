import { FC } from 'react'
import { Container } from '../../components/Container/Container'
import { Headline } from '../../components/Headline/Headline'
import { PreTitle } from '../../components/PreTitle/PreTitle'
import { Button } from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import styles from './Presentation.module.css'

import mark from './../../assets/icon/list-mark.png'
import cattia from './../../assets/presentation/cattia.jpg'

interface PresentationProps {}

export const Presentation: FC<PresentationProps> = () => {
  const nav = useNavigate()

  return (
    <div className={styles.Presentation}>
      <Container>
        <div className={styles.TitleBlock}>
          <Headline>CATTIA</Headline>
          <PreTitle>
            Business center, technology transfer and business incubator
          </PreTitle>
        </div>

        <article className={styles.PresentationContent}>
          <section className={styles.PresentationSection}>
            <div className={styles.Title}>
              Business center, technology transfer and business incubator (CATTIA)
            </div>
            <div className={styles.Content}>
              designed to offer a full range of services related to its multiple
              functions such as: information center, incubation space for 
              business and innovation in viable fields (renewable energy, IT&C, 
              aeronautics and electrical engineering), laboratories (testing, 
              certification, homologation), company representatives, coworking 
              area, multimedia space, spaces for events, workshops, seminars and 
              exhibitions, professional services, as well as administrative area.
              Through its profile, the center aims to support new businesses in 
              viable areas, ensure the transfer of know-how and mediate business.
              Through the newly created infrastructure, the Municipality of 
              Brașov aimed to encourage the economic and social development of 
              Brașov Metropolitan Area by supporting the business environment.
            </div>
          </section>

          <section className={styles.PresentationSection}>
            <div className={styles.Title}>
              Brașov Metropolitan Agency
            </div>
            <div className={styles.Content}>
              as coordinator of activities, aims to position the structure 
              as a point of interest for the business, academic and institutional 
              environment, by differentiating it from the competition, both 
              from the perspective of the services offered and by the role 
              of integrator of all activities within the center.
            </div>
          </section>

          <section className={styles.PresentationSection}>
            <img className={styles.Image} src={cattia} alt='' />
          </section>

          <section className={styles.PresentationSection}>
            <div className={styles.Title}>
              CATTIA appeals in particular:
            </div>
            <div className={styles.Content}>
              <ul className={styles.List}>
                <li className={styles.ListItem}>
                  <img src={mark} className={styles.ListItemMark} alt='' />
                  Young specialists, start-ups and companies active in 
                  priority areas: renewable energy, IT&C, aeronautics and 
                  electrical engineering
                </li>
                <li className={styles.ListItem}>
                  <img src={mark} className={styles.ListItemMark} alt='' />
                  Consulting firms
                </li>
                <li className={styles.ListItem}>
                  <img src={mark} className={styles.ListItemMark} alt='' />
                  Representations of companies headquartered outside Brașov
                </li>
                <li className={styles.ListItem}>
                  <img src={mark} className={styles.ListItemMark} alt='' />
                  Companies from other fields of activity, with development potential and 
                  impact on the local and regional economy (eg. tourism, education, etc.)
                </li>
                <li className={styles.ListItem}>
                  <img src={mark} className={styles.ListItemMark} alt='' />
                  Events organizers: conferences, fairs, exhibitions, etc.
                </li>
              </ul>
            </div>
          </section>
        </article>

        <hr />

        <div className={styles.Links}>
          <Button 
            onClick={() => nav('/facilities')}
            outlined
          >
            Facilities
          </Button>

          <Button 
            onClick={() => nav('/contact')}
            outlined  
          >
            Contacts
          </Button>
        </div>
      </Container>
    </div>
  )
}