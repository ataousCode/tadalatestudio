import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'
import './Community.css'

const Community = () => {
  const socialLinks = [
    {
      name: 'FaceBook',
      icon: <FaFacebook />,
      link: 'https://www.facebook.com/wanethan/',
      color: '#0A66C2',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      link: 'https://www.instagram.com/a141406/?next=%2F',
      color: '#E4405F',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      link: 'https://x.com/atalib_ag?s=21',
      color: '#1DA1F2',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/almousleck-atalib-ag-893455312/',
      color: '#0A66C2',
    },
  ]

  return (
    <section className='community'>
      <div className='container'>
        <h2>Community</h2>
        <p className='subtitle'>
          Connecting Innovators and Developers to build the Future Together
        </p>
        <div className='social-grid'>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className='social-card'
              target='_blank'
              rel='noopener noreferrer'
              style={{ '--hover-color': social.color }}
            >
              <div className='social-icon'>{social.icon}</div>
              <span className='social-name'>{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Community
