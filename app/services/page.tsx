'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ChevronRight, Code, Network, Computer, Laptop, Users, LaptopMinimal } from 'lucide-react'
import Header from '@/components/header'
import FooterGen from '@/components/footer-general'
import Link from 'next/link'

const services = [
  
  {
    title: 'Computer Systems',
    description: 'Computer Systems Installation, Maintenance, Servicing & Tech Support.',
    icon: Computer,
    image: '/heropc2.jpg',
    benefits: ['Faster operations', 'Process automation', 'Increased productivity'],
    caseStudy: 'Computers and computing devices have been responsible for atleast 80% of business automations.'
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
    caseStudy: 'ICT equipment and accessories provide a seemless digital business experience.'
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
    benefits: ['Smart living', 'Embracing tech', 'Seamless experience '],
    caseStudy: 'An ecosystem approach (multiple devices and third-party integration) drives a smart life.'
  },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState(services[0])

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Header />
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-blue-700 mb-4">Our Enterprise Solutions</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering businesses with cutting-edge technology services to drive growth and innovation.
          </p>
        </motion.div>

        <Tabs defaultValue={services[0].title} className="space-y-8">
          <TabsList className="flex flex-wrap justify-center items-center gap-4">
            {services.map((service) => (
              <TabsTrigger
                key={service.title}
                value={service.title}
                onClick={() => setSelectedService(service)}
                className="px-4 rounded-full"
              >
                <service.icon className="w-5 h-5 mr-2" />
                {service.title}
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
              <TabsContent value={selectedService.title} className="mt-24 md:mt-5">
                <Card className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src={selectedService.image}
                        alt={selectedService.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <CardHeader>
                        <CardTitle className="text-3xl font-bold mb-2">{selectedService.title}</CardTitle>
                        <CardDescription className="text-lg">{selectedService.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <h3 className="font-semibold text-lg mb-2">Key Benefits:</h3>
                        <ul className="list-disc list-inside space-y-1 mb-4">
                          {selectedService.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </ul>
                        <h3 className="font-semibold text-lg mb-2">Case Study:</h3>
                        <p>{selectedService.caseStudy}</p>
                      </CardContent>
                      <CardFooter>
                        <Link href="/contact">
                          <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
                            Request Service
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our experts are here to help you navigate the complex world of enterprise technology.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
              Contact Us for Custom Solutions
            </Button>
          </Link>
        </motion.div>
      </div>
      <FooterGen />
    </div>
  )
}

