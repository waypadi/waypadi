# WayPadi API Endpoint Inventory

_Last updated: Phase 00 (repository inspection)_

This frontend currently uses **Next.js Server Actions** and a **file-backed JSON store** (`data/waypadi.json`) for all ride/request/booking operations. No external REST/GraphQL API is wired yet.

## Discovered API surface (current implementation)

| Area | Method/Mechanism | Endpoint/Path | Auth | Consumed by | Notes |
|---|---|---|---|---|---|
| Rides list | Server Component read | `lib/server/rides.ts::listRides` | None | `/rides` | Filters by origin/destination/date, filters upcoming |
| Ride detail | Server Component read | `lib/server/rides.ts::getRide` | None | `/rides/[id]` | Returns ride or undefined |
| Create ride | Server Action | `features/rides/actions.ts::createRideAction` | None (no auth yet) | `/rides/new` | Validates, creates ride, optionally marks request matched, redirects |
| Book ride | Server Action | `features/rides/actions.ts::bookRideAction` | None (no auth yet) | `/rides/[id]` booking form | Serializes via store write queue, decrements seats atomically in queue |
| Requests list | Server Component read | `lib/server/requests.ts::listRequests` | None | `/requests` | Filters open + upcoming |
| Request detail | Server Component read | `lib/server/requests.ts::getRequest` | None | `/rides/new?request=...` | Prefills offer form |
| Create request | Server Action | `features/requests/actions.ts::createRequestAction` | None (no auth yet) | `/requests/new` | Validates, creates open request, redirects |

## Missing / to be discovered

- Authentication endpoints (login/register/session) — **not implemented**
- Backend REST API (if exists separately) — **not found in this repo**
- Admin endpoints — **not implemented**
- Payments — **not implemented**
- Notifications — **not implemented**
- File uploads — **not implemented**

## Action items

1. If a separate backend repo exists, clone/inspect it to populate real endpoints.
2. If backend lives elsewhere, add `NEXT_PUBLIC_API_BASE_URL` and wire `lib/api/client.ts`.
3. Replace Server Actions direct store calls with API calls once contract is known, or keep as-is if backend is Next.js API routes.
4. Add auth/session integration when backend auth is identified.
