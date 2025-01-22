import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Check, X, Loader } from 'lucide-react'
import emailjs from 'emailjs-com'
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import styles from './ContactPage.module.css'

const SERVICES = [
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Digital Marketing',
  'Consulting',
  'Other',
]

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  })

  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  })

  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }))
    }
  }

  const handlePhoneChange = (value, country, e, formattedValue) => {
    setFormData((prev) => ({
      ...prev,
      phone: formattedValue,
    }))
    if (errors.phone) {
      setErrors((prev) => ({
        ...prev,
        phone: null,
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setFormState({
      isSubmitting: true,
      isSubmitted: false,
      error: null,
    })

    try {
      const serviceID = 'service_rmv0xgs'
      const templateID = 'template_vno8qoh'
      const userID = '8px-ZQz2vA12oV2aV'

      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        message: formData.message,
        to_name: 'TadalateStudio',
      }

      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        userID
      )

      if (response.status === 200) {
        setFormState({
          isSubmitting: false,
          isSubmitted: true,
          error: null,
        })

        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: '',
        })
      } else {
        throw new Error('Failed to send the email.')
      }
    } catch (error) {
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Failed to send message. Please try again.',
      })
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.contactInfo}>
        <h1>Contact us</h1>
        <h2 className={styles.mainHeading}>Let's work together</h2>
        <p className={styles.subtitle}>We can not wait to hear from you.</p>

        <div className={styles.offices}>
          <h3>Our offices</h3>
          <p className={styles.officeDesc}>
            Prefer doing things in person? We are happy to have a face to face
            meeting with you.
          </p>

          <div className={styles.locations}>
            <div className={styles.location}>
              <h4>China</h4>
              <p>Sichuan</p>
              <p>Southwest University of Science and Technology</p>
            </div>

            <div className={styles.location}>
              <h4>Liberia</h4>
              <p>Bamako / Mali</p>
              <p>Baco Djicoroni Golf</p>
            </div>
          </div>

          <div className={styles.emailSection}>
            <h3>Email us</h3>
            <div className={styles.emailLinks}>
              <div>
                <h4>Careers</h4>
                <a href='mailto:techlevel@tadalatestudio.com'>
                  techlevel@tadalatestudio.com
                </a>
                <br />
                <a href='tel:+86 130 2720 7507'>+86 130 2720 7507</a>
              </div>
              <div>
                <h4>Press</h4>

                <a href='mailto:tadalatestudio@gmail.com'>
                  tadalatestudio@gmail.com
                </a>
                <br />
                <a href='tel:+86 190 2811 7508'>+86 190 2811 7508</a>
              </div>
            </div>
          </div>

          <div className={styles.social}>
            <h3>Follow us</h3>
            <div className={styles.socialLinks}>
              <a
                href='https://www.instagram.com/a141406/?next=%2F'
                aria-label='Instagram'
                target='_blank'
              >
                <FaInstagram />
              </a>
              <a
                href='https://www.facebook.com/wanethan/'
                aria-label='Facebook'
                target='_blank'
              >
                <FaFacebook />
              </a>
              <a
                href='https://www.linkedin.com/in/almousleck-atalib-ag-893455312/'
                aria-label='LinkedIn'
                target='_blank'
              >
                <FaLinkedin />
              </a>
              <a
                href='https://x.com/atalib_ag?s=21'
                target='_blank'
                aria-label='Twitter'
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.formSection}>
        <h3>Work inquiries</h3>

        {formState.isSubmitted ? (
          <div className={styles.successMessage}>
            <Check size={24} />
            <p>Thank you! Your message has been sent successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Name'
                className={errors.name ? styles.errorInput : ''}
              />
              {errors.name && (
                <span className={styles.errorText}>{errors.name}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Email'
                className={errors.email ? styles.errorInput : ''}
              />
              {errors.email && (
                <span className={styles.errorText}>{errors.email}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <input
                type='text'
                name='company'
                value={formData.company}
                onChange={handleChange}
                placeholder='Company'
              />
            </div>

            <div className={styles.formGroup}>
              <PhoneInput
                country={'us'}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputProps={{
                  name: 'phone',
                  required: true,
                  className: `${styles.phoneInput} ${
                    errors.phone ? styles.errorInput : ''
                  }`,
                }}
                containerClass={styles.phoneInputContainer}
                buttonClass={styles.phoneDropdownButton}
                dropdownClass={styles.phoneDropdown}
                enableSearch={true}
                disableSearchIcon={false}
                searchClass={styles.phoneDropdownSearch}
                searchStyle={{ margin: '0', width: '100%', height: '30px' }}
              />
              {errors.phone && (
                <span className={styles.errorText}>{errors.phone}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <select
                name='service'
                value={formData.service}
                onChange={handleChange}
                className={`${styles.serviceSelect} ${
                  errors.service ? styles.errorInput : ''
                }`}
              >
                <option value=''>Select a service</option>
                {SERVICES.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && (
                <span className={styles.errorText}>{errors.service}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Message'
                rows='4'
                className={errors.message ? styles.errorInput : ''}
              />
              {errors.message && (
                <span className={styles.errorText}>{errors.message}</span>
              )}
            </div>
            <button
              type='submit'
              className={styles.submitButton}
              disabled={formState.isSubmitting}
            >
              {formState.isSubmitting ? (
                <span className={styles.loadingButton}>
                  <Loader className={styles.spinner} size={20} />
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>

            {formState.error && (
              <div className={styles.errorMessage}>
                <X size={20} />
                <p>{formState.error}</p>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  )
}

export default ContactPage
