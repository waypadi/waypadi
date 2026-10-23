import Link from 'next/link';
import { Pill, seatTone } from '@/components/ui/pill';
import { cardClass } from '@/components/ui/surface';
import type { RideOffer } from '@/lib/domain';
import { formatDeparture, formatNaira, seatsLabel } from '@/lib/format';

export function RideCard({ ride }: { ride: RideOffer }) {
  const isFull = ride.seatsAvailable === 0;

  return (
    <article className={`${cardClass} flex h-full flex-col p-5`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[1.2px] text-[#a66a24]">
            {formatDeparture(ride.departureAt)}
          </p>
          <h2 className="m-0 font-display text-[19px] font-bold leading-[1.25] tracking-[-0.7px]">
            {ride.origin} <span className="text-orange">→</span> {ride.destination}
          </h2>
        </div>
        <Pill tone={seatTone(ride.seatsAvailable)}>
          {isFull ? 'Full' : `${seatsLabel(ride.seatsAvailable)} left`}
        </Pill>
      </div>

      <dl className="mt-[18px] space-y-[7px] text-[11px] leading-[1.5]">
        <div className="flex gap-2">
          <dt className="w-[52px] flex-none font-semibold text-[#a0907c]">Pickup</dt>
          <dd className="m-0 text-[#6f604f]">{ride.pickupPoint}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="w-[52px] flex-none font-semibold text-[#a0907c]">Driver</dt>
          <dd className="m-0 text-[#6f604f]">
            {ride.driverName}
            {ride.vehicle ? ` · ${ride.vehicle}` : ''}
          </dd>
        </div>
      </dl>

      <div className="mt-5 flex items-end justify-between gap-3 border-t border-[#f1e8db] pt-4">
        <p className="m-0">
          <strong className="font-display text-[17px] font-bold">{formatNaira(ride.pricePerSeat)}</strong>
          <span className="ml-1 text-[10px] text-[#9a8b79]">per seat</span>
        </p>
        <Link
          className="inline-flex min-h-9 items-center gap-2 rounded-[10px] bg-[#f9bd3f] px-[14px] text-[10px] font-bold text-[#392616] transition-colors hover:bg-[#ffc447]"
          href={`/rides/${ride.id}`}
        >
          {isFull ? 'See ride' : 'View seats'} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
