import React from 'react'
import { X } from 'lucide-react'
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"

interface AccountDeletionFormProps {
  onClose: () => void
}

export function AccountDeletionForm({ onClose }: AccountDeletionFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-[#1b1a1a] bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-[#000000] rounded-lg shadow-xl p-10 w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Account Deletion Request</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>
          <div>
            <Label htmlFor="number">Number</Label>
            <Input id="number" type="tel" required />
          </div>
          <div>
            <Label htmlFor="reason">Reason</Label>
            <Textarea id="reason" required />
          </div>
          <div className='w-full flex justify-center items-center'>

          <Button type="submit" className="p-3">Submit Request</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
