
"use client"
import Image from "next/image"
import Header from '@/components/header'
import FooterGen from '@/components/footer-general'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"
import { submitContactForm } from "./actions"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)
    setError(null)
    try {
      const res = await submitContactForm(form)
      if (res.success) {
        setSuccess("Thank you for contacting us! We'll get back to you soon.")
        setForm({ name: "", email: "", phone: "", message: "" })
      } else {
        setError("Something went wrong. Please try again.")
      }
    } catch (err: any) {
      setError(err.message || "Failed to submit. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Header />

      {/* Contact Information & Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
                  Contact Details
                </h2>
                <div className="w-24 h-1 bg-red-900 mb-8"></div>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our team is ready to assist you with admissions, programs, or general inquiries.
                </p>
              </div>

              <Card className="shadow-xl border-0 bg-gradient-to-br from-gray-50 to-white p-8">
                <CardContent className="p-0 space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-red-700 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900 text-lg">Our Location</h4>
                      <p className="text-gray-700">Gudele Road, Juba, South Sudan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-red-700 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900 text-lg">Phone Numbers</h4>
                      <p className="text-gray-700">+211 912 345 678 (Admissions)</p>
                      <p className="text-gray-700">+211 912 876 543 (General Inquiries)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-red-700 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900 text-lg">Email Addresses</h4>
                      <p className="text-gray-700">
                        <Link href="mailto:admissions@stmaryshealthjuba.edu" className="hover:underline">admissions@stmaryshealthjuba.edu</Link>
                      </p>
                      <p className="text-gray-700">
                        <Link href="mailto:info@stmaryshealthjuba.edu" className="hover:underline">info@stmaryshealthjuba.edu</Link>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-red-700 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900 text-lg">Office Hours</h4>
                      <p className="text-gray-700">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</p>
                      <p className="text-gray-700">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <div className="w-24 h-1 bg-red-900 mb-8"></div>
              <Card className="shadow-xl border-0 bg-gradient-to-br from-gray-50 to-white p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <Input id="name" type="text" name="name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="John Doe" className="rounded-none border-gray-300 focus:border-red-700 focus:ring-red-700" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                    <Input id="email" type="email" name="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="john.doe@example.com" className="rounded-none border-gray-300 focus:border-red-700 focus:ring-red-700" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <Input id="phone" type="tel" name="phone" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="+211 912 345 678" className="rounded-none border-gray-300 focus:border-red-700 focus:ring-red-700" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                    <Textarea id="message" name="message" rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="Type your message here..." className="rounded-none border-gray-300 focus:border-red-700 focus:ring-red-700" required />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-red-900 text-white px-10 py-4 text-lg font-medium rounded-none hover:bg-red-800 transition-colors" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  {success && <div className="text-green-700 text-center font-medium mt-2">{success}</div>}
                  {error && <div className="text-red-700 text-center font-medium mt-2">{error}</div>}
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section 
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
              Find Us on the Map
            </h2>
            <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Visit our campus located conveniently on Gudele Road in Juba.
            </p>
          </div>
          <Card className="shadow-xl border-0 overflow-hidden rounded-sm">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src="/contact/juba-map.png"
                alt="Map of St. Mary's Health Science Training Institute, Juba"
                layout="fill"
                objectFit="cover"
                className="rounded-sm"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-white text-2xl font-bold">
                {/* This text is for placeholder only, a real map would be embedded 
                <span className="sr-only">Map of St. Mary's Health Science Training Institute, Juba</span>
              </div>
            </div>
          </Card>
        </div>
      </section> */}

      <FooterGen />
    </div>
  )
}
