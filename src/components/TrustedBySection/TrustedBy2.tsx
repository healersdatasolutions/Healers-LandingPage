"use client"

import React from "react";


// import Image from 'next/image'

export default function TrustedBy2() {


  const logos = [
    { id: 1, src: '/dfinityLogo.png', alt: 'DFINITY logo' },
    { id: 2, src: '/ICLogo.png', alt: 'Internet Computer logo' },
    { id: 3, src: '/ICPLogo.png', alt: 'Crewsphere ICP Hubs Network logo' }
  ];

  return (
   

    <section className="text-center py-12 relative">
      <div className="absolute opacity-40 mix-blend-color-dodge pointer-events-none">
        <div className="absolute -translate-y-[10%] translate-x-[90%] size-[18.85rem] lg:size-[68.85rem]">
          <img className="w-full rotate-[180deg] opacity-100" src="/gradient.png" width={942} height={942} alt="" />
        </div>
      </div>
      <div className="container mx-auto px-4">
      <p id="trustedBy" className="mt-36 mb-10 z-10  whitespace-pre-wrap text-center text-3xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white ">
          Trusted By
        </p>
       
        <div className="flex justify-evenly mx-auto items-center ">
        {logos.map((logo) => (
            <div key={logo.id} className="relative px-4">
              <img
                src={logo.src}
                alt={logo.alt}
                width={250}
                height={150}
                className={`transition-all duration-200 filter grayscale hover:grayscale-0
                  `
              }
              />
              {/* <Image
                src={logo.src}
                alt={logo.alt}
                width={250}
                height={150}
                className={`absolute top-0 left-4 transition-all duration-300 filter grayscale ${
                  hoveredLogo === index ? 'opacity-0' : 'opacity-100'
                }`}
              /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
   
  
  )
}