"use client";

import { Layout, theme } from "antd";

const { Content } = Layout;

export default function DashboardContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Content
      style={{
        margin: "24px 16px",
        padding: 24,
        height: "calc(100vh - 64px)",
        overflow: "auto",
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      {children}
    </Content>
  );
}
