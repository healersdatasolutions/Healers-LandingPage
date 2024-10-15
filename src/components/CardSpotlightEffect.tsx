import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Features3 from './FeatureSection/Feature3'
import BentoGrid2 from './BentoGrid2'
import MobileAppSection from './MobileAppSection'
import Footer from './Footer/Footer'
import TrustedBy2 from './TrustedBySection/TrustedBy2'
import BentoGridThird from './BentoGrid1'
import VideoComponent from './YTSection/Videos'
import HospitalCarousel from './HospitalCarousel/HospitalCarousel'
import FAQ from './FAQ/FAQ'
import { ContactUs } from './ContactUs/ContactUs'

const CardSpotlight = () => {


  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])



  return (
    <div className='min-h-screen w-full bg-gradient-to-b from-[#000000] max-w-full via-[#041727] to-[#01080f]   text-white  overflow-hidden '>
      <div
        className="relative z-10 min-h-screen h-full bg-[url('/noiseBg.png')]  bg-opacity-100 backdrop:blur-sm bg-repeat"
       
      >
     
        <TrustedBy2 />
        <div className="py-20">
          <p id="features" className="mt-16 mb-16 z-10 whitespace-pre-wrap text-center text-3xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white">
            The Features Out of the Blue
          </p>
          <Features3 />
        </div>
        <motion.div ref={ref} style={{ opacity }}>
          <BentoGridThird />
        </motion.div>
        <p id="aboutUs" className="mt-36 mb-10 z-10 whitespace-pre-wrap text-center text-3xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white">
          Your Healthcare Management Companion
        </p>
        <BentoGrid2 />
 
      <VideoComponent />
      <HospitalCarousel />
      


      <MobileAppSection />
      <FAQ />
      {/* <p id="contactUs" className="mt-36 mb-10 z-10 whitespace-pre-wrap text-center text-3xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white">
        That's Healers For You
      </p> */}
      <ContactUs />

      <Footer />
      </div>
    </div>
  )
}

export default CardSpotlight