"use client";

import { Card, Col, Layout, Row } from "antd";
import { AuditOutlined } from "@ant-design/icons";
import { useAuth } from "@/context/AuthContext";

const { Content } = Layout;

export default function DashboardView() {
  const { user } = useAuth();
  return (
    <Content
      style={{
        padding: 24,
        height: "calc(100vh - 64px)",
        overflow: "auto",
      }}
    >
      <Row gutter={[16, 24]}>
        {user?.services?.map((service, index) => (
          <Col key={index} md={12} xs={24} lg={8}>
            <Card
              style={{
                borderRadius: "1rem",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.10)",
              }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-gray-500 text-sm mb-1">{service.roleName}</div>
                  <div className="text-xl font-semibold text-black">
                    {service.serviceName}
                  </div>
                </div>
                <div className="bg-green-100 rounded-xl p-3">
                  <AuditOutlined
                    style={{ fontSize: "24px", color: "#7C3AED" }}
                  />
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Content>
  );
}
