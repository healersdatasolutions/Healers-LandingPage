'use client'

import { useState } from 'react'
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { useToast } from "../../components/use-toast"
import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AccountAction() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Handle form submission logic here
    console.log('Form submitted')

    toast({
      title: "Request Submitted",
      description: "Your account deletion request has been submitted successfully.",
    })

    setIsSubmitting(false)
  }

  return (
    <div>
      <Link 
          to="/" 
          className="absolute top-4 left-4 p-2 flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
    <div className=" mx-auto max-w-2xl py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Account Deletion Request</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="number">Phone Number</Label>
          <Input id="number" type="tel" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="reason">Reason for Account Deletion</Label>
          <Textarea id="reason" required />
        </div>
        <div className="pt-4 w-full flex justify-center">
          <Button 
            type="submit" 
            className="p-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </Button>
        </div>
      </form>
    </div>
    </div>
  )
}
