import { apiClient } from './client';
import { endpoints } from './endpoints';
import type { ForgotPasswordInput, LoginInput, ProfileInput, RegisterInput, ResetPasswordInput, User } from './schemas/auth';

export type AuthResponse = {
  user: User;
  token?: string;
};

export async function login(input: LoginInput): Promise<AuthResponse> {
  return apiClient.post<AuthResponse>(endpoints.auth.login, input);
}

export async function register(input: RegisterInput): Promise<AuthResponse> {
  return apiClient.post<AuthResponse>(endpoints.auth.register, input);
}

export async function logout(): Promise<void> {
  await apiClient.post(endpoints.auth.logout);
}

export async function getCurrentUser(): Promise<User | null> {
  try {
    const res = await apiClient.get<{ user: User } | User>(endpoints.auth.me);
    if ('user' in res) return res.user;
    return res as User;
  } catch {
    return null;
  }
}

export async function forgotPassword(input: ForgotPasswordInput): Promise<{ message: string }> {
  return apiClient.post<{ message: string }>(endpoints.auth.forgotPassword, input);
}

export async function resetPassword(input: ResetPasswordInput): Promise<{ message: string }> {
  return apiClient.post<{ message: string }>(endpoints.auth.resetPassword, input);
}

export async function getProfile(): Promise<User> {
  return apiClient.get<User>(endpoints.user.profile);
}

export async function updateProfile(input: ProfileInput): Promise<User> {
  return apiClient.patch<User>(endpoints.user.profile, input);
}
