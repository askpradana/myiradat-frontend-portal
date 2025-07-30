"use client";

import { Avatar, Card, Col, Row } from "antd";
import {
  CarryOutFilled,
  DatabaseFilled,
  PieChartFilled,
  ProductFilled,
} from "@ant-design/icons";
import { useServiceViewModel } from "./ServiceViewModel";

export default function ServiceView() {
  const { data } = useServiceViewModel();

  type ServiceCode = 'DASHBOARD' | 'IPROB' | 'IPROS' | 'IMPCARE';

  const serviceLinks: Record<ServiceCode, string> = {
    DASHBOARD: "https://myiradat-frontend-portal.vercel.app/",
    IPROB: "https://iprob.iradatkonsultan.com/", 
    IPROS: "http://ipros.iradatkonsultan.com/",
    IMPCARE: "https://improvecare.iradatkonsultan.com/"
  };

  const handleCardClick = (serviceCode: string) => {
    if (serviceCode in serviceLinks) {
      const url = serviceLinks[serviceCode as ServiceCode];
      window.open(url, '_blank');
    } else {
      // Fallback URL if service code not found
      window.open("https://myiradat-frontend-portal.vercel.app/", '_blank');
    }
  };

  return (
    <Row gutter={[16, 24]}>
      {data?.services?.map((service, index) => (
        <Col key={index} md={12} xs={24} lg={8}>
          <Card
            className="shadow-md hover:shadow-lg transition cursor-pointer"
            onClick={() => handleCardClick(service.serviceCode)}
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="text-gray-500 text-sm mb-1">
                  {service.roleName}
                </div>
                <div className="text-xl font-semibold text-black">
                  {service.serviceCode}
                </div>
              </div>
              {service.serviceCode == "DASHBOARD" && (
                <Avatar
                  shape="square"
                  style={{ background: "#8280FF26", color: "#3D42DF" }}
                  size={48}
                  icon={<PieChartFilled />}
                />
              )}
              {service.serviceCode == "IPROB" && (
                <Avatar
                  shape="square"
                  style={{ background: "#FEC53D26", color: "#FEC53D" }}
                  size={48}
                  icon={<DatabaseFilled />}
                />
              )}
              {service.serviceCode == "IPROS" && (
                <Avatar
                  shape="square"
                  style={{ background: "#4AD99126", color: "#4AD991" }}
                  size={48}
                  icon={<ProductFilled />}
                />
              )}
              {service.serviceCode == "IMPCARE" && (
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