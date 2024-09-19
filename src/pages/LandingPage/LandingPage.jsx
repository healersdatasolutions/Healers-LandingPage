'use client'

import React, { useRef, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Hero from '../../components/HeroSection/Hero'
// import { CardSpotlightEffect1 } from '../../components/CardSpotlightEffect'
import { NavigationMenuNew } from '../../components/Navbar/Navbar3'

const LazyComponent = React.lazy(() => import('../../components/LazyComponent'))

function LandingPage() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: false,
    threshold: 0,
  })

  const [cardRef, cardInView] = useInView({
    triggerOnce: false,
    threshold: 0,
  })

  const [heroMounted, setHeroMounted] = useState(false)
  const [cardMounted, setCardMounted] = useState(false)

  useEffect(() => {
    if (heroInView) {
      setHeroMounted(true)
    } else {
      const timer = setTimeout(() => setHeroMounted(false), 500)
      return () => clearTimeout(timer)
    }
  }, [heroInView])

  useEffect(() => {
    if (cardInView) {
      setCardMounted(true)
    } else {
      const timer = setTimeout(() => setCardMounted(false), 500)
      return () => clearTimeout(timer)
    }
  }, [cardInView])

  return (
    <>
      <NavigationMenuNew />
      <div ref={heroRef}>
        {heroMounted && <Hero />}
      </div>
      <div ref={cardRef}>
        {cardMounted && (
          <React.Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </React.Suspense>
        )}
      </div>
    </>
  )
}

export default LandingPage