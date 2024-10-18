import React from 'react'
import './css/contact.css'
/* Ajoutez autant de composants que nécessaire à cet endroit. */
import NewsSlider from '../components/NewsSlider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div>
      {/* Plusieurs composants sont ajoutés pour former la page. */}
      <NewsSlider />
      <Navbar />
      <ContactForm />
      {/* Les informations de contact doivent être ajoutées ici. */}
      
      <Footer />
    </div>
  )
}

export default Contact
