import Header from '@/components/header'
import Footer from '@/components/Footer'
import FooterGen from '@/components/footer-general'
import Hero from '@/components/Hero'
import Service from '@/components/Service'
import Shop from '@/components/Shop'
import Testimonials from '@/components/Testimonials'
import Cta from '@/components/Cta'

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        {/* Services Overview */}
        <Service />
        {/* Featured Shop Items */}
        <Shop/>
        {/* Testimonials Section 
        <Testimonials />
        */}
        {/* CTA Section */}
        <Cta />
      </main>
      <Footer />
      <FooterGen />
    </div>
  )
}

