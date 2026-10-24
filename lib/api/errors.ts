export class ApiError extends Error {
  status: number;
  code?: string;
  details?: unknown;

  constructor(message: string, status = 500, code?: string, details?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

export function normalizeApiError(error: unknown): ApiError {
  if (error instanceof ApiError) return error;
  if (error instanceof Error) return new ApiError(error.message);
  return new ApiError('An unexpected error occurred');
}
