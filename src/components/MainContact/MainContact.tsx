import { FC } from 'react'
import styles from './MainContact.module.css'

interface MainContactProps {}

export const MainContact: FC<MainContactProps> = () => {
  return (
    <>
      <span className={styles.ContactText}>Reception CATTIA: </span>
      <a 
        href='tel:+40 774 035 612'
        className={styles.ContactLink}
      >
        +40 774 035 612
      </a>
    </>
  )
}