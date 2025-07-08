"use client";
import React, { useState } from "react";
import {
  ClockCircleOutlined,
  HomeOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";

const { Header, Sider, Content } = Layout;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="flex flex-col h-screen">
          <div className="logo-vertical p-4" />

          {/* Menu Section */}
          <div className="flex-1 overflow-auto">
            <Menu
              theme="light"
              mode="inline"
              defaultSelectedKeys={["dashboard"]}
              items={[
                {
                  key: "dashboard",
                  icon: <HomeOutlined />,
                  label: "Dashboard",
                },
                {
                  key: "data",
                  icon: <ClockCircleOutlined />,
                  label: "Data",
                },
                {
                  key: "profile",
                  icon: <UserOutlined />,
                  label: "Profile",
                },
              ]}
            />
          </div>

          {/* Logout Button - fixed at bottom */}
          <div className="p-4">
            <Button
              type="primary"
              icon={<LogoutOutlined />}
              danger
              block
              className="logout-button"
            >
              {!collapsed && "Logout"}
            </Button>
          </div>
        </div>
      </Sider>

      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
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
      </Layout>
    </Layout>
  );
}
