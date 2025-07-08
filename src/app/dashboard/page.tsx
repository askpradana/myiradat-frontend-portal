"use client";

import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {

  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome, {user?.email}</h1>
    </div>
  );
}
