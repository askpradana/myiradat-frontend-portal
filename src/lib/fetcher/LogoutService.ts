'use client';

import { useFetcher } from './fetcher';

export function useLogoutService() {
  const { fetcher } = useFetcher();

  const logout = async () => {
    return fetcher('/auth/logout', {
      method: 'POST',
      auth: true,
    });
  };

  return { logout };
}
