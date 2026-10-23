'use client';

import { useState } from 'react';
import { Brand } from '@/components/ui/brand';
import { ButtonLink } from '@/components/ui/button';

const links = [
  { href: '#find', label: 'Find a ride' },
  { href: '#offer', label: 'Offer a seat' },
  { href: '#how', label: 'How it works' },
  { href: '#safety', label: 'Safety' },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative mx-auto flex h-[82px] max-w-[1440px] items-center gap-16 border-b border-[rgba(91,63,33,0.07)] px-[7.1%] max-[1100px]:gap-[35px] max-[1100px]:px-[5%] max-[760px]:h-[68px] max-[760px]:justify-between max-[760px]:gap-0 max-[760px]:px-[22px]">
      <Brand />
      <button
        className="hidden border-0 bg-transparent p-[10px] max-[760px]:flex max-[760px]:flex-col max-[760px]:gap-[5px]"
        type="button"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="h-0.5 w-[19px] rounded-[2px] bg-[#473321]" />
        <span className="h-0.5 w-[19px] rounded-[2px] bg-[#473321]" />
      </button>
      <nav
        className={`mx-auto flex items-center gap-[34px] text-xs font-semibold text-[#594a3a] max-[1100px]:gap-[21px] max-[760px]:absolute max-[760px]:left-[14px] max-[760px]:right-[14px] max-[760px]:top-[62px] max-[760px]:z-10 max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-0 max-[760px]:rounded-[14px] max-[760px]:border max-[760px]:border-line max-[760px]:bg-paper max-[760px]:p-2 max-[760px]:shadow-[0_18px_50px_rgba(72,48,20,0.09)] ${menuOpen ? 'max-[760px]:flex' : 'max-[760px]:hidden'}`}
        aria-label="Main navigation"
      >
        {links.map(({ href, label }) => (
          <a
            className="transition-colors hover:text-orange max-[760px]:rounded-[9px] max-[760px]:px-[13px] max-[760px]:py-[13px] max-[760px]:hover:bg-[#fbf1df]"
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-[27px] text-xs font-bold max-[760px]:gap-[14px] max-[760px]:text-[11px]">
        {/* <a className="login-link" href="#sign-in">Log in</a>
        <ButtonLink href="#sign-up" variant="small">Sign up <span aria-hidden="true">↗</span></ButtonLink> */}
        <ButtonLink
          className="max-[760px]:min-h-9 max-[760px]:gap-[7px] max-[760px]:rounded-[11px] max-[760px]:px-3"
          href="#"
          variant="small"
        >
          Coming Soon!!!
        </ButtonLink>
      </div>
    </header>
  );
}
