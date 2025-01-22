/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react'
import m from '../../../Images/m.jpg'
import saku from '../../../Images/saku.jpg'
import mark from '../../../Images/mark.jpg'
import styles from './SectionOne.module.css'
import { Link } from 'react-router-dom'
import ContactButton from '../../Contact/components/ContactButton'

const testimonials = [
  {
    name: 'Mark Ag',
    role: 'Entrepreneur',
    image: mark,
    text: 'TadalateStudio transformed our outdated website into a modern, user-friendly platform that has significantly boosted our online presence. Their expertise in web development is unmatched, and they were always available to address our concerns. We highly recommend TadalateStudio to anyone looking for top-notch development services!',
    stars: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'CEO of Coffex-Trading',
    image: saku,
    text: 'Working with TadalateStudio was an absolute game-changer for our business. Their team delivered a stunning mobile app that perfectly aligned with our vision. They were professional, responsive, and went above and beyond to ensure every detail was perfect. Thanks to TadalateStudio, our user engagement has skyrocketed!',
    stars: 5,
  },
  {
    name: 'Michael Peters',
    role: 'Tahidjarte CEO',
    image: m,
    text: 'We hired TadalateStudio to build a custom e-commerce app, and the results were phenomenal. Their team was incredibly creative, technical, and detail-oriented throughout the entire process. The app has streamlined our operations and increased our sales by 40%. TadalateStudio is now our go-to partner for all things tech!',
    stars: 5,
  },
]

export default function SectionOne() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.gradientText}>Professional</span> Mobile
            <br />
            Web Development
            <br />
            Services{' '}
          </h1>

          <p className={styles.subtitle}>
            We are a reliable and affordable digital agency and talent network.
            We channel creativity, colors, copy and code to help our clients
            with branding.
          </p>

          <div className={styles.buttons}>
            {/* <Link to='/contact' className={styles.buttonPrimary}>
              <ContactButton />
            </Link> */}
            <ContactButton text='Get Start' color='#4c89e3' />
          </div>
        </div>

        <div className={styles.rightContent}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialHeader}>
              <img
                src={testimonials[currentTestimonial].image}
                alt='Profile'
                className={styles.testimonialImage}
              />
              <div className={styles.testimonialMeta}>
                <h3>{testimonials[currentTestimonial].name}</h3>
                <p>{testimonials[currentTestimonial].role}</p>
              </div>
              <div className={styles.testimonialStars}>
                {'★'.repeat(testimonials[currentTestimonial].stars)}
              </div>
            </div>
            <p className={styles.testimonialText}>
              {testimonials[currentTestimonial].text}
            </p>
            <div className={styles.quoteMark}>"</div>
          </div>
        </div>
      </div>
    </div>
  )
}
