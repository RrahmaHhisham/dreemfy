import React from 'react'
import Hero from '../components/homesec/hero/hero'
import Cards from "../components/homesec/features/cards"
import About from "../components/homesec/about/about"
import DreamfyFeatures from "../components/homesec/dreamfyfeatures/DreamfyFeatures"
import Idea from "../components/homesec/ideas/idea"
import Join from "../components/homesec/join/join"
import Skil from "../components/homesec/skills/skil"
import Asks from "../components/homesec/asks/asks"
function Home() {
  return (
    <div>
      <Hero />
      <Cards />
      <About />
      <DreamfyFeatures />
      <Idea />
      <Join />
      <Skil />
      <Asks />
    </div>
  )
}

export default Home
