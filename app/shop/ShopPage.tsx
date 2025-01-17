'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Filter, ChevronDown, ChevronUp, Eye } from 'lucide-react'
import Header from '@/components/header'
import FooterGen from '@/components/footer-general'
import Link from 'next/link'
import { Product } from '@/types/product'

interface ShopPageClientProps {
  initialProducts: Product[]
  initialCategories: string[]
}

export default function ShopPageClient({ initialProducts, initialCategories }: ShopPageClientProps) {
  const [products] = useState<Product[]>(initialProducts)
  const [priceRange, setPriceRange] = useState([0, 10000000])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('popularity')
  const [showNewOnly, setShowNewOnly] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilters, setShowFilters] = useState(false)
  const categories = useMemo(() => ['All', ...initialCategories], [initialCategories])

  const filteredProducts = useMemo(() => {
    let result = products

    if (selectedCategory !== 'All') {
      result = result.filter(product => product.category === selectedCategory)
    }

    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    )

    if (showNewOnly) {
      result = result.filter(product => product.isNew)
    }

    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        // 'popularity' - assume default order is by popularity
        break
    }

    return result
  }, [products, selectedCategory, priceRange, showNewOnly, searchTerm, sortBy])

  const productsPerPage = 6
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  useEffect(() => {
    setCurrentPage(1)
  }, [filteredProducts.length])

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className='text-center'>
          <h1 className="text-2xl font-bold mb-8 text-gray-900">THE V.TECH SHOP💻</h1>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div 
            className={`lg:w-1/4 bg-white p-6 rounded-lg shadow-md ${showFilters ? 'block' : 'hidden lg:block'}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Filters</h2>
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4"
              />
              <h3 className="font-semibold mb-2 text-gray-700">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center">
                    <Checkbox
                      id={category}
                      checked={selectedCategory === category}
                      onCheckedChange={() => setSelectedCategory(category)}
                    />
                    <label htmlFor={category} className="ml-2 text-sm text-gray-600">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            {/* 
            <div className="mb-6">
              <h3 className="font-semibold mb-2 text-gray-700">Price Range</h3>
              <Slider
                defaultValue={priceRange}
                max={10000000}
                step={10000}
                onValueChange={setPriceRange}
              />
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>UGX {priceRange[0].toLocaleString()}</span>
                <span>UGX {priceRange[1].toLocaleString()}</span>
              </div>
            </div>
            */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2 text-gray-700">Product Status</h3>
              <div className="flex items-center">
                <Checkbox
                  id="newOnly"
                  checked={showNewOnly}
                  onCheckedChange={(isChecked) => setShowNewOnly(isChecked as boolean)}
                />
                <label htmlFor="newOnly" className="ml-2 text-sm text-gray-600">
                  Show only new products
                </label>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-700">Sort by</h3>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Select sorting" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Customer Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='hidden md:block lg:block mt-5 space-y-4'>
            <h3 className="font-semibold mb-2 text-gray-700">THE V.TECH SHOP💻</h3>
              <Image
              src="/bannertec2.jpg"
              alt='ad'
              width={150}
              height={200}
              className='w-full h-full rounded-md'
              />
              <Image
              src="/bannertec.jpg"
              alt='ad'
              width={150}
              height={200}
              className='w-full h-full rounded-md'
              />
            </div>
          </motion.div>
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{filteredProducts.length} products found</p>
              <Button
                variant="outline"
                className="lg:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="mr-2 h-4 w-4" />
                Filters
                {showFilters ? (
                  <ChevronUp className="ml-2 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-2 h-4 w-4" />
                )}
              </Button>
            </div>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence>
                {currentProducts.map((product) => (
                  <motion.div
                    key={product._id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex"
                  >
                    <Card
                    key={product._id}
                    className="flex flex-col overflow-hidden w-full hover:shadow-md">
                      <Link href={`/product/${product.slug}`} passHref>
                        <div className="relative pt-[75%] w-full">
                          {product.image ? (
                            <Image
                              src={product.image}
                              alt={product.name}
                              layout="fill"
                              objectFit="cover"
                              className="absolute top-0 left-0 w-full h-full"
                            />
                          ) : (
                            <div className="absolute top-0 left-0 w-full h-full bg-gray-200 flex items-center justify-center">
                              <span className="text-gray-500">No image available</span>
                            </div>
                          )}
                          {product.isNew && (
                            <Badge className="absolute top-2 right-2 bg-blue-500">New</Badge>
                          )}
                        </div>
                        <CardHeader className="flex-grow">
                          <CardTitle className="text-md line-clamp-2">{product.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          {/* 
                          <p className="font-semibold text-lg mb-1 text-gray-500">UGX <span className='text-yellow-400'>{product.price.toLocaleString()}</span></p>
                          */}
                          <p className="text-sm text-yellow-400">{product.category}</p>
                        </CardContent>
                      </Link>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            <div className="mt-8 flex justify-center">
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="mr-2"
              >
                Previous
              </Button>
              <span className="mx-4 flex items-center">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        </div> 
        <div className='md:hidden lg:hidden mt-5 space-y-4'>
              <Image
              src="/bannertec.jpg"
              alt='ad'
              width={150}
              height={200}
              className='w-full h-full rounded-md'
              />
        </div>
      </div>
      <FooterGen />
    </div>
  )
}

