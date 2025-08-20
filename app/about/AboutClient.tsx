"use client";

import { useEffect, useState } from 'react';
import { client } from '@/lib/sanity';
import Image from 'next/image';

import Header from '@/components/header';
import FooterGen from '@/components/footer-general';
import Footer from '@/components/Footer';

export default function AboutClient({ about }: { about?: any[] }) {
  if (!about || about.length === 0) {
    return <main className="min-h-screen flex items-center justify-center text-gray-500 text-xl">Loading about info...</main>;
  }
  const data = about[0];
  // Prefer 'content' if available, fallback to 'body'
  const blocks = data.content || data.body || [];
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 tracking-tight">{data.title}</h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90 max-w-3xl mx-auto">
              {blocks[0]?.children?.map((child: any) => child.text).join(' ')}
            </p>
          </div>
        </div>
      </section>
      {/* About Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {data.image?.asset?.url && (
              <div className="mb-8">
                <Image src={data.image.asset.url} alt={data.title} width={800} height={400} className="rounded-lg shadow-lg" />
              </div>
            )}
            <div className="prose prose-lg max-w-none">
              {blocks.map((block: any, idx: number) => (
                <p key={idx}>{block.children?.map((child: any) => child.text).join(' ')}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <FooterGen />
    </div>
  );
}
