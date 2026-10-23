'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { errorState, type FormState } from '@/lib/form-state';
import { lagosNow } from '@/lib/format';
import { bookRide, createRide, getRide } from '@/lib/server/rides';
import { getInteger, getString, isDateTimeInput, isPhoneNumber, maxLength } from '@/lib/validation';

export async function createRideAction(_previous: FormState, formData: FormData): Promise<FormState> {
  const driverName = maxLength(getString(formData, 'driverName'), 80);
  const driverPhone = maxLength(getString(formData, 'driverPhone'), 30);
  const vehicle = maxLength(getString(formData, 'vehicle'), 80);
  const origin = maxLength(getString(formData, 'origin'), 100);
  const destination = maxLength(getString(formData, 'destination'), 100);
  const pickupPoint = maxLength(getString(formData, 'pickupPoint'), 160);
  const departureAt = getString(formData, 'departureAt');
  const seatsTotal = getInteger(formData, 'seatsTotal');
  const pricePerSeat = getInteger(formData, 'pricePerSeat');
  const notes = maxLength(getString(formData, 'notes'), 400);
  const requestId = getString(formData, 'requestId') || undefined;
  const errors: Record<string, string> = {};

  if (!driverName) errors.driverName = 'Add the name riders should see.';
  if (!isPhoneNumber(driverPhone)) errors.driverPhone = 'Add a phone number riders can reach.';
  if (!origin) errors.origin = 'Where does the ride leave from?';
  if (!destination) errors.destination = 'Where is the ride going?';
  if (origin && destination && origin.toLowerCase() === destination.toLowerCase()) {
    errors.destination = 'Departure and destination must be different.';
  }
  if (!pickupPoint) errors.pickupPoint = 'Add the exact pickup joint.';
  if (!isDateTimeInput(departureAt)) {
    errors.departureAt = 'Choose the takeoff date and time.';
  } else if (departureAt <= lagosNow()) {
    errors.departureAt = 'Choose a time in the future.';
  }
  if (!Number.isFinite(seatsTotal) || seatsTotal < 1 || seatsTotal > 8) {
    errors.seatsTotal = 'Offer between 1 and 8 seats.';
  }
  if (!Number.isFinite(pricePerSeat) || pricePerSeat < 0 || pricePerSeat > 1_000_000) {
    errors.pricePerSeat = 'Set a price per seat from ₦0 upwards.';
  }

  if (Object.keys(errors).length > 0) {
    return errorState('Please check the highlighted fields and try again.', errors);
  }

  const ride = await createRide({
    driverName,
    driverPhone,
    vehicle,
    origin,
    destination,
    pickupPoint,
    departureAt,
    seatsTotal,
    pricePerSeat,
    notes,
    requestId,
  });

  revalidatePath('/');
  revalidatePath('/rides');
  revalidatePath('/requests');
  redirect(`/rides/${ride.id}?posted=1`);
}

export async function bookRideAction(_previous: FormState, formData: FormData): Promise<FormState> {
  const rideId = getString(formData, 'rideId');
  const passengerName = maxLength(getString(formData, 'passengerName'), 80);
  const passengerPhone = maxLength(getString(formData, 'passengerPhone'), 30);
  const seats = getInteger(formData, 'seats');
  const errors: Record<string, string> = {};

  const ride = await getRide(rideId);
  if (!ride) {
    return errorState('That ride is no longer available. Browse other departures instead.');
  }

  if (!passengerName) errors.passengerName = 'Add the name the driver should expect.';
  if (!isPhoneNumber(passengerPhone)) errors.passengerPhone = 'Add a phone number the driver can reach.';
  if (!Number.isFinite(seats) || seats < 1 || seats > ride.seatsAvailable) {
    errors.seats = ride.seatsAvailable === 0
      ? 'This ride is now full.'
      : `Choose between 1 and ${ride.seatsAvailable} seats.`;
  }

  if (Object.keys(errors).length > 0) {
    return errorState('Please check the highlighted fields and try again.', errors);
  }

  const result = await bookRide({ rideId, passengerName, passengerPhone, seats });
  if (!result.ok) {
    return errorState(
      result.reason === 'full'
        ? 'Those seats were just taken. Try another departure.'
        : 'That ride is no longer available. Browse other departures instead.',
    );
  }

  revalidatePath('/');
  revalidatePath('/rides');
  revalidatePath(`/rides/${rideId}`);
  redirect(`/rides/${rideId}?booked=1`);
}
