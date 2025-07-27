"use client";

import { useCallback } from "react";
import { ListProfilesRequest, ListProfilesResponse } from "./AdminDashboardModel";
import { useFetcher } from "@/lib/fetcher/fetcher";

export function useAdminDashboardService() {
  const { fetcher } = useFetcher();

  const listProfiles = useCallback(async (req: ListProfilesRequest) => {
    return fetcher<ListProfilesResponse>(`/profiles/list`, {
      method: "POST",
      body: req,
      baseUri: "USER_URI",
      auth: true,
      disableLoading: true
    });
  }, [fetcher]);

  return { listProfiles };
}
