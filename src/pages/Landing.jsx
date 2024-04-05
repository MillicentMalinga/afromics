import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'
import { FrequentQuestions } from '../components/FAQs'



function Landing() {
  return (
    <div className="bg-blue-gray-50 overflow-hidden">
      <Hero />

      <Features id="features"/>
      <FrequentQuestions />
 
      <Footer />
    </div>
  )
}

export default Landing