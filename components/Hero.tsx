'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react'
import Link from 'next/link'

const images = [
  '/hero1.jpg',
  '/hero4.jpg',
  '/hero3.jpg'
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
    <section className="relative bg-gray-100 text-gray-800 w-full min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image
            src={images[currentImageIndex] || "/placeholder.svg"}
            alt={`Hero background ${currentImageIndex + 1}`}
            layout="fill"
            objectFit="cover"
            priority
            className="brightness-[0.6]" // Darken image for better text contrast
          />
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-black opacity-30" /> {/* Harvard-inspired overlay */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-3/5 mb-12 lg:mb-0 text-center lg:text-left"
          >
            <Badge className="mb-4 bg-white/20 text-white border border-white/30 backdrop-blur-sm px-4 py-1 text-sm font-light rounded-full">
              <GraduationCap className="h-4 w-4 mr-2" />
              Academic Excellence in Health Sciences
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light mb-6 text-white leading-tight tracking-tight">
              Empowering the Future of <span className="font-normal text-amber-200">Healthcare</span> in South Sudan
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-3xl text-gray-100 leading-relaxed font-light">
              Offering nationally accredited diploma programs in Nursing, Midwifery, Clinical Health, and Public Health – equipping the next generation of compassionate healthcare professionals.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Link href="/programs">
                <Button size="lg" variant="default" className="w-full sm:w-auto bg-white text-red-900 hover:bg-red-900 hover:text-white transition-colors duration-300 px-8 py-4 text-lg font-medium rounded-none">
                  Explore Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/admissions">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-red-900 hover:bg-red-900 hover:text-white transition-colors duration-300 px-8 py-4 text-lg font-medium rounded-none">
                  Apply Now
                </Button>
              </Link>
            </div>
          </motion.div>
          
          {/* Removed the right-side image as it cluttered the academic feel */}
        </div>
      </div>
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full z-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors hover:bg-white/30"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full z-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors hover:bg-white/30"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </section>
  )
}
