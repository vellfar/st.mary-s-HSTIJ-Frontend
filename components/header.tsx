'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, LogOut, Badge } from 'lucide-react'
import { useState } from "react"
import { Navigation } from "./Navbar"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 px-4 lg:px-6 h-14 flex items-center justify-between bg-white shadow-sm">
      <Link className="flex items-center justify-center" href="/">
        <span className="text-lg font-semibold text-primary">VELLFAR</span>
      </Link>
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle>
              <VisuallyHidden>Navigation Menu</VisuallyHidden>
            </SheetTitle>
            <nav className="flex flex-col gap-4">
              <Navigation isMobile={true} />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <nav className="hidden lg:flex lg:gap-6 lg:items-center">
        <Navigation />
      </nav>
      <div className="hidden lg:flex lg:gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
              >
                <span className="text-sm font-semibold text-primary">Products & Partners</span>
              </Button>
            </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  Visit Sites
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  Vellfar Products & Partners
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href="https://vpay.vellfar.com">
              <DropdownMenuItem>Vellfar Pay</DropdownMenuItem>
            </Link>
            <Link href="https://ocunex.com">
              <DropdownMenuItem>Ocunex</DropdownMenuItem>
            </Link>
            <Link href="https://loyalty.dropmartug.com">
              <DropdownMenuItem>Dropmart UG</DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="font-normal">
            <Link href="mailto:vellfarenterprises@gmail.com">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Email Us!
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    vellfarenterprises@gmail.com
                  </p>
                </div>
              </Link>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
        
      </div>
    </header>
  )
}

