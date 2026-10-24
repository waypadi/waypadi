import { z } from 'zod';

export const rideOfferSchema = z.object({
  id: z.string(),
  driverName: z.string(),
  driverPhone: z.string(),
  vehicle: z.string(),
  origin: z.string(),
  destination: z.string(),
  pickupPoint: z.string(),
  departureAt: z.string(),
  seatsTotal: z.number(),
  seatsAvailable: z.number(),
  pricePerSeat: z.number(),
  notes: z.string(),
  requestId: z.string().optional(),
  createdAt: z.string(),
});

export const rideRequestSchema = z.object({
  id: z.string(),
  passengerName: z.string(),
  passengerPhone: z.string(),
  origin: z.string(),
  destination: z.string(),
  pickupPoint: z.string(),
  departureAt: z.string(),
  seatsNeeded: z.number(),
  pricePerSeat: z.number(),
  notes: z.string(),
  status: z.enum(['open', 'matched']),
  matchedRideId: z.string().optional(),
  createdAt: z.string(),
});

export const bookingSchema = z.object({
  id: z.string(),
  rideId: z.string(),
  passengerName: z.string(),
  passengerPhone: z.string(),
  seats: z.number(),
  createdAt: z.string(),
});

export type RideOffer = z.infer<typeof rideOfferSchema>;
export type RideRequest = z.infer<typeof rideRequestSchema>;
export type Booking = z.infer<typeof bookingSchema>;
