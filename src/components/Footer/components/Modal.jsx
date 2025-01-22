import React from 'react'
import styles from './Modal.module.css'
function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button onClick={onClose} className={styles.closeButton}>
            <svg
              className={styles.closeIcon}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}

export default Modal
