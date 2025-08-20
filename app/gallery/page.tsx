

import GalleryClient from './GalleryClient';
import { getGallery } from '@/lib/sanity';

export default async function GalleryPage() {
  const galleries = await getGallery();
  return <GalleryClient galleries={galleries} />;
}
