"use client";
import { useEffect, useState } from 'react';
import { getAdmissions, getPrograms } from '@/lib/sanity';
import type { Admissions, Program } from '@/types/sanity';
import Image from 'next/image';
import Header from '@/components/header';
import FooterGen from '@/components/footer-general';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FileText, GraduationCap, Calendar, Mail, Phone, CheckCircle, Download, ArrowRight, Award } from 'lucide-react';
export default function AdmissionsClient() {
  const [admissions, setAdmissions] = useState<Admissions[]>([]);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState<{ name: string; email: string; program: string; documents: FileList | null }>({ name: '', email: '', program: '', documents: null });
  // calendar state is now from backend

  useEffect(() => {
    Promise.all([getAdmissions(), getPrograms()]).then(([admissionsData, programsData]) => {
      setAdmissions(admissionsData);
      setPrograms(programsData);
      setLoading(false);
    });
  }, []);

  const data = admissions[0];
  // Resolve referenced programs if present
  const referencedPrograms = Array.isArray(data?.programs) && data.programs.length > 0
    ? programs.filter(p => (data.programs ?? []).some((ref: any) => ref._ref === p._id))
    : programs;
  if (loading) {
    return <main className="min-h-screen flex items-center justify-center text-gray-500 text-xl">Loading admissions...</main>;
  }
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
            {data?.subtitle && (
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">{data.subtitle}</p>
            )}
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
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-light text-red-900 mb-4">Available Programs</h3>
                <ul className="space-y-4 text-gray-700">
                  {referencedPrograms.map((program) => (
                    <li key={program._id} className="flex items-start gap-3">
                      <GraduationCap className="h-5 w-5 text-red-700 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">{program.title}</span> <span className="text-sm text-gray-500">({program.duration})</span>
                        <div className="text-xs text-gray-600">{program.subtitle}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Application Process (from Sanity) */}
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
            {data?.process?.map((block: any, idx: number) => (
              <Card key={idx} className="shadow-lg border-0 bg-white text-center p-8">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="h-8 w-8 text-red-900" />
                  </div>
                  <CardTitle className="text-xl font-serif font-light text-gray-900">Step {idx + 1}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {block.children?.map((child: any) => child.text).join(' ')}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Online Application Form with Instructions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">Apply Online</h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">Fill out the form below to apply for your chosen program.</p>
            {data?.formInstructions && (
              <div className="prose prose-lg mx-auto text-left mt-6">
                {data.formInstructions.map((block: any, idx: number) => (
                  <p key={idx}>{block.children?.map((child: any) => child.text).join(' ')}</p>
                ))}
              </div>
            )}
          </div>
          <form
            className="max-w-2xl mx-auto space-y-8 bg-gray-50 p-8 rounded shadow"
            onSubmit={async e => {
              e.preventDefault();
              try {
                const formData = new FormData();
                formData.append('name', form.name);
                formData.append('email', form.email);
                formData.append('program', form.program);
                if (form.documents) {
                  for (let i = 0; i < form.documents.length; i++) {
                    formData.append('documents', form.documents[i]);
                  }
                }
                const res = await fetch('/api/apply-files', {
                  method: 'POST',
                  body: formData
                });
                const result = await res.json();
                if (result.success) {
                  alert('Application submitted successfully!');
                  setForm({ name: '', email: '', program: '', documents: null });
                } else {
                  alert('Submission failed: ' + (result.error || 'Unknown error'));
                }
              } catch (err) {
                alert('Submission failed: ' + err);
              }
            }}
          >
            <div>
              <label className="block mb-2 font-medium text-gray-700">Full Name</label>
              <input type="text" required className="w-full border px-4 py-2 rounded" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Email</label>
              <input type="email" required className="w-full border px-4 py-2 rounded" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Program</label>
              <select required className="w-full border px-4 py-2 rounded" value={form.program} onChange={e => setForm(f => ({ ...f, program: e.target.value }))}>
                <option value="">Select a program</option>
                {referencedPrograms.map(program => (
                  <option key={program._id} value={program.title}>{program.title}</option>
                ))}
              </select>
            </div>
            <Button type="submit" className="w-full bg-red-900 text-white py-3 rounded-none text-lg font-medium hover:bg-red-700 transition-colors">Submit Application</Button>
          </form>
        </div>
      </section>

      {/* Key Dates (Dynamic Calendar from Sanity) */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">Key Dates & Deadlines</h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">Mark your calendar with important dates for the upcoming academic year.</p>
          </div>
          <Card className="shadow-xl border-0 bg-white max-w-3xl mx-auto">
            <CardContent className="p-10">
              <ul className="space-y-6 text-gray-700">
                {(data?.calendar || []).map((item: any, idx: number) => (
                  <li key={idx} className="flex items-start gap-4">
                    <Calendar className="h-6 w-6 text-red-700 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium text-gray-900 text-lg">{item.label}:</span> {item.date}
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact & Support (Dynamic) */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">Need Assistance?</h2>
          <p className="text-xl md:text-2xl font-light opacity-90 mb-10 max-w-3xl mx-auto">Our dedicated admissions team is here to guide you through every step of the application process.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {data?.contactEmail && (
              <Link href={`mailto:${data.contactEmail}`}>
                <Button size="lg" className="bg-white text-red-900 px-10 py-4 text-lg font-medium rounded-none hover:bg-gray-100 transition-colors">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Admissions
                </Button>
              </Link>
            )}
            {data?.contactPhone && (
              <Link href={`tel:${data.contactPhone}`}>
                <Button size="lg" variant="outline" className="border-2 border-white text-white px-10 py-4 text-lg font-medium rounded-none hover:bg-white hover:text-red-900 transition-colors">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {data?.faq && data.faq.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-light text-gray-900 mb-8">Frequently Asked Questions</h2>
              <ul className="space-y-8">
                {data.faq.map((item: any, idx: number) => (
                  <li key={idx} className="border-b pb-6">
                    <h3 className="text-xl font-semibold mb-2 text-red-900">{item.question}</h3>
                    <p className="text-gray-700">{item.answer}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
      {/* Footer */}
      <FooterGen />
    </div>
  );
}
