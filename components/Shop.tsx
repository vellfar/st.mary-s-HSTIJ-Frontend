"use client"

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { Eye, Phone, Star } from 'lucide-react'
import { Card, CardTitle, CardDescription, CardFooter } from "./ui/card"
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
          <p className="text-md md:text-lg text-gray-800 max-w-3xl mx-auto">
            We supply a range of high-quality IT equipment & accessories designed to elevate your digital experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid justify-center px-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8  md:px-20 lg:px-20"
        >
          {currentProducts.map((product) => (
            
              <Card
                key={product._id}
                className="overflow-hidden border rounded-lg shadow-sm hover:shadow-md"
              >
                <Link href={`/product/${product.slug}`} passHref>
                  <div className="relative h-48 md:h-64">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      className="object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 left-4 bg-blue-600 text-white text-sm rounded-full py-1 px-3">
                      {product.isNew ? 'New Arrival' : 'Featured'}
                    </Badge>
                  </div>

                  <div className="p-4 md:p-6 flex flex-col justify-between h-full">
                    <div>
                      <CardTitle className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{product.name}</CardTitle>
                      <CardDescription className="md:flex md:items-center md:justify-between mb-4">
                      <p className='text-lg text-gray-500 font-bold'>UGX <span className='text-yellow-400'>{product.price.toLocaleString()}</span></p>
                      <p className="text-sm">{product.category}</p>
                      </CardDescription>
                    </div>
                  </div>
                </Link>
              </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
