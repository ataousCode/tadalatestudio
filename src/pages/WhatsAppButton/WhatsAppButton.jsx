import { FaWhatsapp } from 'react-icons/fa'
import styles from './WhatsAppButton.module.css'

const WhatsAppButton = () => {
  const phoneNumber = '+8619028117508'
  const message = "Hello! I'm interested in your services."

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target='_blank'
      rel='noopener noreferrer'
      className={styles.whatsappButton}
    >
      <FaWhatsapp size={30} />
    </a>
  )
}

export default WhatsAppButton
