'use client'

import { createContext, useContext } from 'react'
import { Modal, message } from 'antd'

type ModalContextType = {
  success: (msg: string) => void
  error: (msg: string) => void
  confirm: (options: { title: string; onOk: () => void }) => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const success = (msg: string) => message.success(msg)
  const error = (msg: string) => message.error(msg)
  const confirm = ({ title, onOk }: { title: string; onOk: () => void }) => {
    Modal.confirm({
      title,
      onOk,
    })
  }

  return (
    <ModalContext.Provider value={{ success, error, confirm }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) throw new Error('useModal must be used in ModalProvider')
  return context
}
