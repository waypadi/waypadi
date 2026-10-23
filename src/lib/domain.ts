export type RideOffer = {
  id: string;
  driverName: string;
  driverPhone: string;
  vehicle: string;
  origin: string;
  destination: string;
  pickupPoint: string;
  /** Lagos wall-clock time in `YYYY-MM-DDTHH:mm` format. */
  departureAt: string;
  seatsTotal: number;
  seatsAvailable: number;
  pricePerSeat: number;
  notes: string;
  requestId?: string;
  createdAt: string;
};

export type RideRequest = {
  id: string;
  passengerName: string;
  passengerPhone: string;
  origin: string;
  destination: string;
  pickupPoint: string;
  /** Lagos wall-clock time in `YYYY-MM-DDTHH:mm` format. */
  departureAt: string;
  seatsNeeded: number;
  pricePerSeat: number;
  notes: string;
  status: 'open' | 'matched';
  matchedRideId?: string;
  createdAt: string;
};

export type Booking = {
  id: string;
  rideId: string;
  passengerName: string;
  passengerPhone: string;
  seats: number;
  createdAt: string;
};

export type Database = {
  rides: RideOffer[];
  requests: RideRequest[];
  bookings: Booking[];
};

export const POPULAR_ROUTES = [
  { label: 'Lekki → Victoria Island', origin: 'Lekki Phase 1', destination: 'Victoria Island' },
  { label: 'Yaba → Lekki', origin: 'Yaba', destination: 'Lekki Phase 1' },
  { label: 'Ikeja → VI', origin: 'Ikeja', destination: 'Victoria Island' },
];
