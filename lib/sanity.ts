
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityDocument } from 'next-sanity'
import type { About, Admissions, Faculty, Gallery, News, Partner, Program, Success, Hero, SiteSettings, ContactSubmission } from '../types/sanity'

// Single client for both read and write operations
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const builder = imageUrlBuilder(client)
export function urlFor(source: any) {
  return builder.image(source)
}

// Efficient GROQ fetchers
export async function getAbout(): Promise<About[]> {
  return client.fetch(`*[_type == "about"]{_id, title, content, image{asset->{url}}} | order(_createdAt desc)`)
}
export async function getAdmissions(): Promise<Admissions[]> {
  return client.fetch(`*[_type == "admissions"]{_id, title, requirements, process, contact} | order(_createdAt desc)`)
}
export async function getFaculty(): Promise<Faculty[]> {
  return client.fetch(`*[_type == "faculty"]{_id, name, role, bio, photo{asset->{url}}, email, phone} | order(_createdAt desc)`)
}
export async function getGallery(): Promise<Gallery[]> {
  return client.fetch(`*[_type == "gallery"]{_id, title, images[]{asset->{url}}} | order(_createdAt desc)`)
}
export async function getNews(): Promise<News[]> {
  return client.fetch(`*[_type == "news"]{_id, title, date, content, image{asset->{url}}} | order(date desc)`)
}
export async function getPartners(): Promise<Partner[]> {
  return client.fetch(`*[_type == "partners"]{_id, name, logo{asset->{url}}, website} | order(_createdAt desc)`)
}
export async function getPrograms(): Promise<Program[]> {
  return client.fetch(`*[_type == "programs"]{_id, id, name, title, subtitle, duration, intake, nextIntake, description, highlights, image{asset->{url}}, color} | order(_createdAt desc)`)
}
export async function getSuccessStories(): Promise<Success[]> {
  return client.fetch(`*[_type == "success"]{_id, name, program, quote, fullStoryLink, image{asset->{url}}} | order(_createdAt desc)`)
}
export async function getHero(): Promise<Hero[]> {
  return client.fetch(`*[_type == "hero"]{_id, headline, subheadline, backgroundImage{asset->{url}}, ctaText, ctaLink} | order(_createdAt desc)`)
}
export async function getSiteSettings(): Promise<SiteSettings[]> {
  return client.fetch(`*[_type == "siteSettings"]{_id, siteTitle, navbarLinks[]{label, href}, footerText, footerLinks[]{label, href}} | order(_createdAt desc)`)
}
export async function getContactSubmissions(): Promise<ContactSubmission[]> {
  return client.fetch(`*[_type == "contact"]{_id, name, email, phone, message, submittedAt} | order(submittedAt desc)`)
}


// Real-time updates using listen API
export function listenToType(type: string, cb: (data: any) => void) {
  return client.listen(`*[_type == "${type}"]`).subscribe(update => {
    cb(update.result)
  })
}

// (useRealtimeType hook moved to useRealtimeType.ts)

export async function getFeaturedProduct() {
  const query = `*[_type == "product" && featured == true][0] {
    name,
    price,
    rating,
    "image": image.asset->url,
    description,
    category
  }`
  
  return client.fetch(query)
}

export async function getProducts() {
  const query = `*[_type == "product" && featured != true] {
    name,
    price,
    rating,
    "image": image.asset->url,
    category
  }`
  
  return client.fetch(query)
}

