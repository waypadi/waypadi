import { ApiError } from './errors';

type RequestOptions = RequestInit & {
  timeout?: number;
};

export class ApiClient {
  baseUrl: string;

  constructor(baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '') {
    this.baseUrl = baseUrl.replace(/\/$/, '');
  }

  private async request<T>(path: string, options: RequestOptions = {}): Promise<T> {
    const { timeout = 30000, headers, ...rest } = options;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const res = await fetch(`${this.baseUrl}${path}`, {
        ...rest,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        credentials: 'include',
        signal: controller.signal,
      });

      if (!res.ok) {
        let details: unknown;
        try {
          details = await res.json();
        } catch {
          details = await res.text();
        }
        throw new ApiError(`Request failed: ${res.status}`, res.status, undefined, details);
      }

      if (res.status === 204) return undefined as T;
      return res.json() as Promise<T>;
    } catch (error) {
      if (error instanceof ApiError) throw error;
      if ((error as Error).name === 'AbortError') throw new ApiError('Request timeout', 408);
      throw error;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  get<T>(path: string, options?: RequestOptions) {
    return this.request<T>(path, { ...options, method: 'GET' });
  }

  post<T>(path: string, body?: unknown, options?: RequestOptions) {
    return this.request<T>(path, { ...options, method: 'POST', body: body ? JSON.stringify(body) : undefined });
  }

  put<T>(path: string, body?: unknown, options?: RequestOptions) {
    return this.request<T>(path, { ...options, method: 'PUT', body: body ? JSON.stringify(body) : undefined });
  }

  patch<T>(path: string, body?: unknown, options?: RequestOptions) {
    return this.request<T>(path, { ...options, method: 'PATCH', body: body ? JSON.stringify(body) : undefined });
  }

  delete<T>(path: string, options?: RequestOptions) {
    return this.request<T>(path, { ...options, method: 'DELETE' });
  }
}

export const apiClient = new ApiClient();
