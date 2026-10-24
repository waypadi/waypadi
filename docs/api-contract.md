# WayPadi API Contract

_Last updated: Phase 00_

## Data models (current)

### RideOffer
```ts
{
  id: string;
  driverName: string;
  driverPhone: string;
  vehicle: string;
  origin: string;
  destination: string;
  pickupPoint: string;
  departureAt: string; // YYYY-MM-DDTHH:mm (Lagos wall-clock)
  seatsTotal: number;
  seatsAvailable: number;
  pricePerSeat: number;
  notes: string;
  requestId?: string;
  createdAt: string; // ISO
}
```

### RideRequest
```ts
{
  id: string;
  passengerName: string;
  passengerPhone: string;
  origin: string;
  destination: string;
  pickupPoint: string;
  departureAt: string; // YYYY-MM-DDTHH:mm
  seatsNeeded: number;
  pricePerSeat: number;
  notes: string;
  status: 'open' | 'matched';
  matchedRideId?: string;
  createdAt: string; // ISO
}
```

### Booking
```ts
{
  id: string;
  rideId: string;
  passengerName: string;
  passengerPhone: string;
  seats: number;
  createdAt: string; // ISO
}
```

## Errors
- Validation errors returned via `FormState` with field-level errors
- Booking failures: `'missing' | 'full'`
- No structured API error codes yet (no external API)

## Pagination
- Not implemented

## Status enums
- RideRequest.status: `open | matched`
- Booking states: implicit via existence (no status enum yet)

## Notes
- This is the in-repo contract. If backend is external, replace with actual OpenAPI schemas.
- All mutations go through serialized queue to prevent overselling.
- Times are treated as Lagos wall-clock strings.
