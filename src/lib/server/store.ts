import { promises as fs } from 'node:fs';
import path from 'node:path';
import type { Database } from '@/lib/domain';
import { seedDatabase } from '@/lib/server/seed';

const dataFile = process.env.WAYPADI_DATA_FILE
  ? path.resolve(process.cwd(), process.env.WAYPADI_DATA_FILE)
  : path.join(process.cwd(), 'data', 'waypadi.json');

let writeQueue: Promise<void> = Promise.resolve();

async function persist(database: Database): Promise<void> {
  await fs.mkdir(path.dirname(dataFile), { recursive: true });
  const temporaryFile = `${dataFile}.${process.pid}.tmp`;
  await fs.writeFile(temporaryFile, `${JSON.stringify(database, null, 2)}\n`, 'utf8');
  await fs.rename(temporaryFile, dataFile);
}

async function load(): Promise<Database> {
  try {
    const raw = await fs.readFile(dataFile, 'utf8');
    const parsed = JSON.parse(raw) as Partial<Database>;
    return {
      rides: Array.isArray(parsed.rides) ? parsed.rides : [],
      requests: Array.isArray(parsed.requests) ? parsed.requests : [],
      bookings: Array.isArray(parsed.bookings) ? parsed.bookings : [],
    };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
    const seeded = seedDatabase();
    await persist(seeded);
    return seeded;
  }
}

/** Read-only access. Safe to call from Server Components. */
export async function readDatabase(): Promise<Database> {
  return load();
}

/**
 * Serialized read-modify-write access. Every mutation runs through one queue so
 * two bookings can never oversell the same seat.
 */
export async function updateDatabase<T>(mutate: (database: Database) => T | Promise<T>): Promise<T> {
  const run = writeQueue.then(async () => {
    const database = await load();
    const result = await mutate(database);
    await persist(database);
    return result;
  });

  writeQueue = run.then(
    () => undefined,
    () => undefined,
  );

  return run;
}
