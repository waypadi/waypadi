import type { Metadata } from 'next';
import { NewRequestPage } from '@/features/requests/new-request-page';
import { lagosNow } from '@/lib/format';
import { firstParam, type SearchParams } from '@/lib/search-params';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Request a ride — WayPadi',
  description: 'Post the route you are travelling, your pickup joint, departure time, and what you can pay per seat.',
};

export default async function Page({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;
  const date = firstParam(params.date);
  const seats = firstParam(params.seats);

  return (
    <NewRequestPage
      minDeparture={lagosNow()}
      defaults={{
        origin: firstParam(params.origin),
        destination: firstParam(params.destination),
        departureAt: date ? `${date}T08:00` : undefined,
        seatsNeeded: seats && /^[1-8]$/.test(seats) ? seats : undefined,
      }}
    />
  );
}
