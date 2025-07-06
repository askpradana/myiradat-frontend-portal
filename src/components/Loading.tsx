'use client'

import { Flex, Spin } from 'antd'
import { useLoading } from '@/context/LoadingContext'

const GlobalLoading: React.FC = () => {
  const { loading } = useLoading()

  if (!loading) return null

  return (
    <Flex
      align="center"
      justify="center"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#ffffff',
        opacity: 1,
        zIndex: 9999,
        pointerEvents: 'auto',
      }}
    >
      <Spin size="large" />
    </Flex>
  )
}

export default GlobalLoading
