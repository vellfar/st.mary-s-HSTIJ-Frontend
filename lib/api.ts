import { client } from './sanity'
import { Product } from '@/types/product'

export async function getAllProducts(): Promise<Product[]> {
  return client.fetch(`*[_type == "product"]{
    _id,
    name,
    slug,
    price,
    category,
    rating,
    image,
    isNew,
    description,
    features,
    specs,
    stock
  }`)
}

export async function getProductBySlug(slug: string): Promise<Product> {
  return client.fetch(`*[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    slug,
    price,
    category,
    rating,
    image,
    isNew,
    description,
    features,
    specs,
    stock
  }`, { slug })
}

