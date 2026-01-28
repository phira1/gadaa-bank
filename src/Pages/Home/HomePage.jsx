import React from 'react'
import Layout from '../../components/Layout'
import herocarousel from '../../components/heroCarousel'
import LookingFor from '../../components/LookingFor'
import Services from '../../components/Services'
import About from '../../components/About'
import Difference from '../../components/Difference'
import LatestNews from '../../components/LatestNews'
import Contact from '../../components/Contact'

const HomePage = () => {
  return (
    <>
      <HeroCarousel />
      <LookingFor />
      <Services />
      <About />
      <Difference />
      <LatestNews />
      <Contact />
    </>
  )
}

export default HomePage