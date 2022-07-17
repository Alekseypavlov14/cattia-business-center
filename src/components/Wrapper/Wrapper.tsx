import { FC, ReactNode } from 'react'
import './Wrapper.css'

interface WrapperProps {
  children: ReactNode
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div id='wrapper'>
      {children}
    </div>
  )
}