import type { Metadata } from 'next';
import { ButtonLink } from '@/components/ui/button';
import { PageHeader } from '@/components/ui/page-header';
import { PageShell, cardClass } from '@/components/ui/surface';

export const metadata: Metadata = {
  title: 'How it works — WayPadi',
  description: 'How passengers and drivers connect on WayPadi to share routes, seats, and fares.',
};

const steps = [
  {
    title: '1. Search or post',
    description: 'Passengers search for existing rides or post a journey request. Drivers publish a trip with pickup, time, seats, and fare.',
  },
  {
    title: '2. Match and offer',
    description: 'Drivers see compatible requests and offer a seat. Passengers compare offers from drivers going their way.',
  },
  {
    title: '3. Connect and ride',
    description: 'Accept an offer or reserve a seat, confirm details at the pickup joint, and share the journey. Agree fare with the driver at pickup.',
  },
];

export default function Page() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="How WayPadi works"
        title="Your journey. Your people. Your way."
        description="A two-sided marketplace that connects passengers and drivers travelling the same Lagos routes."
        actions={
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/rides">Find a ride</ButtonLink>
            <ButtonLink href="/rides/new" variant="dark">Offer a seat</ButtonLink>
          </div>
        }
      />

      <div className="grid gap-4 min-[760px]:grid-cols-3">
        {steps.map((step) => (
          <article className={`${cardClass} p-5`} key={step.title}>
            <h2 className="mb-2 font-display text-lg font-bold tracking-[-0.6px]">{step.title}</h2>
            <p className="m-0 text-[12px] leading-[1.7] text-[#918373]">{step.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-4 min-[760px]:grid-cols-2">
        <article className={`${cardClass} p-5`}>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[1.2px] text-[#a66a24]">For passengers</p>
          <h3 className="mb-2 font-display text-lg font-bold tracking-[-0.6px]">Find or request</h3>
          <ul className="m-0 flex flex-col gap-2 pl-5 text-[12px] leading-[1.7] text-[#918373]">
            <li>Search available rides by route and date</li>
            <li>Post a request if nothing fits your schedule</li>
            <li>Compare driver offers and accept the one that works</li>
          </ul>
        </article>
        <article className={`${cardClass} p-5`}>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[1.2px] text-[#a66a24]">For drivers</p>
          <h3 className="mb-2 font-display text-lg font-bold tracking-[-0.6px]">Publish or respond</h3>
          <ul className="m-0 flex flex-col gap-2 pl-5 text-[12px] leading-[1.7] text-[#918373]">
            <li>Post your route with seats, time, and price per seat</li>
            <li>Discover passenger requests going your way</li>
            <li>Offer a seat and manage bookings in one place</li>
          </ul>
        </article>
      </div>
    </PageShell>
  );
}
