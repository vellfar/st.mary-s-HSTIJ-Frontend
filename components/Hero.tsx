'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const images = [
  '/herobackground1.jpg',
  '/heroback2.jpg',
  '/heroback3.jpg'
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [])

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextImage, 5000)
    return () => clearInterval(interval)
  }, [nextImage])

  return (
    <section className="relative bg-gray-100 text-gray-800 w-full min-h-screen sm:min-h-[90vh] flex items-center overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={images[currentImageIndex]}
            alt={`Hero background ${currentImageIndex + 1}`}
            layout="fill"
            objectFit="cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 mb-8 lg:mb-0"
          >
            <Badge className="mb-4 bg-blue-600 text-white">Innovate with Vellfar</Badge>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-white">
              Empowering Business Automation
            </h1>
            <p className="text-base sm:text-lg mb-6 max-w-2xl text-gray-200">
              Transforming industries with cutting-edge technology solutions. Experience the future with Vellfar's innovative products and services.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/services">
                <Button size="lg" variant="default" className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
                  Explore Services
                </Button>
              </Link>
              <Link href="/shop">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-blue-600 border-white hover:bg-white transition-colors duration-300">
                  View Products
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block w-full lg:w-1/2 mt-8 ml-2 lg:mt-0"
          >
            <div className="relative h-[450px] overflow-hidden rounded-2xl shadow-2xl group bg-white">
              <Image
                src="/heropc2.jpg"
                alt="Featured Product"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <button
        onClick={prevImage}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-1 sm:p-2 rounded-full z-30 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-1 sm:p-2 rounded-full z-30 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        aria-label="Next image"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
      </button>
    </section>
  )
}

