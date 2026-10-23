import type { Metadata } from 'next';
import { ButtonLink } from '@/components/ui/button';
import { PageHeader } from '@/components/ui/page-header';
import { PageShell, cardClass } from '@/components/ui/surface';

export const metadata: Metadata = {
  title: 'Safety — WayPadi',
  description: 'Practical safety guidance for sharing rides on WayPadi.',
};

const items = [
  {
    title: 'Share details',
    description: 'Confirm pickup joint, time, and fare before setting off. Share trip details with a trusted contact when you feel safer doing so.',
  },
  {
    title: 'Verify first',
    description: 'Check names, route, and seats in the app before getting in. Use the contact details provided for the confirmed trip.',
  },
  {
    title: 'Meet in safe spots',
    description: 'Stick to well-lit, public pickup points where possible and confirm the vehicle details with your driver or passenger.',
  },
  {
    title: 'Trust your instincts',
    description: 'If something feels off, speak up or cancel through the appropriate channel. Your comfort and safety come first.',
  },
];

export default function Page() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Safety"
        title="Pragmatic safety for everyday rides"
        description="WayPadi is built around shared journeys. A few simple habits go a long way in Lagos traffic."
        actions={<ButtonLink href="/rides">Find a ride</ButtonLink>}
      />

      <div className="grid gap-4 min-[760px]:grid-cols-2">
        {items.map((item) => (
          <article className={`${cardClass} p-5`} key={item.title}>
            <h2 className="mb-2 font-display text-lg font-bold tracking-[-0.6px]">{item.title}</h2>
            <p className="m-0 text-[12px] leading-[1.7] text-[#918373]">{item.description}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
