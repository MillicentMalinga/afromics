import React from 'react'
import CustomNav from '../components/CustomNav'
import Hero from '../components/Hero'
import Organisations from '../components/Organisations'
import Features from '../components/Features'


function Landing() {
  return (
    <div>
      <CustomNav />
      <Hero />

      <Organisations id="organisations"/>
      <Features id="features"/>
      {/* <Researchers  id="researchers"/> */}
    </div>
  )
}

export default Landing