import { FC } from 'react'
import { Container } from '../Container/Container'
import { Logo } from '../Logo/Logo'
import { MainContact } from '../MainContact/MainContact'
import styles from './Footer.module.css'

import emailIcon from './../../assets/icon/icon-email.png'
import telIcon from './../../assets/icon/icon-tel.png'
import locationIcon from './../../assets/icon/icon-location.png'
import facebookIcon from './../../assets/icon/icon-facebook.png'
import youtubeIcon from './../../assets/icon/icon-youtube.png'

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <div className={styles.Footer}>
      <Container>
        <div className={styles.FooterContent}>
          <div className={styles.LogoContainer}>
            <Logo />
          </div>

          <div className={styles.Copyright}>
            &copy; 2022 C A T T I A - Business center, technology transfer and business incubator
          </div>

          <div className={styles.ContactInfo}>
            <div className={styles.Link}>
              <img src={emailIcon} alt=''/> cattia@metropolabrasov.ro
            </div>
            <div className={styles.Link}>
              <img src={telIcon} alt=''/>tel:+40268547616
            </div>
            <div className={styles.Link}>
              <img src={locationIcon} alt=''/>https://goo.gl/maps/cSq9skRUm82z1ouh6
            </div>
          </div>

          <div className={styles.Media}>
            <div className={styles.MediaIcon}>
              <img src={facebookIcon} alt='' />
            </div>
            <div className={styles.MediaIcon}>
              <img src={youtubeIcon} alt='' />
            </div>
          </div>
        </div>

        <div className={styles.MainContact}>
          <MainContact />
        </div>
      </Container>
    </div>
  )
}