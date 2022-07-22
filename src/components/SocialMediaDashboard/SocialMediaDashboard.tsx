import { FC } from 'react'
import styles from './SocialMediaDashboard.module.css'

import facebook from './../../assets/icon/medias/facebook.png'
import whatsapp from './../../assets/icon/medias/whatsapp.png'
import twitter from './../../assets/icon/medias/twitter.png'

interface SocialMediaDashboardProps {}

export const SocialMediaDashboard: FC<SocialMediaDashboardProps> = () => {
  return (
    <div className={styles.SocialMediaDashboard}>
      <div className={styles.SocialMedia}>
        <img src={facebook} alt='' />
      </div>
      <div className={styles.SocialMedia}>
        <img src={whatsapp} alt='' />
      </div>
      <div className={styles.SocialMedia}>
        <img src={twitter} alt='' />
      </div>
    </div>
  )
}