import type { Metadata } from 'next';
import { RidesPage } from '@/features/rides/rides-page';
import { firstParam, type SearchParams } from '@/lib/search-params';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Trips — WayPadi',
  description: 'Search and browse available trips.',
};

export default async function Page({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;

  return (
    <RidesPage
      origin={firstParam(params.origin)}
      destination={firstParam(params.destination)}
      date={firstParam(params.date)}
      posted={firstParam(params.posted) === '1'}
    />
  );
}
