import React from 'react'
import Navbar from '../Components/Navbar'
import AIToolkitHero from '../Components/AIToolkitHero'
import AIToolkitDiscovery from '../Components/AIToolkitDiscovery'
import WhyAIToolkit from '../Components/WhyAIToolkit'
import ToolComparison from '../Components/ToolComparison'
import Footer from '../Components/Footer'

const AIToolkit = () => {
  return (
    <>
      <Navbar />
      <AIToolkitHero/>
      <AIToolkitDiscovery/>
      <WhyAIToolkit/>
      {/* <ToolComparison/> */}
      <Footer/>
    </>
  )
}

export default AIToolkit
