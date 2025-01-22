import { useState } from 'react'
import Modal from './Modal'
import { FaEnvelope } from 'react-icons/fa'
import styles from './ContactButton.module.css'
import ContactPage from '../ContactPage'

const ContactButton = ({
  text = 'Contact',
  color = '#e91e63',
  className = '',
  wrapperClassName = '',
  size = 'medium',
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const sizeClass =
    styles[`button${size.charAt(0).toUpperCase() + size.slice(1)}`]

  return (
    <div className={`${styles.wrapper} ${wrapperClassName}`}>
      <button
        className={`${styles.contactButton} ${sizeClass} ${className}`}
        onClick={openModal}
        style={{ backgroundColor: color }}
      >
        <FaEnvelope /> {text}
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactPage />
      </Modal>
    </div>
  )
}

export default ContactButton
