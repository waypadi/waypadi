'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';

const popularRoutes = [
  { label: 'Lekki → Victoria Island', origin: 'Lekki Phase 1', destination: 'Victoria Island' },
  { label: 'Yaba → Lekki', origin: 'Yaba', destination: 'Lekki Phase 1' },
  { label: 'Ikeja → VI', origin: 'Ikeja', destination: 'Victoria Island' },
];

export function RideSearch() {
  const [mode, setMode] = useState<'rides' | 'request'>('rides');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [notice, setNotice] = useState('');
  const [minimumDate, setMinimumDate] = useState('');

  useEffect(() => {
    const now = new Date();
    setMinimumDate(new Date(now.getTime() - now.getTimezoneOffset() * 60_000).toISOString().slice(0, 10));
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setNotice(mode === 'rides'
      ? 'Your search is ready. Connect this form to the WayPadi ride service to see live matches.'
      : 'Your request details are ready. Connect this form to WayPadi to publish your journey.');
  }

  function chooseRoute(routeOrigin: string, routeDestination: string) {
    setOrigin(routeOrigin);
    setDestination(routeDestination);
    setNotice('');
    document.querySelector('#find')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <section className="search-section" id="find" aria-labelledby="search-title">
      <div className="search-heading">
        <div><div className="section-kicker">Your next journey</div><h2 id="search-title">Where are you headed?</h2></div>
        <div className="trip-switch" role="tablist" aria-label="Choose a trip type">
          <button className={`trip-tab${mode === 'rides' ? ' active' : ''}`} type="button" role="tab" aria-selected={mode === 'rides'} onClick={() => { setMode('rides'); setNotice(''); }}>Find a ride</button>
          <button className={`trip-tab${mode === 'request' ? ' active' : ''}`} type="button" role="tab" aria-selected={mode === 'request'} onClick={() => { setMode('request'); setNotice(''); }}>Request a ride</button>
        </div>
      </div>
      <form className="search-form" onSubmit={handleSubmit}>
        <label className="field origin-field">
          <span className="field-icon origin-icon" aria-hidden="true" />
          <span className="field-body"><span className="field-label">Leaving from</span><input required name="origin" placeholder="Enter a pickup area" autoComplete="off" value={origin} onChange={(event) => setOrigin(event.target.value)} /></span>
        </label>
        <button className="swap-button" type="button" aria-label="Swap origin and destination" onClick={() => { setOrigin(destination); setDestination(origin); }}>↕</button>
        <label className="field destination-field">
          <span className="field-icon destination-icon" aria-hidden="true" />
          <span className="field-body"><span className="field-label">Going to</span><input required name="destination" placeholder="Enter a destination" autoComplete="off" value={destination} onChange={(event) => setDestination(event.target.value)} /></span>
        </label>
        <label className="field date-field"><span className="field-icon calendar-icon" aria-hidden="true">▦</span><span className="field-body"><span className="field-label">Travel date</span><input required name="date" type="date" min={minimumDate} /></span></label>
        <label className="field passenger-field"><span className="field-icon people-icon" aria-hidden="true">♙</span><span className="field-body"><span className="field-label">Passengers</span><select name="passengers" aria-label="Number of passengers"><option>1 passenger</option><option>2 passengers</option><option>3 passengers</option><option>4 passengers</option></select></span></label>
        <Button className="search-button" type="submit">{mode === 'rides' ? 'Search rides' : 'Post a request'} <span aria-hidden="true">→</span></Button>
      </form>
      <p className="form-message" role="status" aria-live="polite">{notice}</p>
      <div className="quick-routes"><span>Popular:</span>{popularRoutes.map((route) => <a key={route.label} href="#find" onClick={(event) => { event.preventDefault(); chooseRoute(route.origin, route.destination); }}>{route.label}</a>)}</div>
    </section>
  );
}
