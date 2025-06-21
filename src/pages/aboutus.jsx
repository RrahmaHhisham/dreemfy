import React from 'react'
import HeroAbout  from '../components/aboutsec/heroabout/heroabout'
import DreamfyFeatures from "../components/homesec/dreamfyfeatures/DreamfyFeatures"
import About from "../components/homesec/about/about"
import Asks from "../components/homesec/asks/asks"


function AboutUs() {
  return (
    <div>
        <HeroAbout />
      <DreamfyFeatures />
      <About />
      <Asks />
    </div>
  )
}

export default AboutUs
