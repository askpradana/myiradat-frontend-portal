"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
  const router = useRouter();

  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) return null; // or loading spinner

  return (
    <div>
      <h1>Welcome, {user?.email}</h1>
      {/* Protected content */}
    </div>
  );
}
