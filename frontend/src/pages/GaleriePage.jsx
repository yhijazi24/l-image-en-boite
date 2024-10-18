import React from 'react'
import './css/galeriePage.css'
/* Ajoutez autant de composants que nécessaire à cet endroit. */
import NewsSlider from '../components/NewsSlider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GalerieMember from '../components/GalerieMember'

const GaleriePage = () => {
  return (
    <div>
      {/* Plusieurs composants sont ajoutés pour former la page. */}
      <NewsSlider />
      <Navbar />
      <GalerieMember />
      <Footer />
    </div>
  )
}

export default GaleriePage
