'use server'

import { client } from "@/lib/sanity"


export async function submitContactForm(data: {
  name: string
  email: string
  phone: string
  message: string
}) {
  try {
    const result = await client.create({
      _type: 'contact',
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      submittedAt: new Date().toISOString(),
    })
    return { success: true, id: result._id }
  } catch (error) {
    console.error('Error submitting to Sanity:', error)
    throw new Error('Failed to submit the form')
  }
}

