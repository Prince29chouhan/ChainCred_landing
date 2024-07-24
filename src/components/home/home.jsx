import React from 'react'
import Hero from '../hero'
import About from '../about'
import TeamComponent from '../team'
import Join from '../join'
import TestimonialComponent from '../testimonial'

function Home() {
  return (
    <div>
      <Hero />
      <About/>
      <TestimonialComponent/>
      <TeamComponent />
      <Join/>
    </div>
  )
}

export default Home
