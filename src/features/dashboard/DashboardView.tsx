"use client";

import { Avatar, Card, Col, Row } from "antd";
import {
  CarryOutFilled,
  DatabaseFilled,
  PieChartFilled,
  ProductFilled,
} from "@ant-design/icons";
import { useAuth } from "@/context/AuthContext";

export default function DashboardView() {
  const { user } = useAuth();
  return (
      <Row gutter={[16, 24]}>
        {user?.services?.map((service, index) => (
          <Col key={index} md={12} xs={24} lg={8}>
            <Card
              className="shadow-md"
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-gray-500 text-sm mb-1">
                    {service.roleName}
                  </div>
                  <div className="text-xl font-semibold text-black">
                    {service.serviceName}
                  </div>
                </div>
                {service.serviceName == "Dashboard" && (
                  <Avatar
                    shape="square"
                    style={{ background: "#8280FF26", color: "#3D42DF" }}
                    size={48}
                    icon={<PieChartFilled />}
                  />
                )}
                {service.serviceName == "IPROB" && (
                  <Avatar
                    shape="square"
                    style={{ background: "#FEC53D26", color: "#FEC53D" }}
                    size={48}
                    icon={<DatabaseFilled />}
                  />
                )}
                {service.serviceName == "IPROS" && (
                  <Avatar
                    shape="square"
                    style={{ background: "#4AD99126", color: "#4AD991" }}
                    size={48}
                    icon={<ProductFilled />}
                  />
                )}
                {service.serviceName == "Improve Care" && (
                  <Avatar
                    shape="square"
                    style={{ background: "#87d06826", color: "#87d068" }}
                    size={48}
                    icon={<CarryOutFilled />}
                  />
                )}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
  );
}
