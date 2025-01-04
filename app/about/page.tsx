'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import Image from 'next/image'
import FooterGen from '@/components/footer-general'
import Header from '@/components/header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

const teamMembers = [
  { name: 'John Doe', role: 'CEO', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Jane Smith', role: 'CTO', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Mike Johnson', role: 'Lead Developer', image: '/placeholder.svg?height=300&width=300' },
  { name: 'Sarah Brown', role: 'UX Designer', image: '/placeholder.svg?height=300&width=300' },
]

const whyChooseUs = [
  { title: 'Innovation', description: 'We stay at the forefront of technology to bring you the latest solutions.' },
  { title: 'Quality', description: 'Our commitment to excellence ensures top-notch services and products.' },
  { title: 'Affordability', description: 'We offer competitive pricing without compromising on quality.' },
]

const FadeInWhenVisible = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 }
      }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Header />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto py-10 px-4 sm:px-6 lg:px-8"
      >
        <div className='text-center'>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold mb-4 text-blue-700"
          >
            About Vellfar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg mb-10 text-gray-600"
          >
            Our motivation & journey
          </motion.p>
        </div>

        <FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="relative h-64 md:h-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/about1.jpg"
                alt="Vellfar Office"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Story</h2>
              <p className="text-md text-gray-700 mb-6">
                Vellfar was founded with a vision to empower businesses through innovative technology solutions. 
                Our journey began with a small team of passionate tech enthusiasts and has grown into a 
                comprehensive IT services provider trusted by businesses country wide.
              </p>
              <p className="text-md text-gray-700">
                We believe in the power of technology to transform businesses and improve lives and we set out 
                to deliver cutting-edge IT solutions that drive growth, efficiency, and success for our clients.
              </p>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* 

        <FadeInWhenVisible>
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Meet the Team</h2>
        </FadeInWhenVisible>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 relative overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardTitle className="text-center text-xl text-blue-600">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        */}

        <FadeInWhenVisible>
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Why Choose Us</h2>
        </FadeInWhenVisible>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <FadeInWhenVisible>
          <div className="text-center bg-blue-50 p-8 rounded-lg shadow-inner">
            <h2 className="text-3xl font-bold mb-6 text-blue-700">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8 text-gray-700">
              Discover how our cutting-edge services can transform your operations and drive growth.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Contact Us Today
              </motion.button>
            </Link>
          </div>
        </FadeInWhenVisible>
      </motion.div>
      <FooterGen />
    </div>
  )
}

