"use client";

import AdminDashboardView from "@/features/admin/admin-dashboard/AdminDashboardView";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminDashboardPage() {
  const { user, loading, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const role = user?.services.find((s) => s.serviceCode === "DASHBOARD");

    if (!loading && isAuthenticated && role?.roleName !== "admin") {
      router.replace("/dashboard/service"); // Redirect kalau bukan admin
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading || !isAuthenticated) return null;

  return <AdminDashboardView />;
}
