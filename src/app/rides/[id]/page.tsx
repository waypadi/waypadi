import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { RideDetailPage } from '@/features/rides/ride-detail-page';
import { getRide } from '@/lib/server/rides';
import { firstParam, type SearchParams } from '@/lib/search-params';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Ride details — WayPadi',
  description: 'See the route, pickup joint, takeoff time, price per seat, and reserve a seat with the driver.',
};

type RidePageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<SearchParams>;
};

export default async function Page({ params, searchParams }: RidePageProps) {
  const { id } = await params;
  const ride = await getRide(id);

  if (!ride) notFound();

  const query = await searchParams;

  return (
    <RideDetailPage
      ride={ride}
      posted={firstParam(query.posted) === '1'}
      booked={firstParam(query.booked) === '1'}
    />
  );
}
