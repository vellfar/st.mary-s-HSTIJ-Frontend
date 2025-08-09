"use client"

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
        <MobileLink href="/programs">Programs & Courses</MobileLink>
        <MobileLink href="/admissions">Admissions</MobileLink>
        <MobileLink href="/faculty">Faculty & Staff</MobileLink>
        <MobileLink href="/partners">Partners & Accreditations</MobileLink>
        <MobileLink href="/news">News & Announcements</MobileLink>
        <MobileLink href="/success">Success Stories</MobileLink>
        <MobileLink href="/gallery">Gallery</MobileLink>
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
          <NavigationMenuTrigger>Programs & Courses</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="relative flex h-full w-full select-none flex-col justify-end rounded-md bg-cover bg-center p-6 no-underline outline-none focus:shadow-md"
                    href="/programs"
                  >
                    <div className="absolute inset-0 rounded-md bg-[url('/blueguys1.jpg')] bg-cover bg-center" />
                    <div className="absolute inset-0 rounded-md bg-black bg-opacity-50" />
                    <div className="mb-4 mt-2 text-lg font-semibold text-white relative">
                      Diploma Programs:
                    </div>
                    <p className="text-xs leading-tight text-white relative">
                      Nursing, Midwifery, Public Health, Medical Laboratory & More
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/programs" title="Nursing">
                Comprehensive training in general and community nursing.
              </ListItem>
              <ListItem href="/programs" title="Midwifery">
                Focused education on maternal and neonatal care.
              </ListItem>
              <ListItem href="/programs" title="Public Health">
                Explore health promotion and disease prevention.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Admissions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="relative flex h-full w-full select-none flex-col justify-end rounded-md bg-cover bg-center p-6 no-underline outline-none focus:shadow-md"
                    href="/admissions"
                  >
                    <div className="absolute inset-0 rounded-md bg-[url('/whiteguys1.jpg')] bg-cover bg-center" />
                    <div className="absolute inset-0 rounded-md bg-black bg-opacity-50" />
                    <div className="mb-4 mt-2 text-lg font-semibold text-white relative">
                      Admissions:
                    </div>
                    <p className="text-xs leading-tight text-white relative">
                      Learn about our admission requirements and application process.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/admissions" title="How to Apply">
                Step-by-step guide to enrolling at St. Mary's HSTI.
              </ListItem>
              <ListItem href="/admissions" title="Tuition & Fees">
                Find detailed tuition and financial aid information.
              </ListItem>
              <ListItem href="/admissions" title="Intake Periods">
                Stay informed about upcoming intake windows.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/faculty" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Faculty & Staff
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/news" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              News
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
