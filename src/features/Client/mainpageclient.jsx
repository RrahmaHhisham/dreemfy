import React from 'react'
import HerocClient from '../../components/client/homeclient/heroclient/heroclient'
import Projects from '../../components/client/homeclient/projects/projects'
import MoreStories from '../../components/client/homeclient/morestories/morestories'
import Footer from '../../layouts/footer/footer'
function MainPageClient() {
  return (
    <div>
      <HerocClient/>
      <Projects/>
      <MoreStories/>
      <Footer/>
    </div>
  )
}

export default MainPageClient
