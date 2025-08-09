"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Code, Network, Users, Computer, LaptopMinimal, Laptop, GraduationCap, Award, Globe, Stethoscope, Baby, Heart, Badge } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle} from "./ui/card"
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
      <div className="container mx-auto px-4 py-12">
        {/* About Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              About the Institute
            </h2>
          </div>

          <Card className="mb-8 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Founded in <strong>2010</strong>, St. Mary's Health Science Training Institute is South Sudan's leading institution for health sciences education. Our mission is to build a competent and compassionate health workforce to serve communities across the nation.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We are located along <strong>Gudele Road in Juba</strong> and offer nationally accredited diploma programs with a commitment to excellence in health training.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Quick Facts</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-blue-600" />
                      Established: 2010
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-600" />
                      Location: Gudele Road, Juba
                    </li>
                    <li className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-blue-600" />
                      100% National Exam Pass Rate
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-600" />
                      80%+ Female Graduates
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Programs Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nationally Accredited Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive diploma programs designed to prepare healthcare professionals for the challenges of modern medicine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <Stethoscope className="mx-auto h-12 w-12 text-blue-600 mb-3" />
                <CardTitle className="text-lg">Registered Nursing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Comprehensive nursing education preparing compassionate healthcare providers.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <Baby className="mx-auto h-12 w-12 text-pink-600 mb-3" />
                <CardTitle className="text-lg">Registered Midwifery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Specialized training in maternal and newborn care.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <Heart className="mx-auto h-12 w-12 text-red-600 mb-3" />
                <CardTitle className="text-lg">Clinical Health</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Practical clinical skills for frontline healthcare delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <Globe className="mx-auto h-12 w-12 text-green-600 mb-3" />
                <CardTitle className="text-lg">Public Health</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Community health promotion and disease prevention strategies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <Award className="h-8 w-8 text-yellow-600" />
              Why Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <GraduationCap className="mx-auto h-16 w-16 text-blue-600 mb-4" />
                <CardTitle className="text-xl text-blue-900">100% Exam Pass Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our students consistently excel in national health exams, demonstrating the quality of our education.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-pink-50 to-pink-100">
              <CardHeader>
                <Users className="mx-auto h-16 w-16 text-pink-600 mb-4" />
                <CardTitle className="text-xl text-pink-900">Women Empowerment Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Over 80% of our graduates are women, contributing to gender equality in healthcare.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader>
                <Globe className="mx-auto h-16 w-16 text-green-600 mb-4" />
                <CardTitle className="text-xl text-green-900">Global Health Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Supported by UNFPA, WHO, JICA, and Real Medicine Foundation for world-class training.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Partnership Logos Section */}
          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <h3 className="text-center text-xl font-semibold text-gray-900 mb-6">
              Our Global Partners
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="font-semibold text-blue-600">UNFPA</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="font-semibold text-blue-600">WHO</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="font-semibold text-blue-600">JICA</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="font-semibold text-blue-600">Real Medicine Foundation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
