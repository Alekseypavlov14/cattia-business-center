import { FC } from 'react'
import { Anchor } from '../../components/Anchor/Anchor'
import { SocialMediaDashboard } from '../../components/SocialMediaDashboard/SocialMediaDashboard'
import styles from './Contacts.module.css'

import bg from './../../assets/contacts/bg.jpg'


interface ContactsProps {}

export const Contacts: FC<ContactsProps> = () => {
  return (
    <div className={styles.Contacts}>
      <div className={styles.BgImageContainer}>
        <img className={styles.BgImage} src={bg} alt='' />
      </div>

      <div className={styles.ContactList}>
        <div className={styles.ContactListTitle}>Contact</div>
        <div className={styles.PreTitle}>Brașov Metropolitan Agency for Sustainable Development</div>

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
      
      <SocialMediaDashboard />
    </div>
  )
}