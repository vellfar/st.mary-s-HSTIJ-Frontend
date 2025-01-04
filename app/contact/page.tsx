'use client';

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Mail, Phone, MapPin, Linkedin, Send, Instagram, X } from 'lucide-react'
import Header from '@/components/header'
import FooterGen from '@/components/footer-general'
import { submitContactForm } from './actions'

import dynamic from 'next/dynamic'

const MapComponent = dynamic(() => import('@/components/MapComponent'), { 
  loading: () => <p>Loading map...</p>,
  ssr: false 
})

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().matches(/^[0-9]+$/, 'Must be only digits').required('Phone number is required').min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
}).required();


type FormData = yup.InferType<typeof schema>

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data: FormData) => {
    try {
      await submitContactForm(data)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const faqs = [
    { question: 'What services does Vellfar offer?', answer: 'Computer Systems, ICT Equipment & Accessories, Software Systems, Network Infrastructures, Consumer Electronics & IOT, Tech Support, IT Consulting, etc' },
    { question: 'How can I request a quote?', answer: 'You can request a quote by filling out the contact form on this page or by emailing us directly at vellfarenterprises@gmail.com.' },
    { question: 'What industries does Vellfar serve?', answer: 'Vellfar serves a diverse range of industries including finance, healthcare, education, retail, and government sectors.' },
    { question: 'How quickly can I expect a response?', answer: 'We strive to respond to all inquiries within 24 business hours.' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className='text-center'>
            <motion.h1 
              className="text-3xl md:text-4xl font-bold mb-4 text-blue-700"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact Vellfar
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Let's discuss how we can drive innovation in your institution.
            </motion.p>
        </div>

        {isSubmitted ? ( 
          <div className="grid grid-cols-1 gap-12">
            <motion.div {...fadeInUp}>
              <Card>
                <CardContent>
                    <div className="text-center py-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                      >
                        <Send className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      </motion.div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
                      <p className="text-gray-600">Your message has been sent successfully. Our Representative will reach out to you soon.</p>
                    </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">     
          <motion.div {...fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name / Organization</label>
                    <Input id="name" {...register('name')} className={errors.name ? 'border-red-500' : ''} />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <Input id="email" type="email" {...register('email')} className={errors.email ? 'border-red-500' : ''} />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone</label>
                    <Input id="phone" {...register('phone')} className={errors.phone ? 'border-red-500' : ''} />
                    {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Message</label>
                    <Textarea id="message" {...register('message')} rows={8} className={errors.message ? 'border-red-500' : ''} />
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-900">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Our Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 h-64 rounded-lg mb-4">
                    <MapComponent />
                  </div>
                  <p className="flex items-center text-gray-600">
                    <MapPin className="mr-2" />
                    Kampala, Plot 71 Nkrumah Road, SAL Building SF-14
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="flex items-center text-gray-600"><Phone className="mr-2" /> +256760174206 / +256753507887</p>
                  <p className="flex items-center text-gray-600"><Mail className="mr-2" /> vellfarenterprises@gmail.com</p>
                  <div className="flex space-x-4 mt-4">
                    <a href="https://www.linkedin.com/in/vellfar-tech" className="text-gray-400 hover:text-blue-700"><Linkedin /></a>
                    <a href="https://x.com/vellfar_uganda" className="text-gray-400 hover:text-blue-400"><X /></a>
                    <a href="https://www.instagram.com/vellfar_uganda" className="text-gray-400 hover:text-blue-700"><Instagram /></a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
        </div>
      )}
        
        <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className='w-full py-4 lg:py-16'>
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <FooterGen />
    </div>
  )
}

