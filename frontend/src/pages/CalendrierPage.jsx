import React from 'react'
import './css/calendrierPage.css'
/* Ajoutez autant de composants que nécessaire à cet endroit. */
import NewsSlider from '../components/NewsSlider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ClickedCalendrier from '../components/ClickedCalendrier'

const CalendrierPage = () => {
  return (
    <div>
      {/* Plusieurs composants sont ajoutés pour former la page. */}
      <NewsSlider />
      <Navbar />
      <ClickedCalendrier />
      <Footer />
    </div>
  )
}

export default CalendrierPage
