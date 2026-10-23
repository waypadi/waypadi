'use client';

import { useActionState, useState } from 'react';
import { Field, SelectInput, TextInput } from '@/components/ui/field';
import { FormMessage } from '@/components/ui/form-message';
import { SubmitButton } from '@/components/ui/submit-button';
import { bookRideAction } from '@/features/rides/actions';
import { emptyFormState } from '@/lib/form-state';
import { formatNaira } from '@/lib/format';

type BookingFormProps = {
  rideId: string;
  seatsAvailable: number;
  pricePerSeat: number;
};

export function BookingForm({ rideId, seatsAvailable, pricePerSeat }: BookingFormProps) {
  const [state, formAction] = useActionState(bookRideAction, emptyFormState);
  const maxSeats = Math.min(seatsAvailable, 8);
  const [seats, setSeats] = useState(1);

  if (seatsAvailable === 0) {
    return (
      <div className="rounded-xl border border-[#e8e0d5] bg-[#f6f1e9] px-4 py-3 text-[11px] font-semibold text-[#877867]">
        This ride is full. Browse other departures to find a seat.
      </div>
    );
  }

  return (
    <form action={formAction} className="grid gap-3" noValidate>
      <input type="hidden" name="rideId" value={rideId} />

      <Field label="Your name" error={state.errors.passengerName}>
        <TextInput name="passengerName" placeholder="e.g. Ngozi O." autoComplete="name" required />
      </Field>
      <Field label="Phone number" error={state.errors.passengerPhone} hint="The driver uses this to reach you.">
        <TextInput name="passengerPhone" type="tel" placeholder="0805 000 0000" autoComplete="tel" required />
      </Field>
      <Field label="Seats" error={state.errors.seats}>
        <SelectInput
          name="seats"
          value={seats}
          onChange={(event) => setSeats(Number.parseInt(event.target.value, 10))}
        >
          {Array.from({ length: maxSeats }, (_, index) => index + 1).map((count) => (
            <option key={count} value={count}>
              {count === 1 ? '1 seat' : `${count} seats`}
            </option>
          ))}
        </SelectInput>
      </Field>

      <div className="flex items-center justify-between rounded-xl border border-[#f1e8db] bg-[#fbf7ef] px-3 py-2.5">
        <span className="text-[10px] font-semibold uppercase tracking-[1px] text-[#958777]">Total at pickup</span>
        <strong className="font-display text-[16px] font-bold">{formatNaira(seats * pricePerSeat)}</strong>
      </div>

      <SubmitButton className="w-full" pendingLabel="Reserving seat…">
        Reserve seat <span aria-hidden="true">→</span>
      </SubmitButton>
      <p className="m-0 text-[10px] leading-[1.6] text-[#9a8b79]">
        No online payment yet — agree the fare with your driver at pickup.
      </p>
      <FormMessage state={state} />
    </form>
  );
}
