import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/globalStyles'
import Navbar from './components/header'
import Home from './components/home'
import History from './components/history'
import Benefits from './components/benefits'
import Depoiments from './components/depoiments'
import Contact from './components/contact'
import Footer from './components/footer'
import MobileMenu from './components/mobile-menu'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MobileMenu/>
    <GlobalStyles/>    
      <Navbar />
      <Home />
      <History /> 
      <Benefits/>
      <Depoiments/>
      <Contact/>
      <Footer/>
  </StrictMode>,
)
