'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { POPULAR_ROUTES } from '@/lib/domain';

export function RideSearch() {
  const router = useRouter();
  const [mode, setMode] = useState<'rides' | 'request'>('rides');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [minimumDate, setMinimumDate] = useState('');

  useEffect(() => {
    const now = new Date();
    setMinimumDate(new Date(now.getTime() - now.getTimezoneOffset() * 60_000).toISOString().slice(0, 10));
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const params = new URLSearchParams();
    if (origin.trim()) params.set('origin', origin.trim());
    if (destination.trim()) params.set('destination', destination.trim());

    const date = formData.get('date');
    if (typeof date === 'string' && date) params.set('date', date);

    if (mode === 'request') {
      const passengers = String(formData.get('passengers') ?? '1');
      const seats = passengers.match(/\d+/)?.[0];
      if (seats) params.set('seats', seats);
      router.push(`/requests/new?${params.toString()}`);
      return;
    }

    router.push(`/rides?${params.toString()}`);
  }

  function chooseRoute(routeOrigin: string, routeDestination: string) {
    setOrigin(routeOrigin);
    setDestination(routeDestination);
    document.querySelector('#find')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <section
      className="relative z-[4] mx-auto mb-[34px] max-w-[1210px] rounded-[20px] border border-[#efe5d7] bg-paper px-[34px] pb-[17px] pt-[29px] shadow-[0_18px_50px_rgba(72,48,20,0.09)] max-[1100px]:mx-[5%] max-[760px]:mx-[14px] max-[760px]:rounded-[17px] max-[760px]:px-[17px] max-[760px]:pb-[15px] max-[760px]:pt-[23px]"
      id="find"
      aria-labelledby="search-title"
    >
      <div className="mb-5 flex items-center justify-between max-[760px]:mb-[15px] max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-[15px]">
        <div>
          <div className="mb-[6px] text-[9px] font-bold uppercase tracking-[1.6px] text-[#a66a24]">Your next journey</div>
          <h2 id="search-title" className="m-0 font-display text-[23px] font-bold leading-[1.2] tracking-[-0.8px] max-[760px]:text-[21px]">
            Where are you headed?
          </h2>
        </div>
        <div className="flex gap-1 rounded-xl border border-[#f1e9dc] bg-[#fbf7ef] p-1 max-[760px]:w-full" role="tablist" aria-label="Choose a trip type">
          <button
            className={`flex-1 cursor-pointer rounded-lg border-0 px-[14px] py-[9px] text-[10px] font-bold max-[760px]:py-[10px] ${mode === 'rides' ? 'bg-[#f9bd3f] text-[#392616] shadow-[0_2px_5px_rgba(99,61,12,0.1)]' : 'bg-transparent text-[#807364]'}`}
            type="button"
            role="tab"
            aria-selected={mode === 'rides'}
            onClick={() => { setMode('rides'); }}
          >
            Find a ride
          </button>
          <button
            className={`flex-1 cursor-pointer rounded-lg border-0 px-[14px] py-[9px] text-[10px] font-bold max-[760px]:py-[10px] ${mode === 'request' ? 'bg-[#f9bd3f] text-[#392616] shadow-[0_2px_5px_rgba(99,61,12,0.1)]' : 'bg-transparent text-[#807364]'}`}
            type="button"
            role="tab"
            aria-selected={mode === 'request'}
            onClick={() => { setMode('request'); }}
          >
            Request a ride
          </button>
        </div>
      </div>

      <form
        className="relative grid grid-cols-[minmax(0,1.15fr)_32px_minmax(0,1.15fr)_minmax(0,1fr)_minmax(0,0.8fr)_auto] items-stretch gap-[9px] max-[1100px]:grid-cols-[minmax(0,1fr)_28px_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] max-[760px]:flex max-[760px]:flex-col"
        onSubmit={handleSubmit}
      >
        <label className="flex min-h-[66px] min-w-0 items-center gap-[11px] rounded-xl border border-[#ece3d7] bg-[#fffefa] px-3 transition-[border-color,box-shadow] focus-within:border-[#e6a12b] focus-within:shadow-[0_0_0_3px_rgba(230,161,43,0.12)] max-[760px]:min-h-[61px] max-[1100px]:[grid-column:1]">
          <svg className="h-[15px] w-[15px] flex-none text-[#a76020]" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 14s5-4.6 5-8A5 5 0 0 0 3 6c0 3.4 5 8 5 8Z" stroke="currentColor" strokeWidth="1.7" />
            <circle cx="8" cy="6" r="1.5" fill="currentColor" />
          </svg>
          <span className="block w-full min-w-0">
            <span className="mb-1 block text-[9px] text-[#958777]">Leaving from</span>
            <input
              className="block w-full min-w-0 border-0 bg-transparent p-0 text-[11px] font-semibold text-[#3b2a1c] outline-none placeholder:font-normal placeholder:text-[#a3988a]"
              required
              name="origin"
              placeholder="Enter a pickup area"
              autoComplete="off"
              value={origin}
              onChange={(event) => setOrigin(event.target.value)}
            />
          </span>
        </label>

        <button
          className="h-[31px] w-[31px] cursor-pointer self-center rounded-full border border-[#eee4d6] bg-[#fffefa] text-[17px] text-[#a76c25] max-[1100px]:[grid-column:2] max-[1100px]:[grid-row:1] max-[760px]:absolute max-[760px]:right-[30px] max-[760px]:z-[2] max-[760px]:mt-[53px] max-[760px]:h-[29px] max-[760px]:w-[29px] max-[760px]:rotate-90"
          type="button"
          aria-label="Swap origin and destination"
          onClick={() => { setOrigin(destination); setDestination(origin); }}
        >
          ↕
        </button>

        <label className="flex min-h-[66px] min-w-0 items-center gap-[11px] rounded-xl border border-[#ece3d7] bg-[#fffefa] px-3 transition-[border-color,box-shadow] focus-within:border-[#e6a12b] focus-within:shadow-[0_0_0_3px_rgba(230,161,43,0.12)] max-[760px]:mt-1 max-[760px]:min-h-[61px] max-[1100px]:[grid-column:3]">
          <svg className="h-[15px] w-[15px] flex-none text-[#df9b27]" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 14s5-4.6 5-8A5 5 0 0 0 3 6c0 3.4 5 8 5 8Z" stroke="currentColor" strokeWidth="1.7" />
            <circle cx="8" cy="6" r="1.5" fill="currentColor" />
          </svg>
          <span className="block w-full min-w-0">
            <span className="mb-1 block text-[9px] text-[#958777]">Going to</span>
            <input
              className="block w-full min-w-0 border-0 bg-transparent p-0 text-[11px] font-semibold text-[#3b2a1c] outline-none placeholder:font-normal placeholder:text-[#a3988a]"
              required
              name="destination"
              placeholder="Enter a destination"
              autoComplete="off"
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
            />
          </span>
        </label>

        <label className="flex min-h-[66px] min-w-0 items-center gap-[11px] rounded-xl border border-[#ece3d7] bg-[#fffefa] px-3 transition-[border-color,box-shadow] focus-within:border-[#e6a12b] focus-within:shadow-[0_0_0_3px_rgba(230,161,43,0.12)] max-[760px]:min-h-[61px] max-[1100px]:[grid-column:4]">
          <span className="w-[15px] flex-none text-center text-base leading-[15px] text-[#97621f]" aria-hidden="true">▦</span>
          <span className="block w-full min-w-0">
            <span className="mb-1 block text-[9px] text-[#958777]">Travel date</span>
            <input
              className="block w-full min-w-0 border-0 bg-transparent p-0 text-[11px] font-semibold text-[#3b2a1c] outline-none [color-scheme:light] [font-family:inherit]"
              required
              name="date"
              type="date"
              min={minimumDate}
            />
          </span>
        </label>

        <label className="flex min-h-[66px] min-w-0 items-center gap-[11px] rounded-xl border border-[#ece3d7] bg-[#fffefa] px-3 transition-[border-color,box-shadow] focus-within:border-[#e6a12b] focus-within:shadow-[0_0_0_3px_rgba(230,161,43,0.12)] max-[760px]:min-h-[61px] max-[1100px]:[grid-column:5]">
          <span className="w-[15px] flex-none text-center text-base leading-[15px] text-[#97621f]" aria-hidden="true">♙</span>
          <span className="block w-full min-w-0">
            <span className="mb-1 block text-[9px] text-[#958777]">Passengers</span>
            <select
              className="block w-full min-w-0 cursor-pointer appearance-none border-0 bg-transparent p-0 text-[11px] font-semibold text-[#3b2a1c] outline-none"
              name="passengers"
              aria-label="Number of passengers"
            >
              <option value="1">1 passenger</option>
              <option value="2">2 passengers</option>
              <option value="3">3 passengers</option>
              <option value="4">4 passengers</option>
            </select>
          </span>
        </label>

        <Button
          className="min-h-[66px] self-stretch gap-[10px] whitespace-nowrap rounded-xl px-[19px] text-[11px] max-[1100px]:col-span-full max-[1100px]:min-h-12 max-[760px]:mt-0.5 max-[760px]:w-full max-[760px]:min-h-[50px]"
          type="submit"
        >
          {mode === 'rides' ? 'Search rides' : 'Post a request'} <span aria-hidden="true">→</span>
        </Button>
      </form>

      <div className="flex items-center gap-[15px] text-[9px] text-[#9b8c7b] max-[760px]:flex-wrap max-[760px]:gap-x-3 max-[760px]:gap-y-[10px] max-[760px]:leading-[1.6]">
        <span className="font-semibold max-[760px]:w-full">Popular:</span>
        {POPULAR_ROUTES.map((route) => (
          <a
            className="text-[#6f5740] underline decoration-[#d9c1a0] underline-offset-[3px]"
            key={route.label}
            href="#find"
            onClick={(event) => { event.preventDefault(); chooseRoute(route.origin, route.destination); }}
          >
            {route.label}
          </a>
        ))}
      </div>
    </section>
  );
}
