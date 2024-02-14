import React from 'react'
import CustomNav from '../components/CustomNav'
import Hero from '../components/Hero'
import Organisations from '../components/Organisations'
import Researchers from '../components/Researchers'

function Landing() {
  return (
    <div>
      <CustomNav />
      <Hero />
      <Organisations id="organisations"/>
      {/* <Researchers  id="researchers"/> */}
    </div>
  )
}

export default Landing