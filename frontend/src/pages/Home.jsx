import React from 'react'
import './css/home.css'
/* Ajoutez autant de composants que nécessaire à cet endroit. */
import NewsSlider from '../components/NewsSlider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeHeader from '../components/HomeHeader'
import HomeGalerie from '../components/HomeGalerie'
import HomeNews from '../components/HomeNews'
import HomeCalendrier from '../components/HomeCalendrier'

const Home = () => {
  return (
    <div>
      {/* Plusieurs composants sont ajoutés pour former la page. */}
      <NewsSlider />
      <Navbar />
      <HomeHeader />
      <HomeGalerie />
      <HomeNews />
      <HomeCalendrier />
      <Footer />
    </div>
  )
}

export default Home
