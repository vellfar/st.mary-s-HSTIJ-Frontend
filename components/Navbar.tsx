'use client'

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



export function Navigation({ isMobile = false }: { isMobile?: boolean }) {
  
  const pathname = usePathname()


  const MobileLink = ({ href, children, ...props }: React.ComponentPropsWithoutRef<typeof Link>) => {
    return (
      <Link href={href} {...props}>
        <span className={cn(
          "block py-2 text-sm",
          pathname === href && "font-semibold text-primary"
        )}>
          {children}
        </span>
      </Link>
    )
  }

  if (isMobile) {
    return (
      <div className="flex flex-col space-y-4">
        <MobileLink href="/">Home</MobileLink>
        <MobileLink href="/shop">Shop</MobileLink>
        <MobileLink href="/services">Services</MobileLink>
        <MobileLink href="/blog">Blog</MobileLink>
        <MobileLink href="/about">About</MobileLink>
        <MobileLink href="/contact">Contact Us</MobileLink>
      </div>
    )
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="relative flex h-full w-full select-none flex-col justify-end rounded-md bg-cover bg-center p-6 no-underline outline-none focus:shadow-md"
                    href="/shop"
                  >
                    {/* Background Image Layer */}
                    <div
                      className="absolute inset-0 rounded-md bg-[url('/tecshop.jpg')] bg-cover bg-center"
                    />

                    {/* Opacity Overlay */}
                    <div className="absolute inset-0 rounded-md bg-black bg-opacity-50" />

                    {/* Content */}
                    <div className="mb-4 mt-2 text-lg font-semibold text-white relative">
                      Tech Shop
                    </div>
                    <p className="text-xs leading-tight text-white relative">
                      Office ICT equipment procurement made easier for you.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/shop" title="Computers">
                Procure high spec computers for a seemless experience. Buy Now!
              </ListItem>
              <ListItem href="/shop" title="Printers">
                Reliable and efficient printers that are easy to maintain.
              </ListItem>
              <ListItem href="/shop" title="Accessories">
                ICT accessories go a long way in easing your daily work. Shop Today!
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="relative flex h-full w-full select-none flex-col justify-end rounded-md bg-cover bg-center p-6 no-underline outline-none focus:shadow-md"
                    href="/services"
                  >
                    {/* Background Image Layer */}
                    <div
                      className="absolute inset-0 rounded-md bg-[url('/bizsoln.jpg')] bg-cover bg-center"
                    />

                    {/* Opacity Overlay */}
                    <div className="absolute inset-0 rounded-md bg-black bg-opacity-50" />

                    {/* Content */}
                    <div className="mb-4 mt-2 text-lg font-semibold text-white relative">
                      Our Services
                    </div>
                    <p className="text-xs leading-tight text-white relative">
                      Providing cutting-edge Solutions to Your IT Needs.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/services" title="Software Development">
                We design & develop custom business software solutions.
              </ListItem>
              <ListItem href="/services" title="Computer Systems">
                We install, maintain & service computer systems.
              </ListItem>
              <ListItem href="/services" title="ICT Equipment">
                We sell and supply ict equipment & accessories
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="relative flex h-full w-full select-none flex-col justify-end rounded-md bg-cover bg-center p-6 no-underline outline-none focus:shadow-md"
                    href="/blog"
                  >
                    {/* Background Image Layer */}
                    <div
                      className="absolute inset-0 rounded-md bg-[url('/blog.jpg')] bg-cover bg-center"
                    />

                    {/* Opacity Overlay */}
                    <div className="absolute inset-0 rounded-md bg-black bg-opacity-50" />

                    {/* Content */}
                    <div className="mb-4 mt-2 text-lg font-semibold text-white relative">
                      Our Blog
                    </div>
                    <p className="text-xs leading-tight text-white relative">
                      Insights, updates, and inspiration from our world of innovation. Stay informed, stay ahead with Vellfar.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/blog" title="Tech Tips">
                Practical advice for navigating the digital world.
              </ListItem>
              <ListItem href="/blog" title="Vellfar News">
                See how we’re shaping the future, one breakthrough at a time.
              </ListItem>
              <ListItem href="/blog" title="Fun Facts">
                Unveiling the wonders of tech and beyond.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

