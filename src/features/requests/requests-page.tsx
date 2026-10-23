import { ButtonLink } from '@/components/ui/button';
import { EmptyState } from '@/components/ui/empty-state';
import { Notice } from '@/components/ui/notice';
import { PageHeader } from '@/components/ui/page-header';
import { RouteFilters } from '@/components/ui/route-filters';
import { PageShell } from '@/components/ui/surface';
import { Tabs } from '@/components/ui/tabs';
import { RequestCard } from '@/features/requests/components/request-card';
import { listRequests } from '@/lib/server/requests';

type RequestsPageProps = {
  origin?: string;
  destination?: string;
  date?: string;
  posted?: boolean;
};

export async function RequestsPage({ origin, destination, date, posted }: RequestsPageProps) {
  const requests = await listRequests({ origin, destination, date });

  return (
    <PageShell>
      <PageHeader
        eyebrow="Ride requests"
        title="Someone is going your way"
        description="Riders post the route, time, and price they are hoping for. If you are driving that way, offer them a seat."
        actions={<ButtonLink href="/requests/new" variant="small">Post a request <span aria-hidden="true">→</span></ButtonLink>}
      />

      <Tabs
        items={[
          { href: '/rides', label: 'Rides' },
          { href: '/requests', label: 'Requests' },
        ]}
        active="requests"
      />

      {posted && <Notice>Your request is live. Drivers heading your way can now offer a seat.</Notice>}

      <RouteFilters
        action="/requests"
        submitLabel="Filter requests"
        clearHref="/requests"
        origin={origin}
        destination={destination}
        date={date}
      />

      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[1.2px] text-[#a0907c]" role="status">
        {requests.length === 0 ? 'No open requests found' : `${requests.length} open ${requests.length === 1 ? 'request' : 'requests'}`}
      </p>

      {requests.length > 0 ? (
        <div className="grid gap-4 min-[760px]:grid-cols-2">
          {requests.map((request) => (
            <RequestCard key={request.id} request={request} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No open requests on that route"
          description="Try a wider search, or post your own request so drivers going your way can find you."
          action={{ href: '/requests/new', label: 'Post a request' }}
        />
      )}
    </PageShell>
  );
}
