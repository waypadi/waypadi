# WayPadi

WayPadi's Next.js App Router foundation, organized by product feature.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```text
src/
  app/                  # Next.js routes, root layout, and global styles
  components/
    site/                # Shared site header and footer
    ui/                  # Small reusable brand and button components
  features/
    home/                # Homepage composition and feature-specific sections
```

The homepage is a visual foundation. Ride search and passenger-request submission are not connected to a WayPadi API yet.
