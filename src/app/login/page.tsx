'use client';

import { useAuth } from '@/context/AuthContext';
import LoginPage from '@/features/login/LoginView';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Login() {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && isAuthenticated) {
      router.replace('/dashboard');
    }
  }, [loading, isAuthenticated, router]);

  if (loading || isAuthenticated) {
    return null; // atau loading spinner
  }

  return <LoginPage />;
}
