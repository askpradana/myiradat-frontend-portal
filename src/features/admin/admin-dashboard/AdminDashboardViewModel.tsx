"use client";

import { useState, useEffect } from "react";
import { useModal } from "@/context/ModalContext";
import { useAdminDashboardService } from "./AdminDashboardService";
import { PaginatedResponse, Profile } from "./AdminDashboardModel";

export function useAdminDashboardViewModel(
  initialParams = { search: "", page: 1, pageSize: 10 }
) {
  const { listProfiles } = useAdminDashboardService();
  const { showError } = useModal();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<PaginatedResponse<Profile> | null>(null);
  const [params, setParams] = useState(initialParams);
  const [localSearch, setLocalSearch] = useState(initialParams.search);

  useEffect(() => {
    const fetchProfiles = async () => {
      setLoading(true);
      try {
        const res = await listProfiles(params);
        setData(res.data);
      } catch (err) {
        let message = "Gagal memuat daftar profil.";
        if (err instanceof Error) message = err.message;
        showError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchChange = (value: string) => {
    setLocalSearch(value); // hanya ubah input, tidak fetch
  };

  const handleSearchSubmit = () => {
    setParams((prev) => ({
      ...prev,
      search: localSearch,
      page: 1, // reset ke page pertama
    }));
  };

  const handlePageChange = (page: number, pageSize?: number) => {
    setParams((prev) => ({
      ...prev,
      page,
      pageSize: pageSize || prev.pageSize,
    }));
  };

  return {
    data,
    params,
    loading,
    localSearch,
    handleSearchChange,
    handleSearchSubmit,
    handlePageChange,
  };
}

