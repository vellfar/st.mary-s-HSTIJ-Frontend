import { Suspense } from 'react';
import { createClient } from '@sanity/client';
import ProductDetails from './ProductDetails';
import Loading from '@/components/Loading';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: '2023-05-03',
});

async function getProduct(slug: string) {
  return await client.fetch(
    `*[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      price,
      description,
      category,
      isNew,
      rating,
      "slug": slug.current,
      "images": images[].asset->url,
      features,
      specifications
    }`,
    { slug }
  );
}

async function getRelatedProducts(category: string, currentProductId: string) {
  return await client.fetch(
    `*[_type == "product" && category == $category && _id != $currentProductId][0...4] {
      _id,
      name,
      price,
      "slug": slug.current,
      "image": images[0].asset->url
    }`,
    { category, currentProductId }
  );
}

interface PageProps {
  params: { slug: string };
}

export default async function ProductPage(props: { params: Promise<PageProps['params']> }) {
  const params = await props.params; // Await the params
  const slug = params.slug;

  const product = await getProduct(slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  const relatedProducts = await getRelatedProducts(product.category, product._id);

  return (
    <Suspense fallback={<Loading />}>
      <ProductDetails product={product} relatedProducts={relatedProducts} />
    </Suspense>
  );
}
