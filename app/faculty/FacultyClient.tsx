"use client";
import { useRealtimeType } from '@/lib/useRealtimeType';
import type { Faculty } from '@/types/sanity';
import Image from 'next/image';
import { Mail, Phone, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/header';
import FooterGen from '@/components/footer-general';
import Link from 'next/link';

export default function FacultyClient() {
  const faculty = useRealtimeType<Faculty>('faculty');
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <section className="relative bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 tracking-tight">
              Our Esteemed Faculty & Staff
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90 max-w-3xl mx-auto">
              Committed to nurturing the next generation of healthcare leaders through expert guidance and mentorship.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
              Meet Our Faculty
            </h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated individuals who drive our mission of academic excellence and compassionate healthcare training.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {faculty.map((member, index) => (
              <Card
                key={member._id || index}
                className="overflow-hidden rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white"
              >
                <div className="relative w-full h-72 overflow-hidden">
                  <Image
                    src={member.photo?.asset?.url || "/placeholder.svg"}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-serif font-light">{member.name}</h3>
                    <p className="text-sm opacity-80">{member.role}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <p className="text-gray-700 mb-2">{member.bio}</p>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      {member.email && (
                        <>
                          <Mail className="h-4 w-4" />
                          <a href={`mailto:${member.email}`} className="hover:underline">{member.email}</a>
                        </>
                      )}
                      {member.phone && (
                        <>
                          <Phone className="h-4 w-4 ml-4" />
                          <a href={`tel:${member.phone}`} className="hover:underline">{member.phone}</a>
                        </>
                      )}
                    </div>
                  </div>
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
