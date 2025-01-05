"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Cloud, Code, Network, Users, Computer, LaptopMinimal, Laptop } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import Link from 'next/link'

const services = [
  { title: 'ICT Equipment & Accessories', description: 'Sale and Supply of ICT Equipments and Accessories', icon: Laptop, image: '/Itsupply2.jpg' },
  { title: 'Computer Systems & Tech Support', description: 'Computer Systems Installation & Maintenance', icon: Computer, image: '/Itsupply.jpg' },
  { title: 'Consumer Electronics & IOT', description: 'Sale and Supply of Consumer Electronics & IOT Solutions', icon: LaptopMinimal, image: '/consele.jpg' },
  { title: 'Software Systems', description: 'Custom Software Solutions & Enterprise Systems', icon: Code, image: '/softdev.jpg' },
  { title: 'Network Infrastructures', description: 'Computer Networks Design, Installation & Maintenance', icon: Network, image: '/net.jpg' },
  { title: 'IT Consulting', description: 'Offering Expert Advice & Support for Your IT Needs', icon: Users, image: '/bizsoln.jpg' },
]

const animationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
}

export default function Service() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white w-full py-15 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4 pt-6">Innovative Solutions for Your Business</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how our cutting-edge services can transform your operations and drive growth.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={animationVariants}>
              <Card 
                className="overflow-hidden transition-all duration-300 flex flex-col justify-between w-full min-h-[400px]" // Ensure consistent size
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                    className="absolute top-0 left-0 w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    {service.icon ? <service.icon className="h-16 w-16 text-white" /> : <Cloud className="h-16 w-16 text-white" />}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-md font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 line-clamp-3">{service.description}</p>
                </CardContent>
              </Card>

            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="py-8 text-center"
        >
          <Link href="/services">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
              Explore All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
