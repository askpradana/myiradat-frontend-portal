'use client';

import { useAuth } from '@/context/AuthContext';
import LoginPage from '@/features/login/LoginView';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Login() {
  const { isAuthenticated, loading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && isAuthenticated && user) {
      const role = user.services.find(
        (s) => s.serviceCode === 'DASHBOARD'
      );

      if (role?.roleName === 'admin') {
        router.replace('/dashboard/admin');
      } else {
        router.replace('/dashboard/service');
      }
    }
  }, [loading, isAuthenticated, user, router]);

  if (loading || isAuthenticated) {
    return null; // bisa ganti dengan spinner
  }

  return <LoginPage />;
}
