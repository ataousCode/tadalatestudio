import { useState } from 'react'
import Modal from './Modal'
import { FaEnvelope } from 'react-icons/fa'
import styles from './ContactButton.module.css'
import ContactPage from '../ContactPage'

const ContactButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <button className={styles.contactButton} onClick={openModal}>
        <FaEnvelope /> Contact
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactPage />
      </Modal>
    </>
  )
}

export default ContactButton
