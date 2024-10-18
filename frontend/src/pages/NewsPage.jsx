import React from 'react'
import './css/newsPage.css'
/* Ajoutez autant de composants que nécessaire à cet endroit. */
import NewsSlider from '../components/NewsSlider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NewsInfo from '../components/NewsInfo'

const NewsPage = () => {
  return (
    <div>
      {/* Plusieurs composants sont ajoutés pour former la page. */}
      <NewsSlider />
      <Navbar />
      <NewsInfo />
      <Footer />
    </div>
  )
}

export default NewsPage
