'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { Eye, Star } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Product } from '@/types/product'

interface ShopSectionProps {
  initialProducts: Product[]
  initialCategories: string[]
}

export default function Shop({ initialProducts, initialCategories }: ShopSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [showNewOnly, setShowNewOnly] = useState(true)

  const categories = ['All', ...initialCategories]
  const productsPerPage = 6
  const currentPage = 1
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  // Initialize products state
  useEffect(() => {
    setProducts(initialProducts)
    setFilteredProducts(initialProducts)
  }, [initialProducts])

  const filterProducts = useCallback(() => {
    let result = products

    if (showNewOnly) {
      result = result.filter(product => product.isNew)
    }

    setFilteredProducts(result)
  }, [products, showNewOnly])

  useEffect(() => {
    filterProducts()
  }, [filterProducts])

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
            We supply a range of high-quality IT equipment & accessories designed to elevate your digital experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          {currentProducts.map((product) => (
            <Card key={product._id} className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white text-sm">Featured</Badge>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <CardTitle className="text-xl md:text-3xl font-bold mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold mb-4">{product.price}</CardDescription>
                  <div className="flex items-center space-x-2 mb-10">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="text-sm text-gray-500">({product.rating} out of 5 stars)</span>
            </div>
                  <p className="text-gray-600 text-sm md:text-base mb-10">Experience Faster Task Completion Rates.</p>
                  <div className='justify-start items-end space-x-4'>
                  <Link href={`/product/${product.slug}`} passHref>
                    <Button className="flex-1 px-10 bg-blue-600 text-white hover:bg-blue-700">
                      View 
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button className="flex-1 px-10" variant="outline">
                      Contact Us
                    </Button>
                  </Link>
                  </div>
                  
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
