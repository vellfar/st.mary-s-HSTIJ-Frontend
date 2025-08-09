"use client";
import { useRealtimeType } from '@/lib/useRealtimeType';
import type { Gallery } from '@/types/sanity';
import Image from 'next/image';
import Header from '@/components/header';
import FooterGen from '@/components/footer-general';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Camera, ArrowRight } from 'lucide-react';

export default function GalleryClient() {
  const galleries = useRealtimeType<Gallery>('gallery');
  // Flatten all images from all gallery docs, filter out images without valid URLs
  const galleryItems = galleries.flatMap(g =>
    (g.images || [])
      .filter(img => img?.asset?.url)
      .map(img => ({
        src: img.asset.url,
        alt: g.title,
        title: g.title,
        category: '' // Optionally add a category field to the schema
      }))
  );
  // Debug log to help diagnose missing images
  console.log('Gallery images:', galleryItems);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <Camera className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 tracking-tight">
              Our Institute in Pictures
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90 max-w-3xl mx-auto">
              Explore the vibrant life, state-of-the-art facilities, and engaging activities at St. Mary’s Health Science Training Institute.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
              Moments of Learning & Growth
            </h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A visual journey through our campus, classrooms, labs, and community engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <Card key={index} className="overflow-hidden rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white group">
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-light text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-red-700 font-medium mb-4">
                    {item.category}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {item.alt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
            Experience St. Mary's Firsthand
          </h2>
          <p className="text-xl md:text-2xl font-light opacity-90 mb-10 max-w-3xl mx-auto">
            Ready to see more? Schedule a visit or explore our programs to learn how you can become part of our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions">
              <Button size="lg" className="bg-white text-red-900 px-10 py-4 text-lg font-medium rounded-none hover:bg-gray-100 transition-colors">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white px-10 py-4 text-lg font-medium rounded-none hover:bg-white hover:text-red-900 transition-colors">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterGen />
    </div>
  );
}
