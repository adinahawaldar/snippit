import React from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Explorer from './Components/Explorer'
import StarterHighlight from './Components/ShowcaseMarquee'
import ShowcaseMarquee from './Components/ShowcaseMarquee'
import CTA from './Components/CTA'
import OpenSourceContribution from './Components/OpenSourceContribution'
import CreatorProfile from './Components/CreatorProfile'
import Footer from './Components/Footer'
import IntegrationShowcase from './Components/IntegrationShowcase'

const App = () => {
  return (
    <>
    <Navbar/>
      <Hero/>
      <IntegrationShowcase/>
            <ShowcaseMarquee/>

      <Explorer/>
      <CTA/>
      <OpenSourceContribution/>
      <CreatorProfile/>
      <Footer/>
    </>
  )
}

export default App
