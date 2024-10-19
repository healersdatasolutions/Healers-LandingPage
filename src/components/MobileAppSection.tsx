"use client"

// import { motion } from 'framer-motion'
// import Image from "next/image"
import React from 'react'


export default function MobileAppSection() {
  return (
    <div className="">
      <p
        id="app"
        className="mt-36 mb-10  text-center text-3xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white "
      >
        Download Our Mobile App
      </p>
      <div className="max-w-6xl bg-black py-8 rounded-lg mx-5 sm:mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-around">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:ml-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Healers Mobile Application
            </h2>
            <p className="text-gray-300 mb-6 max-w-md">
            Get the best experience on the go with our mobile app. Access all the features and services on your fingertips.
                        </p>
            <div className="flex space-x-4 mb-8">
              <button className="bg-[#84349c] border text-white font-semibold py-2 px-6 rounded-full hover:bg-black transition duration-300">
                Get the App
              </button>
              <button className="text-white font-semibold py-2 px-6 rounded-full border border-white hover:bg-white hover:text-black transition duration-300">
                More
              </button>
            </div>
            <div className="flex space-x-8">
              <div>
                <p className="text-4xl font-bold text-white">4.8</p>
                <p className="text-sm text-gray-400">Rating on AppStore</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">700k+</p>
                <p className="text-sm text-gray-400">Active users</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/4 flex justify-center translate-y-8 lg:justify-end">
            <img src="/phoneImg2.png" alt="mobile app" className="w-3/4" />
          </div>
        </div>
      </div>
    </div>
  )
}