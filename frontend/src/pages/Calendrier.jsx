import React from 'react'
import './css/calendrier.css'
/* Ajoutez autant de composants que nécessaire à cet endroit. */
import NewsSlider from '../components/NewsSlider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Calendrier = () => {
  return (
    <div>
      {/* Plusieurs composants sont ajoutés pour former la page. */}
      <NewsSlider />
      <Navbar />
      {/* Le code pour créer le calendrier doit être écrit ici. */}

      <Footer />
    </div>
  )
}

export default Calendrier
