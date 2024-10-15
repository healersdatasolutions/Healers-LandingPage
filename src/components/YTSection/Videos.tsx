'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Card, CardContent } from "../../components/ui/card"
import { PlayCircle, Info } from "lucide-react"
// import Image from 'next/image'
import { videos } from './videoData'
import React from 'react'

interface Video {
  id: string;
  title: string;
  description: string;
}

const VideoCard = ({ video, index }: { video: Video; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })
  const controls = useAnimation()
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
      setIsVideoLoaded(true)
    } else {
      controls.start('hidden')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="mb-12"
    >
      <Card className="overflow-hidden bg-black shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-0 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6 h-auto md:h-[400px]">
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 text-primary flex items-center">
                <PlayCircle className="mr-3 text-primary" size={32} />
                <span className="font-poppins">{video.title}</span>
              </h3>
              <p className="text-muted-foreground flex items-start ">
                <Info className="mr-3 mt-1 flex-shrink-0 text-secondary" size={24} />
                <span>{video.description}</span>
              </p>
            </div>
            <div className="aspect-video self-center relative overflow-hidden lg:-translate-x-10 rounded-lg ">
              {!isVideoLoaded && (
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              )}
              {isVideoLoaded && (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function VideoComponent() {
  return (
    <div className='relative'>
      <div className="absolute opacity-40 mix-blend-color-dodge pointer-events-none">
        <div className="absolute -translate-y-[10%] translate-x-[90%] size-[18.85rem] lg:size-[68.85rem]">
          <img className="w-full rotate-[180deg] opacity-100" src="/gradient.png" width={942} height={942} alt="" />
        </div>
      </div>

    <section className="py-16 lg:py-20 px-4 bg-transparent" id='ytLinks'>
      <div className="max-w-6xl mx-auto">
        <h2 className="mt-36 mb-10 z-10  whitespace-pre-wrap text-center text-3xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white">Latest From Our Creators and Partners</h2>
        <div className="space-y-12 ">
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
    <div className="absolute opacity-40 mix-blend-color-dodge pointer-events-none">
        <div className="absolute -translate-y-[70%] translate-x-[0%] size-[18.85rem] lg:size-[68.85rem]">
          <img className="w-full rotate-[180deg] opacity-100" src="/gradient.png" width={942} height={942} alt="" />
        </div>
      </div>
    
    </div>
  )
}