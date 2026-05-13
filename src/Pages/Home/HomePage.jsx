import React from 'react'
import Layout from '../../components/Layout'
import HeroCarousel from '../../components/HeroCarousel'  // Capital H!
import LookingFor from '../../components/LookingFor'
import Services from '../../components/Services'
import About from '../../components/About'
import Difference from '../../components/Difference'
import LatestNews from '../../components/LatestNews'
import Contact from '../../components/Contact'
import usePageMeta from '../../components/hooks/usePageMeta'

const HomePage = () => {
  usePageMeta({
    title: 'Home',
    description: 'Gadaa Bank corporate website for banking services, investor information, news, and customer support.',
    canonicalPath: '/',
  })

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
