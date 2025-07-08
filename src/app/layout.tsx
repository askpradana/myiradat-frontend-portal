"use client";

import { ConfigProvider } from "antd";
import { themeConfig } from "@/config/theme";
import { AuthProvider } from "@/context/AuthContext";
import { ModalProvider } from "@/context/ModalContext";
import { LoadingProvider } from "@/context/LoadingContext";
import { Nunito_Sans } from "next/font/google";
import GlobalLoading from "@/components/Loading";
import "@/styles/globals.css";
import GlobalModal from "@/components/Modal";
import "@ant-design/v5-patch-for-react-19";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.variable}>
      <body>
        <ConfigProvider theme={themeConfig}>
          <LoadingProvider>
            <ModalProvider>
              <AuthProvider>
                <GlobalLoading />
                <GlobalModal />
                {children}
              </AuthProvider>
            </ModalProvider>
          </LoadingProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
