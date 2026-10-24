import { apiClient } from './client';

export type CreateBookingInput = {
  tripId: string;
  seats: number;
};

export async function createBooking(input: CreateBookingInput) {
  return apiClient.post('/bookings', input);
}

export async function getBooking(id: string) {
  try {
    return apiClient.get(`/bookings/${id}`);
  } catch {
    return null;
  }
}

export async function getMyBookings() {
  try {
    return apiClient.get('/users/me/bookings');
  } catch {
    return [];
  }
}

export async function getDriverBookingRequests() {
  try {
    return apiClient.get('/driver/bookings/requests');
  } catch {
    return [];
  }
}

export async function approveBooking(bookingId: string) {
  return apiClient.post(`/bookings/${bookingId}/approve`);
}

export async function rejectBooking(bookingId: string) {
  return apiClient.post(`/bookings/${bookingId}/reject`);
}

export async function cancelBooking(bookingId: string) {
  return apiClient.post(`/bookings/${bookingId}/cancel`);
}
