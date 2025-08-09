"use client";
import { useRealtimeType } from '@/lib/useRealtimeType';
import type { News } from '@/types/sanity';
import Image from 'next/image';
import Header from '@/components/header';
import FooterGen from '@/components/footer-general';
import { Card, CardContent } from '@/components/ui/card';
import { Newspaper, CalendarDays, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function NewsClient() {
  const newsItems = useRealtimeType<News>('news');
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <Newspaper className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 tracking-tight">
              Latest News & Announcements
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90 max-w-3xl mx-auto">
              Stay informed about the latest developments, achievements, and events at St. Mary’s Health Science Training Institute.
            </p>
          </div>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
              Institute Updates
            </h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Discover our recent milestones, academic highlights, and community engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {newsItems.map((item, idx) => (
              <Card key={item._id || idx} className="overflow-hidden rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white group">
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={item.image?.asset?.url || "/placeholder.svg"}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <CalendarDays className="h-4 w-4 mr-2 text-red-700" />
                    <span>{item.date && new Date(item.date).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-xl font-serif font-light text-gray-900 mb-4 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base mb-6">
                    {/* Render first block of content as excerpt if available */}
                    {item.content?.[0]?.children?.map((child: any) => child.text).join(' ')}
                  </p>
                  {/* Link to detail page if you have slugs set up */}
                  {/* <Link href={`/news/${item.slug?.current}`} className="inline-flex items-center text-red-900 font-medium hover:text-red-700 transition-colors">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FooterGen />
    </div>
  );
}
