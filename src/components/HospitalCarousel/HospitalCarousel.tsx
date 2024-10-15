/* eslint-disable @next/next/no-img-element */
'use client'

import { Card, CardContent } from "../../components/ui/card"
import { Carousel, CarouselContent,CarouselNext,CarouselPrevious, CarouselItem } from "../../components/ui/carousel"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
// import Image from "next/image"
import { Button } from "../../components/ui/button"
import React from "react"

// Sample hospital data
const hospitals = [
  { id: 1, name: "St. Mary's Hospital", img: "https://t3.ftcdn.net/jpg/02/11/15/66/360_F_211156620_CeBr5etdTNXLb231sFcQ8M9YD1OY5IW8.jpg", description: "Specialized in cardiology", category: "CARDIOLOGY" },
  { id: 2, name: "Central Medical Center", img: "https://infrastructurepipeline.org/files/images/optimised/project_hero/files/images/project/generichospital7-6683a90066d1f804300495.jpg", description: "Full-service hospital with state-of-the-art facilities and expert medical staff", category: "GENERAL CARE" },
  { id: 3, name: "Care Hospital", img: "https://www.carehospitals.com/assets/images/main/vizag-health-city-704350.png", description: "Pediatric care experts providing comprehensive healthcare for children", category: "PEDIATRICS" },
  { id: 4, name: "Sarka World Hospital", img: "https://www.impactguru.com/info/wp-content/uploads/2023/11/Sakra-World-Hospital.jpg", description: "Emergency and trauma center equipped to handle critical situations 24/7", category: "EMERGENCY" },
  { id: 5, name: "Manipal Hospital", img: "https://avocure-uploads.s3.amazonaws.com/uploads/clinic/cover_pic_url/47/manipal-hospital-bangalore-1481708155-5851127b1ff31.jpg", description: "Specialized in rehabilitation services and long-term care", category: "REHABILITATION" },
]

export default function HospitalCarousel() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className=" relative">
      <div className="absolute opacity-40 mix-blend-color-dodge pointer-events-none">
        <div className="absolute -translate-y-[20%] translate-x-[90%] size-[18.85rem] lg:size-[68.85rem]">
          <img className="w-full rotate-[180deg] opacity-100" src="/gradient.png" width={942} height={942} alt="" />
        </div>
      </div>
      <div className="absolute opacity-60 mix-blend-color-dodge pointer-events-none">
        <div className="absolute translate-y-[20%] -translate-x-[60%] size-[18.85rem] lg:size-[68.85rem]">
          <img className="w-full rotate-[100deg] opacity-100" src="/gradient.png" width={942} height={942} alt="" />
        </div>
      </div>
      <h2 id="clients" className="mt-36 mb-10 z-10 text-center text-3xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white">
        Clients Onboard with Us
      </h2>
      <div className="max-w-6xl mx-auto py-10 ">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full "
          ref={emblaRef}
        >
          <CarouselContent >
            {hospitals.map((hospital) => (
              <CarouselItem key={hospital.id} className="w-full ">
                <Card className="border-none rounded-lg shadow-none ">
                  <CardContent className="flex flex-col md:flex-row items-stretch rounded-lg p-8  sticky   overflow-hidden">
                    <div className="w-full md:w-1/2 h-64 md:h-80">
                      <img
                        src={hospital.img}
                        alt={hospital.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between  text-white">
                      <div>
                        <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold bg-primary text-primary-foreground rounded-full">
                          {hospital.category}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">{hospital.name}</h3>
                        <p className="text-sm md:text-base text-gray-300 mb-6">{hospital.description}</p>
                      </div>
                      <Button variant="outline" className="self-start">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </div>
  )
}