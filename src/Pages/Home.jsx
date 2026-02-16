import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Explorer from '../Components/Explorer'
import ShowcaseMarquee from '../Components/ShowcaseMarquee'
import CTA from '../Components/CTA'
import OpenSourceContribution from '../Components/OpenSourceContribution'
import CreatorProfile from '../Components/CreatorProfile'
import Footer from '../Components/Footer'
import IntegrationShowcase from '../Components/IntegrationShowcase'
import Insights from '../Components/Insights'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <IntegrationShowcase />
      <Insights />
      <ShowcaseMarquee />
      <Explorer />
      <OpenSourceContribution />
      <CTA />
      <CreatorProfile />
      <Footer />
    </>
  )
}

export default Home
