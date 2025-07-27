'use client';

import { ProfileSummaryResponse } from './DataModel';
import { useFetcher } from '@/lib/fetcher/fetcher';

export function useDataService() {
  const { fetcher } = useFetcher();

  const getDetail = async () => {
    return fetcher<ProfileSummaryResponse>(`/profiles/me/summary`, {
      method: 'GET',
      baseUri: "USER_URI",
      auth: true    ,
      autoStopLoading: true
    });
  };

  return { getDetail };
}
