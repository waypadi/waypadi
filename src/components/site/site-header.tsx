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
    <header className="site-header">
      <Brand />
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span /><span />
      </button>
      <nav className={`main-nav${menuOpen ? ' open' : ''}`} aria-label="Main navigation">
        {links.map(({ href, label }) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
      </nav>
      <div className="header-actions">
        {/* <a className="login-link" href="#sign-in">Log in</a>
        <ButtonLink href="#sign-up" variant="small">Sign up <span aria-hidden="true">↗</span></ButtonLink> */}
        <ButtonLink href="#" variant="small">Coming Soon!!! </ButtonLink>
      </div>
    </header>
  );
}
