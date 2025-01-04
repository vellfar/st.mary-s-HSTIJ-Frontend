'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { LinkedinIcon as LinkedIn, Instagram, ChevronDown, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    // Set the initial value on mount
    handleResize()

    // Add resize listener
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { name: 'IT Consulting', href: '/services' },
        { name: 'Computer Systems', href: '/services' },
        { name: 'ICT Equipment & Accessories', href: '/services' },
        { name: 'Software Development', href: '/services' },
        { name: 'IOT & Consumer Electronics', href: '/services' },
        { name: 'Network Infrastructures', href: '/services' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/contact' },
        { name: 'Inquiries', href: '/contact' },
        { name: 'Service', href: '/contact' },
        { name: 'Vellfar Pay', href: '/contact' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'News & Media', href: '/blog' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'GDPR Compliance', href: '#' },
        { name: 'Security', href: '#' },
      ]
    },
  ]

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title)
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Image
              src="/v-logo-c.png"
              alt="Vellfar Logo"
              width={150}
              height={40}
              className="h-8"
            />
            <p className="text-gray-400 text-base">
              Empowering businesses with cutting-edge technology solutions for a digital future.
            </p>
            <div className="flex space-x-6">
              {[
                { name: 'X', icon: X, href: 'https://x.com/vellfar_uganda' },
                { name: 'LinkedIn', icon: LinkedIn, href: 'https://www.linkedin.com/in/vellfar-tech' },
                { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/vellfar_uganda' },
              ].map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-3">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerSections.slice(0, 2).map((section) => (
                <div key={section.title}>
                  <h3 
                    className="text-sm font-semibold text-white tracking-wider uppercase cursor-pointer flex items-center justify-between md:cursor-default"
                    onClick={() => toggleSection(section.title)}
                  >
                    {section.title}
                    <ChevronDown className="h-5 w-5 md:hidden" />
                  </h3>
                  <AnimatePresence>
                    {(expandedSection === section.title || isDesktop) && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 space-y-4"
                      >
                        {section.links.map((link) => (
                          <motion.li key={link.name}>
                            <Link href={link.href} className="text-base text-gray-400 hover:text-white transition-colors duration-300">
                              {link.name}
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerSections.slice(2).map((section) => (
                <div key={section.title}>
                  <h3 
                    className="text-sm font-semibold text-white tracking-wider uppercase cursor-pointer flex items-center justify-between md:cursor-default"
                    onClick={() => toggleSection(section.title)}
                  >
                    {section.title}
                    <ChevronDown className="h-5 w-5 md:hidden" />
                  </h3>
                  <AnimatePresence>
                    {(expandedSection === section.title || isDesktop) && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 space-y-4"
                      >
                        {section.links.map((link) => (
                          <motion.li key={link.name}>
                            <Link href={link.href} className="text-base text-gray-400 hover:text-white transition-colors duration-300">
                              {link.name}
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* 
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Subscribe to our newsletter</h3>
              <p className="text-base text-gray-400">Stay updated with the latest industry insights and Vellfar news.</p>
              <form className="mt-4 sm:flex sm:max-w-md">
                <Input
                  type="email"
                  name="email-address"
                  id="email-address"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Subscribe</Button>
                </div>
              </form>
            </div>
            <div className="flex flex-col md:items-end space-y-4">
              <p className="text-base text-gray-400">
                Est.2024 Vellfar Enterprises Ltd. 
              </p>
            </div>
          </div>
        </div>
        */}
      </div>
    </footer>
  )
}

export default Footer
