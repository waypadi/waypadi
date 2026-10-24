import { apiClient } from './client';
import { z } from 'zod';

export const tripSchema = z.object({
  id: z.string(),
  origin: z.string(),
  destination: z.string(),
  departureAt: z.string(),
  pricePerSeat: z.number(),
  seatsAvailable: z.number(),
  seatsTotal: z.number().optional(),
  driverName: z.string().optional(),
  vehicle: z.string().optional(),
  pickupPoint: z.string().optional(),
});

export type Trip = z.infer<typeof tripSchema>;

export type TripSearchParams = {
  origin?: string;
  destination?: string;
  date?: string;
  passengers?: number;
  page?: number;
  limit?: number;
};

export async function searchTrips(params: TripSearchParams): Promise<{ trips: Trip[]; total?: number }> {
  const query = new URLSearchParams();
  if (params.origin) query.set('origin', params.origin);
  if (params.destination) query.set('destination', params.destination);
  if (params.date) query.set('date', params.date);
  if (params.passengers) query.set('passengers', String(params.passengers));
  if (params.page) query.set('page', String(params.page));
  if (params.limit) query.set('limit', String(params.limit));

  try {
    const res = await apiClient.get<{ trips: Trip[]; total?: number } | Trip[]>(`/trips?${query.toString()}`);
    if (Array.isArray(res)) return { trips: res };
    return res;
  } catch {
    return { trips: [] };
  }
}

export async function getTrip(id: string): Promise<Trip | null> {
  try {
    return apiClient.get<Trip>(`/trips/${id}`);
  } catch {
    return null;
  }
}
