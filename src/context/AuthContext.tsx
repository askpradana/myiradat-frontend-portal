"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"
import { getAccessToken, saveTokens, clearTokens } from "@/lib/token"

type Role = {
  serviceName: string
  roleName: string
}

type AuthUser = {
  email: string
  services: Role[]
}

type AuthContextType = {
  user: AuthUser | null
  login: (accessToken: string, refreshToken: string) => void
  logout: () => void
  isAuthenticated: boolean
  loading: boolean
}

type MyJwtPayload = {
  email: string
  services: {
    serviceName: string
    roleName: string
  }[]
  exp: number
  iat: number
  iss: string
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  const login = (accessToken: string, refreshToken: string) => {
    saveTokens(accessToken, refreshToken)

    const decoded = jwtDecode<MyJwtPayload>(accessToken)
    setUser({
      email: decoded.email,
      services: decoded.services,
    })
  }

  const logout = () => {
    clearTokens()
    setUser(null)
  }

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


  const isAuthenticated = !!user
  // const isAuthenticated = true

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
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used inside AuthProvider")
  return context
}
