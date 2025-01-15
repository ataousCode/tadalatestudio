import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

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
const App = () => {
  return (
    <Router>
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
    </Router>
  )
}

export default App
