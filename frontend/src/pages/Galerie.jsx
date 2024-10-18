import React from 'react'
import './css/galerie.css'
/* Ajoutez autant de composants que nécessaire à cet endroit. */
import NewsSlider from '../components/NewsSlider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GalerieList from '../components/GalerieList'

const Galerie = () => {
  return (
    <div>
      {/* Plusieurs composants sont ajoutés pour former la page. */}
      <NewsSlider />
      <Navbar />
      <GalerieList />
      <Footer />
    </div>
  )
}

export default Galerie
