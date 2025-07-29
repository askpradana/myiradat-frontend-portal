"use client";

import { useEffect, useState } from "react";
import { useServiceService } from "./ServiceService";
import { UserProfileResponse } from "@/features/user/profile/ProfileModel";
import { useLoading } from "@/context/LoadingContext";
import { useModal } from "@/context/ModalContext";

export function useServiceViewModel() {
  const { getDetail } = useServiceService();
  const { setLoading } = useLoading();
  const { showError } = useModal();
  const [data, setData] = useState<UserProfileResponse["data"] | null>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      try {
        const response = await getDetail();
        setData(response.data);
      } catch (err: unknown) {
        let message = "Failed to load service detail. Please try again.";
        if (err instanceof Error) {
          message = err.message;
        }
        showError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data };
}
