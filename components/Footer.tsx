"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { LinkedinIcon as LinkedIn, Instagram, ChevronDown, X, Facebook, Mail, Phone, MapPin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const footerSections = [
    {
      title: "Programs",
      links: [
        { name: "Diploma in Nursing Registered", href: "/programs" },
        { name: "Diploma in Midwifery Registered", href: "/programs" },
        { name: "Diploma in Clinical Medicine", href: "/programs" },
        { name: "Diploma in Laboratory Technology", href: "/programs" },
        { name: "Diploma in Theatre Technology", href: "/programs" },
      ],
    },
    {
      title: "Admissions",
      links: [
        { name: "Apply Now", href: "/admissions" },
        { name: "Admission Requirements", href: "/admissions" },
       // { name: "Key Dates & Deadlines", href: "/admissions#key-dates" },
      ],
    },
    {
      title: "About Us",
      links: [
        { name: "Our Story", href: "/about" },
        { name: "Faculty & Staff", href: "/faculty" },
        { name: "Partners & Accreditations", href: "/partners" },
        { name: "Success Stories", href: "/success" },
        { name: "News & Announcements", href: "/news" },
        { name: "Gallery", href: "/gallery" },
      ],
    },
    {
      title: "Legal & Support",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Accessibility", href: "#" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
  ]

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title)
  }

  return (
    <footer className="bg-red-950 text-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          {/* Institute Info & Social Media */}
          <div className="space-y-8 xl:col-span-1 mb-10 xl:mb-0">
            <Link href="/">
              <Image
                src="/logo.jpg" // Assuming a refined logo for the dark background
                alt="St. Mary's Health Science Training Institute Logo"
                width={70}
                height={80}
                className="rounded-lg"
              />
            </Link>
            <p className="text-gray-300 text-base font-light leading-relaxed">
              Empowering the Future of Healthcare in South Sudan through accredited education and compassionate service.
            </p>
            <div className="flex space-x-6">
              {[
                { name: "X", icon: X, href: "https://x.com/stmaryshstij" },
                { name: "Facebook", icon: Facebook, href: "https://facebook.com/stmaryshstij" },
                { name: "Instagram", icon: Instagram, href: "https://instagram.com/stmaryshstij" },
                { name: "LinkedIn", icon: LinkedIn, href: "https://linkedin.com/company/stmaryshstij" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            {footerSections.slice(0, 2).map((section) => (
              <div key={section.title}>
                <h3
                  className="text-lg font-serif font-light text-white tracking-wide uppercase cursor-pointer flex items-center justify-between md:cursor-default mb-4"
                  onClick={() => toggleSection(section.title)}
                >
                  {section.title}
                  <motion.div
                    initial={false}
                    animate={{ rotate: expandedSection === section.title ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </h3>
                <AnimatePresence>
                  {(expandedSection === section.title || isDesktop) && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      {section.links.map((link) => (
                        <motion.li key={link.name}>
                          <Link
                            href={link.href}
                            className="text-base text-gray-300 hover:text-white transition-colors duration-300 font-light"
                          >
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

          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-1">
            {footerSections.slice(2).map((section) => (
              <div key={section.title}>
                <h3
                  className="text-lg font-serif font-light text-white tracking-wide uppercase cursor-pointer flex items-center justify-between md:cursor-default mb-4"
                  onClick={() => toggleSection(section.title)}
                >
                  {section.title}
                  <motion.div
                    initial={false}
                    animate={{ rotate: expandedSection === section.title ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </h3>
                <AnimatePresence>
                  {(expandedSection === section.title || isDesktop) && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      {section.links.map((link) => (
                        <motion.li key={link.name}>
                          <Link
                            href={link.href}
                            className="text-base text-gray-300 hover:text-white transition-colors duration-300 font-light"
                          >
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

        {/* Contact Info (Separate Block) */}
        <div className="mt-16 pt-12 border-t border-gray-800 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
          <div>
            <h4 className="text-lg font-serif font-light text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-red-700" />
                <p className="font-light">Gudele Road, Juba, South Sudan</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-700" />
                <Link href="tel:0925606081" className="hover:underline font-light">
                  0925606081
                </Link>
                <Link href="tel:+211921373000" className="hover:underline font-light">
                  +211921373000
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-700" />
                <Link href="mailto:stmaryhstij@gmail.com" className="hover:underline font-light">
                  stmaryhstij@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-700" />
                <Link href="mailto:admissions@stmaryshealthjuba.edu" className="hover:underline font-light">
                  admissions@stmaryshealthjuba.edu
                </Link>
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-lg font-serif font-light text-white mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <Link
                href="/admissions"
                className="text-base text-gray-300 hover:text-white transition-colors duration-300 font-light"
              >
                Apply Now
              </Link>
              <Link
                href="/programs"
                className="text-base text-gray-300 hover:text-white transition-colors duration-300 font-light"
              >
                Our Programs
              </Link>
              <Link
                href="/faculty"
                className="text-base text-gray-300 hover:text-white transition-colors duration-300 font-light"
              >
                Faculty & Staff
              </Link>
              <Link
                href="/news"
                className="text-base text-gray-300 hover:text-white transition-colors duration-300 font-light"
              >
                Latest News
              </Link>
              <Link
                href="/partners"
                className="text-base text-gray-300 hover:text-white transition-colors duration-300 font-light"
              >
                Partnerships
              </Link>
              <Link
                href="/gallery"
                className="text-base text-gray-300 hover:text-white transition-colors duration-300 font-light"
              >
                Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
