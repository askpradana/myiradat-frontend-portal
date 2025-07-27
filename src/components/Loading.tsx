'use client'

import { Flex, Spin } from 'antd'
import { useLoading } from '@/context/LoadingContext'
import { CSSProperties } from 'react'

const overlayStyle: CSSProperties = {
  position: 'fixed',
  inset: 0,
  zIndex: 9999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backdropFilter: 'blur(4px)',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  transition: 'opacity 0.3s ease',
  pointerEvents: 'none',
}

const GlobalLoading: React.FC = () => {
  const { loading } = useLoading()

  return (
    <div
      style={{
        ...overlayStyle,
        opacity: loading ? 1 : 0,
        pointerEvents: loading ? 'auto' : 'none',
      }}
    >
      <Spin size="large" />
    </div>
  )
}

export default GlobalLoading
