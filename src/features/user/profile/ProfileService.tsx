'use client';

import { UserProfileResponse } from './ProfileModel';
import { useFetcher } from '@/lib/fetcher/fetcher';

export function useProfileService() {
  const { fetcher } = useFetcher();

  const getDetail = async () => {
    return fetcher<UserProfileResponse>(`/profiles/me/detail`, {
      method: 'GET',
      baseUri: "USER_URI",
      auth: true,
    });
  };

  return { getDetail };
}
