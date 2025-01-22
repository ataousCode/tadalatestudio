/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { FiSend } from 'react-icons/fi'
import styles from './Home.module.css' // Import the CSS module
import Services from '../../components/Services/Services'
import Portfolio from '../../components/Portfolio/Portfolio'
import ContactForm from '../../components/SayHi/SayHi'
import TechExpertise from '../../components/TechExpertise/TechExpertise'
import ClientReviews from '../../components/ClientReviews/ClientReviews'
import Community from '../../components/Community/Community'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import FAQ from '../../components/FAQ/FAQ'
import emailjs from 'emailjs-com'
import DevelopmentProcess from '../../components/Development/DevelopmentProcess'
import HomeSection from './component/HomeSection'

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    projectDetails: '',
  })

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}

    // form fields validations
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter Name'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter Email'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.service.trim()) {
      newErrors.service = 'Please select a service'
    }
    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please enter Project Details'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    //show loading
    setLoading(true)
    setMessage(null)

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        'service_mgarvd8',
        'template_th1ukdg',
        formData,
        '8px-ZQz2vA12oV2aV'
      )

      setLoading(false)
      setMessage({
        type: 'success',
        text: 'Thank you! Your message sent successfully! We will get back to you soon',
      })
      setFormData({ name: '', email: '', service: '', projectDetails: '' })
    } catch (error) {
      setLoading(false)
      setMessage({
        type: 'error',
        text: 'Something went wrong. Please try again.',
      })
    }
  }

  return (
    <div className={styles.home}>
      <div className={styles.homeContainer}>
        <div className={styles.heroSection}>
          <h1 className={styles.heroTitle}>
            Web and <span className={styles.highlight}>Mobile App</span>
            <br />
            Development Company
          </h1>
          <p className={styles.subtitle}>
            We turn your ideas into impactful mobile apps & websites.
          </p>
          <p className={styles.description}>
            Build beautiful, high-performance apps and websites with our expert
            team, delivering great results on any platform
          </p>

          <div className={styles.featuredSection}>
            <h2>Featured in:</h2>
            <div className={styles.featuredLogos}>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg'
                alt='Top Development Company'
                className={styles.featuredLogo}
              />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg'
                alt='Clutch'
                className={styles.featuredLogo}
              />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg'
                alt='GoodFirms'
                className={styles.featuredLogo}
              />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg'
                alt='Upwork'
                className={styles.featuredLogo}
              />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg'
                alt='Development Company'
                className={styles.featuredLogo}
              />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg'
                alt='Development Company'
                className={styles.featuredLogo}
              />
            </div>
          </div>
        </div>

        <div className={styles.formSection}>
          <div className={styles.formContainer}>
            <h2>Lets talk business</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor='name'>Name</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? styles.error : ''}
                  />
                  {errors.name && (
                    <span className={styles.errorMessage}>{errors.name}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? styles.error : ''}
                  />
                  {errors.email && (
                    <span className={styles.errorMessage}>{errors.email}</span>
                  )}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor='service'>Service</label>
                <select
                  id='service'
                  name='service'
                  value={formData.service}
                  onChange={handleChange}
                  className={errors.service ? styles.error : ''}
                >
                  <option value=''>Select a service</option>
                  <option value='I need a mobile application'>
                    I need a mobile application
                  </option>
                  <option value='I need a website'>I need a website</option>
                  <option value='I need a cloud solution'>
                    I need a cloud solution
                  </option>
                  <option value='I need help on my web/mobile app'>
                    I need help on my web/mobile app
                  </option>
                </select>
                {errors.service && (
                  <span className={styles.errorMessage}>{errors.service}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor='projectDetails'>Project Details</label>
                <textarea
                  id='projectDetails'
                  name='projectDetails'
                  value={formData.projectDetails}
                  onChange={handleChange}
                  className={errors.projectDetails ? styles.error : ''}
                />
                {errors.projectDetails && (
                  <span className={styles.errorMessage}>
                    {errors.projectDetails}
                  </span>
                )}
              </div>

              <button
                type='submit'
                className={styles.submitButton}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send'} <FiSend />
              </button>
            </form>
            <br />
            {message && (
              <div
                className={`${styles.message} ${
                  message.type === 'success' ? styles.success : styles.error
                }`}
              >
                {message.text}
              </div>
            )}
          </div>
        </div>
      </div>
      <Services />
      <ClientReviews />
      <DevelopmentProcess />
      <Portfolio />
      <WhyChooseUs />
      <TechExpertise />
      <Community />
      <FAQ />
      <ContactForm />
    </div>
  )
}

export default Home
