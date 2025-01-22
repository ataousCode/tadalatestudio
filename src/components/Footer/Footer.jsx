import React, { useState } from 'react'
import { Heart, Mail, Shield, Phone } from 'lucide-react'
import Modal from './components/Modal'
import styles from './Footer.module.css'

function Footer() {
  const [activeModal, setActiveModal] = useState(null)

  const closeModal = () => setActiveModal(null)

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <Heart className={styles.iconRed} />
              DatalateStudio
            </h3>
            <p className={styles.text}>
              We're dedicated to providing exceptional service while maintaining
              the highest standards of privacy and security for our valued
              customers.
            </p>
          </div>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <Shield className={styles.iconBlue} />
              Quick Links
            </h3>
            <ul className={styles.linkList}>
              <li>
                <button
                  onClick={() => setActiveModal('terms')}
                  className={styles.link}
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('privacy')}
                  className={styles.link}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveModal('support')}
                  className={styles.link}
                >
                  Support
                </button>
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <Mail className={styles.iconGreen} />
              Contact
            </h3>
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                +86 130 2720 7507
              </p>
              <p className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                +86 190 2811 7508
              </p>
              <p className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                tadalatestudio@gmail.com
              </p>
              <p className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                techlevel@tadalatestudio.com
              </p>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>
            &copy; {new Date().getFullYear()} tadalatestudio. All rights
            reserved.
          </p>
        </div>
      </div>

      {/* Terms Modal */}
      <Modal
        isOpen={activeModal === 'terms'}
        onClose={closeModal}
        title='Terms of Service'
      >
        <div className={styles.modalContent}>
          <h3 className={styles.modalHeading}>1. Acceptance of Terms</h3>
          <p className={styles.modalText}>
            By accessing and using this website, you accept and agree to be
            bound by the terms and provision of this agreement.
          </p>

          <h3 className={styles.modalHeading}>2. Use License</h3>
          <p className={styles.modalText}>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on our website for personal,
            non-commercial transitory viewing only.
          </p>

          <h3 className={styles.modalHeading}>3. Disclaimer</h3>
          <p className={styles.modalText}>
            The materials on our website are provided on an 'as is' basis. We
            make no warranties, expressed or implied, and hereby disclaim and
            negate all other warranties including, without limitation, implied
            warranties or conditions of merchantability, fitness for a
            particular purpose, or non-infringement of intellectual property or
            other violation of rights.
          </p>
        </div>
      </Modal>

      {/* Privacy Modal */}
      <Modal
        isOpen={activeModal === 'privacy'}
        onClose={closeModal}
        title='Privacy Policy'
      >
        <div className={styles.modalContent}>
          <h3 className={styles.modalHeading}>1. Information We Collect</h3>
          <p className={styles.modalText}>
            We collect information that you provide directly to us, information
            we obtain automatically when you visit our website, and information
            from other sources.
          </p>

          <h3 className={styles.modalHeading}>
            2. How We Use Your Information
          </h3>
          <p className={styles.modalText}>
            We use the information we collect to provide, maintain, and improve
            our services, to develop new ones, and to protect our company and
            our users.
          </p>

          <h3 className={styles.modalHeading}>3. Information Sharing</h3>
          <p className={styles.modalText}>
            We do not share your personal information with companies,
            organizations, or individuals outside of our company except in the
            following cases: with your consent, for legal reasons, or to protect
            rights, property, and safety.
          </p>
        </div>
      </Modal>

      {/* Support Modal */}
      <Modal
        isOpen={activeModal === 'support'}
        onClose={closeModal}
        title='Support'
      >
        <div className={styles.modalContent}>
          <h3 className={styles.modalHeading}>Contact Support</h3>
          <p className={styles.modalText}>
            Our support team is available 24/7 to help you with any questions or
            concerns. Here's how you can reach us:
          </p>

          <ul className={styles.supportList}>
            <li className={styles.supportItem}>
              <Phone className={styles.supportIcon} />
              <span>Phone: +86 130 2720 7507</span>
              <span>Phone: +86 190 2811 7508</span>
            </li>
            <li className={styles.supportItem}>
              <Mail className={styles.supportIcon} />
              <span>Email: tadalatestudio@gmail.com</span>
              <span>Email: techlevel@tadalatestudio.com</span>
            </li>
          </ul>

          <h3 className={styles.modalHeading}>Support Hours</h3>
          <p className={styles.modalText}>
            Monday - Friday: 9:00 AM - 8:00 PM EST
            <br />
            Saturday - Sunday: 10:00 AM - 6:00 PM EST
          </p>
        </div>
      </Modal>
    </footer>
  )
}

export default Footer
