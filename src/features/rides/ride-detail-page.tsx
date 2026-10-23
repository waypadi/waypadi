import Link from 'next/link';
import { Notice } from '@/components/ui/notice';
import { Pill, seatTone } from '@/components/ui/pill';
import { PageShell, cardClass } from '@/components/ui/surface';
import { BookingForm } from '@/features/rides/components/booking-form';
import type { RideOffer } from '@/lib/domain';
import { formatDay, formatDeparture, formatNaira, seatsLabel } from '@/lib/format';

type RideDetailPageProps = {
  ride: RideOffer;
  posted?: boolean;
  booked?: boolean;
};

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-[#f1e8db] bg-[#fffdf8] px-3 py-2.5">
      <dt className="mb-1 text-[9px] font-semibold uppercase tracking-[1.1px] text-[#a0907c]">{label}</dt>
      <dd className="m-0 text-[12px] font-semibold text-[#4b3826]">{value}</dd>
    </div>
  );
}

export function RideDetailPage({ ride, posted, booked }: RideDetailPageProps) {
  const isFull = ride.seatsAvailable === 0;

  return (
    <PageShell>
      <Link className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold text-[#8a7358] hover:text-orange" href="/rides">
        <span aria-hidden="true">←</span> Back to rides
      </Link>

      {posted && <Notice>Ride published. Riders can now reserve seats on this trip.</Notice>}
      {booked && <Notice>Seat reserved. Your name and phone number are now with the driver.</Notice>}

      <div className="grid items-start gap-5 min-[900px]:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
        <article className={`${cardClass} p-6 max-[760px]:p-5`}>
          <div className="flex flex-wrap items-center gap-2">
            <Pill tone={seatTone(ride.seatsAvailable)}>
              {isFull ? 'Full' : `${seatsLabel(ride.seatsAvailable)} left`}
            </Pill>
            <Pill tone="muted">{formatDay(ride.departureAt)}</Pill>
          </div>

          <h1 className="mb-2 mt-4 font-display text-[clamp(26px,3.4vw,38px)] font-extrabold leading-[1.12] tracking-[-1.6px] max-[760px]:text-[27px] max-[760px]:tracking-[-1px]">
            {ride.origin} <span className="text-orange">→</span> {ride.destination}
          </h1>
          <p className="mb-0 text-[12px] font-semibold text-[#8a7358]">{formatDeparture(ride.departureAt)}</p>

          <dl className="mt-6 grid gap-3 min-[560px]:grid-cols-2">
            <Detail label="Pickup joint" value={ride.pickupPoint} />
            <Detail label="Seats open" value={`${ride.seatsAvailable} of ${ride.seatsTotal}`} />
            <Detail label="Price per seat" value={formatNaira(ride.pricePerSeat)} />
            <Detail label="Driver" value={`${ride.driverName}${ride.vehicle ? ` · ${ride.vehicle}` : ''}`} />
          </dl>

          {ride.notes && (
            <div className="mt-5 rounded-xl border border-[#efdcbf] bg-[#fff7e9] px-4 py-3">
              <p className="mb-1 text-[9px] font-bold uppercase tracking-[1.2px] text-[#a66a24]">Driver note</p>
              <p className="m-0 text-[11px] leading-[1.65] text-[#6f604f]">{ride.notes}</p>
            </div>
          )}

          <p className="mb-0 mt-5 text-[10px] leading-[1.6] text-[#9a8b79]">
            Seats are reserved on honour. WayPadi does not take payment online yet.
          </p>
        </article>

        <aside className={`${cardClass} p-5`}>
          <div className="mb-4 flex items-baseline justify-between gap-3">
            <div>
              <p className="mb-1 text-[9px] font-bold uppercase tracking-[1.2px] text-[#a66a24]">Reserve your seat</p>
              <p className="m-0">
                <strong className="font-display text-[24px] font-extrabold tracking-[-1px]">{formatNaira(ride.pricePerSeat)}</strong>
                <span className="ml-1 text-[10px] text-[#9a8b79]">per seat</span>
              </p>
            </div>
            <Pill tone={seatTone(ride.seatsAvailable)}>{isFull ? 'Full' : `${ride.seatsAvailable} left`}</Pill>
          </div>

          <BookingForm rideId={ride.id} seatsAvailable={ride.seatsAvailable} pricePerSeat={ride.pricePerSeat} />
        </aside>
      </div>
    </PageShell>
  );
}
