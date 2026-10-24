import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell, cardClass } from '@/components/ui/surface';

export const metadata: Metadata = {
  title: 'Log in — WayPadi',
  description: 'Sign in to manage your rides, requests, and bookings on WayPadi.',
};

export default function Page() {
  return (
    <PageShell>
      <div className={`${cardClass} mx-auto max-w-[440px] p-6 max-[760px]:p-5`}>
        <div className="mb-6 text-center">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[1.6px] text-[#a66a24]">Welcome back</p>
          <h1 className="mb-2 font-display text-[26px] font-extrabold tracking-[-1.2px]">Log in to WayPadi</h1>
          <p className="m-0 text-[12px] text-[#918373]">Manage your rides, requests, and bookings.</p>
        </div>

        <form className="grid gap-3" noValidate>
          <div>
            <label className="mb-1 block text-[10px] font-bold uppercase tracking-[1.2px] text-[#958777]" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-xl border border-[#ece3d7] bg-[#fffefa] px-3 py-2.5 text-[12px] font-semibold text-[#3b2a1c] outline-none transition-[border-color,box-shadow] placeholder:font-normal placeholder:text-[#a3988a] focus:border-[#e6a12b] focus:shadow-[0_0_0_3px_rgba(230,161,43,0.12)]"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <div className="mb-1 flex items-center justify-between">
              <label className="text-[10px] font-bold uppercase tracking-[1.2px] text-[#958777]" htmlFor="password">
                Password
              </label>
              <Link className="text-[10px] font-bold text-[#8a7358]" href="/forgot-password">
                Forgot password?
              </Link>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-xl border border-[#ece3d7] bg-[#fffefa] px-3 py-2.5 text-[12px] font-semibold text-[#3b2a1c] outline-none transition-[border-color,box-shadow] placeholder:font-normal placeholder:text-[#a3988a] focus:border-[#e6a12b] focus:shadow-[0_0_0_3px_rgba(230,161,43,0.12)]"
              placeholder="Enter your password"
            />
          </div>

          <button
            className="mt-1 inline-flex min-h-11 items-center justify-center rounded-[11px] bg-amber px-5 text-[12px] font-bold text-[#322112] shadow-[0_6px_16px_rgba(219,144,18,0.16)] transition-colors hover:bg-[#ffc447]"
            type="submit"
            disabled
          >
            Log in (connect to backend)
          </button>
        </form>

        <p className="mb-0 mt-5 text-center text-[11px] text-[#918373]">
          Don&apos;t have an account?{' '}
          <Link className="font-bold text-[#8a7358]" href="/register">
            Sign up
          </Link>
        </p>

        <p className="mb-0 mt-3 text-center text-[10px] text-[#9a8b79]">
          No backend auth configured yet. API client ready at <code>lib/api/auth.ts</code>.
        </p>
      </div>
    </PageShell>
  );
}
