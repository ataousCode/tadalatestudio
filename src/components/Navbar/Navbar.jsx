import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaBars, FaTimes, FaHome, FaUser, FaCog, FaFolder, FaEnvelope } from "react-icons/fa"
import styles from "./Navbar.module.css"
import ContactButton from "../../pages/Contact/components/ContactButton"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [location])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.navbarLogo}>
          <div className={styles.logoIcon}>TS</div>
          TadalateStudio
        </Link>
        <button className={styles.mobileMenuButton} onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`${styles.navLinks} ${isOpen ? styles.navLinksActive : ""}`}>
          <Link to="/" className={`${styles.navLink} ${isActive("/") ? styles.active : ""}`} onClick={toggleMenu}>
            <FaHome /> Home
          </Link>
          <Link
            to="/about"
            className={`${styles.navLink} ${isActive("/about") ? styles.active : ""}`}
            onClick={toggleMenu}
          >
            <FaUser /> About
          </Link>
          <Link
            to="/service"
            className={`${styles.navLink} ${isActive("/service") ? styles.active : ""}`}
            onClick={toggleMenu}
          >
            <FaCog /> Services
          </Link>
          <Link
            to="/portfolio"
            className={`${styles.navLink} ${isActive("/portfolio") ? styles.active : ""}`}
            onClick={toggleMenu}
          >
            <FaFolder /> Portfolio
          </Link>
          <ContactButton />
        </div>
      </div>
    </nav>
  )
}

export default Navbar

