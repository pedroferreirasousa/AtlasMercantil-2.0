import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/globalStyles'
import Navbar from './components/header'
import Home from './components/home'
import History from './components/history'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>    
      <Navbar />
      <Home />
      <History /> 
  </StrictMode>,
)
