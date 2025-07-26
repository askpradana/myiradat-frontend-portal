"use client";
import React, { useEffect, useState } from "react";
import {
  ClockCircleOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PoweroffOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Layout,
  Menu,
  theme,
  Space,
  Typography,
  MenuProps,
} from "antd";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const [siderWidth, setSiderWidth] = useState(310);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const router = useRouter();

  const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
    router.push(`/${key}`);
  };

  const userRole = user?.services.find((s) => s.serviceCode == "DASHBOARD");

  useEffect(() => {
    const resize = () => {
      setSiderWidth(window.innerWidth);
    };
    window.addEventListener("resize", resize);
    resize();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <Layout className="h-screen">
      <Sider
        breakpoint="lg"
        collapsedWidth={siderWidth <= 768 ? 0 : 140}
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={siderWidth <= 768 ? siderWidth : 310}
      >
        <div className="flex flex-col h-full">
          <div className="logo-vertical">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold flex justify-center items-center transition-all duration-300">
                <span className="text-gray-500">MY</span>
                <span
                  className={`
                              text-green-500 overflow-hidden transition-all duration-600
                              ${
                                collapsed
                                  ? "w-0 opacity-0 scale-95"
                                  : "w-auto opacity-100 scale-100 ml-1"
                              }
                            `}
                  style={{ display: "inline-block", transitionProperty: "all" }}
                >
                  IRADAT
                </span>
              </h1>
            </div>
          </div>

          {/* Menu Section */}
          <div className="flex-1 overflow-auto">
            <Menu
              theme="light"
              mode="inline"
              defaultSelectedKeys={["dashboard"]}
              onClick={(e) => {
                handleMenuClick(e);
                if (siderWidth <= 768) {
                  setCollapsed(!collapsed);
                }
              }}
              items={
                userRole?.roleName === "admin"
                  ? [
                      {
                        key: "dashboard/admin",
                        icon: <HomeOutlined />,
                        label: "Admin Dashboard",
                      },
                    ]
                  : [
                      {
                        key: "dashboard/service",
                        icon: <HomeOutlined />,
                        label: "Dashboard",
                      },
                      {
                        key: "dashboard/data",
                        icon: <ClockCircleOutlined />,
                        label: "Data",
                      },
                      {
                        key: "dashboard/profile",
                        icon: <UserOutlined />,
                        label: "Profile",
                      },
                    ]
              }
            />
          </div>

          {/* Logout Button - fixed at bottom */}
          <div className="p-4">
            <Button
              type="primary"
              icon={<PoweroffOutlined />}
              danger
              block
              onClick={logout}
              className="logout-button"
            >
              {!collapsed && "Logout"}
            </Button>
          </div>
        </div>
      </Sider>

      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div className="flex justify-between items-center">
            {/* Collapse Button */}
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

            {/* Profile Info (icon + name) */}
            <Space className="mr-8" size="middle">
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
              <div className="flex flex-col">
                <Text strong type="success" className="text-lg">
                  {user?.email}
                </Text>
                <Text strong type="secondary" className="text-lg">
                  {userRole?.roleName}
                </Text>
              </div>
            </Space>
          </div>
        </Header>
        <Content
          style={{
            padding: 24,
            height: "calc(100vh - 64px)",
            overflow: "auto",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
