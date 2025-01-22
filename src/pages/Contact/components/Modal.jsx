import { useState, useEffect } from "react"
import { X } from "lucide-react"
import styles from "./Modal.module.css"

const Modal = ({ isOpen, onClose, children }) => {
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsClosing(false)
      onClose()
    }, 300)
  }

  if (!isOpen && !isClosing) return null

  return (
    <div className={`${styles.modalOverlay} ${isClosing ? styles.closing : ""}`}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={handleClose}>
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal

