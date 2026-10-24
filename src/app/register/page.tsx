import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell, cardClass } from '@/components/ui/surface';

export const metadata: Metadata = {
  title: 'Sign up — WayPadi',
  description: 'Create your WayPadi account to find rides, offer seats, or post requests.',
};

export default function Page() {
  return (
    <PageShell>
      <div className={`${cardClass} mx-auto max-w-[480px] p-6 max-[760px]:p-5`}>
        <div className="mb-6 text-center">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[1.6px] text-[#a66a24]">Get started</p>
          <h1 className="mb-2 font-display text-[26px] font-extrabold tracking-[-1.2px]">Create your account</h1>
          <p className="m-0 text-[12px] text-[#918373]">Find rides, offer seats, or post requests across Lagos.</p>
        </div>

        <form className="grid gap-3" noValidate>
          <div className="grid gap-3 min-[400px]:grid-cols-2">
            <div>
              <label className="mb-1 block text-[10px] font-bold uppercase tracking-[1.2px] text-[#958777]" htmlFor="firstName">
                First name
              </label>
              <input
                id="firstName"
                name="firstName"
                autoComplete="given-name"
                required
                className="block w-full rounded-xl border border-[#ece3d7] bg-[#fffefa] px-3 py-2.5 text-[12px] font-semibold text-[#3b2a1c] outline-none transition-[border-color,box-shadow] placeholder:font-normal placeholder:text-[#a3988a] focus:border-[#e6a12b] focus:shadow-[0_0_0_3px_rgba(230,161,43,0.12)]"
              />
            </div>
            <div>
              <label className="mb-1 block text-[10px] font-bold uppercase tracking-[1.2px] text-[#958777]" htmlFor="lastName">
                Last name
              </label>
              <input
                id="lastName"
                name="lastName"
                autoComplete="family-name"
                required
                className="block w-full rounded-xl border border-[#ece3d7] bg-[#fffefa] px-3 py-2.5 text-[12px] font-semibold text-[#3b2a1c] outline-none transition-[border-color,box-shadow] placeholder:font-normal placeholder:text-[#a3988a] focus:border-[#e6a12b] focus:shadow-[0_0_0_3px_rgba(230,161,43,0.12)]"
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
              autoComplete="email"
              required
              className="block w-full rounded-xl border border-[#ece3d7] bg-[#fffefa] px-3 py-2.5 text-[12px] font-semibold text-[#3b2a1c] outline-none transition-[border-color,box-shadow] placeholder:font-normal placeholder:text-[#a3988a] focus:border-[#e6a12b] focus:shadow-[0_0_0_3px_rgba(230,161,43,0.12)]"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-[10px] font-bold uppercase tracking-[1.2px] text-[#958777]" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="block w-full rounded-xl border border-[#ece3d7] bg-[#fffefa] px-3 py-2.5 text-[12px] font-semibold text-[#3b2a1c] outline-none transition-[border-color,box-shadow] placeholder:font-normal placeholder:text-[#a3988a] focus:border-[#e6a12b] focus:shadow-[0_0_0_3px_rgba(230,161,43,0.12)]"
              placeholder="At least 8 characters"
            />
          </div>
          <div>
            <label className="mb-1 block text-[10px] font-bold uppercase tracking-[1.2px] text-[#958777]" htmlFor="confirmPassword">
              Confirm password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              className="block w-full rounded-xl border border-[#ece3d7] bg-[#fffefa] px-3 py-2.5 text-[12px] font-semibold text-[#3b2a1c] outline-none transition-[border-color,box-shadow] placeholder:font-normal placeholder:text-[#a3988a] focus:border-[#e6a12b] focus:shadow-[0_0_0_3px_rgba(230,161,43,0.12)]"
            />
          </div>

          <button
            className="mt-1 inline-flex min-h-11 items-center justify-center rounded-[11px] bg-amber px-5 text-[12px] font-bold text-[#322112] shadow-[0_6px_16px_rgba(219,144,18,0.16)] transition-colors hover:bg-[#ffc447]"
            type="submit"
            disabled
          >
            Sign up (connect to backend)
          </button>
        </form>

        <p className="mb-0 mt-5 text-center text-[11px] text-[#918373]">
          Already have an account?{' '}
          <Link className="font-bold text-[#8a7358]" href="/login">
            Log in
          </Link>
        </p>
      </div>
    </PageShell>
  );
}
