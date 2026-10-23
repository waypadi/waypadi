import { randomUUID } from 'node:crypto';
import type { Booking, RideOffer } from '@/lib/domain';
import { isUpcoming } from '@/lib/format';
import { readDatabase, updateDatabase } from '@/lib/server/store';

export type RideFilters = {
  origin?: string;
  destination?: string;
  date?: string;
};

function matches(value: string, query?: string): boolean {
  if (!query) return true;
  return value.toLowerCase().includes(query.trim().toLowerCase());
}

export async function listRides(filters: RideFilters = {}): Promise<RideOffer[]> {
  const database = await readDatabase();

  return database.rides
    .filter((ride) => isUpcoming(ride.departureAt))
    .filter((ride) => matches(ride.origin, filters.origin) && matches(ride.destination, filters.destination))
    .filter((ride) => !filters.date || ride.departureAt.startsWith(filters.date))
    .sort((a, b) => a.departureAt.localeCompare(b.departureAt));
}

export async function getRide(id: string): Promise<RideOffer | undefined> {
  const database = await readDatabase();
  return database.rides.find((ride) => ride.id === id);
}

export type NewRideInput = {
  driverName: string;
  driverPhone: string;
  vehicle: string;
  origin: string;
  destination: string;
  pickupPoint: string;
  departureAt: string;
  seatsTotal: number;
  pricePerSeat: number;
  notes: string;
  requestId?: string;
};

export async function createRide(input: NewRideInput): Promise<RideOffer> {
  return updateDatabase((database) => {
    const ride: RideOffer = {
      id: randomUUID(),
      driverName: input.driverName,
      driverPhone: input.driverPhone,
      vehicle: input.vehicle,
      origin: input.origin,
      destination: input.destination,
      pickupPoint: input.pickupPoint,
      departureAt: input.departureAt,
      seatsTotal: input.seatsTotal,
      seatsAvailable: input.seatsTotal,
      pricePerSeat: input.pricePerSeat,
      notes: input.notes,
      createdAt: new Date().toISOString(),
      ...(input.requestId ? { requestId: input.requestId } : {}),
    };

    database.rides.push(ride);

    if (input.requestId) {
      const request = database.requests.find((entry) => entry.id === input.requestId);
      if (request) {
        request.status = 'matched';
        request.matchedRideId = ride.id;
      }
    }

    return ride;
  });
}

export type NewBookingInput = {
  rideId: string;
  passengerName: string;
  passengerPhone: string;
  seats: number;
};

export type BookingResult =
  | { ok: true; booking: Booking }
  | { ok: false; reason: 'missing' | 'full' };

export async function bookRide(input: NewBookingInput): Promise<BookingResult> {
  return updateDatabase((database) => {
    const ride = database.rides.find((entry) => entry.id === input.rideId);

    if (!ride) return { ok: false, reason: 'missing' };
    if (ride.seatsAvailable < input.seats) return { ok: false, reason: 'full' };

    ride.seatsAvailable -= input.seats;

    const booking: Booking = {
      id: randomUUID(),
      rideId: ride.id,
      passengerName: input.passengerName,
      passengerPhone: input.passengerPhone,
      seats: input.seats,
      createdAt: new Date().toISOString(),
    };

    database.bookings.push(booking);
    return { ok: true, booking };
  });
}
