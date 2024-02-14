import React from 'react'
import CustomNav from '../components/CustomNav'
import Hero from '../components/Hero'
import Organisations from '../components/Organisations'

function Landing() {
  return (
    <div>
      <CustomNav />
      <Hero />
      <Organisations id="organisations"/>

    </div>
  )
}

export default Landing