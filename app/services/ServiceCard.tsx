import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface ServiceCardProps {
  service: {
    title: string
    description: string
    image: string
    benefits: string[]
    caseStudy: string
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <motion.div 
          className="relative h-48 sm:h-64 md:h-auto md:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={service.image}
            alt={service.title}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
        <div className="p-4 sm:p-6 md:p-8 md:w-1/2">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{service.title}</CardTitle>
            <CardDescription className="text-sm sm:text-base md:text-lg">{service.description}</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <h3 className="font-semibold text-base sm:text-lg mb-2">Key Benefits:</h3>
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm sm:text-base">
              {service.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            <h3 className="font-semibold text-base sm:text-lg mb-2">Case Study:</h3>
            <p className="text-sm sm:text-base">{service.caseStudy}</p>
          </CardContent>
          <CardFooter className="p-0 mt-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
                Request Service
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}

