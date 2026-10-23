import { ButtonLink } from '@/components/ui/button';
import { EmptyState } from '@/components/ui/empty-state';
import { Notice } from '@/components/ui/notice';
import { PageHeader } from '@/components/ui/page-header';
import { RouteFilters } from '@/components/ui/route-filters';
import { PageShell } from '@/components/ui/surface';
import { Tabs } from '@/components/ui/tabs';
import { RideCard } from '@/features/rides/components/ride-card';
import { listRides } from '@/lib/server/rides';

type RidesPageProps = {
  origin?: string;
  destination?: string;
  date?: string;
  posted?: boolean;
};

export async function RidesPage({ origin, destination, date, posted }: RidesPageProps) {
  const rides = await listRides({ origin, destination, date });

  return (
    <PageShell>
      <PageHeader
        eyebrow="Find a ride"
        title="Seats going your way"
        description="Browse rides posted by drivers heading your direction. Pick a departure, reserve a seat, and meet your driver at the pickup joint."
        actions={<ButtonLink href="/rides/new" variant="small">Offer a seat <span aria-hidden="true">→</span></ButtonLink>}
      />

      <Tabs
        items={[
          { href: '/rides', label: 'Rides' },
          { href: '/requests', label: 'Requests' },
        ]}
        active="rides"
      />

      {posted && <Notice>Your ride is live. Riders can now find it and reserve a seat.</Notice>}

      <RouteFilters
        action="/rides"
        submitLabel="Search rides"
        clearHref="/rides"
        origin={origin}
        destination={destination}
        date={date}
      />

      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[1.2px] text-[#a0907c]" role="status">
        {rides.length === 0 ? 'No upcoming rides found' : `${rides.length} upcoming ${rides.length === 1 ? 'ride' : 'rides'}`}
      </p>

      {rides.length > 0 ? (
        <div className="grid gap-4 min-[760px]:grid-cols-2">
          {rides.map((ride) => (
            <RideCard key={ride.id} ride={ride} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No seats on that route yet"
          description="Try a wider search, check the requests board, or post a ride if you are the one driving."
          action={{ href: '/rides/new', label: 'Offer a seat' }}
        />
      )}
    </PageShell>
  );
}
