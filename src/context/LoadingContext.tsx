'use client'

import { createContext, useContext, useState } from 'react'

type LoadingContextType = {
  loading: boolean
  setLoading: (state: boolean) => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false)

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (!context) throw new Error('useLoading must be used in LoadingProvider')
  return context
}
