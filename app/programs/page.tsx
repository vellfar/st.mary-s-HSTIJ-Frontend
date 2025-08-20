


import ProgramsClient from './ProgramsClient';
import { getPrograms } from '@/lib/sanity';

export default async function ProgramsCoursesPage() {
  const programs = await getPrograms();
  return <ProgramsClient programs={programs} />;
}
