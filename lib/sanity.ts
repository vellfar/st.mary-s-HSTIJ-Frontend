import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: "epzg1e40",
  dataset: "production",
  apiVersion: '2023-05-03', // Use the latest API version
  useCdn: process.env.NODE_ENV === 'production',
  token: "skfGJf65aKnBBJYvRZeCfi5C7QYIkpR7yuqJxNyEPhjFOrdz8Oc0uramQ0T9dxdlG1odJAsR8lYGf9mRQ8K7MyzbllvLrHUcdTxVGplfukdYe3eiRFiwRRBNydBsi113ZVEWTMweslZ6NomXfC23Al8738CrAyRywTvf365Z641Ph0pPPLUw",
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

