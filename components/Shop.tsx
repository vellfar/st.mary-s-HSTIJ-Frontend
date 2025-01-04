'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, ShoppingCart, Eye } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { motion } from 'framer-motion'
import Link from 'next/link'

const products = [
  { name: 'Hp EliteBook x2 G4', price: 'Shs 1,496,000', rating: 4.8, image: '/hptablet.jpg', category: 'Computers' },
  { name: 'Hp M22f 21.5"', price: 'Shs 813,000', rating: 4.5, image: '/hpmonitor.jpg', category: 'Monitors' },
  { name: 'Bizhub Konika Minolta', price: 'Shs 5,170,000', rating: 4.7, image: '/bizhub.webp', category: 'Printers' },
  { name: 'M170 Logitech Mouse', price: 'Shs 57,000', rating: 4.6, image: '/mouse.jpg', category: 'Accessories' },
]

const featuredProduct = {
  name: 'HP All in One PC',
  price: 'Shs 2,460,000',
  rating: 4.9,
  image: '/heropc2.jpg',
  description: 'Experience unparalleled performance with the core i3 processor.',
}

export default function Shop() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white w-full py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Quality Products For Your IT Needs</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We supply range of high-quality IT equipment & accessories designed to elevate your digital experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white text-sm">Featured</Badge>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <CardTitle className="text-xl md:text-3xl font-bold mb-2">{featuredProduct.name}</CardTitle>
                <CardDescription className="text-lg font-semibold mb-4">{featuredProduct.price}</CardDescription>
                <p className="text-gray-600 text-sm md:text-base mb-10">{featuredProduct.description}</p>
                <div className="flex items-center mb-6" />
                <div className="flex flex-wrap gap-4">
                  <Link href="">
                    <Button className="flex-1 px-10 bg-blue-600 text-white hover:bg-blue-700">
                      View 
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="flex-1">Contact Us</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full"
            >
              <Card 
                className="overflow-hidden transition-all duration-300 hover:shadow-xl"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`object-cover transform ${hoveredIndex === index ? 'scale-105' : 'scale-100'} transition-transform duration-300`}
                  />
                  <Badge className="absolute top-2 left-2 bg-blue-600 text-white text-sm">{product.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="truncate text-lg">{product.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold">{product.price}</CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-2 items-center justify-center px-3">
                  <Button className="flex-1 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
                    <Eye className="mr-2 h-4 w-4" /> View Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link href="/shop">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              Explore All Products
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
