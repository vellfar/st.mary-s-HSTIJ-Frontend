import PartnersClient from './PartnersClient';
import { getPartners } from '@/lib/sanity';

import PartnersClient from './PartnersClient';
import { getPartners } from '@/lib/sanity';

export default async function PartnersPage() {
  const partners = await getPartners();
  return <PartnersClient partners={partners} />;
}
              Our Partners & Accreditations
