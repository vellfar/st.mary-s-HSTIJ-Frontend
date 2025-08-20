"use client";
import { useEffect, useState } from 'react';
import { client } from '@/lib/sanity';
import Image from 'next/image';
import Header from '@/components/header';
import FooterGen from '@/components/footer-general';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Trophy, Quote, ArrowRight } from 'lucide-react';

export default function SuccessClient({ successStories }: { successStories?: any[] }) {
  if (!successStories || successStories.length === 0) {
    return <main className="min-h-screen flex items-center justify-center text-gray-500 text-xl">Loading success stories...</main>;
  }
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <Trophy className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 tracking-tight">
              Inspiring Success Stories
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90 max-w-3xl mx-auto">
              Discover the impactful journeys of our alumni who are transforming healthcare across South Sudan and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
              Our Graduates, Our Pride
            </h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Read firsthand accounts of how St. Mary's Health Science Training Institute has shaped successful careers and empowered leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {successStories.map((story: any) => (
              <Card key={story._id} className="overflow-hidden rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white group">
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={typeof story.image === 'string' ? story.image : story.image?.asset?.url || "/placeholder.svg"}
                    alt={story.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-serif font-light text-gray-900 mb-2">
                    {story.name}
                  </h3>
                  <p className="text-sm text-red-700 font-medium mb-4">
                    {story.program}
                  </p>
                  <Quote className="h-8 w-8 text-red-700 mx-auto mb-4" />
                  <p className="text-gray-700 leading-relaxed text-base italic mb-6">
                    "{story.quote}"
                  </p>
                  {story.fullStoryLink && (
                    <Link href={story.fullStoryLink} className="inline-flex items-center text-red-900 font-medium hover:text-red-700 transition-colors">
                      Read Full Story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  )}
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
            Your Success Story Starts Here
          </h2>
          <p className="text-xl md:text-2xl font-light opacity-90 mb-10 max-w-3xl mx-auto">
            Join St. Mary’s Health Science Training Institute and embark on your own journey to a fulfilling and impactful career in healthcare.
          </p>
          <Link href="/admissions">
            <Button size="lg" className="bg-white text-red-900 px-10 py-4 text-lg font-medium rounded-none hover:bg-gray-100 transition-colors">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <FooterGen />
    </div>
  );
}
