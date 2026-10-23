import { randomUUID } from 'node:crypto';
import type { RideRequest } from '@/lib/domain';
import { isUpcoming } from '@/lib/format';
import { readDatabase, updateDatabase } from '@/lib/server/store';

export type RequestFilters = {
  origin?: string;
  destination?: string;
  date?: string;
};

function matches(value: string, query?: string): boolean {
  if (!query) return true;
  return value.toLowerCase().includes(query.trim().toLowerCase());
}

export async function listRequests(filters: RequestFilters = {}): Promise<RideRequest[]> {
  const database = await readDatabase();

  return database.requests
    .filter((request) => request.status === 'open')
    .filter((request) => isUpcoming(request.departureAt))
    .filter((request) => matches(request.origin, filters.origin) && matches(request.destination, filters.destination))
    .filter((request) => !filters.date || request.departureAt.startsWith(filters.date))
    .sort((a, b) => a.departureAt.localeCompare(b.departureAt));
}

export async function getRequest(id: string): Promise<RideRequest | undefined> {
  const database = await readDatabase();
  return database.requests.find((request) => request.id === id);
}

export type NewRequestInput = {
  passengerName: string;
  passengerPhone: string;
  origin: string;
  destination: string;
  pickupPoint: string;
  departureAt: string;
  seatsNeeded: number;
  pricePerSeat: number;
  notes: string;
};

export async function createRequest(input: NewRequestInput): Promise<RideRequest> {
  return updateDatabase((database) => {
    const request: RideRequest = {
      id: randomUUID(),
      ...input,
      status: 'open',
      createdAt: new Date().toISOString(),
    };

    database.requests.push(request);
    return request;
  });
}
