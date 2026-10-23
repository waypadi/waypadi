'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { errorState, type FormState } from '@/lib/form-state';
import { lagosNow } from '@/lib/format';
import { createRequest } from '@/lib/server/requests';
import { getInteger, getString, isDateTimeInput, isPhoneNumber, maxLength } from '@/lib/validation';

export async function createRequestAction(_previous: FormState, formData: FormData): Promise<FormState> {
  const passengerName = maxLength(getString(formData, 'passengerName'), 80);
  const passengerPhone = maxLength(getString(formData, 'passengerPhone'), 30);
  const origin = maxLength(getString(formData, 'origin'), 100);
  const destination = maxLength(getString(formData, 'destination'), 100);
  const pickupPoint = maxLength(getString(formData, 'pickupPoint'), 160);
  const departureAt = getString(formData, 'departureAt');
  const seatsNeeded = getInteger(formData, 'seatsNeeded');
  const pricePerSeat = getInteger(formData, 'pricePerSeat');
  const notes = maxLength(getString(formData, 'notes'), 400);
  const errors: Record<string, string> = {};

  if (!passengerName) errors.passengerName = 'Add your name so drivers know who is travelling.';
  if (!isPhoneNumber(passengerPhone)) errors.passengerPhone = 'Add a phone number drivers can reach.';
  if (!origin) errors.origin = 'Where are you leaving from?';
  if (!destination) errors.destination = 'Where are you going?';
  if (origin && destination && origin.toLowerCase() === destination.toLowerCase()) {
    errors.destination = 'Departure and destination must be different.';
  }
  if (!pickupPoint) errors.pickupPoint = 'Add the pickup joint that works for you.';
  if (!isDateTimeInput(departureAt)) {
    errors.departureAt = 'Choose the earliest time you can leave.';
  } else if (departureAt <= lagosNow()) {
    errors.departureAt = 'Choose a time in the future.';
  }
  if (!Number.isFinite(seatsNeeded) || seatsNeeded < 1 || seatsNeeded > 8) {
    errors.seatsNeeded = 'Choose between 1 and 8 seats.';
  }
  if (!Number.isFinite(pricePerSeat) || pricePerSeat < 0 || pricePerSeat > 1_000_000) {
    errors.pricePerSeat = 'Say what you can pay per seat, from ₦0 upwards.';
  }

  if (Object.keys(errors).length > 0) {
    return errorState('Please check the highlighted fields and try again.', errors);
  }

  await createRequest({
    passengerName,
    passengerPhone,
    origin,
    destination,
    pickupPoint,
    departureAt,
    seatsNeeded,
    pricePerSeat,
    notes,
  });

  revalidatePath('/');
  revalidatePath('/requests');
  redirect('/requests?posted=1');
}
