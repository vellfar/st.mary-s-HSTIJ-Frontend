"use client";
import { useRealtimeType } from '@/lib/useRealtimeType';
import type { Partner } from '@/types/sanity';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Handshake, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Header from '@/components/header';
import FooterGen from '@/components/footer-general';

export default function PartnersClient() {
  const partners = useRealtimeType<Partner>('partners');
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

      {/* Partners Section (all partners from Sanity) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
              Our Partners
            </h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We are proud to work with these esteemed organizations and accrediting bodies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((p, idx) => (
              <Card key={p._id || idx} className="overflow-hidden rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white group">
                <div className="relative w-full h-40 flex items-center justify-center bg-gray-100">
                  {p.logo?.asset?.url && (
                    <Image
                      src={p.logo.asset.url}
                      alt={p.name}
                      width={120}
                      height={80}
                      className="object-contain max-h-20"
                    />
                  )}
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-serif font-light text-gray-900 mb-2">
                    {p.name}
                  </h3>
                  {p.website && (
                    <Link href={p.website} target="_blank" className="inline-flex items-center text-red-900 font-medium hover:text-red-700 transition-colors">
                      Visit Website
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
            Become a Partner
          </h2>
          <p className="text-xl md:text-2xl font-light opacity-90 mb-10 max-w-3xl mx-auto">
            Interested in collaborating with us? Reach out to explore partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-red-900 px-10 py-4 text-lg font-medium rounded-none hover:bg-gray-100 transition-colors">
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
