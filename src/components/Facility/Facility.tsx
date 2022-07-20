import { FC, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Facility.module.css'

interface FacilityProps {
  children: [ReactNode, ReactNode, ReactNode?]
}

export const Facility: FC<FacilityProps> = ({ children }) => {
  const nav = useNavigate()

  return (
    <div className={styles.Facility}>
      <div 
        className={styles.ImageContainer} 
        onClick={() => nav('facilities')}
      >
        {children[0]}
      </div>
      <div 
        className={styles.ButtonContainer} 
        onClick={() => nav('facilities')}
      >
        {children[1]}
      </div>
      {children[2] && (
        <div className={styles.TextContainer}>
          {children[2]}
        </div>
      )}
    </div>
  )
}