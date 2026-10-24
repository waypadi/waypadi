import { apiClient } from './client';

export type CreateRouteRequestInput = {
  origin: string;
  destination: string;
  travelDate?: string;
  preferredTime?: string;
  passengerCount: number;
  pickupDetails?: string;
  notes?: string;
  budget?: number;
};

export async function createRouteRequest(input: CreateRouteRequestInput) {
  return apiClient.post('/route-requests', input);
}

export async function listRouteRequests(params: Record<string, string> = {}) {
  const query = new URLSearchParams(params).toString();
  try {
    const res = await apiClient.get(query ? `/route-requests?${query}` : '/route-requests');
    return Array.isArray(res) ? res : [];
  } catch {
    return [];
  }
}

export async function getRouteRequest(id: string) {
  try {
    return apiClient.get(`/route-requests/${id}`);
  } catch {
    return null;
  }
}

export async function updateRouteRequest(id: string, input: Partial<CreateRouteRequestInput>) {
  return apiClient.patch(`/route-requests/${id}`, input);
}

export async function cancelRouteRequest(id: string) {
  return apiClient.post(`/route-requests/${id}/cancel`);
}
