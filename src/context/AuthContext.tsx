"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { getAccessToken, saveTokens, clearTokens } from "@/lib/token";
import { useLogoutService } from "@/lib/fetcher/LogoutService";
import { useRouter } from "next/navigation";

type Role = {
  serviceCode: string;
  roleName: string;
};

type AuthUser = {
  email: string;
  services: Role[];
};

type AuthContextType = {
  user: AuthUser | null;
  login: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
};

export type MyJwtPayload = {
  email: string;
  services: {
    serviceCode: string;
    roleName: string;
  }[];
  exp: number;
  iat: number;
  iss: string;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const { logout: logoutApi } = useLogoutService();
  const router = useRouter();

  const login = (accessToken: string, refreshToken: string) => {
    saveTokens(accessToken, refreshToken);
    const decoded = jwtDecode<MyJwtPayload>(accessToken);
    setUser({
      email: decoded.email,
      services: decoded.services,
    });
  };

  const logout = async () => {
    try {
      await logoutApi(); // panggil API /auth/logout
    } catch (err) {
      console.error("Logout API failed", err);
    } finally {
      clearTokens(); // hapus dari localStorage
      setUser(null);
      router.push("/login"); // redirect ke halaman login
    }
  };

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      try {
        const decoded: MyJwtPayload = jwtDecode(token);
        setUser({
          email: decoded.email,
          services: decoded.services,
        });
      } catch {
        clearTokens();
        setUser(null);
      }
    } else {
      setUser(null);
    }

    setLoading(false);
  }, []);

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
