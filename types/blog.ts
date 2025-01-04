import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface Bloging {
  _id: string;
  title: string;
  preview: Text;
  author: string;
  date: Date;
  readTime: number;
  category: string;
  image: SanityImageSource;
}

