import React from 'react'
import './css/newsList.css'
/* Ajoutez autant de composants que nécessaire à cet endroit. */
import NewsSlider from '../components/NewsSlider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NewsList from '../components/NewsList'


const NewsListPage = () => {
  return (
    <div>
      {/* Plusieurs composants sont ajoutés pour former la page. */}
      <NewsSlider />
      <Navbar />
      <NewsList />
      <Footer />
    </div>
  )
}

export default NewsListPage
