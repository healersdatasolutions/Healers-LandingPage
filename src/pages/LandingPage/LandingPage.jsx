'use client'

// import React, { useRef, useState, useEffect } from 'react'
// import { useInView } from 'react-intersection-observer'
import Hero from '../../components/HeroSection/Hero'
// import { CardSpotlightEffect1 } from '../../components/CardSpotlightEffect'
import { NavigationMenuNew } from '../../components/Navbar/Navbar3'
import CardSpotlight from '../../components/CardSpotlightEffect'


function LandingPage() {
  // const [heroRef, heroInView] = useInView({
  //   triggerOnce: false,
  //   threshold: 0,
  // })


  // useEffect(() => {
  //   if (heroInView) {
  //     setHeroMounted(true)
  //   } else {
  //     const timer = setTimeout(() => setHeroMounted(false), 500)
  //     return () => clearTimeout(timer)
  //   }
  // }, [heroInView])



  return (
    <>
      <NavigationMenuNew />
      <Hero />
      {/* <div ref={cardRef}>
        {cardMounted && (
          <React.Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </React.Suspense>
        )}
      </div> */}
      <CardSpotlight />
      
    </>
  )
}

export default LandingPage
