import { FC } from 'react'
import { Container } from '../Container/Container'
import { Logo } from '../Logo/Logo'
import { MainContact } from '../MainContact/MainContact'
import styles from './Footer.module.css'

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
              <img src='icon/icon-email.png' alt=''/> cattia@metropolabrasov.ro
            </div>
            <div className={styles.Link}>
              <img src='icon/icon-tel.png' alt=''/>tel:+40268547616
            </div>
            <div className={styles.Link}>
              <img src='icon/icon-location.png' alt=''/>https://goo.gl/maps/cSq9skRUm82z1ouh6
            </div>
          </div>

          <div className={styles.Media}>
            <div className={styles.MediaIcon}>
              <img src='icon/icon-facebook.png' alt='' />
            </div>
            <div className={styles.MediaIcon}>
              <img src='icon/icon-youtube.png' alt='' />
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