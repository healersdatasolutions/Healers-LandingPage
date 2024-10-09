'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Card, CardContent } from "././ui/card"
import { PlayCircle, Info } from "lucide-react"
import React from 'react'

// YouTube video data
const videos = [
  {
    id: 'mWrDMgj7hmw',
    title: 'Blockchain in Healthcare',
    description: 'Hi...Testing'
  },
  {
    id: '1ibsQrnuEEg',
    title: 'Fractional Knapsack Algorithm',
    description: 'lorum ipsum dolor sit amet consectetur adipisicing elit. Quos, quae doloremque. Quisquam, quos. Quisquam, quos lorum ipsum dolor sit amet consectetur adipisicing elit '
  },
  {
    id: 'C7plHMKIFcU',
    title: 'The case for NFTs',
    description: 'lorum ipsum dolor sit amet consectetur adipisicing elit. Quos, quae doloremque. Quisquam, quos. Quisquam, quos lorum ipsum dolor sit amet consectetur adipisicing elit '
  }
]

const VideoCard = ({ video, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
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
      className="mb-8"
    >
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[60vh] sm:p-10">
            <div className="p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-2 flex items-center">
                <PlayCircle className="mr-2 text-primary align-middle" />
                {video.title}
              </h2>
              <p className="text-muted-foreground flex items-start">
                <Info className="mr-2 mt-1 flex-shrink-0" />
                {video.description}
              </p>
            </div>
            <div className="aspect-video self-center">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function VideoComponent() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto h-full flex items-center">
      <div className="w-full  space-y-8">
        {videos.map((video, index) => (
          <VideoCard key={video.id} video={video} index={index} />
        ))}
      </div>
    </section>
  )
}
