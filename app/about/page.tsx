import AboutClient from './AboutClient';
import { getAbout } from '@/lib/sanity';

export default async function AboutPage() {
  const about = await getAbout();
  return <AboutClient about={about} />;
}
