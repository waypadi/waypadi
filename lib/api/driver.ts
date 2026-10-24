import { apiClient } from './client';

export type CreateTripInput = {
  origin: string;
  destination: string;
  departureAt: string;
  pickupPoint?: string;
  dropoffPoint?: string;
  seatsTotal: number;
  pricePerSeat: number;
  vehicleId?: string;
  notes?: string;
};

export async function createTrip(input: CreateTripInput) {
  return apiClient.post('/trips', input);
}

export async function getMyTrips() {
  try {
    return apiClient.get('/users/me/trips');
  } catch {
    return [];
  }
}

export async function updateTrip(id: string, input: Partial<CreateTripInput>) {
  return apiClient.patch(`/trips/${id}`, input);
}

export async function cancelTrip(id: string) {
  return apiClient.post(`/trips/${id}/cancel`);
}
