import { PageHeader } from '@/components/ui/page-header';
import { PageShell } from '@/components/ui/surface';
import { RequestForm } from '@/features/requests/components/request-form';

type NewRequestPageProps = {
  minDeparture: string;
  defaults?: {
    origin?: string;
    destination?: string;
    departureAt?: string;
    seatsNeeded?: string;
  };
};

export function NewRequestPage({ minDeparture, defaults }: NewRequestPageProps) {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Request a ride"
        title="Tell drivers where you're headed"
        description="Post your route, pickup joint, time, and what you can pay per seat. Drivers going your way can offer you a ride."
      />

      <RequestForm minDeparture={minDeparture} defaults={defaults} />

      <div className="mt-5 grid gap-3 text-[11px] leading-[1.6] text-[#918373] min-[760px]:grid-cols-3">
        <p className="m-0 rounded-xl border border-[#efe5d7] bg-paper px-4 py-3">
          <strong className="block text-[11px] text-[#4b3826]">Share the exact spot</strong>
          A clear pickup joint helps drivers decide quickly whether they can help.
        </p>
        <p className="m-0 rounded-xl border border-[#efe5d7] bg-paper px-4 py-3">
          <strong className="block text-[11px] text-[#4b3826]">Be realistic with time</strong>
          Give the earliest time you can leave, not the time you wish you could.
        </p>
        <p className="m-0 rounded-xl border border-[#efe5d7] bg-paper px-4 py-3">
          <strong className="block text-[11px] text-[#4b3826]">Offer a fair fare</strong>
          Drivers compare your price with their fuel and time before offering a seat.
        </p>
      </div>
    </PageShell>
  );
}
