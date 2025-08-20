"use client";
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Handshake, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Header from '@/components/header';
import FooterGen from '@/components/footer-general';

export default function PartnersClient({ partners }: { partners?: any[] }) {
  if (!partners || partners.length === 0) {
    return <main className="min-h-screen flex items-center justify-center text-gray-500 text-xl">Loading partners...</main>;
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
              <Handshake className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 tracking-tight">
              Our Valued Partners & Accreditations
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90 max-w-3xl mx-auto">
              Collaborating with leading organizations to ensure the highest standards of education and global impact.
            </p>
          </div>
        </div>
      </section>
      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
              Our Partners & Accreditations
            </h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Collaborating with leading organizations to ensure the highest standards of education and global impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {partners.map((partner: any, index: number) => (
              <Card key={partner._id || index} className="overflow-hidden rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white text-center p-8">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src={partner.logo?.asset?.url || "/placeholder.svg"}
                    alt={partner.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-xl font-serif font-light text-gray-900 mb-3 leading-snug">
                  {partner.name}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base mb-6">
                  {partner.description}
                </p>
                {partner.website && (
                  <Link href={partner.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-red-900 font-medium hover:text-red-700 transition-colors">
                    Visit Website
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
            Join Our Network
          </h2>
          <p className="text-xl md:text-2xl font-light opacity-90 mb-10 max-w-3xl mx-auto">
            Interested in partnering with St. Mary’s Health Science Training Institute? Contact us to explore collaboration opportunities.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-red-900 px-10 py-4 text-lg font-medium rounded-none hover:bg-gray-100 transition-colors">
              Contact Partnerships
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
      <FooterGen />
    </div>
  );
}
// ...existing code ends above...
