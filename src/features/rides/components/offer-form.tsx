'use client';

import { useActionState } from 'react';
import { Field, SelectInput, TextArea, TextInput } from '@/components/ui/field';
import { FormMessage } from '@/components/ui/form-message';
import { SubmitButton } from '@/components/ui/submit-button';
import { cardClass } from '@/components/ui/surface';
import { createRideAction } from '@/features/rides/actions';
import type { RideRequest } from '@/lib/domain';
import { emptyFormState } from '@/lib/form-state';

type OfferDefaults = {
  origin?: string;
  destination?: string;
  pickupPoint?: string;
  departureAt?: string;
  pricePerSeat?: string;
  seatsTotal?: string;
};

type OfferFormProps = {
  minDeparture: string;
  request?: RideRequest;
  defaults?: OfferDefaults;
};

export function OfferForm({ minDeparture, request, defaults = {} }: OfferFormProps) {
  const [state, formAction] = useActionState(createRideAction, emptyFormState);

  return (
    <form action={formAction} className={`${cardClass} p-5 max-[760px]:p-4`} noValidate>
      {request && <input type="hidden" name="requestId" value={request.id} />}

      <div className="grid gap-3 min-[700px]:grid-cols-2">
        <Field label="Driver name" error={state.errors.driverName}>
          <TextInput name="driverName" placeholder="e.g. Tunde A." autoComplete="name" required />
        </Field>
        <Field label="Phone number" error={state.errors.driverPhone} hint="Shared with riders after they book.">
          <TextInput name="driverPhone" type="tel" placeholder="0803 000 0000" autoComplete="tel" required />
        </Field>

        <Field label="Leaving from" error={state.errors.origin}>
          <TextInput
            name="origin"
            placeholder="e.g. Lekki Phase 1"
            defaultValue={defaults.origin ?? request?.origin ?? ''}
            autoComplete="off"
            required
          />
        </Field>
        <Field label="Going to" error={state.errors.destination}>
          <TextInput
            name="destination"
            placeholder="e.g. Victoria Island"
            defaultValue={defaults.destination ?? request?.destination ?? ''}
            autoComplete="off"
            required
          />
        </Field>

        <Field label="Pickup joint" error={state.errors.pickupPoint} hint="Be specific so riders can find you." className="min-[700px]:col-span-2">
          <TextInput
            name="pickupPoint"
            placeholder="e.g. Admiralty Way, by the roundabout"
            defaultValue={defaults.pickupPoint ?? request?.pickupPoint ?? ''}
            autoComplete="off"
            required
          />
        </Field>

        <Field label="Takeoff time" error={state.errors.departureAt}>
          <TextInput
            name="departureAt"
            type="datetime-local"
            min={minDeparture}
            defaultValue={defaults.departureAt ?? request?.departureAt ?? ''}
            required
          />
        </Field>
        <Field label="Price per seat (₦)" error={state.errors.pricePerSeat}>
          <TextInput
            name="pricePerSeat"
            type="number"
            inputMode="numeric"
            min={0}
            step={50}
            placeholder="1500"
            defaultValue={defaults.pricePerSeat ?? (request ? String(request.pricePerSeat) : '')}
            required
          />
        </Field>

        <Field label="Seats available" error={state.errors.seatsTotal}>
          <SelectInput
            name="seatsTotal"
            defaultValue={defaults.seatsTotal ?? (request ? String(request.seatsNeeded) : '3')}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((seats) => (
              <option key={seats} value={seats}>
                {seats === 1 ? '1 seat' : `${seats} seats`}
              </option>
            ))}
          </SelectInput>
        </Field>
        <Field label="Vehicle (optional)" error={state.errors.vehicle}>
          <TextInput name="vehicle" placeholder="e.g. Toyota Corolla · Silver" autoComplete="off" />
        </Field>

        <Field label="Notes for riders (optional)" error={state.errors.notes} className="min-[700px]:col-span-2">
          <TextArea name="notes" rows={3} placeholder="Bags, AC, pickup flexibility, anything useful." />
        </Field>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <SubmitButton pendingLabel="Publishing ride…">
          Publish ride <span aria-hidden="true">→</span>
        </SubmitButton>
        <p className="m-0 text-[10px] text-[#9a8b79]">You can be reached by riders who book a seat.</p>
      </div>
      <FormMessage state={state} />
    </form>
  );
}
