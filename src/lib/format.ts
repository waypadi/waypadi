const LAGOS_TIME_ZONE = 'Africa/Lagos';

function lagosParts(date: Date): Record<string, string> {
  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: LAGOS_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  });

  return Object.fromEntries(formatter.formatToParts(date).map((part) => [part.type, part.value]));
}

function toDateTimeInput(date: Date): string {
  const parts = lagosParts(date);
  return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
}

/** Current Lagos wall-clock time as `YYYY-MM-DDTHH:mm`. */
export function lagosNow(): string {
  return toDateTimeInput(new Date());
}

/** A Lagos wall-clock date/time, offset from today. */
export function lagosDateAt(daysFromNow: number, hour: number, minute: number): string {
  const target = new Date(Date.now() + daysFromNow * 86_400_000);
  const day = toDateTimeInput(target).slice(0, 10);
  return `${day}T${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
}

/** `YYYY-MM-DDTHH:mm` values are stored as Lagos wall-clock time, never UTC. */
export function toLagosDate(value: string): Date {
  return new Date(`${value}:00+01:00`);
}

export function isUpcoming(value: string): boolean {
  return value >= lagosNow();
}

export function formatDay(value: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: LAGOS_TIME_ZONE,
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  }).format(toLagosDate(value));
}

export function formatDeparture(value: string): string {
  const date = toLagosDate(value);
  const day = formatDay(value);
  const time = new Intl.DateTimeFormat('en-US', {
    timeZone: LAGOS_TIME_ZONE,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(date);
  return `${day} · ${time}`;
}

export function formatNaira(value: number): string {
  return `₦${Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export function seatsLabel(seats: number): string {
  return seats === 1 ? '1 seat' : `${seats} seats`;
}
