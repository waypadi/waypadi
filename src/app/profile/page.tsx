import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/page-header';
import { PageShell, cardClass } from '@/components/ui/surface';

export const metadata: Metadata = {
  title: 'My profile — WayPadi',
  description: 'Manage your WayPadi profile and account settings.',
};

export default function Page() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Profile"
        title="Your account"
        description="Profile retrieval and updates ready via lib/api/auth.ts (GET/PATCH /users/me)."
      />

      <div className="grid gap-4 min-[900px]:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <section className={`${cardClass} p-5`}>
          <h2 className="mb-4 font-display text-lg font-bold tracking-[-0.6px]">Personal details</h2>
          <form className="grid gap-3" noValidate>
            <div className="grid gap-3 min-[400px]:grid-cols-2">
              <div>
                <label className="mb-1 block text-[10px] font-bold uppercase tracking-[1.2px] text-[#958777]" htmlFor="firstName">
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  className="block w-full rounded-xl border border-[#ece3d7] bg-[#fffefa] px-3 py-2.5 text-[12px] font-semibold text-[#3b2a1c] outline-none"
                  disabled
                />
              </div>
              <div>
                <label className="mb-1 block text-[10px] font-bold uppercase tracking-[1.2px] text-[#958777]" htmlFor="lastName">
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  className="block w-full rounded-xl border border-[#ece3d7] bg-[#fffefa] px-3 py-2.5 text-[12px] font-semibold text-[#3b2a1c] outline-none"
                  disabled
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-[10px] font-bold uppercase tracking-[1.2px] text-[#958777]" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="block w-full rounded-xl border border-[#ece3d7] bg-[#fffefa] px-3 py-2.5 text-[12px] font-semibold text-[#3b2a1c] outline-none"
                disabled
              />
            </div>
            <div>
              <label className="mb-1 block text-[10px] font-bold uppercase tracking-[1.2px] text-[#958777]" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                className="block w-full rounded-xl border border-[#ece3d7] bg-[#fffefa] px-3 py-2.5 text-[12px] font-semibold text-[#3b2a1c] outline-none"
                disabled
              />
            </div>
            <button
              className="mt-1 w-fit inline-flex min-h-10 items-center justify-center rounded-[11px] bg-amber px-4 text-[11px] font-bold text-[#322112] opacity-60"
              type="submit"
              disabled
            >
              Save changes (connect to backend)
            </button>
          </form>
        </section>

        <aside className={`${cardClass} p-5`}>
          <h2 className="mb-2 font-display text-lg font-bold tracking-[-0.6px]">Session</h2>
          <p className="mb-4 text-[12px] leading-[1.7] text-[#918373]">
            Sessions use httpOnly cookies via the API client. No sensitive tokens stored in localStorage.
          </p>
          <button
            className="inline-flex min-h-10 items-center justify-center rounded-[11px] border border-[#e8e0d5] px-4 text-[11px] font-bold text-[#6f604f] opacity-60"
            disabled
          >
            Log out (connect to backend)
          </button>
        </aside>
      </div>
    </PageShell>
  );
}
