import 'antd/dist/reset.css'
import { LoadingProvider } from '@/context/LoadingContext'
import { ModalProvider } from '@/context/ModalContext'
import { AuthProvider } from '@/context/AuthContext'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ModalProvider>
            <LoadingProvider>
              {children}
            </LoadingProvider>
          </ModalProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
