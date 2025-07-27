'use client';

import { LoginFormData, LoginResponse } from './LoginModel';
import { useFetcher } from '@/lib/fetcher/fetcher';

export function useLoginService() {
  const { fetcher } = useFetcher();

  const login = async (payload: LoginFormData) => {
    return fetcher<LoginResponse>(`/auth/login`, {
      method: 'POST',
      body: payload,
      auth: false,
      autoStopLoading: false,
      baseUri: "AUTH_URI"
    });
  };

  return { login };
}
