'use client'

import { ConfigProvider } from 'antd'
import { themeConfig } from '@/config/theme'
import { AuthProvider } from '@/context/AuthContext'
import { ModalProvider } from '@/context/ModalContext'
import { LoadingProvider } from '@/context/LoadingContext'
import { Nunito_Sans } from 'next/font/google'

const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={nunito.variable}>
      <body>
        <ConfigProvider theme={themeConfig}>
          <AuthProvider>
            <ModalProvider>
              <LoadingProvider>{children}</LoadingProvider>
            </ModalProvider>
          </AuthProvider>
        </ConfigProvider>
      </body>
    </html>
  )
}
