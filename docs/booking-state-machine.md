# Booking State Machine (to be confirmed against backend)

This is a placeholder until the backend enum is inspected. Candidate states:
- pending_approval
- awaiting_payment
- confirmed
- rejected
- cancelled
- payment_failed
- expired

Rules (per spec):
1. Creating a booking request does not confirm it.
2. Driver must approve.
3. Passenger must complete online payment and backend must verify before confirmed.
4. Frontend must display authoritative status.
5. Conflicts/duplicates handled by backend.
6. Cancellation/refund per backend rules.

No assumptions made - UI must map to actual backend states.
