

import SuccessClient from './SuccessClient';
import { getSuccessStories } from '@/lib/sanity';

export default async function SuccessPage() {
  const successStories = await getSuccessStories();
  return <SuccessClient successStories={successStories} />;
}
