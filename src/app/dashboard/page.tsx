"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";

export default function DashboardPage() {
  const router = useRouter();
  const { showSuccess } = useModal();

  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/");
    }
      showSuccess("BERHASIL")
  }, [isAuthenticated]);

  if (!isAuthenticated) return null; // or loading spinner

  return (
    <div>
      <h1>Welcome, {user?.email}</h1>
      {/* Protected content */}
    </div>
  );
}
