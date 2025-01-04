import { createClient } from '@sanity/client'
import ShopPageClient from './ShopPage'
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

export default async function ShopPage() {
  const [products, categories] = await Promise.all([getProducts(), getCategories()])
  
  return <ShopPageClient initialProducts={products} initialCategories={categories} />
}

