'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Star, ShoppingCart, Heart, Search, Filter, ChevronDown, ChevronUp, Eye } from 'lucide-react'
import Header from '@/components/header'
import FooterGen from '@/components/footer-general'
import Link from 'next/link'
import { Product } from '@/types/product'

interface ShopPageClientProps {
  initialProducts: Product[]
  initialCategories: string[]
}

export default function ShopPageClient({ initialProducts, initialCategories }: ShopPageClientProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [priceRange, setPriceRange] = useState([0, 3000000])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('popularity')
  const [showNewOnly, setShowNewOnly] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilters, setShowFilters] = useState(false)
  const categories = ['All', ...initialCategories]

  const productsPerPage = 6
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  // Initialize products state
  useEffect(() => {
    console.log('Initializing products:', initialProducts)
    setProducts(initialProducts)
    setFilteredProducts(initialProducts)
  }, [initialProducts])

  const filterProducts = useCallback(() => {
    console.log('Filtering products. Current products:', products)
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

    console.log('Filtered products:', result)
    setFilteredProducts(result)
  }, [selectedCategory, priceRange, showNewOnly, searchTerm, sortBy, products])

  useEffect(() => {
    filterProducts()
  }, [filterProducts, products])

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className='text-center'>
        <h1 className="text-2xl font-bold mb-8 text-gray-900">OUR TECH SHOP💻</h1>
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
                max={3000000}
                step={10000}
                onValueChange={setPriceRange}
              />
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>${(priceRange[0] / 100000).toFixed(2)}M</span>
                <span>${(priceRange[1] / 100000).toFixed(2)}M</span>
              </div>
            </div>
            */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2 text-gray-700">Product Status</h3>
              <div className="flex items-center">
                <Checkbox
                  id="newOnly"
                  checked={showNewOnly}
                  onCheckedChange={(isChecked: boolean) => setShowNewOnly(isChecked)}
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                  >
                    <Card className="overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105">
                      <div className="relative">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={300}
                          height={200}
                          layout="responsive"
                          className="object-cover"
                        />
                        {product.isNew && (
                          <Badge className="absolute top-2 right-2 bg-blue-500">New</Badge>
                        )}
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="font-semibold text-xl mb-1">UGX {(product.price)}</p>
                        <p className="text-sm text-gray-500">{product.category}</p>
                      </CardContent>
                      <CardFooter>
                      <Button className="w-full bg-blue-600 hover:bg-blue-900" asChild>
                          <Link href={`/product/${product.slug}`} passHref>
                            <div className="flex items-center justify-center w-full">
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </div>
                          </Link>
                        </Button>
                      </CardFooter>
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
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredProducts.length / productsPerPage)))}
                disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
      <FooterGen />
    </div>
  )
}

