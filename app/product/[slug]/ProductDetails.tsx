'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, ShoppingCart, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/header'
import FooterGen from '@/components/footer-general'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Product {
  _id: string
  name: string
  price: number
  description: string
  category: string
  isNew: boolean
  rating: number
  slug: string
  images: string[]
  features?: string[]
  specifications: { [key: string]: string }
}

interface RelatedProduct {
  _id: string
  name: string
  price: number
  slug: string
  image: string
}

interface ProductDetailsProps {
  product: Product
  relatedProducts: RelatedProduct[]
}

export default function ProductDetails({ product, relatedProducts }: ProductDetailsProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [productLink, setProductLink] = useState('');

  useEffect(() => {
    // This code will only run on the client side.
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      // Now you can safely access `window` here.
      setProductLink(`${window.location.origin}/product/${product.slug}`);
    }
  }, [isClient, product.slug]);

  const handleShareClick = () => {
    setShowDropdown(!showDropdown);
  };

  const copyToClipboard = (link: string) => {
    navigator.clipboard.writeText(link).then(() => {
      alert("Link copied to clipboard!");
    }).catch((error) => {
      console.error("Failed to copy the link:", error);
    });
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (product.images?.length || 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + (product.images?.length || 1)) % (product.images?.length || 1))
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              {product.images && product.images.length > 0 ? (
                <Image
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-center object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p>No image available</p>
                </div>
              )}
              {product.images && product.images.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-1/2 left-4 transform -translate-y-1/2"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-1/2 right-4 transform -translate-y-1/2"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>
            {product.images && product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto py-2">
                {product.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    width={80}
                    height={80}
                    className={`rounded-md cursor-pointer ${
                      index === currentImageIndex ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-lg text-gray-500 mt-2">{product.category}</p>
            </div>
            <div className="flex items-center space-x-2">
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
            <p className="text-4xl font-bold text-gray-900">${(product.price / 100000).toFixed(2)}M</p>
            {product.isNew && (
              <Badge className="bg-blue-500 text-white">New</Badge>
            )}
            <p className="text-gray-700 pb-10">{product.description}</p>
            
            <Link href="/contact">
                <Button className="w-full bg-blue-600 hover:bg-blue-900">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Contact Us
                </Button>
            </Link>
            
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button
                    variant="outline" onClick={handleShareClick} className='w-full'
                >
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Product
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                    className="w-full bg-white border border-gray-200 rounded-md shadow-lg p-4 space-y-3" 
                    align="center" 
                    forceMount
                    >
                    <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none text-gray-800">
                            Copy Product Link
                        </p>
                        </div>
                    </DropdownMenuLabel>
                    
                    <DropdownMenuSeparator className="my-2 border-t border-gray-300" />
                    
                    <div className="flex items-center">
                        <input
                        type="text"
                        value={productLink}
                        readOnly
                        className="flex-grow px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        <button
                        onClick={() => copyToClipboard(productLink)}
                        className="ml-3 px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        >
                        Copy
                        </button>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
            </div>
        </div>

        <Tabs defaultValue="features" className="mt-12">
          <TabsList>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
          </TabsList>
          <TabsContent value="features">
            <Card>
              <CardHeader>
                <CardTitle>Product Features</CardTitle>
              </CardHeader>
              <CardContent>
                {product.features && product.features.length > 0 ? (
                  <ul className="list-disc pl-5 space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No features available for this product.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="specifications">
            <Card>
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                {product.specifications && Object.keys(product.specifications).length > 0 ? (
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="border-t border-gray-200 pt-4">
                        <dt className="text-sm font-medium text-gray-500">{key}</dt>
                        <dd className="mt-1 text-sm text-gray-900">{value}</dd>
                        </div>
                    ))}
                    </dl>
                ) : (
                    <p className="text-gray-500">No specifications available.</p>
                )}
                </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <FooterGen />
    </div>
  )
}
