"use client";

import { useCallback } from "react";
import { GetProfileByIdReq } from "./DetailUserModel";
import {UserProfileResponse} from "@/features/user/profile/ProfileModel"
import { useFetcher } from "@/lib/fetcher/fetcher";

export function useDetailUserService() {
  const { fetcher } = useFetcher();

  const getDetailUser = useCallback(async (req: GetProfileByIdReq) => {
    return fetcher<UserProfileResponse>(`/profiles/detail-by-id`, {
      method: "POST",
      body: req,
      baseUri: "USER_URI",
      auth: true,
    });
  }, [fetcher]);

  return { getDetailUser };
}
