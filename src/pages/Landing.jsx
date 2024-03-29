import React from 'react'
import CustomNav from '../components/CustomNav'
import Hero from '../components/Hero'
import Organisations from '../components/Organisations'
import Features from '../components/Features'
import Footer from '../components/Footer'
import { FrequentQuestions } from '../components/FAQs'
import ContactUs from '../components/ContactUs'


function Landing() {
  return (
    <div className="bg-blue-gray-50 overflow-hidden">
      <CustomNav  buttonText="Organisations" />
      <Hero />

      <Features id="features"/>
      <FrequentQuestions />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Landing