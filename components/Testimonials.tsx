'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, Tech Corp",
    company: "Tech Corp",
    image: "/john-doe.jpg",
    quote: "Vellfar has transformed our IT infrastructure. Their expertise and dedication are unmatched in the industry.",
    logo: "/tech-corp-logo.png"
  },
  {
    name: "Jane Smith",
    position: "CTO, Innovate Inc",
    company: "Innovate Inc",
    image: "/jane-smith.jpg",
    quote: "The cloud solutions provided by Vellfar have significantly improved our operational efficiency and scalability.",
    logo: "/innovate-inc-logo.png"
  },
  {
    name: "Mike Johnson",
    position: "Director of IT, Global Enterprises",
    company: "Global Enterprises",
    image: "/mike-johnson.jpg",
    quote: "Vellfar's cybersecurity measures have given us peace of mind. Their proactive approach has prevented numerous potential threats.",
    logo: "/global-enterprises-logo.png"
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white w-full py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Vellfar has helped businesses across the globe achieve their technological goals.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-blue-600 bg-opacity-20"></div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-between">
                    <CardContent className="mb-6">
                      <Quote className="h-12 w-12 text-blue-600 mb-4" />
                      <p className="text-xl md:text-2xl text-gray-700 italic mb-6">
                        "{testimonials[currentIndex].quote}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-xl font-bold">{testimonials[currentIndex].name}</CardTitle>
                          <CardDescription className="text-gray-600">{testimonials[currentIndex].position}</CardDescription>
                        </div>
                        <div className="w-16 h-16 relative">
                          <Image
                            src={testimonials[currentIndex].logo}
                            alt={testimonials[currentIndex].company}
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 bg-white shadow-md hover:bg-gray-100"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-white shadow-md hover:bg-gray-100"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`mx-1 ${index === currentIndex ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}
              onClick={() => setCurrentIndex(index)}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

