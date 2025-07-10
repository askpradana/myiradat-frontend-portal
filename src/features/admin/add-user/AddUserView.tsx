import { Form, Input, Button, Checkbox, Select, Card, Row, Col } from "antd";
import { useState } from "react";

const { Option } = Select;

interface ServiceOption {
  serviceName: string;
  serviceId: number;
  roles: {
    roleName: string;
    roleId: number;
  };
}

interface FormValues {
  name: string;
  email: string;
  no_hp: string;
  password: string;
  services: {
    serviceId: number;
    roleId: number;
  }[];
}

const availableServices: ServiceOption[] = [
  {
    serviceName: "IPRO",
    serviceId: 1,
    roles: { roleName: "Admin", roleId: 101 },
  },
  {
    serviceName: "IPROB",
    serviceId: 2,
    roles: { roleName: "User", roleId: 102 },
  },
  {
    serviceName: "IPROS",
    serviceId: 3,
    roles: { roleName: "User", roleId: 103 },
  },
  {
    serviceName: "IMPROVE CARE",
    serviceId: 4,
    roles: { roleName: "User", roleId: 104 },
  },
];

const UserForm = () => {
  const [form] = Form.useForm();
  const [selectedServices, setSelectedServices] = useState<number[]>([]);

  const onFinish = (values: any) => {
    const finalData: FormValues = {
      name: values.name,
      email: values.email,
      no_hp: values.no_hp,
      password: values.password,
      services: selectedServices.map((serviceId) => ({
        serviceId,
        roleId: values[`role_${serviceId}`],
      })),
    };

    console.log("Final Payload:", finalData);
  };

  return (
    <Card title="Tambah User" className="shadow-md">
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ services: [] }}
      >
        <Row gutter={[16, 0]}>
          <Col xs={24}>
            <Form.Item
              name="name"
              label="Nama Lengkap"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={12} xs={24}>
            <Form.Item name="email" label="Email" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>

          <Col md={12} xs={24}>
            <Form.Item
              name="no_hp"
              label="No. Handphone"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={12} xs={24}>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input.Password />
            </Form.Item>
          </Col>

          <Col md={12} xs={24}>
            <Form.Item
              name="confirmPassword"
              label="Konfirmasi Password"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Mohon konfirmasi password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Password tidak cocok"));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Layanan">
          <Row gutter={[16, 0]}>
            {availableServices.map((service) => (
              <Col
                md={6}
                xs={24}
                key={service.serviceId}
              >
                <Checkbox
                  checked={selectedServices.includes(service.serviceId)}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    const id = service.serviceId;
                    setSelectedServices((prev) =>
                      checked ? [...prev, id] : prev.filter((sid) => sid !== id)
                    );
                    // reset role if unchecked
                    if (!checked) {
                      form.setFieldValue(`role_${id}`, undefined);
                    }
                  }}
                >
                  {service.serviceName}
                </Checkbox>

                {selectedServices.includes(service.serviceId) && (
                  <Form.Item
                    name={`role_${service.serviceId}`}
                    label=""
                    rules={[{ required: true, message: "Role wajib dipilih" }]}
                    style={{ marginTop: "12px" }}
                  >
                    <Select placeholder="Pilih role">
                      <Option value={service.roles.roleId}>
                        {service.roles.roleName}
                      </Option>
                    </Select>
                  </Form.Item>
                )}
              </Col>
            ))}
          </Row>
        </Form.Item>

        <Row justify="end" className="mt-4">
          <Col>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Simpan
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default UserForm;
