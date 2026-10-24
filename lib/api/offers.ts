import { apiClient } from './client';

export type CreateOfferInput = {
  routeRequestId: string;
  tripId?: string;
  fare: number;
  pickupLocation: string;
  availableSeats: number;
  notes?: string;
  expiresAt?: string;
};

export async function createOffer(input: CreateOfferInput) {
  return apiClient.post(`/route-requests/${input.routeRequestId}/offers`, input);
}

export async function getOffersForRequest(routeRequestId: string) {
  try {
    return apiClient.get(`/route-requests/${routeRequestId}/offers`);
  } catch {
    return [];
  }
}

export async function getOffer(id: string) {
  try {
    return apiClient.get(`/offers/${id}`);
  } catch {
    return null;
  }
}

export async function acceptOffer(offerId: string) {
  return apiClient.post(`/offers/${offerId}/accept`);
}

export async function rejectOffer(offerId: string) {
  return apiClient.post(`/offers/${offerId}/reject`);
}

export async function withdrawOffer(offerId: string) {
  return apiClient.post(`/offers/${offerId}/withdraw`);
}
