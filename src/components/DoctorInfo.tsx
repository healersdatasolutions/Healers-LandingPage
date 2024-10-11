'use client'

import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Separator } from "./ui/separator"
import { Toaster } from "./ui/sonner"
import { toast } from "sonner"
import { Badge } from "./ui/badge"
import { User, MapPin, Phone, Clock, Briefcase, Calendar, Menu, Stethoscope, GraduationCap } from 'lucide-react'
import { MouseParallax } from "react-just-parallax"
import { gradient } from '../assets'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { motion } from 'framer-motion'

export default function DoctorDetails() {
  const { id } = useParams<{ id: string }>()
  const [isLoading, setIsLoading] = useState(true)
  const [doctorData, setDoctorData] = useState({
    id: '12345678',
    name: 'Dr. John Doe',
    specialty: 'NEUROSURGEON',
    experience: 10,
    mobile: '1234567890',
    daysAvailable: ['Mon', 'Wed', 'Fri'],
    dutyStart: '09:00',
    dutyEnd: '17:00',
    qualification: 'MBBS, MD',
    opdFees: 100,
    location: 'New York, USA',
    totalPatients: 1000,
    rating: 4.8,
  })
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleSave = () => {
    toast.success('Doctor details updated successfully')
  }

  const SidebarContent = () => (
    <>
      <img src={'/HealersHealthcareOfficialLogo.png'} alt="Healers Healthcare" className="w-40 mx-auto" />
      <nav className="space-y-2">
        {[
          { name: 'Health Records', icon: User },
          { name: 'Doctor Dashboard', icon: Stethoscope },
          { name: 'Appointments', icon: Calendar },
          { name: 'Inventory', icon: Briefcase },
        ].map((item, index) => (
          <React.Fragment key={item.name}>
            <Link 
              to={`/${item.name.toLowerCase().replace(' ', '-')}`} 
              className="flex items-center p-3 rounded-lg hover:bg-[#7047eb] transition-colors duration-200"
              onClick={() => setIsSidebarOpen(false)}
            >
              <item.icon className="h-5 w-5 md:mr-3" />
              <span className='md:block'>{item.name}</span>
            </Link>
            {index < 3 && <div className="h-px bg-gray-700 my-2 mx-4" />}
          </React.Fragment>
        ))}
      </nav>
    </>
  )

  if (isLoading) {
    return (
      <div className="flex flex-col gap-5 md:flex-row min-h-screen bg-black text-white p-8 dark:animate-pulse">
        <div className="w-full md:w-64 bg-gray-800 h-screen rounded-lg" />
        <div className="flex-1 space-y-8 rounded-lg">
          <div className="h-32 bg-gray-800 rounded-lg" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-64 bg-gray-800 rounded-lg" />
            <div className="h-64 bg-gray-800 rounded-lg" />
          </div>
          <div className="h-96 bg-gray-800 rounded-lg" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white">
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden fixed top-4 left-4 z-50">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] bg-black p-4 md:p-6">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      <div className="hidden md:block w-64 bg-black p-4 md:p-6 space-y-8">
        <SidebarContent />
      </div>

      <div className="relative flex-1 min-h-screen bg-black text-white p-4 sm:p-6 md:p-8 lg:p-10">
        <Toaster />
        <div className="mb-6 flex items-center text-sm text-gray-500">
          <Link to="/doctor-dashboard" className="hover:text-[#ffff]">Doctor Dashboard</Link>
          <span className="mx-2">/</span>
          <span className="text-[#ffff]">Doctor Details</span>
        </div>

        <p className="text-gray-400 text-center sm:text-right text-xl mb-4">Doctor ID: {id}</p>
        <div className='relative bg-[#131313a2] mb-12 overflow-hidden rounded-lg border border-black md:shadow-xl'>
          <Card className="bg-[#131313a2]">
            <CardContent className="p-6 sm:p-8 md:p-10">
              <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12'>
                <div className="lg:col-span-4 flex justify-center items-center lg:justify-start">
                  <div className="w-48 h-48 lg:w-auto lg:h-auto">
                    <img src="/doctorImg.png" className=' ' />
                    {/* <AvatarFallback>{doctorData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback> */}
                  </div>
                </div>

                <div className='lg:col-span-8'>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white text-center lg:text-left">{doctorData.name}</h1>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { label: 'Specialty', value: doctorData.specialty },
                      { label: 'Experience', value: `${doctorData.experience} years` },
                      { label: 'Location', value: doctorData.location },
                      { label: 'Mobile', value: doctorData.mobile },
                      { label: 'Days Available', value: doctorData.daysAvailable.join(', ') },
                      { label: 'Duty Hours', value: `${doctorData.dutyStart} - ${doctorData.dutyEnd}` },
                      { label: 'Qualification', value: doctorData.qualification },
                      { label: 'Total Patients', value: doctorData.totalPatients },
                      { label: 'OPD Fees', value: `$${doctorData.opdFees}` },
                    ].map((item, index) => (
                      <div key={index} className="bg-[#1f1f1f] p-4 rounded-lg">
                        <h4 className='text-[#ffff] font-semibold mb-2'>{item.label}</h4>
                        <p className='text-white text-lg'>{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="outline" className="bg-[#7047eb] text-white px-3 py-1 text-sm">Rating: {doctorData.rating}/5</Badge>
                    <Badge variant="outline" className="bg-[#7047eb] text-white px-3 py-1 text-sm">Top Specialist</Badge>
                    <Badge variant="outline" className="bg-[#7047eb] text-white px-3 py-1 text-sm">Available for Consultation</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className='relative'>
          <MouseParallax className="absolute z-10">
            <div className="hidden sm:block inset-0 left-90 w-[56.625rem] opacity-10 mix-blend-color-dodge pointer-events-none">
              <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
                <img className="w-full" src={gradient} width={942} height={942} alt="" />
              </div>
            </div>
          </MouseParallax>

          <section className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Doctor's Schedule</h2>
            <Card className="bg-[#131313a2] text-white">
              <CardHeader>
                <CardTitle>Weekly Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className={`p-4 rounded-lg ${doctorData.daysAvailable.includes(day) ? 'bg-[#7047eb]' : 'bg-gray-700'}`}>
                      <p className="font-bold text-lg">{day}</p>
                      <p>{doctorData.daysAvailable.includes(day) ? `${doctorData.dutyStart} - ${doctorData.dutyEnd}` : 'Off'}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Performance Metrics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-[#131313a2] text-white">
                <CardHeader>
                  <CardTitle>Patient Satisfaction</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-[#ffff]">98%</div>
                  <p className="text-sm text-gray-400">Based on patient feedback</p>
                </CardContent>
              </Card>
              <Card className="bg-[#131313a2] text-white">
                <CardHeader>
                  <CardTitle>Appointments This Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-[#ffff]">127</div>
                  <p className="text-sm text-gray-400">15% increase from last month</p>
                </CardContent>
              </Card>
              <Card className="bg-[#131313a2] text-white">
                <CardHeader>
                  <CardTitle>Average Consultation Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-[#ffff]">18 min</div>
                  <p className="text-sm text-gray-400">Efficient and thorough</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        <Separator className="my-8" />

        <div className="flex justify-center">
          <Button onClick={handleSave} className="bg-[#7047eb] hover:bg-[#5f3cc4] text-white px-8 py-3 rounded-lg text-lg">
            Update Doctor Information
          </Button>
        </div>
      </div>
    </div>
  )
}
