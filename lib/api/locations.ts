import { apiClient } from './client';
import { z } from 'zod';

export const locationSchema = z.object({
  id: z.string(),
  name: z.string(),
  address: z.string().optional(),
  lat: z.number().optional(),
  lng: z.number().optional(),
});

export type Location = z.infer<typeof locationSchema>;

export async function searchLocations(query: string): Promise<Location[]> {
  if (!query.trim()) return [];
  try {
    return apiClient.get<Location[]>('/locations/search', { body: undefined } as any);
  } catch {
    return [];
  }
}
