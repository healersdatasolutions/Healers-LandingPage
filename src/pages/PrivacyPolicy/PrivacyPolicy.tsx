import { useTheme } from '../../components/ThemeProvider/theme-provider'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from "../../components/ui/button"
import { AccountDeletionForm } from './AccountAction'

export default function PrivacyPolicy() {
  const { theme } = useTheme()
  const dark = theme === 'dark'
  const [showDeletionForm, setShowDeletionForm] = useState(false)

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <Link 
          to="/" 
          className="absolute top-4 left-4 p-2 flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
          Privacy Policy
        </h1>
        
        <div className="max-w-3xl mx-auto space-y-6 text-gray-800 dark:text-gray-200">
          <p className="text-sm text-center mb-8">Effective Date: 12 August 2024</p>
          
          <p>Welcome to Healers Healthcare. We are committed to safeguarding your privacy and ensuring that your personal information is managed securely and responsibly. This Privacy Policy outlines how we collect, use, and share information when you use our mobile application ("App") and the choices you have regarding your information.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Consent</h2>
          <p>By using our app, you hereby consent to our Privacy Policy and agree to its terms.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-2">Personal Information</h3>
          <p>We collect personal information that you voluntarily provide when you use our App to book appointments, purchase medicines, or manage your medical records. This includes:</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Contact Information: Name, email address, phone number.</li>
            <li>Medical Records: Details of your medical history and treatment, which you choose to store and manage within the App.</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6 mb-2">Automatically Collected Information</h3>
          <p>We do not collect any additional information automatically. The App is designed to only manage and store the information you provide directly.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Providing and Improving the App: To facilitate booking appointments, purchasing medicines, and managing your medical records.</li>
            <li>Communication: To send you updates related to your appointments, orders, or any other necessary information.</li>
            <li>Security: To protect your information using secure authentication and storage practices via Firebase.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Sharing Your Information</h2>
          <p>We do not share your personal information with third parties except in the following situations:</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Service Providers: We use Firebase for authentication and storage. Your information is securely stored and managed through Firebase's services.</li>
            <li>Legal Compliance: We may disclose your information if required by law, in response to legal processes, or to protect the rights, property, or safety of our users or others.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights and Choices</h2>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Access and Update: You can access and update your personal information directly within the App. You can also request corrections to any inaccurate information.</li>
            <li>Delete Account: You may request the deletion of your account and associated personal information by contacting us at jainbhomik@gmail.com or sahilshandil2@gmail.com.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
          <p>We take reasonable steps to protect your personal information from unauthorized access, loss, or misuse. All data is securely stored in Firebase, which is compliant with industry standards for data protection.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Children's Privacy</h2>
          <p>Our App is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on our App with the effective date.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy or our practices, please contact us at:</p>
          <p className="mt-2">Healers Data Solutions</p>
          <p>Email: jainbhomik@gmail.com, sahilshandil2@gmail.com</p>
          
          <div className="mt-8 text-center">
            <Button onClick={() => setShowDeletionForm(true)}>
              Account Deletion Request
            </Button>
          </div>
        </div>
      </div>
      
      {showDeletionForm && (
        <AccountDeletionForm onClose={() => setShowDeletionForm(false)} />
      )}
    </div>
  )
}
