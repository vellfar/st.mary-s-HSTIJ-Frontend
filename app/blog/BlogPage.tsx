'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { format } from 'date-fns'
import { TwitterShareButton, LinkedinShareButton, FacebookShareButton } from 'react-share'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Calendar, Clock, Tag, User, Twitter, Linkedin, Facebook, Share2 } from 'lucide-react'
import FooterGen from '@/components/footer-general'
import Header from '@/components/header'

interface BlogPost {
    _id: string;
    title: string;
    author: string;
    date: string;
    readTime: number;
    preview: string;
    category: string;
    image: string;
    slug: string;
  }
  
  type Category = string;
  
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
}

interface BlogPageProps {
    initialBlogPosts: BlogPost[];
    initialCategories: Category[];
  }
  
  export default function BlogPage({ initialBlogPosts, initialCategories }: BlogPageProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState<Category>('All');
    const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(initialBlogPosts);
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialBlogPosts);
    const [categories, setCategories] = useState<Category[]>(['All', ...initialCategories]);
  
    useEffect(() => {
      const filtered = blogPosts.filter((post) =>
        (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.preview.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (activeCategory === 'All' || post.category === activeCategory)
      );
      setFilteredPosts(filtered);
    }, [searchTerm, activeCategory, blogPosts]);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Header />
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className='text-center'>
          <motion.h1 
            className="text-2xl md:text-3xl font-bold mb-4 text-blue-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Insights & Innovation
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Stay ahead with our latest thoughts on enterprise technology and business strategy
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* 
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-8"
            />
            */}
            <AnimatePresence>
              {filteredPosts.map((post: BlogPost, index: number) => (
                <motion.div key={post._id} {...fadeInUp} transition={{ delay: index * 0.1 }}>
                  <Card className="mb-8 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-gray-900">{post.title}</CardTitle>
                      <div className="flex flex-wrap items-center text-sm text-gray-500 mt-2">
                        <div className="flex items-center mr-4 mb-2">
                          <User size={16} className="mr-2" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center mr-4 mb-2">
                          <Calendar size={16} className="mr-2" />
                          <span>{format(new Date(post.date), 'MMM d, yyyy')}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          <Clock size={16} className="mr-2" />
                          <span>{post.readTime} min read</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{post.preview}</p>
                    </CardContent>
                    <CardFooter className="flex flex-wrap justify-between items-center">
                      <Button variant="outline" className="mb-2 sm:mb-0">Read More</Button>
                      <div className="flex items-center mb-2 sm:mb-0">
                        <Tag size={16} className="mr-2 text-blue-600" />
                        <span className="text-sm text-blue-600">{post.category}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TwitterShareButton url={`https://yourblog.com/post/${post.slug}`} title={post.title}>
                          <Twitter size={20} className="text-gray-500 hover:text-blue-400" />
                        </TwitterShareButton>
                        <LinkedinShareButton url={`https://yourblog.com/post/${post.slug}`} title={post.title}>
                          <Linkedin size={20} className="text-gray-500 hover:text-blue-700" />
                        </LinkedinShareButton>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div>
            <Card className="sticky top-8 ">
              <div
                className="absolute inset-0 -z-10 rounded-md bg-[url('/tecblog.jpg')] bg-cover bg-center"
              />
              <div className="absolute inset-0 -z-10 rounded-md bg-black bg-opacity-50" />
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="All" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="All" onClick={() => setActiveCategory('All')}>All</TabsTrigger>
                    <TabsTrigger value="Categories" onClick={() => setActiveCategory('Categories')}>Categories</TabsTrigger>
                  </TabsList>
                  <TabsContent value="All">
                    <ul className="space-y-2">
                      {categories.map((category, index) => (
                        <motion.li 
                          key={index} 
                          className={`cursor-pointer transition-colors duration-200 ${activeCategory === category ? 'text-gray-300 font-semibold' : 'text-white hover:text-gray-300'}`}
                          onClick={() => setActiveCategory(category)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {category}
                        </motion.li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="Categories">
                    <div className="grid grid-cols-2 gap-2">
                      {categories.slice(1).map((category, index) => (
                        <motion.div
                          key={index}
                          className={`cursor-pointer p-2 rounded-md transition-colors duration-200 ${activeCategory === category ? 'bg-blue-100 text-black font-semibold' : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-black'}`}
                          onClick={() => setActiveCategory(category)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {category}
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <FooterGen/>
    </div>
  )
}

