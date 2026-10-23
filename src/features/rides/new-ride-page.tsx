import { EmptyState } from '@/components/ui/empty-state';
import { PageHeader } from '@/components/ui/page-header';
import { PageShell } from '@/components/ui/surface';
import { OfferForm } from '@/features/rides/components/offer-form';
import type { RideRequest } from '@/lib/domain';

type NewRidePageProps = {
  minDeparture: string;
  request?: RideRequest;
  defaults?: {
    origin?: string;
    destination?: string;
    pickupPoint?: string;
    departureAt?: string;
    pricePerSeat?: string;
    seatsTotal?: string;
  };
};

export function NewRidePage({ minDeparture, request, defaults }: NewRidePageProps) {
  const isMatched = request?.status === 'matched';

  return (
    <PageShell>
      <PageHeader
        eyebrow="Offer a seat"
        title={request ? `Offer a ride to ${request.passengerName}` : 'Share your next trip'}
        description={
          request
            ? `They are heading from ${request.origin} to ${request.destination}. Confirm the details below and publish your seats.`
            : 'Already driving somewhere? Post your route, pickup joint, takeoff time, and price per seat so riders can reserve.'
        }
      />

      {isMatched ? (
        <EmptyState
          title="This request has already been matched"
          description="A driver has already offered this rider a seat. Browse the other open requests and offer one of those instead."
          action={{ href: '/requests', label: 'Browse open requests' }}
        />
      ) : (
        <OfferForm minDeparture={minDeparture} request={request} defaults={defaults} />
      )}

      <div className="mt-5 grid gap-3 text-[11px] leading-[1.6] text-[#918373] min-[760px]:grid-cols-3">
        <p className="m-0 rounded-xl border border-[#efe5d7] bg-paper px-4 py-3">
          <strong className="block text-[11px] text-[#4b3826]">Be specific</strong>
          A clear pickup joint and takeoff time means fewer calls and less waiting.
        </p>
        <p className="m-0 rounded-xl border border-[#efe5d7] bg-paper px-4 py-3">
          <strong className="block text-[11px] text-[#4b3826]">Price fairly</strong>
          Riders compare your price per seat with the requests board before booking.
        </p>
        <p className="m-0 rounded-xl border border-[#efe5d7] bg-paper px-4 py-3">
          <strong className="block text-[11px] text-[#4b3826]">Keep seats honest</strong>
          Booking reduces your available seats automatically so you never oversell.
        </p>
      </div>
    </PageShell>
  );
}
