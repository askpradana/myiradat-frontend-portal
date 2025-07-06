'use client'

import { createContext, useContext, useState } from 'react'

type ModalConfig = {
  type: 'success' | 'error'
  title?: string
  content?: React.ReactNode
  okText?: string
}

type ModalContextType = {
  showSuccess: (message?: string) => void
  showError: (message?: string) => void
  closeModal: () => void
  isModalOpen: boolean
  modalConfig: ModalConfig | null
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalConfig, setModalConfig] = useState<ModalConfig | null>(null)

  const showSuccess = (message?: string) => {
    setModalConfig({
      type: 'success',
      title: 'Success',
      content: message || 'Operation completed successfully.',
    })
    setIsModalOpen(true)
  }

  const showError = (message?: string) => {
    setModalConfig({
      type: 'error',
      title: 'Error',
      content: message || 'Something went wrong. Please try again later.',
    })
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalConfig(null)
  }

  return (
    <ModalContext.Provider
      value={{ showSuccess, showError, closeModal, isModalOpen, modalConfig }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) throw new Error('useModal must be used within ModalProvider')
  return context
}
