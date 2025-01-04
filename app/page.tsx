import Header from '@/components/header'
import Footer from '@/components/Footer'
import FooterGen from '@/components/footer-general'
import Hero from '@/components/Hero'
import Service from '@/components/Service'
import Shop from '@/components/Shop'
import Testimonials from '@/components/Testimonials'
import Cta from '@/components/Cta'
import { client } from '@/lib/sanity'


async function getProducts() {
  return await client.fetch(`*[_type == "product"] {
    _id,
    name,
    price,
    category,
    isNew,
    rating,
    "slug": slug.current,
    "image": image.asset->url
  }`)
}

async function getCategories() {
  return await client.fetch(`array::unique(*[_type == "product"].category)`)
}

export default async function Home() {
  const [products, categories] = await Promise.all([getProducts(), getCategories()])


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        {/* Services Overview */}
        <Service />
        {/* Featured Shop Items */}
        <Shop initialProducts={products} initialCategories={categories}/>
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

