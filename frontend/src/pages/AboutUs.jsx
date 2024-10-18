import React from 'react'
import './css/aboutUs.css'
/* Ajoutez autant de composants que nécessaire à cet endroit. */
import NewsSlider from '../components/NewsSlider'
import Navbar from '../components/Navbar'
import AboutUsComp from '../components/AboutUsComp'
import Footer from '../components/Footer'

const AboutUs = () => {
  return (
    <div>
      {/* Plusieurs composants sont ajoutés pour former la page. */}
      <NewsSlider />
      <Navbar />
      <AboutUsComp />
      <Footer />
    </div>
  )
}

export default AboutUs
