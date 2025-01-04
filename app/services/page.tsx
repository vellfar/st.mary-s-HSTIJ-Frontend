'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ChevronRight, Code, Network, Computer, Laptop, Users, LaptopMinimal } from 'lucide-react'
import Header from '@/components/header'
import FooterGen from '@/components/footer-general'
import Link from 'next/link'
import ServiceCard from './ServiceCard'

const services = [
  {
    title: 'Computer Systems',
    description: 'Computer Systems Installation, Maintenance, Servicing & Tech Support.',
    icon: Computer,
    image: '/heropc2.jpg',
    benefits: ['Faster operations', 'Process automation', 'Increased productivity'],
    caseStudy: 'Computers and computing devices have been responsible for at least 80% of business automations.'
  },
  {
    title: 'Software Systems',
    description: 'Custom software solutions tailored to your specific needs.',
    icon: Code,
    image: '/softdev2.jpg',
    benefits: ['Tailored solutions', 'Cutting-edge technologies', 'Agile development'],
    caseStudy: 'Developed a custom ERP system, increasing operational efficiency by 40%.'
  },
  {
    title: 'ICT Equipment',
    description: 'Sale and Supply of ICT Equipments and Accessories.',
    icon: Laptop,
    image: '/Itsupply3.jpg',
    benefits: ['Reliable', 'Cost-effective', 'Make work easy & efficient'],
    caseStudy: 'ICT equipment and accessories provide a seamless digital business experience.'
  },
  {
    title: 'Network Infrastructures',
    description: 'Robust and efficient network setups for seamless operations.',
    icon: Network,
    image: '/net.jpg',
    benefits: ['High performance', 'Reliability', 'Future-proof design'],
    caseStudy: 'Designed and implemented a global network infrastructure for a multinational corporation.'
  },
  {
    title: 'IT Consulting',
    description: 'Expert advice to align your IT strategy with business goals.',
    icon: Users,
    image: '/bizsoln.jpg',
    benefits: ['Strategic IT planning', 'Cost optimization', 'Digital transformation'],
    caseStudy: 'Helping institutions reduce IT costs by 30% through strategic consulting.'
  },
  {
    title: 'IOT & Electronics',
    description: 'Smart electronics and devices that make life easier.',
    icon: LaptopMinimal,
    image: '/iot.jpg',
    benefits: ['Smart living', 'Embracing tech', 'Seamless experience'],
    caseStudy: 'An ecosystem approach (multiple devices and third-party integration) drives a smart life.'
  },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState(services[0])

  const memoizedServices = useMemo(() => services, [])

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Header />
      <main className="container mx-auto py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-3 sm:mb-4">Our Enterprise Solutions</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering businesses with cutting-edge technology services to drive growth and innovation.
          </p>
        </motion.div>

        <Tabs defaultValue={services[0].title} className="space-y-6 sm:space-y-10 mb-10">
          <TabsList className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
            {memoizedServices.map((service) => (
              <TabsTrigger
                key={service.title}
                value={service.title}
                onClick={() => setSelectedService(service)}
                className="px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-md rounded-full transition-all duration-300 ease-in-out hover:bg-blue-100"
              >
                <service.icon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">{service.title}</span>
                <span className="sm:hidden">{service.title.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <TabsContent value={selectedService.title} className="mt-12">
                <ServiceCard service={selectedService} />
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 sm:mt-30 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Ready to Transform Your Business?</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Our experts are here to help you navigate the complex world of enterprise technology. Let's create a custom solution tailored to your needs.
          </p>
          <Link href="/contact" className="inline-block">
            <Button size="lg" className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
              Contact Us for Custom Solutions
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </main>
      <FooterGen />
    </div>
  )
}

