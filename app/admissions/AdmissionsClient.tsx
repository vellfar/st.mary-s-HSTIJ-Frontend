"use client";
import { useRealtimeType } from '@/lib/useRealtimeType';
import type { Admissions } from '@/types/sanity';
import Image from 'next/image';
import Header from '@/components/header';
import FooterGen from '@/components/footer-general';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FileText, GraduationCap, Calendar, Mail, Phone, CheckCircle, Download, ArrowRight, Award } from 'lucide-react';

export default function AdmissionsClient() {
  const admissions = useRealtimeType<Admissions>('admissions');
  const data = admissions[0];
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
              {data?.title || 'Admission Requirements'}
            </h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {/* Optionally add a subtitle or intro from Sanity */}
            </p>
          </div>
          <Card className="shadow-xl border-0 bg-gradient-to-br from-gray-50 to-white">
            <CardContent className="p-10 grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-light text-red-900 mb-4">General Requirements</h3>
                <ul className="space-y-4 text-gray-700">
                  {data?.requirements?.map((block: any, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-red-700 mt-1 flex-shrink-0" />
                      <div>{block.children?.map((child: any) => child.text).join(' ')}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-96 rounded-sm overflow-hidden shadow-lg">
                <Image
                  src="/admission-requirements.png"
                  alt="Admission Requirements"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-serif font-light">Prepare Your Application</h3>
                  <p className="text-sm opacity-80">Ensuring all documents are in order.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
              Your Application Journey
            </h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Follow these simple steps to complete your application to St. Mary's Health Science Training Institute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg border-0 bg-white text-center p-8">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-red-900" />
                </div>
                <CardTitle className="text-xl font-serif font-light text-gray-900">Step 1: Download & Fill</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Download the official application form from our website and fill it out completely and accurately.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-0 bg-white text-center p-8">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-red-900" />
                </div>
                <CardTitle className="text-xl font-serif font-light text-gray-900">Step 2: Gather Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Collect all required documents as listed in the admission requirements section. Ensure they are certified where necessary.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-0 bg-white text-center p-8">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-red-900" />
                </div>
                <CardTitle className="text-xl font-serif font-light text-gray-900">Step 3: Submit & Pay</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Submit your completed form and documents via email or in person. Pay the non-refundable application fee.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Downloadable Forms */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
              Essential Forms
            </h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Access important application and scholarship forms directly from here.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/forms/application-form.pdf" className="block group">
              <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                <div className="flex items-center justify-center mb-4">
                  <FileText className="h-12 w-12 text-red-900 group-hover:text-red-700 transition-colors" />
                </div>
                <h4 className="text-2xl font-serif font-light text-gray-900 mb-2 text-center">Application Form</h4>
                <p className="text-gray-700 text-center mb-4">
                  Click to download the official PDF application form for all programs.
                </p>
                <Button variant="outline" className="w-full border-red-900 text-red-900 hover:bg-red-900 hover:text-white transition-colors rounded-none">
                  Download Form <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            </Link>
            <Link href="/forms/scholarship-form.pdf" className="block group">
              <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                <div className="flex items-center justify-center mb-4">
                  <Award className="h-12 w-12 text-red-900 group-hover:text-red-700 transition-colors" />
                </div>
                <h4 className="text-2xl font-serif font-light text-gray-900 mb-2 text-center">Scholarship Application</h4>
                <p className="text-gray-700 text-center mb-4">
                  Explore opportunities for financial aid and download the scholarship application form.
                </p>
                <Button variant="outline" className="w-full border-red-900 text-red-900 hover:bg-red-900 hover:text-white transition-colors rounded-none">
                  Download Form <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Dates */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
              Key Dates & Deadlines
            </h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Mark your calendar with important dates for the upcoming academic year.
            </p>
          </div>

          <Card className="shadow-xl border-0 bg-white max-w-3xl mx-auto">
            <CardContent className="p-10">
              <ul className="space-y-6 text-gray-700">
                <li className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-red-700 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900 text-lg">Application Opens:</span> March 1
                    <p className="text-sm text-gray-600">Begin your application process early to secure your spot.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-red-700 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900 text-lg">Application Deadline:</span> June 30
                    <p className="text-sm text-gray-600">All required documents must be submitted by this date.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-red-700 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900 text-lg">Interviews:</span> July 15 - 20
                    <p className="text-sm text-gray-600">Shortlisted candidates will be invited for an interview.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-red-700 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-medium text-gray-900 text-lg">Semester Starts:</span> September 5
                    <p className="text-sm text-gray-600">Welcome to the new academic year!</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
            Need Assistance?
          </h2>
          <p className="text-xl md:text-2xl font-light opacity-90 mb-10 max-w-3xl mx-auto">
            Our dedicated admissions team is here to guide you through every step of the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="mailto:admissions@stmaryshealthjuba.edu">
              <Button size="lg" className="bg-white text-red-900 px-10 py-4 text-lg font-medium rounded-none hover:bg-gray-100 transition-colors">
                <Mail className="h-5 w-5 mr-2" />
                Email Admissions
              </Button>
            </Link>
            <Link href="tel:+211912345678">
              <Button size="lg" variant="outline" className="border-2 border-white text-white px-10 py-4 text-lg font-medium rounded-none hover:bg-white hover:text-red-900 transition-colors">
                <Phone className="h-5 w-5 mr-2" />
                Call Us
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
