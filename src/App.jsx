import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Services from './pages/service/Services'
import Portfolio from './pages/Portfolio/Portfolio'
import ContactPage from './pages/Contact/ContactPage'
import NotFound from './pages/404/NotFound'
import WhatsAppButton from './pages/WhatsAppButton/WhatsAppButton'
import Loader from './pages/Loader/Loader'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Set timer to false after 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)
    return () => clearTimeout(timer) // Cleanup the timer on unmount
  }, [])

  return (
    <Router>
      {isLoading ? (
        // Render loader if loading
        <Loader />
      ) : (
        <div className='app'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/service' element={<Services />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/portfolio' element={<Portfolio />} />
            {/* Catch-all route for undefined pages */}
            <Route path='*' element={<NotFound />} />
          </Routes>
          <WhatsAppButton />
          <Footer />
        </div>
      )}
    </Router>
  )
}

export default App
