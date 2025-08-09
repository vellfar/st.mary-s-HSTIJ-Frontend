'use client'

import Link from "next/link"


import { useEffect, useState } from 'react'
import { getSiteSettings } from '@/lib/sanity'
import type { SiteSettings } from '@/types/sanity'

export default function FooterGen() {
  const [settings, setSettings] = useState<SiteSettings | null>(null)
  useEffect(() => {
    getSiteSettings().then(data => setSettings(data[0]))
  }, [])
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-100 dark:bg-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {settings?.footerText || "© 2024 Vellfar. All rights reserved."}
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          {settings?.footerLinks?.map((link: any) => (
            <Link key={link.href} className="text-xs hover:underline underline-offset-4" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
    </footer>
  )
}