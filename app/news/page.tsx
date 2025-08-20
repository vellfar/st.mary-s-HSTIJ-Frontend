import NewsClient from './NewsClient';
import { getNews } from '@/lib/sanity';

export default async function NewsPage() {
  const news = await getNews();
  return <NewsClient news={news} />;
}
