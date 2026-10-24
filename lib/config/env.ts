import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  WAYPADI_DATA_FILE: z.string().optional(),
  NEXT_PUBLIC_API_BASE_URL: z.string().url().optional(),
});

export type Env = z.infer<typeof envSchema>;

function loadEnv(): Env {
  const parsed = envSchema.safeParse(process.env);
  if (!parsed.success) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error(`Invalid environment variables: ${parsed.error.message}`);
    }
    // In dev, return defaults for missing vars
    return {
      NODE_ENV: (process.env.NODE_ENV as Env['NODE_ENV']) || 'development',
      WAYPADI_DATA_FILE: process.env.WAYPADI_DATA_FILE,
      NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    };
  }
  return parsed.data;
}

export const env = loadEnv();
