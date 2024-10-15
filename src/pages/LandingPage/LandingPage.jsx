'use client'

// import React, { useRef, useState, useEffect } from 'react'
// import { useInView } from 'react-intersection-observer'
import Hero from '../../components/HeroSection/Hero'
// import { CardSpotlightEffect1 } from '../../components/CardSpotlightEffect'
import { NavigationMenuNew } from '../../components/Navbar/Navbar3'
import CardSpotlight from '../../components/CardSpotlightEffect'


function LandingPage() {

  return (
    <>
      <NavigationMenuNew />
      <Hero />
      <CardSpotlight />
      
    </>
  )
}

export default LandingPage
