import { createClient } from '@sanity/client'
import BlogPage from './BlogPage'
import { client } from '@/lib/sanity'



async function getBlogPosts() {
  return await client.fetch(`*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    preview,
    author,
    "date": publishedAt,
    readTime,
    category,
    "image": image.asset->url,
    "slug": slug.current
  }`)
}

async function getCategories() {
  return await client.fetch(`array::unique(*[_type == "blogPost"].category)`)
}

export default async function Page() {
  const [blogPosts, categories] = await Promise.all([getBlogPosts(), getCategories()])
  
  return <BlogPage initialBlogPosts={blogPosts} initialCategories={categories} />
}

