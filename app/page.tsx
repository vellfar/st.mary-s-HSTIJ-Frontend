import Header from '@/components/header'
import FooterGen from '@/components/footer-general'
import Hero from '@/components/Hero' // This will be the redesigned Hero
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { GraduationCap, Award, Globe, Users, Stethoscope, Baby, Heart, BookOpen, ArrowRight, CheckCircle } from 'lucide-react'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'

// Removed Sanity client imports and data fetching as they were for the shop component
// which is not relevant to the university homepage.

export default async function Home() {
  // Define program data for the "Our Programs" section
  const programs = [
    {
      id: "nursing",
      title: "Registered Nursing",
      description: "Comprehensive education for compassionate and skilled patient care.",
      icon: Stethoscope,
      link: "/programs/nursing"
    },
    {
      id: "midwifery",
      title: "Registered Midwifery",
      description: "Specialized training in maternal and newborn health.",
      icon: Baby,
      link: "/programs/midwifery"
    },
    {
      id: "clinical-health",
      title: "Clinical Health",
      description: "Practical clinical skills for frontline healthcare delivery.",
      icon: Heart,
      link: "/programs/clinical-health"
    },
    {
      id: "public-health",
      title: "Public Health",
      description: "Community health promotion and disease prevention strategies.",
      icon: Globe,
      link: "/programs/public-health"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main className="flex-1">
        <Hero />

        {/* Welcome Overview / About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative h-96 rounded-sm overflow-hidden shadow-xl">
                <Image
                  src="/stud1.jpg"
                  alt="Students studying at St. Mary's Institute"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-serif font-light">A Legacy of Excellence</h3>
                  <p className="text-sm opacity-80">Since 2010, shaping healthcare leaders.</p>
                </div>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-red-900 tracking-tight">
                  Welcome to St. Mary's Health Science Training Institute Juba
                </h2>
                <div className="w-24 h-1 bg-red-900 mb-8"></div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-light">
                  At St. Mary’s, we go beyond traditional education. We empower students with the knowledge, skills, and compassion to not only succeed in their health careers but to become visionary leaders who transform the healthcare landscape of South Sudan.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8 font-light">
                  "You don’t get what you wish for. You get what you work for." Join us and embark on a journey of rigorous learning, practical experience, and profound impact.
                </p>
                <Link href="/about">
                  <Button size="lg" className="bg-red-900 hover:bg-red-800 text-white px-8 py-4 text-lg font-medium rounded-none">
                    Discover Our Mission
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Overview Section (from old Service.tsx) */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
                Our Nationally Accredited Programs
              </h2>
              <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                We offer comprehensive diploma programs designed to prepare healthcare professionals for the challenges and opportunities of modern medicine.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {programs.map((program) => (
                <Card key={program.id} className="group hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
                  <CardHeader className="text-center p-6 pb-4">
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors">
                      <program.icon className="h-8 w-8 text-red-900" />
                    </div>
                    <CardTitle className="text-xl font-serif font-light text-gray-900 tracking-wide">
                      {program.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-gray-700 text-center leading-relaxed mb-6">
                      {program.description}
                    </p>
                    <Link href={program.link}>
                      <Button variant="outline" className="w-full border-gray-200 text-red-900 hover:bg-red-50 hover:border-red-100 transition-colors rounded-none">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section (from old Service.tsx) */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
                Why Choose St. Mary's?
              </h2>
              <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Our commitment to academic excellence, student success, and community impact sets us apart.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-red-50 to-red-100/50">
                <CardHeader className="p-8">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Award className="h-10 w-10 text-red-900" />
                  </div>
                  <CardTitle className="text-2xl font-serif font-light text-gray-900 tracking-wide">
                    100% Exam Pass Rate
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-gray-700 font-light leading-relaxed mb-4">
                    Our students consistently excel in national health exams, a testament to our rigorous curriculum and dedicated faculty.
                  </p>
                  <Link href="/academics">
                    <Button variant="outline" className="border-red-900 text-red-900 hover:bg-red-900 hover:text-white transition-colors rounded-none">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-pink-50 to-pink-100/50">
                <CardHeader className="p-8">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Users className="h-10 w-10 text-pink-600" />
                  </div>
                  <CardTitle className="text-2xl font-serif font-light text-gray-900 tracking-wide">
                    Women Empowerment Focus
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-gray-700 font-light leading-relaxed mb-4">
                    Over 80% of our graduates are women, actively contributing to gender equality and leadership in healthcare.
                  </p>
                  <Link href="/about#women-empowerment">
                    <Button variant="outline" className="border-red-900 text-red-900 hover:bg-red-900 hover:text-white transition-colors rounded-none">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-green-50 to-green-100/50">
                <CardHeader className="p-8">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Globe className="h-10 w-10 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl font-serif font-light text-gray-900 tracking-wide">
                    Global Health Partnerships
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-gray-700 font-light leading-relaxed mb-4">
                    Supported by UNFPA, WHO, JICA, and Real Medicine Foundation for world-class training and opportunities.
                  </p>
                  <Link href="/partnerships">
                    <Button variant="outline" className="border-red-900 text-red-900 hover:bg-red-900 hover:text-white transition-colors rounded-none">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section (redesigned from old Cta.tsx) */}
        <Cta />
      </main>
      <Footer />
      <FooterGen />
    </div>
  )
}
