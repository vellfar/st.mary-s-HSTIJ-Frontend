'use client'

import Link from "next/link"
import { Button } from "./ui/button"

export default function Cta() {
 
  return (
    <section className="bg-red-950 text-primary-foreground w-full py-12 md:py-14 md:px-8 lg:py-20 xl:py-24 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-xl mb-8">Join a growing community of healthcare professionals making a difference in South Sudan.</p>
          <Link href="/contact"><Button size="lg" variant="secondary">Contact Us Today</Button></Link>
        </div>
      </section>
  )
}