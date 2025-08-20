"use client";
import { useEffect, useState } from 'react';
import { client } from '@/lib/sanity';
import Header from '@/components/header';
import FooterGen from '@/components/footer-general';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award, BookOpen, Calendar, MapPin } from 'lucide-react';

export default function ProgramsClient({ programs }: { programs?: any[] }) {
  if (!programs || programs.length === 0) {
    return <main className="min-h-screen flex items-center justify-center text-gray-500 text-xl">Loading programs...</main>;
  }
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 tracking-tight">
              Academic Programs
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90">
              Rigorous academic excellence meets compassionate healthcare training
            </p>
            <p className="text-lg mt-4 opacity-80 max-w-3xl mx-auto">
              Our nationally accredited programs combine theoretical mastery with extensive clinical experience, 
              preparing the next generation of healthcare leaders for South Sudan and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-serif font-bold text-red-900">100%</div>
              <div className="text-sm uppercase tracking-wide text-gray-600">National Exam Pass Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-serif font-bold text-red-900">1,200+</div>
              <div className="text-sm uppercase tracking-wide text-gray-600">Graduates Serving</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-serif font-bold text-red-900">14</div>
              <div className="text-sm uppercase tracking-wide text-gray-600">Years of Excellence</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-serif font-bold text-red-900">4</div>
              <div className="text-sm uppercase tracking-wide text-gray-600">Specialized Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <main className="flex-grow py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-gray-900">
              Our Programs
            </h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Each program is meticulously designed to meet international standards while addressing 
              the unique healthcare needs of our region. Our graduates are prepared to lead, innovate, 
              and serve with distinction.
            </p>
          </div>

          <div className="space-y-16">
            {programs.map((program, index) => (
              <Card key={program.id} className="overflow-hidden shadow-xl border-0 bg-white">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-10`}></div>
                    {program.image?.asset?.url ? (
                      <Image 
                        src={program.image.asset.url}
                        alt={program.title}
                        width={600} 
                        height={400} 
                        className="w-full h-full object-cover min-h-[400px]"
                      />
                    ) : (
                      <div className="w-full h-full min-h-[400px] bg-gray-200 flex items-center justify-center text-gray-500">
                        No image available
                      </div>
                    )}
                  </div>
                  {/* Content */}
                  <CardContent className={`p-12 flex flex-col justify-center ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                    <div className="space-y-6">
                      <div>
                        <Badge variant="outline" className="mb-4 text-red-900 border-red-900">
                          Nationally Accredited
                        </Badge>
                        <h3 className="text-3xl font-serif font-light text-gray-900 mb-2">
                          {program.title}
                        </h3>
                        <p className="text-lg text-red-900 font-medium mb-4">
                          {program.subtitle}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>{program.intake}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>Next Intake: {program.nextIntake}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed">
                        {program.description}
                      </p>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Program Highlights</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {program.highlights.map((highlight: string, idx: number) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <Award className="h-3 w-3 text-red-900" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <Link 
                          href={`/contact`}
                          className="inline-flex items-center gap-2 bg-red-900 text-white px-8 py-3 rounded-none hover:bg-red-800 transition-colors font-medium tracking-wide"
                        >
                          <BookOpen className="h-4 w-4" />
                          Ask About This Program
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <Card className="bg-gradient-to-r from-red-900 to-red-800 text-white border-0">
              <CardContent className="p-12">
                <h3 className="text-3xl font-serif font-light mb-6">
                  Ready to Begin Your Journey?
                </h3>
                <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                  Join South Sudan's most prestigious health sciences institution and become part of 
                  a legacy of excellence in healthcare education.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/admissions"
                    className="inline-flex items-center gap-2 bg-white text-red-900 px-8 py-3 rounded-none hover:bg-gray-100 transition-colors font-medium tracking-wide"
                  >
                    Apply Now
                  </Link>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-none hover:bg-white hover:text-red-900 transition-colors font-medium tracking-wide"
                  >
                    <MapPin className="h-4 w-4" />
                    Visit Campus
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <FooterGen />
    </div>
  );
}
