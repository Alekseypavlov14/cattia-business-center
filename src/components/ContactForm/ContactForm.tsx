import { FC, useState } from 'react'
import { Button } from '../Button/Button'
import { Headline } from '../Headline/Headline'
import styles from './ContactForm.module.css'

interface ContactFormProps {}

export const ContactForm: FC<ContactFormProps> = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const submitHandler = () => {
    if (!name || !email || !message) {
      alert('* fields are required')
    }
    alert('The message is sent')
  }
  
  return (
    <div className={styles.ContactForm}>
      <Headline center>
        Do you have any questions? Contact Us
      </Headline>

      <div className={styles.InputSet}>
        <div className={styles.InputBlock}>
          <div className={styles.InputName}>
            Name: *
          </div>
          <input 
            className={styles.InputField}
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.InputBlock}>
          <div className={styles.InputName}>
            Email: *
          </div>
          <input 
            className={styles.InputField}
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.InputBlock}>
          <div className={styles.InputName}>
            Phone:
          </div>
          <input 
            className={styles.InputField}
            type='tel'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className={styles.InputBlock}>
          <div className={styles.InputName}>
            Message: *
          </div>
          <textarea 
            className={styles.TextareaField}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.SubmitButton}>
        <Button outlined onClick={submitHandler}>Submit</Button>
      </div>
    </div>
  )
}