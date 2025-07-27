'use client';

import { UserProfileResponse } from '../profile/ProfileModel';
import { useFetcher } from '@/lib/fetcher/fetcher';

export function useServiceService() {
  const { fetcher } = useFetcher();

  const getDetail = async () => {
    return fetcher<UserProfileResponse>(`/profiles/me/detail`, {
      method: 'GET',
      baseUri: "USER_URI",
      auth: true    ,
      autoStopLoading: true
    });
  };

  return { getDetail };
}
