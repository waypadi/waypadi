export type FormState = {
  status: 'idle' | 'error';
  message: string;
  errors: Record<string, string>;
};

export const emptyFormState: FormState = {
  status: 'idle',
  message: '',
  errors: {},
};

export function errorState(message: string, errors: Record<string, string> = {}): FormState {
  return { status: 'error', message, errors };
}
