import { FC } from 'react'
import { Anchor } from '../../components/Anchor/Anchor'
import { SocialMediaDashboard } from '../../components/SocialMediaDashboard/SocialMediaDashboard'
import { Headline } from '../../components/Headline/Headline'
import { PreTitle } from '../../components/PreTitle/PreTitle'
import { ContactForm } from '../../components/ContactForm/ContactForm'
import { Container } from '../../components/Container/Container'
import styles from './Contacts.module.css'

import bg from './../../assets/contacts/bg.jpg'


interface ContactsProps {}

export const Contacts: FC<ContactsProps> = () => {
  return (
    <div className={styles.Contacts}>
      <div className={styles.BgImageContainer}>
        <img className={styles.BgImage} src={bg} alt='' />
      </div>

      <Container>
        <div className={styles.ContactList}>
          <div className={styles.Title}>
            <Headline center>Contact</Headline>
          </div>
          <div className={styles.PreTitle}>
            <PreTitle center>Brașov Metropolitan Agency for Sustainable Development</PreTitle>
          </div>
  
          <div className={styles.Links}>
            <Anchor 
              className={styles.Link} 
              href='https://goo.gl/maps/cSq9skRUm82z1ouh6'
            >
              Str. Institutului nr. 35, Brasov, Romania
            </Anchor>
            <Anchor 
              className={styles.Link} 
              href='tel:+40268547616'
            >
              +40 268 547 616
            </Anchor>
            <Anchor 
              className={styles.Link} 
              href='mailto:cattia@metropolabrasov.ro'
            >
              cattia@metropolabrasov.ro
            </Anchor>
            <Anchor 
              className={styles.Link} 
              href='https://www.facebook.com/cattiabv/'
            >
              www.facebook.com/cattiabv/
            </Anchor>
          </div>
        </div>
  
        <ContactForm />
        
        <SocialMediaDashboard />
      </Container>
    </div>
  )
}