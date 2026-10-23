export function getString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

export function getInteger(formData: FormData, key: string): number {
  const value = getString(formData, key);
  if (!value) return Number.NaN;
  return Number.parseInt(value, 10);
}

export function isPhoneNumber(value: string): boolean {
  const digits = value.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15;
}

export function isDateTimeInput(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(value);
}

export function maxLength(value: string, limit: number): string {
  return value.slice(0, limit);
}
