"use client";
import { useRealtimeType } from '@/lib/useRealtimeType';
import { About } from '@/types/sanity';
import Image from 'next/image';

export default function AboutPage() {
  const about = useRealtimeType<About>('about');
  const data = about[0];
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{data?.title}</h1>
      {data?.image?.asset?.url && (
        <div className="mb-6">
          <Image src={data.image.asset.url} alt={data.title} width={800} height={400} className="rounded-lg" />
        </div>
      )}
      <div className="prose prose-lg max-w-none">
        {/* Render block content here, or use a block content renderer if available */}
        {data?.content?.map((block: any, idx: number) => (
          <p key={idx}>{block.children?.map((child: any) => child.text).join(' ')}</p>
        ))}
      </div>
    </main>
  );
}
