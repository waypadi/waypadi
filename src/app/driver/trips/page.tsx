import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/page-header';
import { PageShell, cardClass } from '@/components/ui/surface';

export const metadata: Metadata = {
  title: 'My trips — Driver — WayPadi',
  description: 'Manage your published trips as a driver.',
};

export default function Page() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Driver"
        title="My trips"
        description="Publish, edit, cancel, and manage passenger bookings via the driver API."
      />

      <div className={`${cardClass} p-5`}>
        <p className="mb-0 text-[12px] text-[#918373]">
          Connect to backend endpoints <code>POST /trips</code>, <code>GET /users/me/trips</code>, <code>PATCH /trips/&#123;id&#125;</code>, <code>POST /trips/&#123;id&#125;/cancel</code>.
        </p>
      </div>
    </PageShell>
  );
}
